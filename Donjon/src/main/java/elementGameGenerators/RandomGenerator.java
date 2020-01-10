package elementGameGenerators;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 *  @author Diallos Souleymane 
 * @param <T> the object
 */
public class RandomGenerator<T> {

    private int max;

    public RandomGenerator(int max){
        this.max = max;
    }

    /**
     * creates a list of randomly drawn objects from another list
     * @param allElementsAvailable the list of objects in which we will get objects
     * @return a list of objects randomly get from allElementAvailable List
     */
    public List<T> generate(ArrayList<T> allElementsAvailable){
        List<T> elementsRandom = new ArrayList<>();
        int random = (int)(Math.random() * (max + 1));
        Collections.shuffle(allElementsAvailable);
        for(int i = 0; i < random; i++){
            elementsRandom.add(allElementsAvailable.get(i));
        }
        return elementsRandom;
    }

}
