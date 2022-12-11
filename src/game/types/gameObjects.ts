import { Sprite } from "pixi.js";
import { blockTraceMovementObj } from "@game/action/blockMovementTrace";
import { IPosition, IScale, ISpeed, TGameObjectTexture, ICollisionState, IGameObjectFrame, IHitFace, ICross, ISize, TSpecialMovement, TCollisionBox } from "@game/types/global";
import { TBlockMoveMentTrace } from "./action";


export type TBlockType='collision'|'hitDead'|'hitDash'|'moveable'

export interface IBlock{
    position:IPosition;
    size:ISize;
    scale: IScale;
    speed: ISpeed;
    count: number;
    gameObject: Sprite;
    gameTexture: TGameObjectTexture;
    state: string;
    direction: number;
    stop: number;
    fa: number;
    actionSpeed: number;
    actionStop: number;
    collisionBox:TCollisionBox
    groundPosition: number;
    image: string;
    wallJumpStart:boolean;
    movingState:ICollisionState;
    gameObjectFrame:IGameObjectFrame,
    blockTypes:TBlockType[]
    update:{(tick:number):void};
    init:{():Sprite};
    updateCollisionBox:{():void}
}
export interface ISpecialBlock extends IBlock{
    special: { dash: boolean; dead: boolean; };
    resuming: boolean;
    updateSpecial:(special: any) => {
        dash: boolean;
        dead: boolean;
    }
}

export interface IMoveBlock extends IBlock{
    objectMovement: blockTraceMovementObj;
    trace:TBlockMoveMentTrace
    updateMovement:{(tick: number):void};
    updateRelativePosition:{():IPosition}
}
export interface IPlayer extends IBlock{
    hitFace: IHitFace
    rotation:number
    updateMovement:{(tick: number, state: string, collisionState: ICollisionState,specialMovement:TSpecialMovement):void};
    updateCross:{(cross:ICross,shouldSpeed:ISpeed):void}
    updateRelativePosition:{():IPosition}
    updateRotation:{(rotation:number):void}
}
export interface BlockInitData {
    imageSrc: string;
    gameObjectFrame: IGameObjectFrame
    state: string;
    frame: number;
    actionSpeed: number;
    actionStop: number;
    size:ISize;
    position:IPosition
}
export interface MoveBlockInitData extends BlockInitData {
    trace:TBlockMoveMentTrace
}
export interface PlayerInitData extends BlockInitData {
    groundPosition: number;
}