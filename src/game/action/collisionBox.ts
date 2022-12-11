import { CollisionBoxBlockInitData, CollisionBoxMoveBlockInitData, CollisionBoxSpecialBlockInitData, CollisionBoxTrapBlockInitData, IMoveObject } from "@game/types/action"


export const collisionBox_Block = ({
  gameObject1, 
  gameObject2,
  isLeftDown,
  isRightDown,
  isSpaceDown,}:CollisionBoxBlockInitData
    ) => {
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
    gameObject1.updateCollisionBox()
    gameObject2.updateCollisionBox()


    let collisionX = gameObject1.collisionBox.r> gameObject2.collisionBox.l&&
    gameObject2.collisionBox.r > gameObject1.collisionBox.l
    let collisionY = gameObject1.collisionBox.t<gameObject2.collisionBox.b&&
    gameObject2.collisionBox.t<gameObject1.collisionBox.b
    let directionX = (gameObject1.collisionBox.m.x>=gameObject2.collisionBox.m.x?1:-1)
    let directionY = (gameObject1.collisionBox.m.y >=gameObject2.collisionBox.m.y?1:-1)

    const collisionUpdate1=()=>{
      if(collisionX){
        if(directionY===1&&
        gameObject2.collisionBox.b>=gameObject1.collisionBox.t+gameObject1.speed.y){
        hitFace.y.top = 1  
        }else if((directionY===-1)&&
        gameObject1.collisionBox.b+gameObject1.speed.y>=gameObject2.collisionBox.t
        ){
        hitFace.y.bottom = 1  
      }
    }else if(collisionY){     
      if(directionX===1&&
        (gameObject1.collisionBox.l+gameObject1.speed.x<=gameObject2.collisionBox.r)){ 
          if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x<0)){hitFace.x.left = 1} 
          if(isLeftDown){
            stickFace.left=1
          if(isSpaceDown){
            wallJump.left = 1
          }
          }
      }else if((directionX===-1)&&
        (gameObject1.collisionBox.r+gameObject1.speed.x>=gameObject2.collisionBox.l)){
          if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x>0)){hitFace.x.right = 1} 
          if(isRightDown){
            stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
          }  
      } 
    } 
    }
    const collisionUpdate2=()=>{
      if(collisionX){
        if(directionY===1&&
        gameObject1.collisionBox.t-gameObject1.speed.x<=gameObject2.collisionBox.b){
          if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x<0)){hitFace.y.top = 1} 
          if(isRightDown){
            stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
          }  
        }else if((directionY===-1)&&
        gameObject1.collisionBox.b-gameObject1.speed.x>=gameObject2.collisionBox.t){
          
          if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x>0)){hitFace.y.bottom = 1} 
          if(isLeftDown){
            stickFace.left=1
          if(isSpaceDown){
            wallJump.left = 1
          }
          }
      }
    }else if(collisionY){     
      if(directionX===1&&
        (gameObject1.collisionBox.l+gameObject1.speed.y<=gameObject2.collisionBox.r)){ 
          hitFace.x.left = 1  
      }else if((directionX===-1)&&
        (gameObject1.collisionBox.r+gameObject1.speed.y>=gameObject2.collisionBox.l)){
          hitFace.x.right = 1 
      } 
    } 
    }
    const collisionUpdate3=()=>{
      if(collisionX){
        if(directionY===1&&
        gameObject1.collisionBox.t-gameObject1.speed.y<=gameObject2.collisionBox.b){
        hitFace.y.top = 1  
        }else if((directionY===-1)&&
        gameObject1.collisionBox.b-gameObject1.speed.y>=gameObject2.collisionBox.t
        ){
        hitFace.y.bottom = 1  
      }
    }else if(collisionY){     
      if(directionX===1&&
        (gameObject1.collisionBox.l-gameObject1.speed.x<=gameObject2.collisionBox.r)){ 
          if((isRightDown)||(!isLeftDown)||(gameObject1.speed.x>0)){hitFace.x.left = 1} 
          if(isRightDown){
            stickFace.right=1
          if(isSpaceDown){
            wallJump.right = 1
          }
          }
      }else if((directionX===-1)&&
        (gameObject1.collisionBox.r-gameObject1.speed.x>=gameObject2.collisionBox.l)){
          if((isLeftDown)||(!isRightDown)||(gameObject1.speed.x<0)){hitFace.x.right = 1} 
          console.log(1)
          if(isLeftDown){
            stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
          }  
      } 
    } 
    }
    const collisionUpdate4=()=>{
      if(collisionX){
        if(directionY===1&&
        gameObject1.collisionBox.t+gameObject1.speed.x<=gameObject2.collisionBox.b){
          if((isLeftDown)||(!isRightDown)||(gameObject1.speed.x>0)){hitFace.y.top = 1} 
          if(isLeftDown){
            stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
          }  
        }else if((directionY===-1)&&
        gameObject1.collisionBox.b+gameObject1.speed.x>=gameObject2.collisionBox.t){
          if((isRightDown)||(!isLeftDown)||(gameObject1.speed.x<0)){hitFace.y.bottom = 1} 
          if(isRightDown){
            stickFace.right=1
          if(isSpaceDown){
            wallJump.right = 1
          }
          }
      }
    }else if(collisionY){     
      if(directionX===1&&
        (gameObject1.collisionBox.l-gameObject1.speed.y<=gameObject2.collisionBox.r)){ 
          hitFace.x.left = 1  
      }else if((directionX===-1)&&
        (gameObject1.collisionBox.r-gameObject1.speed.y>=gameObject2.collisionBox.l)){
          hitFace.x.right = 1 
      } 
    } 
    }

    switch(gameObject1.rotation){
      case 0:
        collisionUpdate1()
      break
      case 1:
        collisionUpdate2()
      break
      case 2:
        collisionUpdate3()
      break
      case 3:
        collisionUpdate4()
      break
      default:console.log("ERROR")
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
    isSpaceDown}:CollisionBoxMoveBlockInitData
      ) => {
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
      gameObject1.updateCollisionBox()
      gameObject2.updateCollisionBox()
      let collisionX = gameObject1.collisionBox.r> gameObject2.collisionBox.l&&
      gameObject2.collisionBox.r > gameObject1.collisionBox.l
      let collisionY = gameObject1.collisionBox.t<gameObject2.collisionBox.b&&
      gameObject2.collisionBox.t<gameObject1.collisionBox.b
  
      let directionX = (gameObject1.collisionBox.m.x>=gameObject2.collisionBox.m.x?1:-1)
      let directionY = (gameObject1.collisionBox.m.y >=gameObject2.collisionBox.m.y?1:-1)

      const collisionUpdate1=()=>{
        if(collisionX){ 
          if(directionY===1&&
          gameObject1.collisionBox.t+gameObject1.speed.y <= gameObject2.collisionBox.b ){
          shouldY=true
          hitFace.y.top = 1  
          moveObject={
            weight:1,
            speed:gameObject2.speed,
            stand:1
          }
          }else if((directionY===-1)&&
          gameObject1.collisionBox.b+gameObject1.speed.y>=gameObject2.collisionBox.t
          ){
          shouldY=true
          hitFace.y.bottom = 1  
          moveObject={
            weight:1,
            speed:gameObject2.speed,
            stand:1
          }
        }
      }else if(collisionY){   
        if(directionX===1&&
          (gameObject1.collisionBox.l+gameObject1.speed.x<=gameObject2.collisionBox.r+gameObject2.speed.x)){ 
            shouldX=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x<0)){hitFace.x.left = 1} 
            if(isLeftDown){
              moveObject.stand=1
              stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
            }
        }else if((directionX===-1)&&
          (gameObject1.collisionBox.r+gameObject1.speed.x>=gameObject2.collisionBox.l+gameObject2.speed.x)){
            shouldX=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x>0)){hitFace.x.right = 1} 
             if(isRightDown){
              moveObject.stand=1
              stickFace.right=1
              if(isSpaceDown){
                wallJump.right = 1
              }
            }  
        } 
      }
      }
      const collisionUpdate2=()=>{
        if(collisionX){
          if(directionY===1&&
          gameObject1.collisionBox.t-gameObject1.speed.x<=gameObject2.collisionBox.b+gameObject2.speed.y){
            shouldY=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((!isLeftDown)||(isRightDown)||(gameObject1.speed.x<0)){hitFace.y.top = 1} 
            if(isRightDown){
              moveObject.stand=1
              stickFace.right=1
              if(isSpaceDown){
                wallJump.right = 1
              }
            }  
          }else if((directionY===-1)&&
          gameObject1.collisionBox.b-gameObject1.speed.x>=gameObject2.collisionBox.t+gameObject2.speed.y){
            shouldY=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((!isRightDown)||(isLeftDown)||(gameObject1.speed.x>0)){hitFace.y.bottom = 1} 
            if(isLeftDown){
              moveObject.stand=1
              stickFace.left=1
            if(isSpaceDown){
              wallJump.left = 1
            }
            }
  
        }
      }else if(collisionY){     
        if(directionX===1&&
          (gameObject1.collisionBox.l+gameObject1.speed.y<=gameObject2.collisionBox.r)){ 
            shouldX=true
            hitFace.x.left = 1  
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:1
            }
        }else if((directionX===-1)&&
          (gameObject1.collisionBox.r+gameObject1.speed.y>=gameObject2.collisionBox.l)){
            shouldX=true
            hitFace.x.right = 1 
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:1
            }
        } 
      } 
      }
      const collisionUpdate3=()=>{
        if(collisionX){ 
          if(directionY===1&&
          gameObject1.collisionBox.t-gameObject1.speed.y <= gameObject2.collisionBox.b ){
          shouldY=true
          hitFace.y.top = 1  
          moveObject={
            weight:1,
            speed:gameObject2.speed,
            stand:1
          }
          }else if((directionY===-1)&&
          gameObject1.collisionBox.b-gameObject1.speed.y >= gameObject2.collisionBox.t
          ){
          shouldY=true
          hitFace.y.bottom = 1  
          moveObject={
            weight:1,
            speed:gameObject2.speed,
            stand:1
          }
        }
      }else if(collisionY){   
        if(directionX===1&&
          (gameObject1.collisionBox.l-gameObject1.speed.x<=gameObject2.collisionBox.r+gameObject2.speed.x)){ 
            shouldX=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((isRightDown)||(!isLeftDown)||(gameObject1.speed.x>0)){hitFace.x.left = 1} 
            if(isRightDown){
              moveObject.stand=1
              stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
            }
        }else if((directionX===-1)&&
          (gameObject1.collisionBox.r-gameObject1.speed.x>=gameObject2.collisionBox.l+gameObject2.speed.x)){
            shouldX=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((isLeftDown)||(!isRightDown)||(gameObject1.speed.x<0)){hitFace.x.right = 1} 
             if(isLeftDown){
              moveObject.stand=1
              stickFace.left=1
              if(isSpaceDown){
                wallJump.left = 1
              }
            }  
        } 
      }
      }
      const collisionUpdate4=()=>{
        if(collisionX){
          if(directionY===1&&
          gameObject1.collisionBox.t+gameObject1.speed.x<=gameObject2.collisionBox.b+gameObject2.speed.y){
            shouldY=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((isLeftDown)||(!isRightDown)||(gameObject1.speed.x>0)){hitFace.y.top = 1} 
            if(isLeftDown){
              moveObject.stand=1
              stickFace.left=1
              if(isSpaceDown){
                wallJump.left = 1
              }
            }  
          }else if((directionY===-1)&&
          gameObject1.collisionBox.b+gameObject1.speed.x>=gameObject2.collisionBox.t+gameObject2.speed.y){
            shouldY=true
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:0
            }
            if((isRightDown)||(!isLeftDown)||(gameObject1.speed.x<0)){hitFace.y.bottom = 1} 
            if(isRightDown){
              moveObject.stand=1
              stickFace.right=1
            if(isSpaceDown){
              wallJump.right = 1
            }
            }
  
        }
      }else if(collisionY){     
        if(directionX===1&&
          (gameObject1.collisionBox.l-gameObject1.speed.y<=gameObject2.collisionBox.r)){ 
            shouldX=true
            hitFace.x.left = 1  
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:1
            }
        }else if((directionX===-1)&&
          (gameObject1.collisionBox.r-gameObject1.speed.y>=gameObject2.collisionBox.l)){
            shouldX=true
            hitFace.x.right = 1 
            moveObject={
              weight:1,
              speed:gameObject2.speed,
              stand:1
            }
        } 
      } 
      }
      switch(gameObject1.rotation){
        case 0:
          collisionUpdate1()
        break
        case 1:
          collisionUpdate2()
        break
        case 2:
          collisionUpdate3()
        break
        case 3:
          collisionUpdate4()
        break
        default:console.log("ERROR")
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
}:CollisionBoxTrapBlockInitData
    ) => {

    gameObject1.updateCollisionBox()
    gameObject2.updateCollisionBox()

    let collisionX = gameObject1.collisionBox.r> gameObject2.collisionBox.l&&
    gameObject2.collisionBox.r > gameObject1.collisionBox.l
    let collisionY = gameObject1.collisionBox.t<gameObject2.collisionBox.b&&
    gameObject2.collisionBox.t<gameObject1.collisionBox.b
    if(collisionX&&collisionY){
      console.log("Dead")
    }
} 

export const collisionBox_DashBlock = ({
  gameObject1, 
  gameObject2,
}:CollisionBoxSpecialBlockInitData
    ) => {

    let special={
      dash:false,
      dead:false
    }

    gameObject1.updateCollisionBox()
    gameObject2.updateCollisionBox()

    let collisionX = gameObject1.collisionBox.r> gameObject2.collisionBox.l&&
    gameObject2.collisionBox.r > gameObject1.collisionBox.l
    let collisionY = gameObject1.collisionBox.t<gameObject2.collisionBox.b&&
    gameObject2.collisionBox.t<gameObject1.collisionBox.b

    if(collisionX&&collisionY){
      special.dash=true
      special={...gameObject2.updateSpecial(special)}
    }
    return special
} 