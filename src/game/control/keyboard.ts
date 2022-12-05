interface Event{
  preventDefault(): unknown;
  keyCode:number
}


export const keyboard = (keyCode:number) => {
  let key = {
    code : keyCode,
    isDown : false,
    isUp : true,
    press : ()=>{},
    release : ()=>{},
    downHandler : (event:Event) => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    },
    upHandler : (event:Event) => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    },
  };


  window.addEventListener("keydown", key.downHandler.bind(key), false);
  window.addEventListener("keyup", key.upHandler.bind(key), false);
  return key;
};
