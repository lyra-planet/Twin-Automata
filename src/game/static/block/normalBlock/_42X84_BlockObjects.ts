
import { _42X84_BlockSize } from "@game/static/blocksSize";
import { _42X84_BlockFrames } from "@game/static/gameFrame";
import {
  _42X84_BlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//竖直半方块
const blockObjectsList = [
  [_42X84_BlockSize.width * 4, _42X84_BlockSize.height * 10],
];
export const _42X84_BlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X84_BlockPicture,
  _42X84_BlockFrames,
  _42X84_BlockSize
);