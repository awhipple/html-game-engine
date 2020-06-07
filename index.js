import GameEngine from './engine/GameEngine.js';

import Ball from './gameObjects/Ball.js';
import Player from './gameObjects/Player.js';

window.onload = function() {
  var BALL_COUNT = 0;

  var engine = new GameEngine(800, 800);
  engine.images.preload(["ball"]);

  engine.load().then(() => {
    
    var balls = [];
    for(var i = 0; i < BALL_COUNT; i++) {
      var ball = new Ball(engine);
      balls.push(ball);
    }

    var player = new Player(engine);

    engine.update(() => {
      for(var i = 0; i < balls.length; i++) {
        balls[i].update(engine);
      }
      player.update(engine);
    });
  });
}