
const UP    = Symbol("up");
const DOWN  = Symbol("down");
const STILL = Symbol("immobile");


export default class MoveState {

  static get UP() {return UP;}
  static get DOWN() {return DOWN;}
  static get STILL() {return STILL;}

}
