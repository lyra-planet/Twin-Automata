import { _21X21_BlockSize } from "@game/static/blocksSize";
import { _21X21_MoveBlockFrames } from "@game/static/gameFrame";
import {
  _21X21_MoveBlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//1/4方块
const blockObjectsList: number[][] = [
  // [0 , _21X21_BlockSize.height * 5],
  // [0 , _21X21_BlockSize.height * 3],
];

export const _21X21_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _21X21_MoveBlockPicture,
  _21X21_MoveBlockFrames,
  _21X21_BlockSize
);
