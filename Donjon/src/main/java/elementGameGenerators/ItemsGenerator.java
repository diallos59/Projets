package elementGameGenerators;


import items.*;

import java.util.ArrayList;

/**
 * @author Diallos Souleymane 
 * generates a list of Items
 */

public class ItemsGenerator {

    private ArrayList<Item> items;

    public ItemsGenerator(){
        this.items = new ArrayList<>();
        createItems();
    }

    /**
     * Create the list
     */
    private void createItems(){
        Item gold1 = new Gold(20);
        Item gold2 = new Gold(30);
        Item healthPotion1 = new HealthPotion(10);
        Item healthPotion2 = new HealthPotion(12);
        Item strengthPotion1 = new StrengthPotion(3);
        Item strengthPotion2 = new StrengthPotion(7);
        Item oneArmedBandit1 = new OneArmedBandit(10);
        Item oneArmedBandit2 = new OneArmedBandit(12);

        items.add(gold1);
        items.add(gold2);
        items.add(healthPotion1);
        items.add(healthPotion2);
        items.add(strengthPotion1);
        items.add(strengthPotion2);
        items.add(oneArmedBandit1);
        items.add(oneArmedBandit2);
    }

    /**
     *
     * @return the list of items
     */
    public ArrayList<Item> getItems() {
        return items;
    }
}
