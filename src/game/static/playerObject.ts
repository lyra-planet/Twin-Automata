import {
  adventurePicture,
} from "@game/static/gamePictures";
import {ADVENTURER_SIZE,BornPosition} from "@game/static/blocksSize"
import { Player } from "@game/gameObjects/gameObjects"
import { adventurerFrames } from "@game/static/gameFrame";

export const adventurerObject = new Player({
  imageSrc:adventurePicture,
  gameObjectFrame:adventurerFrames,
  state:"stand", 
  frame:0, 
  actionSpeed:30, 
  actionStop:0,
  position:BornPosition,
  groundPosition:0,
  size:ADVENTURER_SIZE
}
);
