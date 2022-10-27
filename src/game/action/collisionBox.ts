import { Block, Player } from '../gameObjects/gameObjects';

interface CollisionBoxBlockInitializationData{
  gameObject1:Player, 
  gameObject2:Block,
  isLeftDown:boolean,
  isRightDown:boolean,
  isSpaceDown:boolean,
}

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
      top: Round(gameObject2.position.y - gameObject2.position.height)+2,
      bottom: Round(gameObject2.position.y)-2 ,
      left: Round(gameObject2.position.x - gameObject2.position.width / 2),
      right: Round(gameObject2.position.x + gameObject2.position.width / 2),
      middle:{
        x:Round(gameObject2.position.x),
        y:Round(gameObject2.position.y - gameObject2.position.height/2)
      }
    };
    let collisionX = gameObject1Box.right> gameObject2Box.left&&
    gameObject2Box.right > gameObject1Box.left
    let collisionY = gameObject1Box.top<gameObject2Box.bottom&&
    gameObject2Box.top<gameObject1Box.bottom

    let directionX = (gameObject1Box.middle.x>=gameObject2Box.middle.x?1:0)
    let directionY = (gameObject1Box.middle.y >=gameObject2Box.middle.y?1:0)
    if(collisionX){
        if(directionY&&
        gameObject2Box.bottom>=gameObject1Box.top+gameObject1.speed.y){
        hitFace.y.top = 1  
        }else if(!(directionY)&&
        gameObject1Box.bottom+gameObject1.speed.y>=gameObject2Box.top
        ){
        hitFace.y.bottom = 1  
      }
    }else if(collisionY){     
      if(directionX&&
        (gameObject1Box.left+gameObject1.speed.x<=gameObject2Box.right)){ 
          if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x<0)){hitFace.x.left = 1} 
          if(isLeftDown){
            stickFace.left=1
          if(isSpaceDown){
            wallJump.left = 1
          }
          }
      }else if((!directionX)&&
        (gameObject1Box.right+gameObject1.speed.x>=gameObject2Box.left)){
          if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x>0)){hitFace.x.right = 1} 
          if(isRightDown){
            stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
          }  
      } 
    } 
    if(collisionY&&collisionX){
      
    }
    return {
      hitFace:hitFace,
      stickFace:stickFace,
      wallJump:wallJump
    }
  } 
  interface CollisionBoxTrapBlockInitializationData{
    gameObject1:Player, 
    gameObject2:Block,
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
      top: Round(gameObject2.position.y - gameObject2.position.height)+2,
      bottom: Round(gameObject2.position.y)-2 ,
      left: Round(gameObject2.position.x - gameObject2.position.width / 2),
      right: Round(gameObject2.position.x + gameObject2.position.width / 2),
      middle:{
        x:Round(gameObject2.position.x),
        y:Round(gameObject2.position.y - gameObject2.position.height/2)
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

  interface CollisionBoxMoveBlockInitializationData{
    gameObject1:Player, 
    gameObject2:Block,
    isLeftDown:boolean,
    isRightDown:boolean,
    isSpaceDown:boolean,
  }
  
  export const collisionBox_MoveBlock = ({
    gameObject1, 
    gameObject2,
    isLeftDown,
    isRightDown,
    isSpaceDown,}:CollisionBoxMoveBlockInitializationData
  
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
        top: Round(gameObject2.position.y - gameObject2.position.height)+2,
        bottom: Round(gameObject2.position.y)-2 ,
        left: Round(gameObject2.position.x - gameObject2.position.width / 2),
        right: Round(gameObject2.position.x + gameObject2.position.width / 2),
        middle:{
          x:Round(gameObject2.position.x),
          y:Round(gameObject2.position.y - gameObject2.position.height/2)
        }
      };
      let collisionX = gameObject1Box.right> gameObject2Box.left&&
      gameObject2Box.right > gameObject1Box.left
      let collisionY = gameObject1Box.top<gameObject2Box.bottom&&
      gameObject2Box.top<gameObject1Box.bottom
  
      let directionX = (gameObject1Box.middle.x>=gameObject2Box.middle.x?1:0)
      let directionY = (gameObject1Box.middle.y >=gameObject2Box.middle.y?1:0)
      if(collisionX){ 
          if(directionY&&
          gameObject2Box.bottom>=gameObject1Box.top+gameObject1.speed.y){
          shouldY=true
          hitFace.y.top = 1  
          }else if(!(directionY)&&
          gameObject1Box.bottom+gameObject1.speed.y>=gameObject2Box.top
          ){
          shouldY=true
          hitFace.y.bottom = 1  
        }
      }else if(collisionY){     
        if(directionX&&
          (gameObject1Box.left+gameObject1.speed.x<=gameObject2Box.right)){ 
            shouldX=true
            hitFace.x.left = 1
            if(isLeftDown){
              
              stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
            }
        }else if((!directionX)&&
          (gameObject1Box.right+gameObject1.speed.x>=gameObject2Box.left)){
            shouldX=true
            hitFace.x.right = 1
             if(isRightDown){
              stickFace.right=1
              if(isSpaceDown){
                wallJump.right = 1
              }
            }  
        } 
      } 
      if(collisionY&&collisionX){
        console.log("交叉了")
      }
      return {
        hitFace:hitFace,
        stickFace:stickFace,
        wallJump:wallJump,
        shouldMove:{
          should:{
            x:shouldX,
            y:shouldY
          },
          shouldSpeedX:gameObject2.speed.x,
          shouldSpeedY:gameObject2.speed.y
        }
      }
    } 