
import { _42X21_BlockSize } from "@game/static/blocksSize";
import { _42X21_MoveBlockFrames } from "@game/static/gameFrame";
import {
  _42X21_MoveBlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";
import { blockTrace } from "./trace";

//1/4方块
const blockObjectsList: number[][] = [
  
];

export const _42X21_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X21_MoveBlockPicture,
  _42X21_MoveBlockFrames,
  _42X21_BlockSize,
  blockTrace
);
