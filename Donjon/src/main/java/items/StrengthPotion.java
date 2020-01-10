/**
 * 
 */
package items;

import characters.Player;

/**
 *  @author Diallos Souleymane 
 *
 */
public class StrengthPotion implements Item {
	private int value;

	/**
	 *
	 * @param value the value of the potion
	 */
	public StrengthPotion(int value) {
		this.value = value;
	}

	@Override
	public void isUsedBy(Player player) {
		player.setStrength(player.getStrength() + value);

	}

	@Override
	public String toString() {
		return "StrengthPotion -> " + value ;
	}
}
