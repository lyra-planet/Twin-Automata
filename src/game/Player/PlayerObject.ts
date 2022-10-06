import {
  adventurerFrames,
  adventurePicture,
} from "../static/gamePictures";
import {ADVENTURER_SIZE,BornPosition} from "../static/blocksSize"
import { Player } from "../gameObjects/gameObjects"
export const adventurerObject = new Player({
  imageSrc:adventurePicture,
  gameObjectFrame:adventurerFrames,
  state:"stand", 
  frame:0, 
  actionSpeed:30, 
  actionStop:0,
  x:BornPosition.x,
  y:BornPosition.y,
  w:ADVENTURER_SIZE.width,
  h:ADVENTURER_SIZE.height,
  groundPosition:0,
}
  

);
