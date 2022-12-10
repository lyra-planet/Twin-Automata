
import { _42X21_BlockSize } from "@game/static/blocksSize";
import { _42X21_BlockFrames } from "@game/static/gameFrame";
import {
  _42X21_BlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//1/4方块
const blockObjectsList: number[][] = [
  // [_42X21_BlockSize.width * 10, _42X21_BlockSize.height * 9],
  // [_42X21_BlockSize.width * 7, _42X21_BlockSize.height * 7],
  // [_42X21_BlockSize.width * 3, _42X21_BlockSize.height * 3],
  // [_42X21_BlockSize.width * 9, _42X21_BlockSize.height * 3],
  // [_42X21_BlockSize.width * 20, _42X21_BlockSize.height * 2],
  // [_42X21_BlockSize.width * 21, _42X21_BlockSize.height * 4],
  // [_42X21_BlockSize.width * 22, _42X21_BlockSize.height * 6],
  // [_42X21_BlockSize.width * 23, _42X21_BlockSize.height * 8],
];

export const _42X21_BlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X21_BlockPicture,
  _42X21_BlockFrames,
  _42X21_BlockSize
);
