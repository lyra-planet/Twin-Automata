import {_42X84_BlockSize} from "@game/static/blocksSize"
import { _42X84_TrapBlockFrames } from "@game/static/gameFrame";
import {
    _42X84_TrapBlockPicture
  } from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";
  






  const blockObjectsList : number[][]= [
  ]

  export const _42X84_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_42X84_TrapBlockPicture,_42X84_TrapBlockFrames,_42X84_BlockSize);