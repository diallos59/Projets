package elementGameGenerators;
import characters.Monster;
import java.util.ArrayList;


/**
 * @author Diallos Souleymane 
 * create a list of monsters
 */
public class MonstersGenerator {

   private ArrayList<Monster> monsters;

   public MonstersGenerator(){
       this.monsters = new ArrayList<>();
       createMonsters();
   }

    /**
     * create the list
     */
   private void createMonsters(){

       Monster iceMonster = new Monster("ICE Monster", 6, 10, 30);
       Monster fireMonster = new Monster("FIRE Monster", 8, 7, 15);
       Monster windMonster = new Monster("WIND Monster", 4, 3, 4);
       Monster darkMonster = new Monster("DARK Monster", 5, 18, 20);
       Monster superMonster = new Monster("Super Monster", 13, 15, 17);
       Monster spiderMonster = new Monster("Spider Monster", 11, 15, 12);

       monsters.add(iceMonster);
       monsters.add(fireMonster);
       monsters.add(windMonster);
       monsters.add(darkMonster);
       monsters.add(spiderMonster);
       monsters.add(superMonster);
   }

    /**
     *
     * @return the list of monsters
     */
    public ArrayList<Monster> getMonsters() {
        return monsters;
    }
}
