import * as PIXI from "pixi.js";
import { keyboard } from "./control/keyboard";
import { adventurerObject } from "./Player/PlayerObject";
import {BlockLists,TrapBlockLists} from './blockLists/blockLists'
import {BlockObjectLists,TrapBlockObjectLists} from "./ObjectLists/StaticObjectLists";
import { PlayerMovement } from "./action/gameObjectMovements";
import {allPicture} from "./static/gamePictures";
import {GroundPosition} from"./static/blocksSize"
import { log } from "console";
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
  document.body.appendChild(app.view);
  console.log(PIXI.utils.TextureCache)
  loader
    .add(allPicture)
    .load(setup)
  function setup() {
    //玩家属性初始化
    
    let trapBlockLists = new TrapBlockObjectLists(TrapBlockLists,scenario)
    let blockObjectLists =  new BlockObjectLists(BlockLists,scenario)
    blockObjectLists.init()
    trapBlockLists.init()
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
    setInterval(()=>{console.log(tick);tick=0},1000)
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
        update(timestep);
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
    const update =(delta)=>{
      tick += 1
      let state =  PlayerMovement({
        playerObject:adventurerObject,
        isLeftDown:isLeftDown,
        isRightDown:isRightDown,
        isSpaceDown:isSpaceDown,
        isShiftDown:isShiftDown
      });
      {
        blockObjectLists.update(tick)
        blockObjectLists.updateCollisionBox_Block(
          adventurerObject,
          isLeftDown,
          isRightDown,
          isSpaceDown) 
          trapBlockLists.update(tick)
           trapBlockLists.updateCollisionBox_TrapBlock(
          adventurerObject
        )
      }  
      adventurerObject.updateMovement(tick,state,blockObjectLists.collisionState)
      relativePosition = adventurerObject.updateRelativePosition()
      scenario.x=-(relativePosition.x-GroundPosition.x/2)
      scenario.y=-(relativePosition.y-GroundPosition.y/2-100)
      isSpaceDown = false
    }
    function draw(fps) {
      var fpsDisplay = document.getElementById('fpsDisplay');
      fpsDisplay.textContent = Math.round(fps) + ' FPS'; // 展示 FPS
    }
    requestAnimationFrame(gameLoop)
    // app.ticker.add((delta) => gameLoop(delta))
  }
}

