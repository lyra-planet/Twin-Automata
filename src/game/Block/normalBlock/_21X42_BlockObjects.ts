/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-26 00:10:10
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 23:12:34
 * @FilePath: \vite-project\src\game\Block\normalBlock\_21X42_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {_21X42_BlockSize} from "../../static/blocksSize"
import {
    _21X42_BlockFrames,
    _21X42_BlockPicture
  } from "../../static/gamePictures";
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
