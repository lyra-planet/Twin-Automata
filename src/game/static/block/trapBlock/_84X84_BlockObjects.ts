import {_84X84_BlockSize} from '@game/static/blocksSize'
import { _84X84_TrapBlockFrames } from '@game/static/gameFrame';
import {
  _84X84_TrapBlockPicture
} from "@game/static/gamePictures";
import { blockObjectsFunc } from './func';






const blockObjectsList : number[][]= [
  // [_84X84_BlockSize.width,_84X84_BlockSize.height]
]

export const _84X84_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_84X84_TrapBlockPicture,_84X84_TrapBlockFrames,_84X84_BlockSize);
