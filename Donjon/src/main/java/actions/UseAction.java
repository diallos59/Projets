/**
 * 
 */
package actions;

import java.util.List;

import characters.Player;
import fil.coo.AdventureGame;
import items.Item;
import fil.coo.Menu;

/**
 *  @author Diallos Souleymane 
 *
 */
public class UseAction extends ActionAdapter {

	/**
	 * The player use an item
	 */

	private static final String NAME = "use";

	public UseAction() {
		super(NAME);
	}

	@Override
	public void execute(Player player) {
		List <Item> items = player.getAdventureGame().getCurrentRoom().getItems();
		Item choice;
		if(items.size() == 1) {
			choice = items.get(0);
		}else {
			Menu <Item> menu = new Menu <>();
			choice = menu.choose("Which item ? ", items);
		}
		choice.isUsedBy(player);
		System.out.println("SP : " + player.getStrength() + "\tHP : " + player.getHealth() + "\tGold: " + player.getGold() + " $");
		items.remove(choice);
		player.getAdventureGame().getCurrentRoom().removeItem(choice);
			
	}

	@Override
	public boolean isPossible(AdventureGame adventureGame) {
		return !adventureGame.getCurrentRoom().getItems().isEmpty();

	}

}
