import * as PIXI from "pixi.js";
import { keyboard } from "@game/control/keyboard";
import { adventurerObject } from "@game/static/playerObject";
import { BlockLists, TrapBlockLists, MoveBlockLists } from '@game/blockLists/blockLists';
import { BlockObjectLists,  TrapBlockObjectLists } from "@game/objectLists/StaticObjectLists";
import { PlayerMovement } from "@game/action/gameObjectMovements";
import { allPicture } from "@game/static/gamePictures";
import { GroundPosition } from "@game/static/blocksSize"
import { ICollisionState } from "@game/types/global";
import { MoveBlockObjectLists } from "@game/objectLists/MoveObjectList";

export const initPIXI = () => {
  const Application = PIXI.Application;
  const loader = new PIXI.Loader();
  const app = new Application({
    width: GroundPosition.x,
    height: GroundPosition.y,
    transparent: false,
    antialias: true,
    resolution: 1,
  });
  const scenario = new PIXI.Container()

  let isLeftDown = false,
    isRightDown = false,
    isSpaceDown = false,
    isShiftDown = false
  let tick = 0;
  let relativePosition = {
    y: 0,
    x: 0,
  }
  app.stage.addChild(scenario)
  app.renderer.backgroundColor = 0x23395d;
  document.getElementById("game")?.appendChild(app.view);

  const setup = () => {

    let finallCollisionState: ICollisionState = {
      hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
      stickFace: { left: 0, right: 0 },
      wallJump: { left: 0, right: 0 },
      shouldSpeed: { x: 0, y: 0 },
      cross: { directionX: 0, directionY: 0 }
    }
    //玩家属性初始化
    let trapBlockLists = new TrapBlockObjectLists(TrapBlockLists, scenario)
    let blockLists = new BlockObjectLists(BlockLists, scenario)
    let moveBlockLists = new MoveBlockObjectLists(MoveBlockLists, scenario)
    let adventurer = adventurerObject.init();

    blockLists.init()
    trapBlockLists.init()
    moveBlockLists.init()

    scenario.addChild(adventurer);
    app.renderer.render(app.stage);



    const update = () => {
      tick += 1
      const state = PlayerMovement({
        playerObject: adventurerObject,
        isLeftDown: isLeftDown,
        isRightDown: isRightDown,
        isSpaceDown: isSpaceDown,
        isShiftDown: isShiftDown
      })
      moveBlockLists.updateMovement(tick)
      const collisionUpdate = (tick: number, state: string) => {
        finallCollisionState = {
          hitFace: { x: { left: 0, right: 0 }, y: { top: 0, bottom: 0 } },
          stickFace: { left: 0, right: 0 },
          wallJump: { left: 0, right: 0 },
          shouldSpeed: { x: 0, y: 0 },
          cross: { directionX: 0, directionY: 0 }
        }
        moveBlockLists.update(tick)
        blockLists.update(tick)
        trapBlockLists.update(tick)

        blockLists.updateCollisionBox_Block(
          adventurerObject,
          isLeftDown,
          isRightDown,
          isSpaceDown)
        moveBlockLists.updateCollisionBox_Block(
          adventurerObject,
          isLeftDown,
          isRightDown,
          isSpaceDown)
        trapBlockLists.updateCollisionBox_TrapBlock(
          adventurerObject
        )
        const allCollisionState = [blockLists.collisionState, moveBlockLists.collisionState]
        allCollisionState.map(item => {
          finallCollisionState.hitFace.x.left += item.hitFace.x.left
          finallCollisionState.hitFace.x.right += item.hitFace.x.right
          finallCollisionState.hitFace.y.top += item.hitFace.y.top
          finallCollisionState.hitFace.y.bottom += item.hitFace.y.bottom
          finallCollisionState.stickFace.left += item.stickFace.left
          finallCollisionState.stickFace.right += item.stickFace.right
          finallCollisionState.wallJump.left += item.wallJump.left
          finallCollisionState.wallJump.right += item.wallJump.right
          finallCollisionState.shouldSpeed.x += item.shouldSpeed.x
          finallCollisionState.shouldSpeed.y += item.shouldSpeed.y
          finallCollisionState.cross.directionX += item.cross.directionX
          finallCollisionState.cross.directionY += item.cross.directionY
        })
        const moveObjects = moveBlockLists.moveObjects
        adventurerObject.updateMoveObject(moveObjects)
        adventurerObject.updateMovement(tick, state, finallCollisionState)
        adventurerObject.updateCross(finallCollisionState.cross, finallCollisionState.shouldSpeed)
      }
      const cameraMoveFollow = () => {
        relativePosition = adventurerObject.updateRelativePosition()
        scenario.x = -(relativePosition.x - GroundPosition.x / 2)
        scenario.y = -(relativePosition.y - GroundPosition.y / 2 - 100)
        isSpaceDown = false
      }

      collisionUpdate(tick, state)
      cameraMoveFollow()
    }


    const draw = (fps: number) => {
      let fpsDisplay = document.querySelector('#fpsDisplay');
      if (fpsDisplay) {
        fpsDisplay.textContent = Math.round(fps) + ' FPS';
      }
    }
    const control = () => {
      let left = keyboard(37),
        right = keyboard(39),
        space = keyboard(32),
        shift = keyboard(16);
      right.press = () => {
        isRightDown = true;
      };
      right.release = () => {
        isRightDown = false
      };
      left.press = () => {
        isLeftDown = true
      };
      left.release = () => {
        isLeftDown = false
      };
      space.press = () => {
        isSpaceDown = true
      };
      space.release = () => {
        isSpaceDown = false
      };
      shift.press = () => {
        isShiftDown = true
      };
      shift.release = () => {
        isShiftDown = false
      }
    }
    control()


    let fps = 60,
      lastFrameTimeMs = 0,
      timestep = 1000 / 144,
      framesThisSecond = 0,
      lastFpsUpdate = 0,
      delta = 0;
    const gameLoop = (timestamp: number) => {
      delta += timestamp - lastFrameTimeMs;
      lastFrameTimeMs = timestamp;
      while (delta >= 1000 / fps) {
        update();
        delta -= timestep;
      }
      if (timestamp > lastFpsUpdate + 1000) {
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;
        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
        draw(fps)
      }
      framesThisSecond++;
      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop)
  }

  loader
    .add(allPicture)
    .load(setup)
}

