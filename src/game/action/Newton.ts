import { GroundPosition } from '../static/blocksSize';
interface NewtonLawsOfMotionData{
  position: { x: number; y: number; width: number; height: number; };
  speed: { x: number; y: number; };
  fa:number;
  direction: number;
  stop: number;
  groundPosition: number;

}



export const NewtonLawsOfMotion = (
  {
    position,speed,fa, direction, stop, groundPosition
  }:NewtonLawsOfMotionData
  
  ) => {
  const round = Math.round
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
  if(position.y+speed.y<=groundPosition){
    speed.y +=g / 2;
  }else{
    speed.y = 0;
  }
};
