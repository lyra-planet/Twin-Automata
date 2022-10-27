import { _21X21_BlockSize } from "../../static/blocksSize";
import {
  _21X21_TrapBlockFrames,
  _21X21_TrapBlockPicture,
} from "../../static/gamePictures";

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
