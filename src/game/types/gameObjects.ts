import { Sprite } from "pixi.js";
import { blockTraceMovementObj } from "@game/action/blockMovementTrace";
import { IPosition, IScale, ISpeed, TGameObjectTexture, ICollisionState, IGameObjectFrame, IHitFace, ICross, ISize } from "@game/types/global";

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
    groundPosition: number;
    image: string;
    wallJumpStart:boolean;
    movingState:ICollisionState;
    gameObjectFrame:IGameObjectFrame,
    update:{(tick:number):void};
    init:{():Sprite};
}
export interface IMoveBlock extends IBlock{
    objectMovement: blockTraceMovementObj;
    standOnSelf: boolean;
    collisionX:boolean;
    updateMovement:{(tick: number):void};
    updateRelativePosition:{():IPosition}
}
export interface IPlayer extends IBlock{
    hitFace: IHitFace
    updateMovement:{(tick: number, state: string, collisionState: ICollisionState):void};
    updateCross:{(cross:ICross,shouldSpeed:ISpeed):void}
    updateRelativePosition:{():IPosition}
}
export interface BlockInitializationData {
    imageSrc: string;
    gameObjectFrame: IGameObjectFrame
    state: string;
    frame: number;
    actionSpeed: number;
    actionStop: number;
    size:ISize;
    position:IPosition
}
export interface PlayerInitializationData extends BlockInitializationData {
    groundPosition: number;
}