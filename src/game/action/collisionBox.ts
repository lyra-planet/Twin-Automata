import { CollisionBoxBlockInitializationData, CollisionBoxMoveBlockInitializationData, CollisionBoxTrapBlockInitializationData, IMoveObject } from "@game/types/action"


export const collisionBox_Block = ({
  gameObject1, 
  gameObject2,
  isLeftDown,
  isRightDown,
  isSpaceDown,}:CollisionBoxBlockInitializationData

    ) => {
    const Round = Math.round
    let hitFace = {
      x:{left:0,right:0},y:{top:0,bottom:0}
    }
    let stickFace = {
      left:0,
      right:0
    }
    let wallJump = {
      left:0,
      right:0
    }

    const gameObject1Box = {
      top: Round(gameObject1.position.y - 60),
      bottom: Round(gameObject1.position.y),
      left: Round(gameObject1.position.x - 14),
      right: Round(gameObject1.position.x + 14),
      middle:{
        x:Round(gameObject1.position.x),
        y:Round(gameObject1.position.y - 30)
      }
    };
    const gameObject2Box = {
      top: Round(gameObject2.position.y - gameObject2.size.height)+2,
      bottom: Round(gameObject2.position.y)-2 ,
      left: Round(gameObject2.position.x - gameObject2.size.width / 2),
      right: Round(gameObject2.position.x + gameObject2.size.width / 2),
      middle:{
        x:Round(gameObject2.position.x),
        y:Round(gameObject2.position.y - gameObject2.size.height/2)
      }
    };
    let collisionX = gameObject1Box.right> gameObject2Box.left&&
    gameObject2Box.right > gameObject1Box.left
    let collisionY = gameObject1Box.top<gameObject2Box.bottom&&
    gameObject2Box.top<gameObject1Box.bottom

    let directionX = (gameObject1Box.middle.x>=gameObject2Box.middle.x?1:-1)
    let directionY = (gameObject1Box.middle.y >=gameObject2Box.middle.y?1:-1)
    if(collisionX){
        if(directionY===1&&
        gameObject2Box.bottom>=gameObject1Box.top+gameObject1.speed.y){
        hitFace.y.top = 1  
        }else if((directionY===-1)&&
        gameObject1Box.bottom+gameObject1.speed.y>=gameObject2Box.top
        ){
        hitFace.y.bottom = 1  
      }
    }else if(collisionY){     
      if(directionX===1&&
        (gameObject1Box.left+gameObject1.speed.x<=gameObject2Box.right+gameObject2.speed.x)){ 
          if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x<0)){hitFace.x.left = 1} 
          if(isLeftDown){
            stickFace.left=1
          if(isSpaceDown){
            wallJump.left = 1
          }
          }
      }else if((directionX===-1)&&
        (gameObject1Box.right+gameObject1.speed.x>=gameObject2Box.left+gameObject2.speed.x)){
          if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x>0)){hitFace.x.right = 1} 
          if(isRightDown){
            stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
          }  
      } 
    } 
    let cross = {
      corssed:false,
      directionX:0,
      directionY:0
    }
    if(collisionY&&collisionX){
      cross.corssed=true
      cross.directionX=directionX
      cross.directionY=directionY
    }
    return {
      hitFace:hitFace,
      stickFace:stickFace,
      wallJump:wallJump,
      cross:cross
    }
} 

export const collisionBox_MoveBlock = ({
    gameObject1, 
    gameObject2,
    isLeftDown,
    isRightDown,
    isSpaceDown}:CollisionBoxMoveBlockInitializationData
      ) => {
      const Round = Math.round
      let hitFace = {
        x:{left:0,right:0},y:{top:0,bottom:0}
      }
      let stickFace = {
        left:0,
        right:0
      }
      let wallJump = {
        left:0,
        right:0
      }
      let shouldX=false,shouldY=false

      let moveObject:IMoveObject={
        weight:0,
        speed:{x:0,y:0},
        stand:0
      }

      const gameObject1Box = {
        top: Round(gameObject1.position.y - 58),
        bottom: Round(gameObject1.position.y-2),
        left: Round(gameObject1.position.x - 12),
        right: Round(gameObject1.position.x + 12),
        middle:{
          x:Round(gameObject1.position.x),
          y:Round(gameObject1.position.y - 30)
        }
      };
      const gameObject2Box = {
        top: Round(gameObject2.position.y - gameObject2.size.height)+2,
        bottom: Round(gameObject2.position.y)-2 ,
        left: Round(gameObject2.position.x - gameObject2.size.width / 2),
        right: Round(gameObject2.position.x + gameObject2.size.width / 2),
        middle:{
          x:Round(gameObject2.position.x),
          y:Round(gameObject2.position.y - gameObject2.size.height/2)
        }
      };
      let collisionX = gameObject1Box.right> gameObject2Box.left&&
      gameObject2Box.right > gameObject1Box.left
      let collisionY = gameObject1Box.top<gameObject2Box.bottom&&
      gameObject2Box.top<gameObject1Box.bottom
  
      let directionX = (gameObject1Box.middle.x>=gameObject2Box.middle.x?1:-1)
      let directionY = (gameObject1Box.middle.y >=gameObject2Box.middle.y?1:-1)
      if(collisionX){ 
          if(directionY===1&&
          gameObject2Box.bottom>=gameObject1Box.top+gameObject1.speed.y){
          shouldY=true
          hitFace.y.top = 1  
          }else if((directionY===-1)&&
          gameObject1Box.bottom+gameObject1.speed.y>=gameObject2Box.top
          ){
          shouldY=true
          gameObject2.standOnSelf=true
          hitFace.y.bottom = 1  

          moveObject={
            weight:1,
            speed:gameObject2.speed,
            stand:1
          }

        }
      }else if(collisionY){   
        if(directionX===1&&
          (gameObject1Box.left+gameObject1.speed.x<=gameObject2Box.right+gameObject2.speed.x)){ 
            shouldX=true
            gameObject2.collisionX = true

            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }

            if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x<0)){hitFace.x.left = 1} 
            if(isLeftDown){
              stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
            }
        }else if((directionX===-1)&&
          (gameObject1Box.right+gameObject1.speed.x>=gameObject2Box.left+gameObject2.speed.x)){
            shouldX=true
            gameObject2.collisionX = true

            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }

            if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x>0)){hitFace.x.right = 1} 
             if(isRightDown){
              stickFace.right=1
              if(isSpaceDown){
                wallJump.right = 1
              }
            }  
        } 
      }
      let cross = {
        corssed:false,
        directionX:0,
        directionY:0
      }
      if(collisionY&&collisionX){
        cross.corssed=true
        cross.directionX=directionX
        cross.directionY=directionY
      }
      
      return {
        hitFace:hitFace,
        stickFace:stickFace,
        wallJump:wallJump,
        cross:cross,
        shouldMove:{
          should:{
            x:shouldX,
            y:shouldY
          },
          shouldSpeedX:gameObject2.speed.x,
          shouldSpeedY:gameObject2.speed.y
        },
        moveObject:moveObject
      }
} 

export const collisionBox_TrapBlock = ({
  gameObject1, 
  gameObject2,
}:CollisionBoxTrapBlockInitializationData
    ) => {
    const Round = Math.round
    const gameObject1Box = {
      top: Round(gameObject1.position.y - 60),
      bottom: Round(gameObject1.position.y),
      left: Round(gameObject1.position.x - 14),
      right: Round(gameObject1.position.x + 14),
      middle:{
        x:Round(gameObject1.position.x),
        y:Round(gameObject1.position.y - 30)
      }
    };
    const gameObject2Box = {
      top: Round(gameObject2.position.y - gameObject2.size.height)+2,
      bottom: Round(gameObject2.position.y)-2 ,
      left: Round(gameObject2.position.x - gameObject2.size.width / 2),
      right: Round(gameObject2.position.x + gameObject2.size.width / 2),
      middle:{
        x:Round(gameObject2.position.x),
        y:Round(gameObject2.position.y - gameObject2.size.height/2)
      }
    };
    let collisionX = gameObject1Box.right> gameObject2Box.left&&
    gameObject2Box.right > gameObject1Box.left
    let collisionY = gameObject1Box.top<gameObject2Box.bottom&&
    gameObject2Box.top<gameObject1Box.bottom
    if(collisionX&&collisionY){
      console.log("Dead")
    }
} 