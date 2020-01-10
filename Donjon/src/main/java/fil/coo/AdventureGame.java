/**
 * 
 */
package fil.coo;

import characters.Monster;
import characters.Player;
import displayFeature.Display;
import items.Item;
import rooms.Direction;
import rooms.Room;

/**
 * @author Diallos Souleymane 
 *
 */
public class AdventureGame {

	private Room currentRoom;

	/**
	 *
	 * @param currentRoom the room where the player is located
	 */
	public AdventureGame(Room currentRoom) {
		this.currentRoom = currentRoom;
	}
	/**
	 * @return the currentRoom
	 */
	public Room getCurrentRoom() {
		return currentRoom;
	}

	/***
	 *
	 * @param player the current player
	 * @return true if the player is dead or out of the dungeon,  false if not
	 */
	public boolean isFinished(Player player) {
		return currentRoom.isExit() || player.isDead();
	}


	/**
	 * Move the player to another room
	 * @param direction the direction of the next room
	 */
	 public void playerMoveTo(Direction direction) { 
		 currentRoom = currentRoom.getNextRoom(direction);
		 System.out.println("You are in another room\n\n");

	 }

	/**
	 * starts a game turn until the player is dead or out of the dungeon
	 * @param player the current player
	 */
	 public void play(Player player){

		 while(!isFinished(player)) {
			 player.act();
		 }

		 if(player.isDead()) {
			 System.out.println("You are dead...");
		 }
		 else
			 System.out.println(Display.CASTLE.toString()  + "\n\nYOU CAME OUT ! \n\nCongrats, you win !!!! ");
	 }
}
