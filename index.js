import GameWindow from './engine/GameWindow.js';
import { Rectangle } from './engine/shapes/index.js';

window.onload = function() {
  var gw = new GameWindow("gameCanvas");
  
  var rect = new Rectangle(200, 200, 10, 10, "#f00");

  setInterval(() => {
    rect.x++;
    if(rect.x == 500) rect.x = 0;
  }, 1000/60);

  gw.register(rect);
}