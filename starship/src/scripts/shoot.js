import imageShoot from '../images/tir.png';
import Mobile from './mobile.js';

const DELTA_X = 8;
const DELTA_Y = 0;

export default class Shoot extends Mobile {

    constructor(x, y) {
        super(x, y, imageShoot, DELTA_X, DELTA_Y);
    }

    collisionWith(mobile) {
        let mobileX_max = mobile.width + mobile.x;
        let mobileY_max = mobile.height + mobile.y;
        for (let i = this.x; i < this.width + this.x; i++) {
            for (let j = this.y; j < this.height + this.y; j++) {
                if (mobile.x <= i && i <= mobileX_max && mobile.y <= j && j <= mobileY_max) {
                    return true; 
                }
            }
        }
        return false;
    }

    searchCollisionAmong(saucers) {
        saucers.filter(saucer => (!saucer.hit && this.collisionWith(saucer))).forEach(saucer => { // une balle touche une soucoupe à la fois et est supprimée
            saucer.hit = true;
            this.hit = true;
        });
    }
}