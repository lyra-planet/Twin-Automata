import { Player } from '../gameObjects/gameObjects';



interface PlayerMovementData{
 playerObject:Player,
 isLeftDown:boolean;
 isRightDown:boolean;
 isSpaceDown:boolean;
 isShiftDown:boolean;
}

let isLeftDown=false,isRightDown=false,isSpaceDown=false
let sprint = false
export const PlayerMovement = ({
  playerObject,
  isLeftDown,isRightDown,isSpaceDown,isShiftDown
}:PlayerMovementData
    )=>{ 
    let state = "stand"
    if(playerObject.speed.y!==0){
        playerObject.actionSpeed = 20
        isSpaceDown = false
        state="jump" 
        playerObject.fa = 0.08
         if(playerObject.count===5){
        playerObject.actionStop=1
        playerObject.count=5
        }      
        if((isLeftDown||isRightDown)&&!playerObject.wallJumpStart){
          if(isLeftDown&&playerObject.speed.x>=-3){
            playerObject.speed.x = -3
            playerObject.direction = -1
            playerObject.scale.x = -2 
          }else if(isRightDown&&playerObject.speed.x<=3){
            playerObject.speed.x = 3
            playerObject.direction = 1
            playerObject.scale.x = 2 
          }
        }
      }else{   
        sprint = true
        playerObject.fa = 0.1
        playerObject.actionStop=0  
        if((isLeftDown||isRightDown)){
          if(playerObject.state != "run"){
            playerObject.count = 0
          }
          state = "run"
          playerObject.actionSpeed = 15
          if(isLeftDown&&playerObject.speed.x>=-3){
            playerObject.speed.x = -3
            playerObject.direction = -1
            playerObject.scale.x = -2 
          }else if(isRightDown&&playerObject.speed.x<=3){
            playerObject.speed.x = 3
            playerObject.direction = 1
            playerObject.scale.x = 2 
          }
        //站立状态
        }else{     
          if(playerObject.state != "stand"){
            playerObject.count = 0
          }
          playerObject.stop = 1
          state = "stand"
          playerObject.actionSpeed = 30 
        } 
        if(isSpaceDown){
            if(playerObject.speed.y===0){
                playerObject.speed.y =-5
            }

        }         
      }
    if(isShiftDown&&sprint){ 
      if(playerObject.speed.y!==0){
        playerObject.speed.y =-6
      }
      if(isRightDown&&playerObject.speed.x<=3){
        playerObject.speed.x = 6
      }else if(isLeftDown&&playerObject.speed.x>=-3){
        playerObject.speed.x = -6
      }
      sprint = false
    }
    return state
}
