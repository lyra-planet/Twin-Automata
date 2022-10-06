/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-26 00:10:09
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 23:13:39
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
  _42X21_BlockFrames,
  _42X21_BlockPicture,
} from "../../static/gamePictures";
import { blockObjectsFunc } from "./func";

//1/4方块
const blockObjectsList = [
  [_42X21_BlockSize.width * 10, _42X21_BlockSize.height * 9],
  [_42X21_BlockSize.width * 7, _42X21_BlockSize.height * 7],
  [_42X21_BlockSize.width * 3, _42X21_BlockSize.height * 3],
  [_42X21_BlockSize.width * 9, _42X21_BlockSize.height * 3],
  [_42X21_BlockSize.width * 20, _42X21_BlockSize.height * 2],
  [_42X21_BlockSize.width * 21, _42X21_BlockSize.height * 4],
  [_42X21_BlockSize.width * 22, _42X21_BlockSize.height * 6],
  [_42X21_BlockSize.width * 23, _42X21_BlockSize.height * 8],
];

export const _42X21_BlockObjects = blockObjectsFunc(
  blockObjectsList,
  _42X21_BlockPicture,
  _42X21_BlockFrames,
  _42X21_BlockSize
);
