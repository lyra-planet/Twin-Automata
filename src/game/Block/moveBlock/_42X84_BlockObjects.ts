/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-25 00:01:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 00:03:34
 * @FilePath: \vite-project\src\game\Block\normalBlock\_42X84_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _42X84_BlockSize } from "../../static/blocksSize";
import {
  _42X84_MoveBlockFrames,
  _42X84_MoveBlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//竖直半方块
const blockObjectsList: number[][] = [
];
export const _42X84_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X84_MoveBlockPicture,
  _42X84_MoveBlockFrames,
  _42X84_BlockSize
);
