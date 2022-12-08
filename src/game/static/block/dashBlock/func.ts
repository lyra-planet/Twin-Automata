import { Block, SpecialBlock } from "@game/gameObjects/gameObjects";
import { ISpecialBlock } from "@game/types/gameObjects";
import { IGameObjectFrame, ISize } from "@game/types/global";
export const blockObjectsFunc = (
  List: Array<number[]>,
    blockPicture: string,
    blockFrames: IGameObjectFrame,
    blockSize:ISize
) => {
  let blockObjects: ISpecialBlock[] = [];
  List.forEach((blockObject: number[]) => {
    blockObjects.push(
      new SpecialBlock({
        imageSrc: blockPicture,
        gameObjectFrame: blockFrames,
        state: "static",
        frame: 0,
        actionSpeed: 30,
        actionStop: 0,
        position:{x: blockObject[0],y: blockObject[1],},
        size:blockSize,
      })
    );
  });
  return blockObjects;
};
