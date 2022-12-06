import { PlayerMovementData } from '@game/types/action';
import { movementState, TMovementState } from './movementState';

let sprint = false
export const PlayerMovement = ({
  playerObject,
  isLeftDown, isRightDown, isSpaceDown, isShiftDown
}: PlayerMovementData
) => {
  const round = Math.round
  let state = "stand"
  let playerState:TMovementState = {
    state:'stand',
    move:{x:0,y:0}
  }
  if (round(playerObject.speed.y) !== 0) {
    isSpaceDown = false
    state = "jump"
    playerState.state = 'float'
    if ((isLeftDown || isRightDown) && !playerObject.wallJumpStart) {
      if (isLeftDown && playerObject.speed.x >= -3) {
        playerState.move.x=-1
      } else if (isRightDown && playerObject.speed.x <= 3) {
        playerState.move.x=1
      }
    }
  } else {
    sprint = true
    if ((isLeftDown || isRightDown)) {
      if (playerObject.state != "run") {
        playerObject.count = 0
      }
      state = "run"
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
      state = "stand"
      playerState.state='stand'
    }
    if (isSpaceDown) {
      if (playerObject.speed.y === 0) {
        playerState.state='jump'
      }
    }
  } 
  if (isShiftDown && sprint) {
    playerState.state='dash'
    if (playerObject.speed.y !== 0) {
      playerState.move.y=1
    }
    if (isRightDown && playerObject.speed.x <= 3) {
      playerState.move.x=1
    } else if (isLeftDown && playerObject.speed.x >= -3) {
      playerState.move.x=-1
    }
    sprint = false
  }
  movementState(playerState,playerObject)
  return state
}
