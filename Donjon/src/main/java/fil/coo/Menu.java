/**
 * 
 */
package fil.coo;

import java.util.List;

import displayFeature.Display;
import scanner.ScannerInt;


/**
 *  @author Diallos Souleymane 
 *
 */
public class Menu <T> {

	/**
	 * Display all the possible choices and allows the player to enter a choice
	 * @param question the sentence displayed on the console
	 * @param list a list where the players picks his choices
	 * @return The element chosen is returned, or null if the index is 0
	 */
	
	public T choose(String question, List<T> list) {
		int i = 1;
		for(T obj: list) {
			System.out.println(i++ + ". " + obj.toString());
		}
		int value = ScannerInt.readInt(question, i);
		System.out.println(Display.LINE.toString());
		return (value != 0 ? list.get(value-1) : null);
		
	}

	/**
	 *
	 * @param sentence the sentence displayed on the console
	 * @param list a list where the players picks his choices
	 */
	public void display(String sentence, List<T> list) {
		int i = 1;
		System.out.println(sentence);
		if(list.isEmpty())
			System.out.println("\tthere's nothing");
		for(T obj: list) {
			if(obj  != null)
				System.out.println("\t"+ i++ + ". " + obj.toString());
		}
	}
}
