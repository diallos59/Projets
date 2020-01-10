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
public interface Action {
	/**
	 * all possible actions that the player can do
	 * @param player the player who does the actions
	 */

	/**
	 *
	 * @param player  the player who executes the action
	 */
	public void execute(Player player);

	/**
	 * @return the name
	 */
	public String getName();

	/**
	 * check if the action can be done
	 * @param adventureGame the dungeon in which the player is playing
	 * @return true if the action can be done, false if not
	 */
	public boolean isPossible(AdventureGame adventureGame);
}
