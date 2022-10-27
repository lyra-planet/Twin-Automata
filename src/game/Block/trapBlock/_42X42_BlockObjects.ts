import {_42X42_BlockSize} from "../../static/blocksSize"
import {
    _42X42_TrapBlockFrames,
    _42X42_TrapBlockPicture
  } from "../../static/gamePictures";

import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  const blockObjectsList: number[][] = [
  ]

  
  export const _42X42_TrapBlockObjects = blockObjectsFunc(blockObjectsList,_42X42_TrapBlockPicture,_42X42_TrapBlockFrames,_42X42_BlockSize);