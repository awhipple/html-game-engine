import Sprite from '../engine/Sprite.js';

export default class Ball {
  constructor(engine) {
    this.x = Math.random()*(engine.window.width-50)+25;
    this.y = Math.random()*(engine.window.height-50)+25;
    this.xv = Math.random()*10-5;
    this.yv = Math.random()*10-5;

    this.sprite = new Sprite(engine.images.get('ball'), this.x, this.y, 50, 50);
    engine.register(this.sprite);
  }

  update(engine) {
    this.x += this.xv;
    this.y += this.yv;

    this.yv += 0.1;

    if (
      (this.xv < 0 && this.x < 25) ||
      (this.xv > 0 && this.x > engine.window.width-25)
    ) {
      this.xv *= -1;
    }
    if (
      (this.yv < 0 && this.y < 25) ||
      (this.yv > 0 && this.y > engine.window.height-25)
    ) {
      this.yv *= -0.9;
    }

    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}