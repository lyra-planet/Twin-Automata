import { IPlayer } from "@game/types/gameObjects"

export type TMovementState = {
    state:'stand'|'jump'|'float'|'dash'|'run',
    move:{x:number,y:number}
}


export const movementState=(state:TMovementState,player:IPlayer)=>{
    switch(state.state){
        case 'stand':
            player.stop = 1
            player.actionSpeed = 30
            player.fa = 0.1
            player.actionStop = 0
        break
        case 'float':
            player.actionSpeed = 20
            player.fa = 0.08
            if (player.count === 5) {
                player.actionStop = 1
                player.count = 5
              }
            switch(state.move.x){
                case 1:
                    player.speed.x = 3
                    player.direction = 1
                    player.scale.x = 2
                break
                case -1:
                    player.speed.x = -3
                    player.direction = -1
                    player.scale.x = -2
                break
            }
        break
        case 'jump':
            player.speed.y = -5
            if (player.count === 5) {
                player.actionStop = 1
                player.count = 5
              }
        break
        case 'run':
            player.fa = 0.1
            player.actionStop = 0
            player.actionSpeed = 15
            switch(state.move.x){
                case 1:
                    player.speed.x = 3
                    player.direction = 1
                    player.scale.x = 2
                break
                case -1:
                    player.speed.x = -3
                    player.direction = -1
                    player.scale.x = -2
                break
            }
        break
        case 'dash':
            switch(state.move.x){
                case 1:
                    player.speed.x = 6
                    player.direction = 1
                    player.scale.x = 2
                break
                case -1:
                    player.speed.x = -6
                    player.direction = -1
                    player.scale.x = -2
                break
            }
            switch(state.move.y){
                case 1:
                    player.speed.y = -6
                break
                case -1:
                    player.speed.y = 6
                break
            }
        break
        default:console.log("ERROR")
        break
    }
}