/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-25 00:21:58
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 23:14:31
 * @FilePath: \vite-project\src\game\Block\normalBlock\_84X42_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _84X42_BlockSize } from "../../static/blocksSize";
import {
  _84X42_BlockFrames,
  _84X42_BlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//横躺半方块
const blockObjectsList = [
  [_84X42_BlockSize.width, _84X42_BlockSize.height * 6],
];

export const _84X42_BlockObjects =blockObjectsFunc(
  blockObjectsList,
  _84X42_BlockPicture,
  _84X42_BlockFrames,
  _84X42_BlockSize
);