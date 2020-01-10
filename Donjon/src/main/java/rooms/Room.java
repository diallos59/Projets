/**
 * 
 */
package rooms;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import characters.Monster;
import items.Item;

/**
 * @author Diallos Souleymane 
 *
 */
public class Room {
	protected List<Monster> monsters;
	protected List<Item> items;
	protected Map<Direction, Room> neighboors;
	
	
	public Room(List<Monster> monsters, List<Item> items, Map<Direction, Room> neighbours) {
		this.monsters = monsters;
		this.items = items;
		this.neighboors = neighbours;
	}
	/**
	 * shows if the room is an exit room or not
	 * @return a boolean that express if Room is an exitRoom
	 */
	public boolean isExit() {
		return false;
	}



	public List<Monster> getMonsters() {
		return monsters;
	}


	public List<Item> getItems() {
		return items;
	}

	/**
	 * remove a monster from the list room monsters
	 * @param monster the monster to remove from the list
	 */
	public void removeMonster(Monster monster) {
		this.monsters.remove(monster);
	}


	/**
	 * add an item to the rooom
	 * @param item the item to be added
	 */
	public void addItem(Item item) {
		items.add(item);
	}

	/**
	 * remove an item from the list of this room's items
	 * @param item the item to remove from the list
	 */
	public void removeItem(Item item) {
		this.items.remove(item);
	}


	public Room getNextRoom(Direction direction) {
		return neighboors.get(direction);
	}


	/**
	 * add a room to the list of neighbours
	 * @param direction the direction of room added
	 * @param room the room to add in the list
	 */
	public void addNeighbours(Direction direction, Room room) {
		neighboors.put(direction, room);
	}


	/**
	 * return the room's neighbours with the specified direction
	 * @return return the room's neighbours
	 */
	public List<Direction> getNeighbours() {
		 return new ArrayList <> (this.neighboors.keySet());
	}




}
