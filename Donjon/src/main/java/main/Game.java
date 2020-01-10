package main;

import characters.Player;
import displayFeature.Display;
import elementGameGenerators.RoomsGenerator;
import fil.coo.AdventureGame;

import java.util.Scanner;

/**
 *  @author Diallos Souleymane 
 *
 */
public class Game {

    public static void main(String[] args) {
        intro();
        RoomsGenerator roomsGenerator = new RoomsGenerator();
        roomsGenerator.generate();
        AdventureGame adventureGame = new AdventureGame(roomsGenerator.getStart());
        Player player = new Player("MIAGE",8,20,10, adventureGame) ;
        adventureGame.play(player);
    }


    public static void intro(){
        System.out.println(Display.TITLE.toString()+ "\n\n\n" + Display.INTRODUCTION.toString() + "\n");
        System.out.println("Press Enter to start");
        Scanner sc = new Scanner(System.in);
        sc.nextLine();
        System.out.println(Display.LINE.toString());
        System.out.println("FIRST ROOM \n\n");

    }
}
