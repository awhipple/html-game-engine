import Sprite from "../engine/Sprite.js";

export default class Player {
  constructor(engine) {
    this.x = engine.window.width/2;
    this.y = engine.window.height/2;

    this.sprite = new Sprite(engine.images.get('ball'), this.x, this.y, 50, 50);
    engine.register(this.sprite);

    engine.onKeyDown((event) => {
      switch(event.key) {
        case "left":
          this.x -= 10;
          break;
        case "right":
          this.x += 10;
          break;
        case "up":
          this.y -= 10;
          break;
        case "down":
          this.y += 10;
          break;
      }
    });
  }

  update(engine) {
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}