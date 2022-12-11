import { Sprite,Texture,Resource } from "pixi.js";
import { IBlock, IMoveBlock, IPlayer, ISpecialBlock } from "@game/types/gameObjects";
import { IHitFace, IPosition, ISpeed, TSpecialMovement } from "./global";

export interface PlayerMovementData {
    playerObject: IPlayer,
    isLeftDown: boolean;
    isRightDown: boolean;
    isSpaceDown: boolean;
    isShiftDown: boolean;
    specialMovement:TSpecialMovement
}

export interface NewtonLawsOfMotionData {
    position:IPosition;
    speed: ISpeed;
    fa: number;
    direction: number;
    stop: number;
    groundPosition: number;
    hitFace:IHitFace;
    shouldSpeed: ISpeed;
    rotation:number
}
export interface CollisionBoxBlockInitData {
    gameObject1: IPlayer,
    gameObject2: IBlock,
    isLeftDown: boolean,
    isRightDown: boolean,
    isSpaceDown: boolean,
}
export interface CollisionBoxMoveBlockInitData {
    gameObject1: IPlayer,
    gameObject2: IMoveBlock,
    isLeftDown: boolean,
    isRightDown: boolean,
    isSpaceDown: boolean,
}
export interface CollisionBoxTrapBlockInitData {
    gameObject1: IPlayer,
    gameObject2: IBlock,
}
export interface CollisionBoxSpecialBlockInitData {
    gameObject1: IPlayer,
    gameObject2: ISpecialBlock,
}
export type TBlockMoveMentTrace = {
    trace: TBlockMoveMentSinglePort[];
    playStatus: TPlayStatus;
}
export type TBlockMoveMentSinglePort = {
    x: number;
    y: number;
    duration: number;
}
export type TPlayStatus = 'normal' | 'infinite' 

export interface IMoveObject{
    weight:number,
    speed:IMoveBlock["speed"],
    stand:number
  }

export interface CharacterAnimationData{
    character:Sprite,
    characterTexture:Texture<Resource>,
    characterFrames:{
      [key: string]: number[][];
    },
    state:string,
    count:number,
    tick:number,
    characterActionspeed:number,
    animationStop:number
  }