import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { characterAnimation } from "../action/characterAnimation";
import { NewtonLawsOfMotion } from "../action/Newton";
import { GroundPosition } from "../static/blocksSize";
import { adventurerObject } from "../Player/PlayerObject";
import {
  blockTraceMovementObj,
  T_BlockMoveMentTrace,
} from "../action/blockMovementTrace";

const blockTrace: T_BlockMoveMentTrace = {
  trace: [
    { x: -100, y: -200, duration: 200 },
    { x: -100, y: 0, duration: 200 },
    { x: -100, y: -200, duration: 200 },
    { x: -100, y:0, duration: 200 },
    { x: -100, y: -200, duration: 200 },
    { x: -100, y:0, duration: 200 },
    { x: -100, y: -200, duration: 200 },
  ],
  playStatus: "normal",
};
export interface BlockInitializationData {
  imageSrc: string;
  gameObjectFrame: {
    [key: string]: number[][];
  };
  x: number;
  y: number;
  w: number;
  h: number;
  state: string;
  frame: number;
  actionSpeed: number;
  actionStop: number;
}

export interface CollisionState {
  shouldSpeed: { x: number; y: number };
  hitFace: {
    x: { left: number; right: number };
    y: { top: number; bottom: number };
  };
  stickFace: { left: number; right: number };
  wallJump: { left: number; right: number };
  cross: {directionX:number,directionY:number}; 
}
export class Block {
  position: { x: number; y: number; width: number; height: number };
  scale: { x: number; y: number };
  speed: { x: number; y: number };
  count: number;
  gameObject: Sprite;
  gameTexture: PIXI.Texture<PIXI.Resource>;
  state: string;
  direction: number;
  stop: number;
  fa: number;
  actionSpeed: number;
  actionStop: number;
  groundPosition: number;
  image: string;
  wallJumpStart: boolean;
  movingState: CollisionState;
  gameObjectFrame: {
    [key: string]: number[][];
  };

  constructor({
    imageSrc,
    gameObjectFrame,
    state,
    actionSpeed,
    actionStop,
    x,
    y,
    w,
    h,
  }: BlockInitializationData) {
    this.position = {
      x: x + w / 2,
      y: GroundPosition.y - y,
      width: w,
      height: h,
    };
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
    this.groundPosition = y;
    this.wallJumpStart = false;
    this.movingState = {
      hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
      stickFace: { left: 0, right: 0 },
      wallJump: { left: 0, right: 0 },
      shouldSpeed: { x: 0, y: 0 },
      cross: {directionX:0,directionY:0}
    };
    this.gameObject = new Sprite(this.gameTexture);
    this.gameObject.anchor.y = 1;
    this.gameObject.anchor.x = 0.5;
    this.gameObject.x = this.position.x;
    this.gameObject.y = this.position.y;
    this.gameObject.scale = this.scale;
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

export class MoveBlock extends Block {
  objectMovement: blockTraceMovementObj;
  standOnSelf: boolean;
  constructor({
    imageSrc,
    gameObjectFrame,
    state,
    frame,
    actionSpeed,
    actionStop,
    x,
    y,
    w,
    h,
  }: BlockInitializationData) {
    super({
      imageSrc,
      gameObjectFrame,
      state,
      frame,
      actionSpeed,
      actionStop,
      x,
      y,
      w,
      h,
    });
    this.scale = {
      x: 1,
      y: 1,
    };
    this.wallJumpStart = false;
    this.objectMovement = new blockTraceMovementObj(
      this.gameObject,
      blockTrace
    );
    this.standOnSelf = false
  }
  updateMovement(tick: number) {
    this.objectMovement?.blockTraceMovement(
      this.speed,
      { x: this.gameObject.x, y: this.gameObject.y },
      tick
    );
    if(this.standOnSelf){
      adventurerObject.position.y+=this.speed.y
      adventurerObject.position.x+=this.speed.x
      this.standOnSelf=false
    }
    super.update(tick);
  }

  updateRelativePosition() {
    return this.position;
  }
}

export interface PlayerInitializationData extends BlockInitializationData {
  groundPosition: number;
}
export class Player extends Block {
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
  constructor({
    imageSrc,
    gameObjectFrame,
    state,
    frame,
    actionSpeed,
    actionStop,
    x,
    y,
    w,
    h,
    groundPosition,
  }: PlayerInitializationData) {
    super({
      imageSrc,
      gameObjectFrame,
      state,
      frame,
      actionSpeed,
      actionStop,
      x,
      y,
      w,
      h,
    });
    this.groundPosition = GroundPosition.y - groundPosition;
    this.scale = {
      x: 2,
      y: 2,
    };
    this.wallJumpStart = false;
    this.hitFace={
      x: {
          left: 0,
          right: 0,
      },
      y: {
          top: 0,
          bottom: 0,
      }
  }
  }
  updateMovement(tick: number, state: string, collisionState: CollisionState) {
    this.state = state;
    if (this.speed.x === 0) {
      this.wallJumpStart = false;
    }
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
      shouldSpeed:shouldSpeed
    });
    if ((stickFace.left || stickFace.right) && !hitFace.y.bottom) {
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
    if (hitFace) {   
      if (hitFace.x.left) {
        if (this.speed.x < 0) {
          this.speed.x = 0;
        }
      }
      if (hitFace.x.right) {
        if (this.speed.x > 0) {
          this.speed.x = 0;
        }
      }
      console.log(this.speed.y)
      if (hitFace.y.bottom && !(this.speed.y < 0)) {
        this.speed.y = 0;
      }
      if (hitFace.y.top && !(this.speed.y > 0)) {
        this.speed.y = 0;
      }
    super.update(tick);
  }
}
  updateWithPlatformPos(shouldSpeed: { x: number; y: number; }){
      // if (this.hitFace.x.left && shouldSpeed.x > 0) {
      //   this.position.x += shouldSpeed.x;
      // }
      // if (this.hitFace.x.right && shouldSpeed.x < 0) {
      //   this.position.x += shouldSpeed.x;
      // }
      // if(this.hitFace.y.bottom){ 
      //   if(!this.hitFace.x.left&&!this.hitFace.x.right){
      //     this.position.x += shouldSpeed.x;
      //   }
      //   this.position.y += shouldSpeed.y;

      // }
      // if (this.hitFace.y.top&&shouldSpeed.y > 0) {
      //   this.position.y += shouldSpeed.y;
      // }
  }
  updateCross(cross: { directionX: number; directionY: number; },shouldSpeed: { x: number; y: number; }){
    if(cross.directionX||cross.directionY){
      this.position.y-=1
    }
  }
  updateRelativePosition() {
    return this.position;
  }
}
