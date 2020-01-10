/**
 * 
 */
package characters;

import actions.*;
import fil.coo.AdventureGame;
import fil.coo.Menu;

import java.util.ArrayList;
import java.util.List;

/**
 *  @author Diallos Souleymane 
 *
 */
public class Player extends Character {


	protected List<Action> actions;
	private AdventureGame adventureGame;

	public Player(String name, int strength, int life, int gold, AdventureGame adventureGame) {
		super(name, strength, life, gold);
		actions = new ArrayList<>();
		this.adventureGame = adventureGame;
	}


	/**
	 * add an action that can be done by the player
	 * @param action the action to add
	 */
	public void addAction(Action action) {
		actions.add(action);
	}
	

	/**
	 * @return the adventureGame
	 */
	public AdventureGame getAdventureGame() {
		return adventureGame;
	}

	/**
	 *
	 *  put in the list of actions all the action the player can do
	 */
	public void refreshPossibleActions(){
		actions.clear();
		ActionAdapter lookAction = new LookAction();
		addAction(lookAction);

		ActionAdapter attackAction = new AttackAction();
		if(attackAction.isPossible(adventureGame))
			addAction(attackAction);

		ActionAdapter moveAction= new MoveAction();
		if (moveAction.isPossible(adventureGame))
			addAction(moveAction);

		ActionAdapter useAction= new UseAction();
		if(useAction.isPossible(adventureGame))
			addAction(useAction);
	}

	/**
	 *	displays the player's action possibilities and executes his choice
	 */
	public void act() {
		refreshPossibleActions();
		Menu <Action> menu = new Menu();
		Action action = menu.choose("What do you want to do ?", actions);
		action.execute(this);
	}
}

