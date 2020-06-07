export default class ImageLibrary {
  constructor(path = "./images/") {
    this.path = path;
    this.images = {};
  }

  loadImage(name) {
    var img = new Image;
    img.src = this.path + name + ".png";
    return this.images[name] = img;
  }

  get(name) {
    return this.images[name] || this.loadImage(name);
  }

  preload(name) {
    
  }
}