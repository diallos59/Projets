/**
 * 
 */
package rooms;

/**
 * @author Diallos Souleymane 
 *
 */
public enum Direction {
	NORTH, SOUTH, EAST, WEST;

	@Override
	public String toString() {
		switch (this){
			case NORTH:
				return "North";
			case SOUTH:
				return "South";
			case EAST:
				return "East";
			default:
				return "West";
		}

	}
}
