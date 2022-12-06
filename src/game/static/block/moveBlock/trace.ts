import { TBlockMoveMentTrace } from "@game/types/action";

export const blockTrace: TBlockMoveMentTrace = {
    trace: [
      { x: -100, y: 0, duration: 200 },
      { x: 100, y: 0, duration: 200 },
      { x: -100, y: 0, duration: 200 },
      { x: 100, y: 0, duration: 200 },
      { x: -100, y: 0, duration: 200 },
      { x: 100, y: 0, duration: 200 },
    ],
    playStatus:"infinite",
};

export const upDownTrace:TBlockMoveMentTrace ={
    trace: [
        { x: 100, y: 0, duration: 200 },
        { x: 100, y: -100, duration: 200 },
        { x: 100, y: 0, duration: 200 },
        { x: 100, y: -100, duration: 200 },
        { x: 100, y: 0, duration: 200 },
        { x: 100, y: -100, duration: 200 },
      ],
      playStatus:"infinite",
}