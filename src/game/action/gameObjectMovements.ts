import { PlayerMovementData } from '@game/types/action';
import { TMovementState } from './movementState';

export const PlayerMovement = ({
  playerObject,
  isLeftDown, isRightDown, isSpaceDown, isShiftDown,specialMovement
}: PlayerMovementData
) => {
  const round = Math.round
  let playerState:TMovementState = {
    state:'stand',
    move:{x:0,y:0}
  }
  if (!specialMovement.hit.b) {
    isSpaceDown = false
    playerState.state = 'float'
    if ((isLeftDown || isRightDown) && !playerObject.wallJumpStart) {
      if (isLeftDown && playerObject.speed.x >= -3) {
        playerState.move.x=-1
      } else if (isRightDown && playerObject.speed.x <= 3) {
        playerState.move.x=1
      }
    }

  } else {
    if ((isLeftDown || isRightDown)) {
      if (playerObject.state != "run") {
        playerObject.count = 0
      }
      playerState.state='run'
      if (isLeftDown && playerObject.speed.x >= -3) {
        playerState.move.x=-1
      } else if (isRightDown && playerObject.speed.x <= 3) {
        playerState.move.x=1
      }
      //站立状态
    } else {
      if (playerObject.state != "stand") {
        playerObject.count = 0
      }
      playerState.state='stand'
    }
    if (isSpaceDown) {
      if (playerObject.speed.y === 0) {
        playerState.state='jump'
      }
    }
  } 

  if (isShiftDown && specialMovement.dash &&(playerObject.speed.x!==0||playerObject.speed.y!==0)) {
    playerState.state='dash'
    specialMovement.dash=false
    if (playerObject.speed.y !== 0) {
      playerState.move.y=1
    }
    if (isRightDown && playerObject.speed.x <= 3) {
      playerState.move.x=1
    } else if (isLeftDown && playerObject.speed.x >= -3) {
      playerState.move.x=-1
    }
  }

  return playerState
}
