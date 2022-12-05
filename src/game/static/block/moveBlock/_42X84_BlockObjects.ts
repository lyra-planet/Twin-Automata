
import { _42X84_BlockSize } from "@game/static/blocksSize";
import { _42X84_MoveBlockFrames } from "@game/static/gameFrame";
import {
  _42X84_MoveBlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//竖直半方块
const blockObjectsList: number[][] = [
];
export const _42X84_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X84_MoveBlockPicture,
  _42X84_MoveBlockFrames,
  _42X84_BlockSize
);
