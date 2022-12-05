import { _21X21_BlockSize } from "@game/static/blocksSize";
import { _21X21_TrapBlockFrames } from "@game/static/gameFrame";
import {
  _21X21_TrapBlockPicture,
} from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";

const blockObjectsList: number[][] = [
  [_21X21_BlockSize.width * 9, _21X21_BlockSize.height * 9],
];

export const _21X21_TrapBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _21X21_TrapBlockPicture,
  _21X21_TrapBlockFrames,
  _21X21_BlockSize
);
