import { _84X42_BlockSize } from "@game/static/blocksSize";
import { _84X42_MoveBlockFrames } from "@game/static/gameFrame";
import {
  _84X42_MoveBlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//横躺半方块
const blockObjectsList: number[][] = [

];

export const _84X42_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _84X42_MoveBlockPicture,
  _84X42_MoveBlockFrames,
  _84X42_BlockSize
);
