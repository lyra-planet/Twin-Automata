import {_42X42_BlockSize} from "@game/static/blocksSize"
import { _42X42_TrapBlockFrames } from "@game/static/gameFrame";
import {
    _42X42_TrapBlockPicture
  } from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  const blockObjectsList: number[][] = [
  ]

  
  export const _42X42_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_42X42_TrapBlockPicture,_42X42_TrapBlockFrames,_42X42_BlockSize);