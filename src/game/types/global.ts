import { Resource, Texture } from "pixi.js";


export interface ISize {width:number,height:number}
export interface IPosition { x: number; y: number}
export interface ISpeed { x: number; y: number }
export interface IScale { x: number; y: number }
export interface ICross { directionX: number; directionY: number; }
export interface ICollisionState {
    shouldSpeed: { x: number; y: number };
    hitFace: {
        x: { left: number; right: number };
        y: { top: number; bottom: number };
    };
    stickFace: { left: number; right: number };
    wallJump: { left: number; right: number };
    cross: { directionX: number, directionY: number };
}
export type TSpecialMovement={
    dash:boolean,
    hit:{l:boolean,r:boolean,t:boolean,b:boolean},
    stick:-1 | 0 | 1
    wallJump:-1 | 0 | 1,
}




export interface IHitFace {
    x: {
        left: number;
        right: number;
    };
    y: {
        top: number;
        bottom: number;
    };
}
export interface IGameObjectFrame {
    [key: string]: number[][];
}

export type TGameObjectTexture = Texture<Resource>

