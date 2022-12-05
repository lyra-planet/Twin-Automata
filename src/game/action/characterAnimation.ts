import { CharacterAnimationData } from '@game/types/action'
import * as PIXI from 'pixi.js'



export const characterAnimation = ({
  character,
  characterTexture,
  characterFrames,
  state,
  count,
  tick,
  characterActionspeed,
  animationStop
}:CharacterAnimationData
    )=>{
    if(!animationStop&&tick%characterActionspeed===0){
      let limitLength = characterFrames[state].length
      let characterAnimation =  characterFrames[state][count]
      let [x,y,w,h] = characterAnimation
      let rectangle = new PIXI.Rectangle(x,y,w,h);
      characterTexture.frame = rectangle; 
      character.texture = characterTexture
      count++
      if(count >= limitLength){
        return 0
      }else{
        return count
      }
    }else{
        return count
    }
  }