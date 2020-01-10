package elementGameGenerators;

import characters.Monster;
import items.Item;
import rooms.Direction;
import rooms.Exit;
import rooms.Room;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Create the Dungeon
 *  @author Diallos Souleymane 

 */

public class RoomsGenerator {

    private RandomGenerator<Monster> monsters;
    private RandomGenerator<Item> items;
    private MonstersGenerator monstersGenerator;
    private ItemsGenerator itemsGenerator;
    private List<Room> rooms;
    private Room start, exit, room1, room2, room3;

    public RoomsGenerator(){
        monstersGenerator = new MonstersGenerator();
        itemsGenerator = new ItemsGenerator();
        rooms = new ArrayList<>();
        monsters = new RandomGenerator<>(2);
        items = new RandomGenerator<>(3);

    }

    /**
     * creates the dungeon and fills the pieces with random items and monsters
     */
    public void generate(){

        start = new Room(monsters.generate(monstersGenerator.getMonsters()), items.generate(itemsGenerator.getItems()), new HashMap<Direction, Room>());

        newGenerators();
        room1 = new Room(monsters.generate(monstersGenerator.getMonsters()), items.generate(itemsGenerator.getItems()), new HashMap<Direction, Room>());

        newGenerators();
        room2 =new Room(monsters.generate(monstersGenerator.getMonsters()), items.generate(itemsGenerator.getItems()), new HashMap<Direction, Room>());

        newGenerators();
        room3 = new Room(monsters.generate(monstersGenerator.getMonsters()), items.generate(itemsGenerator.getItems()), new HashMap<Direction, Room>());

        newGenerators();
        exit = new Exit(monsters.generate(monstersGenerator.getMonsters()), items.generate(itemsGenerator.getItems()), new HashMap<Direction, Room>());


        start.addNeighbours(Direction.NORTH, room1);
        start.addNeighbours(Direction.WEST, room2);

        room1.addNeighbours(Direction.WEST, room3);

        room2.addNeighbours(Direction.NORTH, room3);
        room2.addNeighbours(Direction.WEST, exit);

        room3.addNeighbours(Direction.WEST, exit);
        room3.addNeighbours(Direction.SOUTH, room2);

        rooms.add(start);
        rooms.add(room1);
        rooms.add(room2);
        rooms.add(room3);

    }

    /**
     *
     * @return the first room
     */
    public Room getStart() {
        return start;
    }

    /**
     * creates a list of monsters and a list of items
     */
    private void newGenerators(){
        monstersGenerator = new MonstersGenerator();
        itemsGenerator = new ItemsGenerator();
    }
}
