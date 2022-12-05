
import {

  _84X84_BlockPicture,
} from "@game/static/gamePictures";

import { _84X84_BlockSize } from "@game/static/blocksSize";
import { blockObjectsFunc } from "./func";
import { _84X84_BlockFrames } from "@game/static/gameFrame";

//全方块
const blockObjectsList = [
  [_84X84_BlockSize.width * 6, _84X84_BlockSize.height * 5],
  [_84X84_BlockSize.width * 6, _84X84_BlockSize.height * 4],
  [_84X84_BlockSize.width * 6, _84X84_BlockSize.height * 3],
  [_84X84_BlockSize.width * 6, _84X84_BlockSize.height * 2],
  [_84X84_BlockSize.width * 8, _84X84_BlockSize.height * 5],
  [_84X84_BlockSize.width * 8, _84X84_BlockSize.height * 4],
  [_84X84_BlockSize.width * 8, _84X84_BlockSize.height * 3],
  [_84X84_BlockSize.width * 8, _84X84_BlockSize.height * 2],
  [0, 0],
  [_84X84_BlockSize.width, 0],
  [_84X84_BlockSize.width * 2, 0],
  [_84X84_BlockSize.width * 1, 0],
  [_84X84_BlockSize.width * 2, 0],
  [_84X84_BlockSize.width * 3, 0],
  [_84X84_BlockSize.width * 4, 0],
  [_84X84_BlockSize.width * 5, 0],
  [_84X84_BlockSize.width * 6, 0],
  [_84X84_BlockSize.width * 7, 0],
  [_84X84_BlockSize.width * 8, 0],
  [_84X84_BlockSize.width * 9, 0],
  [_84X84_BlockSize.width * 10, 0],
  [_84X84_BlockSize.width * 11, 0],
  [_84X84_BlockSize.width * 12, 0],
  [_84X84_BlockSize.width * 13, 0],
  [_84X84_BlockSize.width * 14, 0],
  [_84X84_BlockSize.width * 15, 0],
  [_84X84_BlockSize.width * 16, 0],
  [_84X84_BlockSize.width * 17, 0],
  [_84X84_BlockSize.width * 18, 0],
  [_84X84_BlockSize.width * 19, 0],
  [_84X84_BlockSize.width * 20, 0],
  [_84X84_BlockSize.width * -1, 0],
  [_84X84_BlockSize.width * -2, 0],
  [_84X84_BlockSize.width * -1, 0],
  [_84X84_BlockSize.width * -2, 0],
  [_84X84_BlockSize.width * -3, 0],
  [_84X84_BlockSize.width * -4, 0],
  [_84X84_BlockSize.width * -5, 0],
  [_84X84_BlockSize.width * -6, 0],
  [_84X84_BlockSize.width * -7, 0],
  [_84X84_BlockSize.width * -8, 0],
  [_84X84_BlockSize.width * -9, 0],
  [_84X84_BlockSize.width * -10, 0],
  [_84X84_BlockSize.width * -11, 0],
  [_84X84_BlockSize.width * -12, 0],
  [_84X84_BlockSize.width * -13, 0],
  [_84X84_BlockSize.width * -14, 0],
  [_84X84_BlockSize.width * -15, 0],
  [_84X84_BlockSize.width * -16, 0],
  [_84X84_BlockSize.width * -17, 0],
  [_84X84_BlockSize.width * -18, 0],
  [_84X84_BlockSize.width * -19, 0],
  [_84X84_BlockSize.width * -20, 0],
];

export const _84X84_BlockObjects = blockObjectsFunc(
  blockObjectsList,
  _84X84_BlockPicture,
  _84X84_BlockFrames,
  _84X84_BlockSize
);
