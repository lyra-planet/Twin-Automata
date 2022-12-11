import { NewtonLawsOfMotionData } from '@game/types/action';

export const NewtonLawsOfMotion = (
  {
    speed,fa, direction, stop,hitFace,rotation
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
  /**----------------------
   *    G R
   *------------------------**/

  switch(rotation){
    case 0 :
      if(!hitFace.y.bottom){
        speed.y +=g / 2;
      }
    break
    case 1 :
      if(!hitFace.x.right){
        speed.y +=g / 2;
      }
    break
    case 2 :
      if(!hitFace.y.top){
        speed.y +=g / 2;
      }
    break
    case 3 :
      if(!hitFace.x.left){
        speed.y +=g / 2;
      }
    break
    default:console.log("ERROR")
  }
}
