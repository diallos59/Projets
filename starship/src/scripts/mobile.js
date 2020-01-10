export default class Mobile {

  constructor(x, y, img, deltaX = 0, deltaY = 0) {
    this._x = x;
    this._y = y;
    this._deltaX = deltaX;
    this._deltaY = deltaY;
    this._img = new Image();
    this._img.src = img;
    this._hit = false;
  }

  get x() {return this._x;}
  set x(v) {return this._x = v;}
  get y() {return this._y;}
  set y(v) {return this._y = v;}
  get deltaX() {return this._deltaX;} 
  set deltaX(v) {this._deltaX = v;}
  get deltaY() {return this._deltaY;}
  set deltaY(v) {this._deltaY = v;}
  get img() {return this._img;}
  get hit() {return this._hit;}
  set hit(v) {this._hit = v;}
  get width() {return this._img.width;}
  get height() {return this._img.height;}

  draw(context) {
    context.drawImage(this.img, this.x, this.y);
  }

  move(canvas) {
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
  }

}
