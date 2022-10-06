import * as PIXI from 'pixi.js'

interface CharacterAnimationData{
  character:PIXI.Sprite,
  characterTexture:PIXI.Texture<PIXI.Resource>,
  characterFrames:{
    [key: string]: number[][];
  },
  state:string,
  count:number,
  tick:number,
  characterActionspeed:number,
  animationStop:number
}


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