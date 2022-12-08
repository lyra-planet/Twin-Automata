import {_42X42_BlockSize} from "@game/static/blocksSize"
import { _42X42_DashBlockFrames } from "@game/static/gameFrame";
import {
  _42X42_DashBlockPicture,
  } from "@game/static/gamePictures";

import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  const blockObjectsList: number[][] = [
    [_42X42_BlockSize.width*20,_42X42_BlockSize.height*11],
  ]

  
  export const _42X42_DashBlockObjects = blockObjectsFunc(blockObjectsList,_42X42_DashBlockPicture,_42X42_DashBlockFrames,_42X42_BlockSize);