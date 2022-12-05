
import { _84X42_BlockSize } from "@game/static/blocksSize";
import { _84X42_BlockFrames } from "@game/static/gameFrame";
import {
  _84X42_BlockPicture,
} from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";

//横躺半方块
const blockObjectsList = [
  [_84X42_BlockSize.width, _84X42_BlockSize.height * 6],
];

export const _84X42_BlockObjects =blockObjectsFunc(
  blockObjectsList,
  _84X42_BlockPicture,
  _84X42_BlockFrames,
  _84X42_BlockSize
);