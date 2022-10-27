import { _21X21_BlockSize } from "../../static/blocksSize";
import {
  _21X21_MoveBlockFrames,
  _21X21_MoveBlockPicture,
} from "../../static/gamePictures";
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
