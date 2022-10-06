import {_42X42_BlockSize} from "../../static/blocksSize"
import {
    _42X42_BlockFrames,
    _42X42_BlockPicture
  } from "../../static/gamePictures";
   
import { blockObjectsFunc } from "./func";
  
  
  
  
  
  
  //1/4方块
  const blockObjectsList = [
    [_42X42_BlockSize.width*10,_42X42_BlockSize.height*9],
    [_42X42_BlockSize.width*7,_42X42_BlockSize.height*7],
    [_42X42_BlockSize.width*3,_42X42_BlockSize.height*3],
    [_42X42_BlockSize.width*9,_42X42_BlockSize.height*3],
    [_42X42_BlockSize.width*20,_42X42_BlockSize.height*2],
    [_42X42_BlockSize.width*21,_42X42_BlockSize.height*4],
    [_42X42_BlockSize.width*22,_42X42_BlockSize.height*6],
    [_42X42_BlockSize.width*23,_42X42_BlockSize.height*8],
  ]
  
  
  export const _42X42_BlockObjects = blockObjectsFunc(
    blockObjectsList,
    _42X42_BlockPicture,
    _42X42_BlockFrames,
    _42X42_BlockSize
  );