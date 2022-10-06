import {_84X84_BlockSize} from '../../static/blocksSize'
import {
  _84X84_TrapBlockFrames,
  _84X84_TrapBlockPicture
} from "../../static/gamePictures";
import { blockObjectsFunc } from './func';






const blockObjectsList = [
  // [_84X84_BlockSize.width,_84X84_BlockSize.height]
]

export const _84X84_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_84X84_TrapBlockPicture,_84X84_TrapBlockFrames,_84X84_BlockSize);
