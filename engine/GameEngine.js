import GameWindow from './gfx/GameWindow.js';
import ImageLibrary from './gfx/ImageLibrary.js';
import { KeyNames, MouseButtonNames } from './input/Enums.js';
import { Coord } from './GameMath.js';

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

    this.mousePos = new Coord(0, 0);
    this.window.canvas.addEventListener('mousemove', event => {
      this.mousePos = this.getMouseCoord(event);
    });

    this.onKeyPress(event => {
      if ( event.key == 'f' ) {
        this.window.canvas.requestFullscreen();
      }
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

  onMouseMove(callback) {
    this.window.canvas.addEventListener('mousemove', event => {
      callback({pos: this.getMouseCoord(event)});
    });
  }

  onMouseDown(callback) {
    this.window.canvas.addEventListener('mousedown', event => {
      callback({button: MouseButtonNames[event.button] || event.button});
    });
  }

  getMouseCoord(event) {
    var canvas = this.window.canvas;
    var rect = canvas.getBoundingClientRect();
    var scale = canvas.height / rect.height;
    var subX = rect.width-2 != canvas.width ? 
      (rect.width - canvas.width/scale) / 2 :
      rect.left;
    return new Coord((event.clientX - subX) * scale, (event.clientY - rect.top) * scale);
  }
}