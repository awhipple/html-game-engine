import GameEngine from './engine/GameEngine.js';

import Ball from './gameObjects/Ball.js';

window.onload = function() {
  var engine = new GameEngine(800, 800);
  engine.images.preload(["ball"]);

  engine.load().then(() => {
    var balls = [];
    for(var i = 0; i < 100; i++) {
      var ball = new Ball(engine);
      balls.push(ball);
    }

    engine.update(() => {
      for(var i = 0; i < balls.length; i++) {
        balls[i].update(engine);
      }
    });
  });
}