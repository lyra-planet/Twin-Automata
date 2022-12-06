import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { characterAnimation } from "@game/action/characterAnimation";
import { NewtonLawsOfMotion } from "@game/action/Newton";
import { GroundPosition } from "@game/static/blocksSize";
import { adventurerObject } from "@game/static/playerObject";
import {
  blockTraceMovementObj,
} from "@game/action/blockMovementTrace";
import { BlockInitData, IBlock, IMoveBlock, IPlayer, MoveBlockInitData, PlayerInitData,  } from "@game/types/gameObjects";
import {ICollisionState, ICross, ISpeed, IGameObjectFrame, IPosition, IScale, ISize, TGameObjectTexture } from "@game/types/global";
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
  }
    updateMovement(tick: number, state: string, collisionState: ICollisionState) {
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
      shouldSpeed: shouldSpeed
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
      if (hitFace.y.bottom && !(this.speed.y < 0)) {
        this.speed.y = 0;
      }
      if (hitFace.y.top && !(this.speed.y > 0)) {
        this.speed.y = 0;
      }
    }
  }
  updateCross(cross: ICross, shouldSpeed: ISpeed) {
    if (cross.directionX) {
      this.position.y -= 1
    }
    if(cross.directionY){
      this.speed.x=0
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
      console.log(max.weight)
      this.position.x+=max.speed.x
    }
  }
  updateRelativePosition() {
    return this.position;
  }
}
