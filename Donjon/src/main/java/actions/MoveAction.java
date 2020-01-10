/**
 * 
 */
package actions;

import java.util.List;


import characters.Player;
import fil.coo.AdventureGame;
import fil.coo.Menu;
import rooms.Direction;


/**
 *  @author Diallos Souleymane 
 *
 */
public class MoveAction extends ActionAdapter {
    /**
     *
     */

	private static final String NAME = "move";

	public MoveAction() {
		super(NAME);
	}


	@Override
	public void execute(Player player) {
		List<Direction> possibleDir = player.getAdventureGame().getCurrentRoom().getNeighbours();;
		Direction choice;

		if(possibleDir.size() == 1) {
			choice = possibleDir.get(0);
		}else{
			Menu<Direction> menu = new Menu <>();
			choice = menu.choose("Which direction ? ", possibleDir);
		}
		player.getAdventureGame().playerMoveTo(choice);
	}

	@Override
	public boolean isPossible(AdventureGame adventureGame) {
		return adventureGame.getCurrentRoom().getMonsters().isEmpty();
	}

}
