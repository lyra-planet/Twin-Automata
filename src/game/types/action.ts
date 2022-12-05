import { Sprite,Texture,Resource } from "pixi.js";
import { IBlock, IMoveBlock, IPlayer } from "@game/types/gameObjects";

export interface PlayerMovementData {
    playerObject: IPlayer,
    isLeftDown: boolean;
    isRightDown: boolean;
    isSpaceDown: boolean;
    isShiftDown: boolean;
}
export interface NewtonLawsOfMotionData {
    position: { x: number; y: number; };
    speed: { x: number; y: number; };
    fa: number;
    direction: number;
    stop: number;
    groundPosition: number;
    hitFace: { x: { left: number; right: number; }; y: { top: number; bottom: number; }; };
    shouldSpeed: { x: number; y: number; }
}
export interface CollisionBoxBlockInitializationData {
    gameObject1: IPlayer,
    gameObject2: IBlock,
    isLeftDown: boolean,
    isRightDown: boolean,
    isSpaceDown: boolean,
}
export interface CollisionBoxMoveBlockInitializationData {
    gameObject1: IPlayer,
    gameObject2: IMoveBlock,
    isLeftDown: boolean,
    isRightDown: boolean,
    isSpaceDown: boolean,
}
export interface CollisionBoxTrapBlockInitializationData {
    gameObject1: IPlayer,
    gameObject2: IBlock,
}






export type T_BlockMoveMentTrace = {
    trace: T_BlockMoveMentSinglePort[];
    playStatus: T_PlayStatus;
}
export type T_BlockMoveMentSinglePort = {
    x: number;
    y: number;
    duration: number;
}
export type T_PlayStatus = 'normal' | 'reverse' | 'infinite' | 'cycle'



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