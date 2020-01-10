/**
 * 
 */
package rooms;

import java.util.List;
import java.util.Map;

import characters.Monster;
import items.Item;

/**
 *
 * @author Diallos Souleymane 
 *
 * The last room of the dungeon
 *
 */
public class Exit extends Room {
	
	public Exit(List<Monster> monsters, List<Item> items, Map<Direction, Room> door) {
		super(monsters, items, door);
	}

	public boolean isExit(){
		return true;
	}
	
}
