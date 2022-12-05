import {collisionBox_Block,collisionBox_TrapBlock} from '@game/action/collisionBox'
import { Block,  Player } from '@game/gameObjects/gameObjects';
import { ICollisionState } from '@game/types/global';
import * as PIXI from 'pixi.js'
export class BlockObjectLists{
    objectLists: Block[][]
    stage: PIXI.Container<PIXI.DisplayObject>
    collisionState: ICollisionState
    constructor(objectLists:Block[][],stage:PIXI.Container<PIXI.DisplayObject>){
      this.objectLists = objectLists
      this.stage = stage
      this.collisionState ={
        hitFace:{x:{left:0,right:0},y:{top:0,bottom:0}},
        stickFace:{left:0,right:0},
        wallJump:{left:0,right:0},
        shouldSpeed:{x:0,y:0},
        cross:{directionX:0,directionY:0}
      }
    }
    init(){    
      this.objectLists.forEach(objectList=>{
        objectList.forEach(object=>{ 
          this.stage.addChild(object.init())
        })
      })
    }
    update(tick:number){
      this.collisionState ={
        hitFace:{x:{left:0,right:0},y:{top:0,bottom:0}},
        stickFace:{left:0,right:0},
        wallJump:{left:0,right:0},
        shouldSpeed:{x:0,y:0},
        cross:{directionX:0,directionY:0}
      }
      this.objectLists.forEach(objectList=>{
        objectList.forEach(object=>{
          object.update(tick)
        })
      })
    }
    updateCollisionBox_Block(
      moveObject:Player,
      isLeftDown:boolean,
      isRightDown:boolean,
      isSpaceDown:boolean){
        this.objectLists.forEach(objectList=>{
          objectList.forEach(object=>{
            let collisionState = collisionBox_Block({
              gameObject1:moveObject , 
              gameObject2:object, 
              isLeftDown: isLeftDown, 
              isRightDown:isRightDown, 
              isSpaceDown:isSpaceDown,
            }
              )
              this.collisionState.hitFace.x.left+=collisionState.hitFace.x.left
              this.collisionState.hitFace.x.right+=collisionState.hitFace.x.right
              this.collisionState.hitFace.y.bottom+=collisionState.hitFace.y.bottom
              this.collisionState.hitFace.y.top+=collisionState.hitFace.y.top

              this.collisionState.stickFace.left+=collisionState.stickFace.left
              this.collisionState.stickFace.right+=collisionState.stickFace.right
 
              this.collisionState.wallJump.left+=collisionState.wallJump.left
              this.collisionState.wallJump.right+=collisionState.wallJump.right
              if(collisionState.cross.corssed){
                this.collisionState.cross.directionX =collisionState.cross.directionX
                this.collisionState.cross.directionY = collisionState.cross.directionY
              }
            })
        })
    }
  }


export class TrapBlockObjectLists{
    objectLists: Block[][]
    stage: PIXI.Container<PIXI.DisplayObject>
    constructor(objectLists:Block[][],stage:PIXI.Container<PIXI.DisplayObject>){
      this.objectLists = objectLists
      this.stage = stage
    }
    init(){    
      this.objectLists.forEach(objectList=>{
        objectList.forEach(object=>{  
          this.stage.addChild(object.init())
        })
      })
    }
    update(tick:number){
      this.objectLists.forEach(objectList=>{
        objectList.forEach(object=>{
          object.update(tick)
        })
      })
    }
    updateCollisionBox_TrapBlock(moveObject:Player){
        this.objectLists.forEach(objectList=>{
          objectList.forEach(object=>{
          collisionBox_TrapBlock({
            gameObject1:moveObject , 
            gameObject2:object, 
          })
          })
        })
    }
  }
