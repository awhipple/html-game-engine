export default class GameWindow {
  constructor(width, height, canvasId) {
    this.width = width;
    this.height = height;
    
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");

    this.objects = [];

    this.img = new Image();
    this.img.src = "./images/ball.png";

    requestAnimationFrame(() => this.draw());
  }

  register(object) {
    this.objects.push(object);
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    this.ctx.save();
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, this.width, this.height);
    for(var i = 0; i < this.objects.length; i++) {
      this.objects[i].draw(this.ctx);
    }
    this.ctx.restore();
  }
}