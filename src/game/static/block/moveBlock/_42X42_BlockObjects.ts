import {_42X42_BlockSize} from "@game/static//blocksSize"
import {
    _42X42_MoveBlockPicture
  } from "@game/static//gamePictures";
import { _42X42_MoveBlockFrames } from "@game/static/gameFrame";
import { trace } from "console";
   
import { blockObjectsFunc } from "./func";
import { blockTrace } from "./trace";
  
  
  
  
  
  
  //1/4方块
  const blockObjectsList: number[][] = [
    [_42X42_BlockSize.width*-15,_42X42_BlockSize.height*3],
    [_42X42_BlockSize.width*-15,_42X42_BlockSize.height*4],
    [_42X42_BlockSize.width*-15,_42X42_BlockSize.height*5],
    [_42X42_BlockSize.width*-14,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*-13,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*-12,_42X42_BlockSize.height*9],
  ]
  
  
  export const _42X42_MoveBlockObjects = blockObjectsFunc(
    blockObjectsList,
    _42X42_MoveBlockPicture,
    _42X42_MoveBlockFrames,
    _42X42_BlockSize,
    blockTrace
  );