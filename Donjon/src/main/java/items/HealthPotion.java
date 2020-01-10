/**
 * 
 */
package items;

import characters.Player;

/**
 *  @author Diallos Souleymane 
 *
 */
public class HealthPotion implements Item {

	private int value;


	public HealthPotion( int value) {
		this.value = value;
	}

	@Override
	public void isUsedBy(Player player) {
	player.setHealth(player.getHealth() + value);
	}

	@Override
	public String toString() {
		return "HealthPotion -> " + value;
	}
}
