import GameEngine from './engine/GameEngine.js';

import { Rectangle } from './engine/shapes/index.js';
import Sprite from './engine/Sprite.js';

window.onload = function() {
  var engine = new GameEngine(800, 800);
  engine.images.preload("ball");

  engine.load().then(() => {
    var rect = new Rectangle(0, 400, 10, 10, "#f00");
    engine.register(rect);
  
    var sprite = new Sprite(engine.images.get('ball'), 100, 100, 100, 100);
    engine.register(sprite);
  
    engine.update(() => {
      rect.x++;
      if(rect.x == engine.window.width) rect.x = 0;
    });
  });
}