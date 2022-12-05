
import { _21X42_BlockSize } from "@game/static/blocksSize";
import {
  _21X42_MoveBlockPicture,
} from "@game/static//gamePictures";
import { blockObjectsFunc } from "./func";
import { _21X42_MoveBlockFrames } from "@game/static/gameFrame";

//1/4方块
const blockObjectsList: number[][] = [
  // [_21X42_BlockSize.width*10,_21X42_BlockSize.height*9],
  // [_21X42_BlockSize.width*7,_21X42_BlockSize.height*7],
  // [_21X42_BlockSize.width*3,_21X42_BlockSize.height*3],
  // [_21X42_BlockSize.width*9,_21X42_BlockSize.height*3],
];

export const _21X42_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _21X42_MoveBlockPicture,
  _21X42_MoveBlockFrames,
  _21X42_BlockSize
);
