import '../images/ciel-nocturne.png';
import '../images/flyingSaucer.png';
import '../images/tir.png';
import '../images/vaisseau-ballon.png';

import Saucer from './saucer.js';
import StarShip from './starShip.js';
import theGame from './game.js';

const TIME = 750;
const SAUCER_HEIGHT = 36;
const SAUCER_WIDTH  = 48;
const STAR_SHIP_X   = 40;

var setup = () => {
 	let theCanvas = document.getElementById("stars");
	theGame.canvas = theCanvas;

	// evenements liés au bouton nouvelleSoucoupe
	let nouvelleSoucoupe = document.getElementById("nouvelleSoucoupe");
	nouvelleSoucoupe.addEventListener("click", () => {
		theGame.starShip = new StarShip (STAR_SHIP_X, theGame.canvas.height / 2);
		nouvelleSoucoupe.blur();
		window.addEventListener("keydown", theGame.keyDownActionHandler.bind(theGame));
		window.addEventListener("keyup", theGame.keyUpActionHandler.bind(theGame));
		theGame.raf = window.requestAnimationFrame(theGame.moveAndDraw.bind(theGame));
	});

	// evenements liés au bouton flotteSoucoupes
	let flotteSoucoupes  = document.getElementById("flotteSoucoupes");
	let intervalId = null;
	let score = document.getElementById("score"); // à revoir
	flotteSoucoupes.addEventListener("click", () => {
		if (flotteSoucoupes.classList.length == 0) {
			intervalId = setInterval(() => {
				if (alea (100) >= 50 ) {
					let x = theGame.canvas.width - SAUCER_WIDTH;
					let y = alea (theGame.canvas.height - SAUCER_HEIGHT);
					theGame.addSaucer = new Saucer (x, y);
				}
				score.textContent = theGame.score + "";
			}, TIME);
			flotteSoucoupes.classList.add("start");
			flotteSoucoupes.style.borderColor = "rgba(0, 255, 0, .6)";
		} else {
			clearTimeout(intervalId);
			flotteSoucoupes.classList.remove("start");
			flotteSoucoupes.style.borderColor = "rgba(255, 0, 0, .6)";
		}
		flotteSoucoupes.blur();
		}); 

}


var alea = n => Math.floor(Math.random() * n);

window.addEventListener("DOMContentLoaded", setup);
