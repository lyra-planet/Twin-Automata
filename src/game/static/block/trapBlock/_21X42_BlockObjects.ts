import {_21X42_BlockSize} from "@game/static/blocksSize"
import { _21X42_TrapBlockFrames } from "@game/static/gameFrame";
import {
    _21X42_TrapBlockPicture
  } from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  const blockObjectsList: number[][]= [
  ]

  
  
  export const _21X42_TrapBlockObjects =  blockObjectsFunc(blockObjectsList,_21X42_TrapBlockPicture,_21X42_TrapBlockFrames,_21X42_BlockSize);
