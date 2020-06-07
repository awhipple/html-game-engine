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
    setInterval(gameLoop, 1000/60);
  }

  load() {
    return this.images.load();
  }
}