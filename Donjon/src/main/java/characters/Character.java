package characters;

/**
 *  @author Diallos Souleymane 
 *
 */
public class Character {


	protected String name;
	protected int strength; 
	protected int health;
	protected int gold;

	/**
	 *Initialize one Character
	 *
	 *@param strength the strength level
	 *@param health the health level
	 *@param gold the amount of gold.
	 *@param name the name of the character.
	 */
	public Character(String name, int strength, int health, int gold) {
		super();
		this.name = name;
		this.strength = strength;
		this.health = health;
		this.gold = gold;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @return the strength
	 */
	public int getStrength() {
		return strength;
	}

	/**
	 * @param strength the strength to set
	 */
	public void setStrength(int strength) {
		this.strength = strength;
	}

	/**
	 * @return the health
	 */
	public int getHealth() {
		return health;
	}

	/**
	 * @param health the health to set
	 */
	public void setHealth(int health) {
		this.health = health;
	}

	/**
	 * @return the gold
	 */
	public int getGold() {
		return gold;
	}

	/**
	 * @param gold the gold to set
	 */
	public void setGold(int gold) {
		this.gold = gold;
	}


	/**
	 * battle between two characters. With each attack, the target loses as much health as the attacker's number of strength points.
	 * The target then attacks his attacker. The battle stops when one of the characters dies.
	 * @param target the character attacked
	 */
	public void attack(Character target) {
		try {

			System.out.println(this.getName() + " attack " + target.getName());
			Thread.sleep(1000);
			target.setHealth(target.getHealth() - this.getStrength());
			Thread.sleep(1000);
			System.out.println(target.getName() + " looses " + this.getStrength() + " LP\n");

			if (target.isDead()) {
				target.die(this);
				System.out.println(target.getName() + " has been defeated," + this.getName() + " win " + target.getGold() + " coins of gold !\n");
				Thread.sleep(1000);

			} else if (this.isDead()) {
				this.die(target);
				System.out.println(this.getName() + " has been defeated," + target.getName() + " win " + target.getGold() + " coins of gold !\n");
				Thread.sleep(1000);

			} else {
				target.attack(this);
			}
		}catch(InterruptedException e){
			System.out.println(e.getMessage());
			}
	}


	/**
	 * Check if the character is dead or not
	 *@return true if the character health level is 0 or less, false otherwise
	 */

	public boolean isDead() {
		return health <= 0;
	}

	/**
	 * transfer all the looser's gold to the winner
	 * @param winner the winner of the battle
	 */
	public void die(Character winner) {
		winner.setGold(winner.gold + this.getGold());
	}

	@Override
	public String toString() {
		return name + "\tSP : " + strength +  "\tHP : " + health + "\tGold : " + gold + " $";
	}
}
