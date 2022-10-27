/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-26 00:10:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 11:09:56
 * @FilePath: \vite-project\src\game\Block\normalBlock\_21X42_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _21X42_BlockSize } from "../../static/blocksSize";
import {
  _21X42_MoveBlockFrames,
  _21X42_MoveBlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//1/4方块
const blockObjectsList: number[][] = [
  // [_21X42_BlockSize.width*10,_21X42_BlockSize.height*9],
  // [_21X42_BlockSize.width*7,_21X42_BlockSize.height*7],
  // [_21X42_BlockSize.width*3,_21X42_BlockSize.height*3],
  // [_21X42_BlockSize.width*9,_21X42_BlockSize.height*3],
];

export const _21X42_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _21X42_MoveBlockPicture,
  _21X42_MoveBlockFrames,
  _21X42_BlockSize
);
