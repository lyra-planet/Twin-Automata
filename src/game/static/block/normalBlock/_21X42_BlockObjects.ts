
import {_21X42_BlockSize} from "@game/static/blocksSize"
import { _21X42_BlockFrames } from "@game/static/gameFrame";
import {
    _21X42_BlockPicture
  } from "@game/static/gamePictures";
import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  //1/4方块
  const blockObjectsList = [
    [_21X42_BlockSize.width*10,_21X42_BlockSize.height*9],
    [_21X42_BlockSize.width*7,_21X42_BlockSize.height*7],
    [_21X42_BlockSize.width*3,_21X42_BlockSize.height*3],
    [_21X42_BlockSize.width*9,_21X42_BlockSize.height*3],
    [_21X42_BlockSize.width*20,_21X42_BlockSize.height*2],
    [_21X42_BlockSize.width*21,_21X42_BlockSize.height*4],
    [_21X42_BlockSize.width*22,_21X42_BlockSize.height*6],
    [_21X42_BlockSize.width*23,_21X42_BlockSize.height*8],
  ]

  
  
  export const _21X42_BlockObjects = blockObjectsFunc(blockObjectsList,_21X42_BlockPicture,_21X42_BlockFrames,_21X42_BlockSize);
