import {_42X21_BlockSize} from "@game/static/blocksSize"
import { _42X21_TrapBlockFrames } from "@game/static/gameFrame";
import {
    _42X21_TrapBlockPicture
  } from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  const blockObjectsList: number[][] = [
  ]

  
  
  export const _42X21_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_42X21_TrapBlockPicture,_42X21_TrapBlockFrames,_42X21_BlockSize);