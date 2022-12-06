
import { MoveBlock } from "@game/gameObjects/gameObjects";
import { TBlockMoveMentTrace } from "@game/types/action";
import { IGameObjectFrame, ISize } from "@game/types/global";
export const blockObjectsFunc = (
  List: Array<number[]>,
  blockPicture: string,
  blockFrames: IGameObjectFrame,
  blockSize: ISize,
  trace:TBlockMoveMentTrace
) => {
  let blockObjects: MoveBlock[] = [];
  List.forEach((blockObject: number[]) => {
    blockObjects.push(
      new MoveBlock({
        imageSrc: blockPicture,
        gameObjectFrame: blockFrames,
        state: "static",
        frame: 0,
        actionSpeed: 30,
        actionStop: 0,
        size:blockSize,
        position:{x: blockObject[0],y: blockObject[1],},
        trace:trace
      })
    );
  });
  return blockObjects;
};
