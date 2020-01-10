package displayFeature;

/**
 *  @author Diallos Souleymane 
 *
 */
public enum Display {
   LINE, TITLE, INTRODUCTION, CASTLE;

   public String toString(){
      switch(this){
         case LINE:
            return line;
         case TITLE:
            return title;
         case INTRODUCTION:
            return introducion;
         case CASTLE:
            return castle;
      }
      return "";

   }

   private String line = "\n---------------------------------------------------------------------------------------\n";

   private String title= "                                                                                                                                    \n" +
           "                                                                                                                                    \n" +
           "DDDDDDDDDDDDD                                                                                                                       \n" +
           "D::::::::::::DDD                                                                                                                    \n" +
           "D:::::::::::::::DD                                                                                                                  \n" +
           "DDD:::::DDDDD:::::D                                                                                                                 \n" +
           "  D:::::D    D:::::D uuuuuu    uuuuuu  nnnn  nnnnnnnn       ggggggggg   ggggg    eeeeeeeeeeee       ooooooooooo   nnnn  nnnnnnnn    \n" +
           "  D:::::D     D:::::Du::::u    u::::u  n:::nn::::::::nn    g:::::::::ggg::::g  ee::::::::::::ee   oo:::::::::::oo n:::nn::::::::nn  \n" +
           "  D:::::D     D:::::Du::::u    u::::u  n::::::::::::::nn  g:::::::::::::::::g e::::::eeeee:::::eeo:::::::::::::::on::::::::::::::nn \n" +
           "  D:::::D     D:::::Du::::u    u::::u  nn:::::::::::::::ng::::::ggggg::::::gge::::::e     e:::::eo:::::ooooo:::::onn:::::::::::::::n\n" +
           "  D:::::D     D:::::Du::::u    u::::u    n:::::nnnn:::::ng:::::g     g:::::g e:::::::eeeee::::::eo::::o     o::::o  n:::::nnnn:::::n\n" +
           "  D:::::D     D:::::Du::::u    u::::u    n::::n    n::::ng:::::g     g:::::g e:::::::::::::::::e o::::o     o::::o  n::::n    n::::n\n" +
           "  D:::::D     D:::::Du::::u    u::::u    n::::n    n::::ng:::::g     g:::::g e::::::eeeeeeeeeee  o::::o     o::::o  n::::n    n::::n\n" +
           "  D:::::D    D:::::D u:::::uuuu:::::u    n::::n    n::::ng::::::g    g:::::g e:::::::e           o::::o     o::::o  n::::n    n::::n\n" +
           "DDD:::::DDDDD:::::D  u:::::::::::::::uu  n::::n    n::::ng:::::::ggggg:::::g e::::::::e          o:::::ooooo:::::o  n::::n    n::::n\n" +
           "D:::::::::::::::DD    u:::::::::::::::u  n::::n    n::::n g::::::::::::::::g  e::::::::eeeeeeee  o:::::::::::::::o  n::::n    n::::n\n" +
           "D::::::::::::DDD       uu::::::::uu:::u  n::::n    n::::n  gg::::::::::::::g   ee:::::::::::::e   oo:::::::::::oo   n::::n    n::::n\n" +
           "DDDDDDDDDDDDD            uuuuuuuu  uuuu  nnnnnn    nnnnnn    gggggggg::::::g     eeeeeeeeeeeeee     ooooooooooo     nnnnnn    nnnnnn\n" +
           "                                                                     g:::::g                                                        \n" +
           "                                                         gggggg      g:::::g                                                        \n" +
           "                                                         g:::::gg   gg:::::g                                                        \n" +
           "                                                          g::::::ggg:::::::g                                                        \n" +
           "                                                           gg:::::::::::::g                                                         \n" +
           "                                                             ggg::::::ggg                                                           \n" +
           "                                                                gggggg   ";


   private  String introducion = "Welcome to this dungeon, you have to cross it to find your way out. Be careful, in some rooms there are monsters. \n" +
           "You will have to beat them to get into another room.\n"+
           "In the rooms you can collect gold coins ($), earn health (HP) points and strength points (SP).\n"+
           "\n"+
           "You have 4 choices of actions:\n"+
           "- Look at what's in the room\n"+
           "- Change rooms if there are no monsters in them\n"+
           "- Attack a monster\n"+
           "- Collect an object \n"+
           "\n"+
           "Good luck  !";


   private String castle ="   /\\                                                        /\\\n" +
           "  |  |                                                      |  |\n" +
           " /----\\                                                   /----\\\n" +
           "[______]                                                  [______]\n" +
           " |    |         _____                        _____         |    |\n" +
           " |[]  |        [     ]                      [     ]        |  []|\n" +
           " |    |       [_______][ ][ ][ ][][ ][ ][ ][_______]       |    |\n" +
           " |    [ ][ ][ ]|     |  ,----------------,  |     |[ ][ ][ ]    |\n" +
           " |             |     |/'    ____..____    '\\|     |             |\n" +
           "  \\  []        |     |    /'    ||    '\\    |     |        []  /\n" +
           "   |      []   |     |   |o     ||     o|   |     |  []       |\n" +
           "   |           |  _  |   |     _||_     |   |  _  |           |\n" +
           "   |   []      | (_) |   |    (_||_)    |   | (_) |       []  |\n" +
           "   |           |     |   |     (||)     |   |     |           |\n" +
           "   |           |     |   |      ||      |   |     |           |\n" +
           " /''           |     |   |o     ||     o|   |     |           ''\\\n" +
           "[_____________[_______]--'------''------'--[_______]_____________]";
}
