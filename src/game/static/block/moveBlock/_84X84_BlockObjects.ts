import {
  _84X84_MoveBlockPicture,
} from "@game/static/gamePictures";

import { _84X84_BlockSize } from "@game/static/blocksSize";
import { blockObjectsFunc } from "./func";
import { _84X84_MoveBlockFrames } from "@game/static/gameFrame";

//全方块
const blockObjectsList: number[][] = [[_84X84_BlockSize.width * -3, 0],[_84X84_BlockSize.width * -4, 0],[_84X84_BlockSize.width * -5, 0]];

export const _84X84_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _84X84_MoveBlockPicture,
  _84X84_MoveBlockFrames,
  _84X84_BlockSize
);