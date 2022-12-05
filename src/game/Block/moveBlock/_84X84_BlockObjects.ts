/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-24 16:03:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 23:20:59
 * @FilePath: \vite-project\src\game\Block\normalBlock\_84X84_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  _84X84_MoveBlockFrames,
  _84X84_MoveBlockPicture,
} from "../../static/gamePictures";

import { _84X84_BlockSize } from "../../static/blocksSize";
import { blockObjectsFunc } from "./func";

//全方块
const blockObjectsList: number[][] = [[_84X84_BlockSize.width * -3, 0],[_84X84_BlockSize.width * -4, 0],[_84X84_BlockSize.width * -5, 0]];

export const _84X84_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _84X84_MoveBlockPicture,
  _84X84_MoveBlockFrames,
  _84X84_BlockSize
);
