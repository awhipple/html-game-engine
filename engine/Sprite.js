export default class Sprite {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w || img.width;
    this.h = h || img.height;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x-this.w/2, this.y-this.h/2, this.w, this.h);
  }
}