import GameWindow from './GameWindow.js';
import ImageLibrary from './ImageLibrary.js';
import KeyNames from './input/KeyNames.js';

export default class GameEngine {
  constructor(width, height, canvasId = "gameCanvas") {
    this.window = new GameWindow(width, height, canvasId);
    this.images = new ImageLibrary();

    this.keyDownCallbacks = [];
    this.pressedKeys = {};
    document.addEventListener('keydown', (event) => {
      var key = KeyNames[event.keyCode] || event.keyCode;
      this.pressedKeys[key] = true;
    });
    document.addEventListener('keyup', (event) => {
      var key = KeyNames[event.keyCode] || event.keyCode;
      delete this.pressedKeys[key];
    });
  }

  register(object) {
    this.window.register(object);
  }

  update(gameLoop) {
    setInterval(() => {
      var pressedKeys = Object.keys(this.pressedKeys);
      for(var i = 0; i < this.keyDownCallbacks.length; i++) {
        for(var k = 0; k < pressedKeys.length; k++) {
          this.keyDownCallbacks[i]({key: pressedKeys[k]});
        }
      }
      gameLoop();
    }, 1000/60);
  }

  load() {
    return this.images.load();
  }

  onKeyPress(callback) {
    document.addEventListener('keydown', (event) => {
      callback({key: KeyNames[event.keyCode] || event.keyCode});
    });
  }

  onKeyDown(callback) {
    this.keyDownCallbacks.push(callback);
  }
}