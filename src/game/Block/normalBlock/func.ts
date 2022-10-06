/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-30 23:04:36
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 23:11:11
 * @FilePath: \vite-project\src\game\Block\normalBlock\func.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Block } from "../../gameObjects/gameObjects";
export const blockObjectsFunc = (
  List: Array<number[]>,
    blockPicture: string,
    blockFrames: { [key: string]: number[][] },
    blockSize:{
        width:number,
        height:number
    }
) => {
  let blockObjects: Block[] = [];
  List.forEach((blockObject: number[]) => {
    blockObjects.push(
      new Block({
        imageSrc: blockPicture,
        gameObjectFrame: blockFrames,
        state: "static",
        frame: 0,
        actionSpeed: 30,
        actionStop: 0,
        x: blockObject[0],
        y: blockObject[1],
        w: blockSize.width,
        h: blockSize.height,
      })
    );
  });
  return blockObjects;
};
