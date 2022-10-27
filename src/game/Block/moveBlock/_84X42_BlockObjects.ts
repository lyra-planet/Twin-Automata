/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-25 00:21:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 00:03:39
 * @FilePath: \vite-project\src\game\Block\normalBlock\_84X42_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _84X42_BlockSize } from "../../static/blocksSize";
import {
  _84X42_MoveBlockFrames,
  _84X42_MoveBlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//横躺半方块
const blockObjectsList: number[][] = [

];

export const _84X42_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _84X42_MoveBlockPicture,
  _84X42_MoveBlockFrames,
  _84X42_BlockSize
);
