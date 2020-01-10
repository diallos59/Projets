import MoveState from './moveState.js';
import Shoot from './shoot.js';

const TIME = 15;
const LOSS = 1000; // perte
const GAIN = 200;

class Game {

	constructor () {
		this._canvas = undefined;
		this._starShip = undefined;
		this._saucers = [];
		this._score = 0;
		this._raf;
		this._shoots = [];
		this._intervalSaucerIds = [];
		this._intervalShootIds = [];
	}

	get width() {return this.canvas.width;}
	get height() {return this.canvas.height;}
	get canvas() {return this._canvas;}
	set canvas(c) {this._canvas = c;}
	get starShip() {return this._starShip;}
	set starShip(v) {this._starShip = v;}
	get saucers() {return this._saucers;}
	set addSaucer(s) {
		this._saucers.push(s);
		this.addintervalSaucerIds = setInterval(s.move.bind(s), TIME, this.canvas);
	}
	get shoots() {return this._shoots;}
	set addShoot(s) {
		this._shoots.push(s);
		this.addintervalShootIds = setInterval(s.move.bind(s), TIME, this.canvas);
	}
	get score() {return this._score;}
	set score(v) {this._score = v;}
	get intervalSaucerIds() {return this._intervalSaucerIds;}
	set addintervalSaucerIds(t) {this._intervalSaucerIds.push(t);}
	get intervalShootIds() {return this._intervalShootIds;}
	set addintervalShootIds(t) {this._intervalShootIds.push(t);}

	deleteSaucer(saucer) {
		let index = this.saucers.indexOf(saucer);
		this.saucers.splice(index, 1);
		clearInterval(this.intervalSaucerIds[index]);
	}

	deleteShoot(shoot) {
		let index = this.shoots.indexOf(shoot);
		this.shoots.splice(index, 1);
		clearInterval(this.intervalShootIds[index]);
	}

	moveAndDraw() {
		let context = this.canvas.getContext("2d");
		context.clearRect(0, 0, this.width, this.height);

		// Actions liées aux balles
		let shoots_tmp = [...this.shoots]; // une copie de mon tableau des tirs
		shoots_tmp.forEach(shoot => { // deplacer et supprimer chaque tir qui a été en collision
			shoot.move(this.canvas);
			shoot.searchCollisionAmong(this.saucers);
			if (shoot.hit) this.deleteShoot(shoot);
			else shoot.draw(context);
		});

		//  Actions liées docaux soucoupes ennemies
		let saucers_tmp = [...this.saucers]; // une copie de mon tableau des tirs
		saucers_tmp.forEach(saucer => {
			if (!saucer.isCrushing && saucer.hit) {
				saucer.deltaX = 0;
				saucer.deltaY = 3;
				saucer.isCrushing = true;
				this.score = this.score + GAIN;
			}
			else if (saucer.won) {
				this.deleteSaucer(saucer);
				this.score = this.score - LOSS; 
			}
			else if (saucer.crushed) this.deleteSaucer(saucer);
		});
		this.saucers.forEach(saucer => saucer.draw(context));

		// Actions liées à la soucoupe principale
		this.starShip.move(this.canvas);
		this.starShip.draw(context);

		this.raf = window.requestAnimationFrame(this.moveAndDraw.bind(this));
	}

	keyDownActionHandler(event) {
		switch (event.key) {
			case "ArrowUp":
			case "Up":
	            this.starShip.moving = MoveState.UP;
	            break;
	        case "ArrowDown":
	        case "Down":
	            this.starShip.moving = MoveState.DOWN;
				break;
			case " ":
				this.addShoot = new Shoot(this.starShip.x + this.starShip.width, this.starShip.y + (this.starShip.height / 2));
	        default: return;
		}
		event.preventDefault();
	}

	keyUpActionHandler(event) {
		switch (event.key) {//		this._canvas = canvas;
	        case "ArrowUp":
	        case "Up":
	        case "ArrowDown":
	        case "Down":
	            this.starShip.moving = MoveState.STILL;
				break;
	        default: return;
	    }
	    event.preventDefault();
	}
}

let theGame = new Game();
theGame.constructor = undefined;
Object.getPrototypeOf(theGame).constructor = undefined;
export default theGame;
