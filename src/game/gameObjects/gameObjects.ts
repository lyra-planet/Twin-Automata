import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { characterAnimation } from "@game/action/characterAnimation";
import { NewtonLawsOfMotion } from "@game/action/Newton";
import { GroundPosition } from "@game/static/blocksSize";
import {
  blockTraceMovementObj,
} from "@game/action/blockMovementTrace";
import { BlockInitData, IBlock, IMoveBlock, IPlayer, ISpecialBlock, MoveBlockInitData, PlayerInitData, TBlockType,  } from "@game/types/gameObjects";
import {ICollisionState, ICross, ISpeed, IGameObjectFrame, IPosition, IScale, ISize, TGameObjectTexture, TSpecialMovement, TCollisionBox, IHitFace } from "@game/types/global";
import { IMoveObject, TBlockMoveMentTrace } from "@game/types/action";


const blockTrace: TBlockMoveMentTrace = {
  trace: [
    { x: -100, y: 0, duration: 200 },
    { x: 100, y: 0, duration: 200 },
    { x: -100, y: 0, duration: 200 },
    { x: 100, y: 0, duration: 200 },
    { x: -100, y: 0, duration: 200 },
    { x: 100, y: 0, duration: 200 },
    { x: -100, y: 0, duration: 200 },
  ],
  playStatus: "normal",
};
export class Block implements IBlock {
  position: IPosition;
  size: ISize;
  scale: IScale;
  speed: ISpeed;
  count: number;
  gameObject: PIXI.Sprite;
  gameTexture: TGameObjectTexture;
  state: string;
  direction: number;
  stop: number;
  fa: number;
  actionSpeed: number;
  actionStop: number;
  groundPosition: number;
  image: string;
  wallJumpStart: boolean;
  movingState: ICollisionState;
  gameObjectFrame: IGameObjectFrame;
  collisionBox:TCollisionBox
  blockTypes:TBlockType[]
  constructor({
    size,
    imageSrc,
    gameObjectFrame,
    state,
    actionSpeed,
    actionStop,
    position,
  }: BlockInitData) {
    this.position = {
      x: position.x + size.width / 2,
      y: GroundPosition.y - position.y,
    };
    this.size = size
    this.speed = {
      x: 0,
      y: 0,
    };
    this.scale = {
      x: 1,
      y: 1,
    };
    //贴图动画
    this.actionSpeed = actionSpeed;
    this.actionStop = actionStop;
    this.state = state;
    this.gameObjectFrame = gameObjectFrame;
    this.image = imageSrc;
    this.gameTexture = PIXI.Texture.from(this.image);
    this.count = 0;
    this.direction = 0;
    this.stop = 0;
    this.fa = 0.5;
    this.groundPosition = position.y;
    this.wallJumpStart = false;
    this.movingState = {
      hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
      stickFace: { left: 0, right: 0 },
      wallJump: { left: 0, right: 0 },
      shouldSpeed: { x: 0, y: 0 },
      cross: { directionX: 0, directionY: 0 }
    };
    this.gameObject = new Sprite(this.gameTexture);
    this.gameObject.anchor.y = 1;
    this.gameObject.anchor.x = 0.5;
    this.gameObject.x = this.position.x;
    this.gameObject.y = this.position.y;
    this.gameObject.scale = this.scale;

    this.collisionBox = {
      t:0,
      b: 0,
      l: 0,
      r: 0,
      m:{
        x:0,
        y:0
      }
    };
    this.blockTypes=[]

  }
  update(tick: number) {
    this.count = characterAnimation({
      character: this.gameObject,
      characterTexture: this.gameTexture,
      characterFrames: this.gameObjectFrame,
      state: this.state,
      count: this.count,
      tick: tick,
      characterActionspeed: this.actionSpeed,
      animationStop: this.actionStop,
    });
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.gameObject.x = this.position.x;
    this.gameObject.y = this.position.y;
    this.gameObject.scale = this.scale;
  }
  updateCollisionBox=()=>{
    this.collisionBox = {
      t: Math.round(this.position.y - this.size.height)+2,
      b: Math.round(this.position.y)-2 ,
      l: Math.round(this.position.x - this.size.width / 2),
      r: Math.round(this.position.x + this.size.width / 2),
      m:{
        x:Math.round(this.position.x),
        y:Math.round(this.position.y - this.size.height/2)
      }
    }
  }


  init() {
    characterAnimation({
      character: this.gameObject,
      characterTexture: this.gameTexture,
      characterFrames: this.gameObjectFrame,
      state: this.state,
      count: this.count,
      tick: 0,
      characterActionspeed: this.actionSpeed,
      animationStop: this.actionStop,
    });
    return this.gameObject;
  }
}

export class SpecialBlock extends Block implements ISpecialBlock {
  special: { dash: boolean; dead: boolean; };
  resuming: boolean;
  constructor({
    size,
    imageSrc,
    gameObjectFrame,
    state,
    frame,
    actionSpeed,
    actionStop,
    position,
  }: BlockInitData) {
    
    super({imageSrc,
      gameObjectFrame,
      state,
      frame,
      actionSpeed,
      actionStop,
      size,
      position
    })
    this.blockTypes=[]

    this.special={
      dash:false,
      dead:false
    }

    this.resuming=false
  }

  updateSpecial=(special:any)=>{
    this.specialClean()
    if(this.resuming===false){
      this.special=special
      this.resuming=true
      this.state='resuming'
      this.count=0
      setTimeout(()=>{
        this.resuming=false
        this.state='static'
        this.count=0
      },3000)
    }
    return this.special
  }
  specialClean=()=>{
    this.special={
      dash:false,
      dead:false
    }
  }
  update(tick: number) {
    this.count = characterAnimation({
      character: this.gameObject,
      characterTexture: this.gameTexture,
      characterFrames: this.gameObjectFrame,
      state: this.state,
      count: this.count,
      tick: tick,
      characterActionspeed: this.actionSpeed,
      animationStop: this.actionStop,
    });
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.speed.x = this.speed.x;
    this.gameObject.x = this.position.x;
    this.gameObject.y = this.position.y;
    this.gameObject.scale = this.scale;
  }
  init() {
    characterAnimation({
      character: this.gameObject,
      characterTexture: this.gameTexture,
      characterFrames: this.gameObjectFrame,
      state: this.state,
      count: this.count,
      tick: 0,
      characterActionspeed: this.actionSpeed,
      animationStop: this.actionStop,
    });
    return this.gameObject;
  }
}



export class MoveBlock extends Block implements IMoveBlock {
  objectMovement: blockTraceMovementObj;
  trace:TBlockMoveMentTrace
  constructor({
    imageSrc,
    gameObjectFrame,
    state,
    frame,
    actionSpeed,
    actionStop,
    size,
    position,
    trace
  }:MoveBlockInitData) {
    super({
      imageSrc,
      gameObjectFrame,
      state,
      frame,
      actionSpeed,
      actionStop,
      size,
      position
    });
    this.scale = {
      x: 1,
      y: 1,
    };
    this.wallJumpStart = false;
    this.trace=trace
    this.objectMovement = new blockTraceMovementObj(
      this.gameObject,
      trace
    );
  }
  updateMovement(tick: number) {
    this.objectMovement?.blockTraceMovement(
      this.speed,
      { x: this.gameObject.x, y: this.gameObject.y }
    );
  }
  updateRelativePosition() {
    return this.position;
  }
}

export class Player extends Block implements IPlayer {
  hitFace: {
    x: {
      left: number;
      right: number;
    };
    y: {
      top: number;
      bottom: number;
    };
  }
  rotation: number;
  constructor({
    imageSrc,
    gameObjectFrame,
    state,
    frame,
    actionSpeed,
    actionStop,
    groundPosition,
    size,
    position
  }: PlayerInitData) {
    super({
      imageSrc,
      gameObjectFrame,
      state,
      frame,
      actionSpeed,
      actionStop,
      size,
      position
    });
    this.rotation=0
    this.groundPosition = GroundPosition.y - groundPosition;
    this.scale = {
      x: 2,
      y: 2,
    };
    this.wallJumpStart = false;
    this.hitFace = {
      x: {
        left: 0,
        right: 0,
      },
      y: {
        top: 0,
        bottom: 0,
      }
    }
    this.gameObject.rotation=-Math.PI/2*this.rotation
  }
  updateMovement(tick: number, state: string, collisionState: ICollisionState) {
    this.state = state;
    let hitFace = collisionState.hitFace;
    let stickFace = collisionState.stickFace;
    let wallJump = collisionState.wallJump;
    let shouldSpeed = collisionState.shouldSpeed;
    this.hitFace = hitFace
    NewtonLawsOfMotion({
      position: this.position,
      speed: this.speed,
      fa: this.fa,
      direction: this.direction,
      stop: this.stop,
      groundPosition: this.groundPosition,
      hitFace: hitFace,
      shouldSpeed: shouldSpeed,
      rotation:this.rotation
    });
    this.updateSpecialMovement(stickFace,hitFace,wallJump)
    this.updateHit(hitFace)
  }
  updateHit=(hitFace:IHitFace)=>{
    let lr = 0 ,tb = 0
    switch (this.rotation){
      case 0:
      lr=this.speed.x
      tb=this.speed.y
      break
      case 1:
        lr=this.speed.y
        tb=-this.speed.x
      break
      case 2:
      lr=-this.speed.x
      tb=-this.speed.y
      break
      case 3:
        lr=-this.speed.y
        tb=this.speed.x
      break
      default: console.log("ERROR")
    }
    let x = false,y=false 
      if (hitFace.x.left&&!(lr > 0) ) {
          x=true
      }
      if (hitFace.x.right&&!(lr < 0) ) {
        x=true
      }
      if (hitFace.y.bottom && !(tb < 0)) {
        y=true
      }
      if (hitFace.y.top && !(tb > 0)) {
        y=true
      }
      switch (this.rotation){
        case 0:
        if(x)this.speed.x=0
        if(y)this.speed.y=0
        break
        case 1:
          if(y)this.speed.x=0
          if(x)this.speed.y=0
        break
        case  2:
          if(x)this.speed.x=0
          if(y)this.speed.y=0
          break
        case 3:
            if(y)this.speed.x=0
            if(x)this.speed.y=0
        break
        default: console.log("ERROR")
      }
  }
/**----------------------
 *    G R
 *------------------------**/
  updateCross(cross: ICross, shouldSpeed: ISpeed) {
    switch (this.rotation){
      case 0:
        if (cross.directionX) {
          this.position.y -= 1
        }
        if(cross.directionY){
          this.speed.x = 0
        }
      break
      case 1:
        if (cross.directionX) {
          this.speed.y=0
        }
        if(cross.directionY){
          this.position.x -= 1
        }
      break
      case 2:
        if (cross.directionX) {
          this.position.y += 1
        }
        if(cross.directionY){
          this.speed.x = 0
        }
      break
      case 3:
        if (cross.directionX) {
          this.speed.y=0
        }
        if(cross.directionY){
          this.position.x += 1
        }
      break
      default: console.log("ERROR")
    }
  }
  updateSpecialMovement(stickFace:any,hitFace:any,wallJump:any){
    let canWallJump = false,hitFoot=false
    switch (this.rotation){
      case 0:
        canWallJump = (this.speed.x === 0)
        hitFoot = !hitFace.y.bottom
      break
      case 1:
        canWallJump = (this.speed.y === 0)
        hitFoot = !hitFace.x.right
      break
      case 2:
        canWallJump = (this.speed.x === 0)
        hitFoot = !hitFace.y.top
      break
      case 3:
        canWallJump = (this.speed.y === 0)
        hitFoot = !hitFace.x.left 
      break
      default: console.log("ERROR")
    }
    if (canWallJump) {
      this.wallJumpStart = false;
    }
    if ((stickFace.left || stickFace.right) && hitFoot) {
      if (wallJump.left) {
        this.speed.x = 4;
        this.speed.y = -4;
        this.direction = 1;
        this.scale.x = 2;
        this.wallJumpStart = true;
      } else if (wallJump.right) {
        this.speed.x = -4;
        this.speed.y = -4;
        this.direction = -1;
        this.scale.x = -2;
        this.wallJumpStart = true;
      } else {
        this.speed.y = 0.3;
        this.count = 0;
        this.state = "wallJump";
        this.actionStop = 0;
      }
    }
  }
  updateMoveObject(moveObjects:IMoveObject[]): void {
    let max = moveObjects[0]
    moveObjects.forEach(item=>{
          if(item.weight > max.weight) {
              max = item
          }
    }) 

    if(max.stand>0){
      this.position.x+=max.speed.x
      this.position.y+=max.speed.y
    }else 
    if (max.weight>0) {
      switch (this.rotation){
        case 0:
          this.position.x+=max.speed.x
        break
        case 1:
          this.position.y+=max.speed.y
        break
        case 2:
          this.position.x+=max.speed.x
        break
        case 3:
          this.position.y+=max.speed.y
        break
        default: console.log("ERROR")
      }
      
    }
  }
  updateCollisionBox=()=>{
    /**----------------------
     *    G R
     *------------------------**/
    switch (this.rotation){
      case 0:
        this.collisionBox = {
          t: Math.round(this.position.y - 60),
          b: Math.round(this.position.y) ,
          l: Math.round(this.position.x - 14),
          r: Math.round(this.position.x + 14),
          m:{
            x:Math.round(this.position.x),
            y:Math.round(this.position.y - 30)
          }
        }
      break
      case 1:
        this.collisionBox = {
        t: Math.round(this.position.y-14),
        b: Math.round(this.position.y+14) ,
        l: Math.round(this.position.x-60),
        r: Math.round(this.position.x),
        m:{
        x:Math.round(this.position.x),
        y:Math.round(this.position.y-14)
        }
        }
      break
      case 2:
        this.collisionBox = {
          t: Math.round(this.position.y),
          b: Math.round(this.position.y+60) ,
          l: Math.round(this.position.x - 14),
          r: Math.round(this.position.x + 14),
          m:{
            x:Math.round(this.position.x),
            y:Math.round(this.position.y - 30)
          }
        }
      break
      case 3:
        this.collisionBox = {
          t: Math.round(this.position.y-14),
          b: Math.round(this.position.y+14) ,
          l: Math.round(this.position.x),
          r: Math.round(this.position.x+60),
          m:{
            x:Math.round(this.position.x),
            y:Math.round(this.position.y-14)
          }
          }
      break
      default: console.log("ERROR")
    }
  }

  updateRotation: (rotation: number) => void=(rotation:number)=>{
      this.rotation=rotation
  }
  updateRelativePosition() {
    return {x:-this.gameObject.x+GroundPosition.x/2,
      y:(-this.gameObject.y+GroundPosition.y/2)}
  }
  update(tick: number) {
    this.count = characterAnimation({
      character: this.gameObject,
      characterTexture: this.gameTexture,
      characterFrames: this.gameObjectFrame,
      state: this.state,
      count: this.count,
      tick: tick,
      characterActionspeed: this.actionSpeed,
      animationStop: this.actionStop,
    });
    /**----------------------
     *    GR
     *------------------------**/
    switch (this.rotation){
      case 0:
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
      break
      case 1:
        this.position.x += this.speed.y;
        this.position.y -= this.speed.x;
      break
      case 2:
        this.position.x -= this.speed.x;
        this.position.y -= this.speed.y;
      break
      case 3:
        this.position.x -= this.speed.y;
        this.position.y += this.speed.x;
      break
      default: console.log("ERROR")
    }

    this.gameObject.x = this.position.x;
    this.gameObject.y = this.position.y;
    this.gameObject.scale = this.scale;
    this.gameObject.rotation=-Math.PI/2*this.rotation
  }
}
