class Coins extends DrawableObject {
  coinanimation = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];
  constructor() {
    super();
    this.loadImages(this.coinanimation);
    this.x = 500 + Math.random() * 700;
    this.y = 350 + Math.random();
    setInterval(() => {
      this.playAnimation(this.coinanimation);
    }, 400);
  }
}