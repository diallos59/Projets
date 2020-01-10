import imageSaucer from '../images/flyingSaucer-petit.png';
import Mobile from './mobile.js';

const DELTA_X = -3;
const DELTA_Y = 0;

export default class Saucer extends Mobile {

	constructor(x, y) {
   		super(x, y, imageSaucer, DELTA_X, DELTA_Y);
		this._won = false; // savoir si la soucoupe sort du jeu par la gauche
		this._crushed = false;
		this._isCrushing = false;
  	}

  	get won() {return this._won;}
	set won(v) {this._won = v;}
	get crushed() {return this._crushed;}
	set crushed(v) {this._crushed = v;}
	get isCrushing() {return this._isCrushing;}
	set isCrushing(v) {this._isCrushing = true;}
 
  	move(canvas) {
  		super.move(canvas);
		if (this.x <= 0) this.won = true;
		if (this.y >= canvas.height) this.crushed = true;
  	}
}