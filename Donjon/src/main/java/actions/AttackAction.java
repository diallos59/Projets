/**
 * 
 */
package actions;

import characters.*;
import fil.coo.AdventureGame;
import fil.coo.Menu;
import rooms.Room;

/**
 * @author Diallos Souleymane 
 *
 */
public class AttackAction extends ActionAdapter {
	/**
	 * the player attack a monster
	 */

	private static final String NAME = "attack";


	public AttackAction() {
		super(NAME);
	}

	@Override
	public void execute(Player player) {
			Monster monster;
			Room room = player.getAdventureGame().getCurrentRoom();
			
			if(room.getMonsters().size() == 1) {
				monster = room.getMonsters().get(0);
			}
			else {
				Menu <Monster> menu = new Menu <>();
				monster = menu.choose("Which monster ? ", room.getMonsters());
			}
			player.attack(monster);
			room.removeMonster(monster);
	}

	@Override
	public boolean isPossible(AdventureGame adventureGame) {
		return !adventureGame.getCurrentRoom().getMonsters().isEmpty();

	}

}
