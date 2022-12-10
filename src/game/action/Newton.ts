import { NewtonLawsOfMotionData } from '@game/types/action';

export const NewtonLawsOfMotion = (
  {
    speed,fa, direction, stop,hitFace
  }:NewtonLawsOfMotionData
  ) => {
    let g=0.2
  if (stop) {
    if (direction > 0) {
      if (speed.x > 0.1) {
        speed.x = speed.x + -fa;
      } else {
        speed.x = 0;
      }
    } else if (direction < 0) {
      if (speed.x < -0.1) {
        speed.x = speed.x + fa;
      } else {
        speed.x = 0;
      }
    }
  }
  if(!hitFace.x.right){
      speed.y +=g / 2;
  }

}
