import imageStarShip from '../images/vaisseau-ballon-petit.png';
import MoveState from './moveState.js';
import Mobile from './mobile.js';

const DELTA_X = 0;
const DELTA_Y = 8;


export default class StarShip extends Mobile {

  constructor(x, y) {
    super(x, y, imageStarShip, DELTA_X, DELTA_Y);
    this._moving = MoveState.STILL // immobile au depart
  }

  get moving() {return this._moving;}
  set moving(v) {this._moving = v;}
  get up() {return this._moving === MoveState.UP;}
  get down() {return this._moving === MoveState.DOWN;}

  move(canvas) {
    let maxBallY = canvas.height - (this.height / 2);
    
    if (this.up) this.deltaY = -DELTA_Y;
    else if (this.down) this.deltaY = DELTA_Y;
    else this.deltaY = 0; // immobile

    let nextY = this.y + this.deltaY;

    if (nextY >= -(this.height / 2) && nextY <= maxBallY) {
      super.move(canvas);
    }
  }

}
