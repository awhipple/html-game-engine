import GameWindow from './GameWindow.js';
import ImageLibrary from './ImageLibrary.js';

export default class GameEngine {
  constructor(width, height, canvasId = "gameCanvas") {
    this.window = new GameWindow(width, height, canvasId);
    this.images = new ImageLibrary();
  }

  register(object) {
    this.window.register(object);
  }

  update(gameLoop) {
    var img = this.images.get("ball");
    img.onload = () => setInterval(gameLoop, 1000/60);
  }

  load() {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }
}