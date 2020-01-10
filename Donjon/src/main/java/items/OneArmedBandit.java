/**
 * 
 */
package items;

import characters.Player;

/**
 * 	 If the player has enough gold, the one-armed bandit generates an item randomly and executes it
 *
 *   @author Diallos Souleymane 
 *
 */
public class OneArmedBandit implements Item {

	private int value;
	private final int NB_ITEM = 3;
	private final int MAX_RANDOM = 10;

	public OneArmedBandit(int value) {
		this.value = value;
	}

	@Override
	public void isUsedBy(Player player) {
		if(player.getGold() >= value){
			int random = (int)(Math.random() * ( NB_ITEM + 1));
			int itemValue = (int)(Math.random() * (MAX_RANDOM + 1));
			Item item;

			switch(random){
				case 0:
					item = new StrengthPotion(itemValue);
					break;
				case 1:
					item = new HealthPotion(itemValue);
					break;
				default:
					item = new Gold((itemValue));
					break;
			}
            System.out.println("you have won " + item.toString() + "\n");
			item.isUsedBy(player);
		}else{
            System.out.println("you don't have enough gold...\n");
        }
	}

}
