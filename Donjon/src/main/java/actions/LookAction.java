/**
 * 
 */
package actions;

import characters.Monster;
import characters.Player;
import fil.coo.Menu;
import items.Item;
import rooms.Direction;
import rooms.Room;

/**
 * @author Diallos Souleymane 
 *
 */
public class LookAction extends ActionAdapter {
	/**
	 * Reference all objects and monsters present in the room, and possible directions
	 */

	private static final String NAME = "look";

	public LookAction() {
		super(NAME);
	}

	@Override
	public void execute(Player player) {
		Room room = player.getAdventureGame().getCurrentRoom();
		Menu <Monster> monsterMenu = new Menu <>();
		monsterMenu.display("Monsters : ", room.getMonsters());
		System.out.println("\n");

		Menu<Item> itemMenu = new Menu<>();
		itemMenu.display("Items : ", room.getItems());
		System.out.println("\n");

		Menu<Direction> directionMenu = new Menu<>();
		directionMenu.display("Possible directions : ",room.getNeighbours());
		System.out.println("\n");
	}
}
