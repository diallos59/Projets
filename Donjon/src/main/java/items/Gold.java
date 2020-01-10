/**
 * 
 */
package items;

import characters.Player;

/**
 *  @author Diallos Souleymane 
 *
 */
public class Gold implements Item {

	private int quantity;

	public Gold(int quantity) {
		this.quantity = quantity;
	}


	@Override
	public void isUsedBy(Player player) {
		player.setGold(player.getGold() + quantity);

	}

	@Override
	public String toString() {
		return "Gold -> " + quantity;
	}
}
