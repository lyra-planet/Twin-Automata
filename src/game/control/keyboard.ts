/*
 * @Author: 1170158548@qq.com 1170158548@qq.com
 * @Date: 2022-09-23 13:00:23
 * @LastEditors: 1170158548@qq.com 1170158548@qq.com
 * @LastEditTime: 2022-09-30 21:35:45
 * @FilePath: \vite-project\src\game\control\keyboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
