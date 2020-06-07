export default class GameWindow {
  constructor(canvasId) {
    this.ctx = document.getElementById(canvasId).getContext("2d");

    this.objects = [];

    requestAnimationFrame(() => this.draw());
  }

  register(object) {
    this.objects.push(object);
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.ctx.save();
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, 500, 500);
    for(var i = 0; i < this.objects.length; i++) {
      this.objects[i].draw(this.ctx);
    }
    this.ctx.restore();
  }
}