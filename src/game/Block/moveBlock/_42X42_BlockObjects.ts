import {_42X42_BlockSize} from "../../static/blocksSize"
import {
    _42X42_MoveBlockFrames,
    _42X42_MoveBlockPicture
  } from "../../static/gamePictures";
   
import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  //1/4方块
  const blockObjectsList: number[][] = [
    
    [_42X42_BlockSize.width*-1 ,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*0,_42X42_BlockSize.height*3],
    [_42X42_BlockSize.width*0,_42X42_BlockSize.height*4],
    [_42X42_BlockSize.width*2,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*0,_42X42_BlockSize.height*5],
    [_42X42_BlockSize.width*0,_42X42_BlockSize.height*6],
    [_42X42_BlockSize.width*0,_42X42_BlockSize.height*7],
    [_42X42_BlockSize.width*3,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*10,_42X42_BlockSize.height*9],
  ]
  
  
  export const _42X42_MoveBlockObjects = blockObjectsFunc(
    blockObjectsList,
    _42X42_MoveBlockPicture,
    _42X42_MoveBlockFrames,
    _42X42_BlockSize
  );