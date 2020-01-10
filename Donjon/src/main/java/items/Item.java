/**
 * 
 */
package items;

import characters.Player;

/**
 *  @author Diallos Souleymane 
 *
 */
public interface Item {

	/**
	 * the item is used by the player, its effects are applied in the game
	 * @param player the player
	 */
	public void isUsedBy(Player player);
}
