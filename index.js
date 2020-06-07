import GameEngine from './engine/GameEngine.js';

import Player from './gameObjects/Player.js';

window.onload = function() {
  var engine = new GameEngine(800, 800);
  engine.images.preload(["ball", "player"]);

  engine.load().then(() => {
    var player = new Player(engine);

    engine.update(() => {
      player.update(engine);
    });
  });
}