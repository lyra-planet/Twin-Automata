import * as PIXI from "pixi.js";
import { keyboard } from "@game/control/keyboard";
import { adventurerObject } from "@game/static/playerObject";
import { BlockLists, TrapBlockLists, MoveBlockLists, DashBlockList } from '@game/blockLists/blockLists';
import { BlockObjectLists,  DashBlockObjectLists,  TrapBlockObjectLists } from "@game/objectLists/StaticObjectLists";
import { PlayerMovement } from "@game/action/gameObjectMovements";
import { allPicture } from "@game/static/gamePictures";
import { GroundPosition } from "@game/static/blocksSize"
import { ICollisionState, IPosition, TSpecialMovement } from "@game/types/global";
import { MoveBlockObjectLists } from "@game/objectLists/MoveObjectList";
import { movementState } from "./action/movementState";



export class Game{
  scenario: PIXI.Container<PIXI.DisplayObject>;
  app: PIXI.Application;
  isLeftDown: boolean;
  isRightDown: boolean;
  isSpaceDown: boolean;
  isShiftDown: boolean;
  tick: number;
  relativePosition: IPosition;
  finallCollisionState: ICollisionState;
  trapBlockLists: TrapBlockObjectLists | null;
  blockLists: BlockObjectLists | null;
  moveBlockLists: MoveBlockObjectLists | null;
  adventurer: PIXI.Sprite | null;
  fps: number;
  lastFrameTimeMs: number;
  timestep: number;
  framesThisSecond: number;
  lastFpsUpdate: number;
  delta: number;
  specialMovement: TSpecialMovement;
  dashBlockLists: DashBlockObjectLists | null
  constructor(){
    this.app = new PIXI.Application({
      width: GroundPosition.x,
      height: GroundPosition.y,
      transparent: false,
      antialias: true,
      resolution: 1,
    });
    this.scenario = new PIXI.Container()

    this.isLeftDown = false,
    this.isRightDown = false,
    this.isSpaceDown = false,
    this.isShiftDown = false
    this.tick = 0;
    this.relativePosition = {x: 0,y: 0}

    this.finallCollisionState= {
      hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
      stickFace: { left: 0, right: 0 },
      wallJump: { left: 0, right: 0 },
      shouldSpeed: { x: 0, y: 0 },
      cross: { directionX: 0, directionY: 0 }
    }
    this.specialMovement={
      dash:false,
      hit:{l:false,r:false,t:false,b:false},
      stick:0,
      wallJump:0
    }

    this.trapBlockLists=null
    this.blockLists=null
    this.moveBlockLists=null
    this.dashBlockLists=null

    this.adventurer=null
    

    this.fps = 60
    this.lastFrameTimeMs = 0
    this.timestep = 1000 / 144
    this.framesThisSecond = 0
    this.lastFpsUpdate = 0
    this.delta = 0
  }
  init(){
    const loader = new PIXI.Loader();
    this.app.stage.addChild(this.scenario)
    this.app.renderer.backgroundColor = 0x23395d;
    document.getElementById("game")?.appendChild(this.app.view);  
    loader.reset()
    loader
      .add(allPicture)
      .load(this.setup)
  }
  setup = () => {
    //玩家属性初始化
    this.adventurer = adventurerObject.init()
    
    
    this.trapBlockLists = new TrapBlockObjectLists(TrapBlockLists, this.scenario)
    this.blockLists = new BlockObjectLists(BlockLists, this.scenario)
    this.moveBlockLists = new MoveBlockObjectLists(MoveBlockLists, this.scenario)
    this.dashBlockLists = new DashBlockObjectLists(DashBlockList,this.scenario)
    
    
    this.blockLists.init()
    this.trapBlockLists.init()
    this.moveBlockLists.init()
    this.dashBlockLists.init()


    this.scenario.addChild(this.adventurer);
    this.app.renderer.render(this.app.stage);
    this.control()
    requestAnimationFrame(this.gameLoop)
  }
  gameLoop = (timestamp: number) => {
    this.delta += timestamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timestamp;
    while (this.delta >= 1000 / this.fps) {
      this.update();
      this.delta -= this.timestep;
    }
    if (timestamp > this.lastFpsUpdate + 1000) {
      this.fps = 0.25 * this.framesThisSecond + (1 - 0.25) * this.fps;
      this.lastFpsUpdate = timestamp;
      this.framesThisSecond = 0;
      this.drawFPS(this.fps)
    }
    this.framesThisSecond++;
    requestAnimationFrame(this.gameLoop);
  }
  update = () => {
    this.tick += 1    
    const state = this.movementUpdate()
    this.collisionUpdate(this.tick, state)

    this.specialUpdate()

    this.objectsUpdate(this.tick)
    this.cameraMoveFollow()
  }
  movementUpdate=()=>{
    this.specialMovementUpdate()
    const moveState = PlayerMovement({
      playerObject: adventurerObject,
      isLeftDown: this.isLeftDown,
      isRightDown: this.isRightDown,
      isSpaceDown: this.isSpaceDown,
      isShiftDown: this.isShiftDown,
      specialMovement: this.specialMovement
    })
    movementState(moveState,adventurerObject)
    const state = moveState.state
    return state
  }
  specialMovementUpdate=()=>{
    const {hitFace,stickFace,wallJump} = this.finallCollisionState
    if(hitFace.y.top!==0){
      this.specialMovement.hit.t=true
    }else{
      this.specialMovement.hit.t=false
    }    
    if(hitFace.y.bottom!==0){
      this.specialMovement.hit.b=true
      this.specialMovement.dash=true
    }else{
      this.specialMovement.hit.b=false
    }
    if(hitFace.x.left!==0){
      this.specialMovement.hit.l=true
    }else{
      this.specialMovement.hit.l=false
    }    
    if(hitFace.x.right!==0){
      this.specialMovement.hit.r=true
    }else{
      this.specialMovement.hit.r=false
    }     
  }

  collisionUpdate = (tick: number, state: string) => {
    if(!this.moveBlockLists||!this.blockLists||!this.moveBlockLists||!this.trapBlockLists){
      return
    }
    this.finallCollisionState = {
      hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
      stickFace: { left: 0, right: 0 },
      wallJump: { left: 0, right: 0 },
      shouldSpeed: { x: 0, y: 0 },
      cross: { directionX: 0, directionY: 0 }
    }
    this.moveBlockLists.updateMovement(tick)
    this.blockLists.updateCollisionBox_Block(
      adventurerObject,
      this.isLeftDown,
      this.isRightDown,
      this.isSpaceDown)
    this.moveBlockLists.updateCollisionBox_Block(
      adventurerObject,
      this.isLeftDown,
      this.isRightDown,
      this.isSpaceDown)
    this.trapBlockLists.updateCollisionBox_TrapBlock(
      adventurerObject
    )
     this.dashBlockLists?.updateCollisionBox(
      adventurerObject
    )
    //随平台移动
    const moveObjects = this.moveBlockLists.moveObjects
    adventurerObject.updateMoveObject(moveObjects)
    
    //碰撞检测
    const allCollisionState = [this.blockLists.collisionState, this.moveBlockLists.collisionState]
    allCollisionState.map(item => {
      this.finallCollisionState.hitFace.x.left += item.hitFace.x.left
      this.finallCollisionState.hitFace.x.right += item.hitFace.x.right
      this.finallCollisionState.hitFace.y.top += item.hitFace.y.top
      this.finallCollisionState.hitFace.y.bottom += item.hitFace.y.bottom
      this.finallCollisionState.stickFace.left += item.stickFace.left
      this.finallCollisionState.stickFace.right += item.stickFace.right
      this.finallCollisionState.wallJump.left += item.wallJump.left
      this.finallCollisionState.wallJump.right += item.wallJump.right
      this.finallCollisionState.shouldSpeed.x += item.shouldSpeed.x
      this.finallCollisionState.shouldSpeed.y += item.shouldSpeed.y
      this.finallCollisionState.cross.directionX += item.cross.directionX
      this.finallCollisionState.cross.directionY += item.cross.directionY
    })

    adventurerObject.updateMovement(tick, state, this.finallCollisionState)
    //穿模修正
    adventurerObject.updateCross(this.finallCollisionState.cross, this.finallCollisionState.shouldSpeed)

  }
  objectsUpdate=(tick:number)=>{
    if(!this.moveBlockLists||!this.blockLists||!this.moveBlockLists||!this.trapBlockLists){
      return
    }
    adventurerObject.update(tick)
    this.moveBlockLists.update(tick)
    this.blockLists.update(tick)
    this.trapBlockLists.update(tick)
    this.dashBlockLists?.update(tick)
  }
  specialUpdate = ()=>{
    
    const _special= [this.dashBlockLists?.special]
    const special ={
      dash:false,
      dead:false
    }

    _special.forEach(item=>{
      if(item?.dash){special.dash=true}
      if(item?.dead){special.dead=true}
    })
    if(special.dash){
      this.specialMovement.dash=true
    }
  }
  
  
  control = () => {
    let left = keyboard(37),
      right = keyboard(39),
      space = keyboard(32),
      shift = keyboard(16);
    right.press = () => {
      this.isRightDown = true;
    };
    right.release = () => {
      this.isRightDown = false
    };
    left.press = () => {
      this.isLeftDown = true
    };
    left.release = () => {
      this.isLeftDown = false
    };
    space.press = () => {
      this.isSpaceDown = true
    };
    space.release = () => {
      this.isSpaceDown = false
    };
    shift.press = () => {
      this.isShiftDown = true
    };
    shift.release = () => {
      this.isShiftDown = false
    }
  }
  cameraMoveFollow = () => {
    this.relativePosition = adventurerObject.updateRelativePosition()
    this.scenario.x = -(this.relativePosition.x - GroundPosition.x / 2)
    this.scenario.y = -(this.relativePosition.y - GroundPosition.y / 2 - 100)
    this.isSpaceDown = false
  }
  drawFPS = (fps: number) => {
    let fpsDisplay = document.querySelector('#fpsDisplay');
    if (fpsDisplay) {
      fpsDisplay.textContent = Math.round(fps) + ' FPS';
    }
  }
}
export const game = new Game()