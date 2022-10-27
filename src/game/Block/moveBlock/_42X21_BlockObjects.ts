/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-26 00:10:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 00:04:56
 * @FilePath: \vite-project\src\game\Block\normalBlock\_42X21_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-26 00:10:09
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 23:13:03
 * @FilePath: \vite-project\src\game\Block\normalBlock\_42X21_BlockObjects.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { _42X21_BlockSize } from "../../static/blocksSize";
import {
  _42X21_MoveBlockFrames,
  _42X21_MoveBlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//1/4方块
const blockObjectsList: number[][] = [
  
];

export const _42X21_MoveBlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X21_MoveBlockPicture,
  _42X21_MoveBlockFrames,
  _42X21_BlockSize
);
