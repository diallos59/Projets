/**
 * 
 */
package actions;

import characters.Player;
import fil.coo.AdventureGame;

/**
 * @author Diallos Souleymane 
 *
 */
public abstract class ActionAdapter<T> implements Action{

	protected String name;

	/**
	 * @param name the name of the action
	 */
	public ActionAdapter(String name) {
		super();
		this.name = name;
	}

	@Override
	public abstract void execute(Player player);

	@Override
	public boolean isPossible(AdventureGame adventureGame) {
		return true;
	}

	@Override
	public String getName() {
		return name;
	}


	@Override
	public String toString() {
		return  name;
	}
}
