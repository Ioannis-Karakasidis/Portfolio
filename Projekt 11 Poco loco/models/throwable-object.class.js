class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super();
    this.loadImage("img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width - 50;
    this.throw();
  }

  throw() {
    console.log("hello");
    this.speedY = 5;
    this.applyGravity();
    setInterval(() => {
      this.x += 5;
    }, 10);
  }
}
