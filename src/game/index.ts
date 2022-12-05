import * as PIXI from "pixi.js";
import { keyboard } from "./control/keyboard";
import { adventurerObject } from "./Player/PlayerObject";
import { BlockLists, TrapBlockLists, MoveBlockLists } from './blockLists/blockLists';
import {BlockObjectLists,MoveBlockObjectLists,TrapBlockObjectLists} from "./ObjectLists/StaticObjectLists";
import { PlayerMovement } from "./action/gameObjectMovements";
import {allPicture} from "./static/gamePictures";
import {GroundPosition} from"./static/blocksSize"
let isLeftDown = false,
    isRightDown = false,
    isSpaceDown = false,
    isShiftDown = false
let tick = 0;
export const initPIXI = () => {
  const Application = PIXI.Application;
  const loader = new PIXI.Loader();
  const app = new Application({
    width: GroundPosition.x,
    height: GroundPosition.y,
    transparent: false,
    antialias: true,
    resolution: 1,
  });
  const scenario = new PIXI.Container()
  let relativePosition = {
    y: 0,
    x: 0,
    width: 0,
    height: 0,
}
  app.stage.addChild(scenario)
  app.renderer.backgroundColor = 0x23395d;
  document.getElementById("game")?.appendChild(app.view);
  loader
    .add(allPicture)
    .load(setup)
  function setup() {
    //玩家属性初始化
    
    let trapBlockLists = new TrapBlockObjectLists(TrapBlockLists,scenario)
    let blockLists =  new BlockObjectLists(BlockLists,scenario)
    let moveBlockLists =  new MoveBlockObjectLists(MoveBlockLists,scenario)
    blockLists.init()
    trapBlockLists.init()
    moveBlockLists.init()
    let adventurer = adventurerObject.init();
    scenario.addChild(adventurer);
    app.renderer.render(app.stage);
    {
      let left = keyboard(37),
          right = keyboard(39),
          space = keyboard(32),
          shift = keyboard(16);
      right.press = () => {
        isRightDown = true;
      };
      right.release = () => {
        isRightDown = false
      };
      left.press = () => {
        isLeftDown = true
      };
      left.release = () => {
        isLeftDown = false
      };
      space.press = () => {
        isSpaceDown = true
      };
      space.release = () => {
        isSpaceDown = false
      };
      shift.press = ()=>{
        isShiftDown= true
      };
      shift.release = ()=>{
        isShiftDown= false
      }
    }
    let fps = 60,
        lastFrameTimeMs = 0,
        timestep = 1000 / 144,
        framesThisSecond = 0,
        lastFpsUpdate = 0,
        delta = 0;
    let gameLoop = (timestamp:number) => {
      delta += timestamp - lastFrameTimeMs;
      lastFrameTimeMs = timestamp;
      while (delta >= 1000/fps) {
        update();
        delta -= timestep;
      }
      if (timestamp > lastFpsUpdate + 1000) { 
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;
        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
        draw(fps)
      }
    framesThisSecond++;
      requestAnimationFrame(gameLoop);
    } 
    let finallCollisionState ={
      hitFace:{x:{left:0,right:0},y:{top:0,bottom:0}},
      stickFace:{left:0,right:0},
      wallJump:{left:0,right:0},
      shouldSpeed:{x:0,y:0},
      cross: {directionX:0,directionY:0}
    }
    const update =()=>{
      tick += 1
      let state =  PlayerMovement({
        playerObject:adventurerObject,
        isLeftDown:isLeftDown,
        isRightDown:isRightDown,
        isSpaceDown:isSpaceDown,
        isShiftDown:isShiftDown
      });
      {
        finallCollisionState ={
          hitFace:{x:{left:0,right:0},y:{top:0,bottom:0}},
          stickFace:{left:0,right:0},
          wallJump:{left:0,right:0},
          shouldSpeed:{x:0,y:0},
          cross: {directionX:0,directionY:0}
        }
        moveBlockLists.update(tick)
        blockLists.update(tick)
        trapBlockLists.update(tick)

        blockLists.updateCollisionBox_Block(
          adventurerObject,
          isLeftDown,
          isRightDown,
          isSpaceDown)         
        moveBlockLists.updateCollisionBox_Block(
          adventurerObject,
            isLeftDown,
            isRightDown,
            isSpaceDown) 
        trapBlockLists.updateCollisionBox_TrapBlock(
          adventurerObject
        )
      const allCollisionState = [blockLists.collisionState,moveBlockLists.collisionState] 
        allCollisionState.map(item=>{
          finallCollisionState.hitFace.x.left+=item.hitFace.x.left
          finallCollisionState.hitFace.x.right+=item.hitFace.x.right
          finallCollisionState.hitFace.y.top+=item.hitFace.y.top
          finallCollisionState.hitFace.y.bottom+=item.hitFace.y.bottom
          finallCollisionState.stickFace.left+=item.stickFace.left
          finallCollisionState.stickFace.right+=item.stickFace.right
          finallCollisionState.wallJump.left+=item.wallJump.left
          finallCollisionState.wallJump.right+=item.wallJump.right
          finallCollisionState.shouldSpeed.x+=item.shouldSpeed.x
          finallCollisionState.shouldSpeed.y+=item.shouldSpeed.y
          finallCollisionState.cross.directionX+=item.cross.directionX
          finallCollisionState.cross.directionY+=item.cross.directionY
        })  
        adventurerObject.updateMovement(tick,state,finallCollisionState)
        adventurerObject.updateCross(finallCollisionState.cross,finallCollisionState.shouldSpeed)
        } 
      {
        relativePosition = adventurerObject.updateRelativePosition()
        scenario.x=-(relativePosition.x-GroundPosition.x/2)
        scenario.y=-(relativePosition.y-GroundPosition.y/2-100)
        isSpaceDown = false
      }

    }
    function draw(fps: number) {
      let fpsDisplay = document.querySelector('#fpsDisplay');
      if(fpsDisplay){
        fpsDisplay.textContent = Math.round(fps) + ' FPS'; 
      }
    }
    requestAnimationFrame(gameLoop)
  }
}

