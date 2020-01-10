#
#
#

import sys
from minesweeper import *

def mines_print(game):
    """

    """
    d=game.get_width()
    h=game.get_height()
    for c in range(d):
        if c==0:
            print(' ',end='')
        print((4-len(str(c)))*' '+str(c),end='')        
    print()
    print(len(str(h))*' ',end='')
    print(d*'+---',end='')
    print('+')
    for i in range(h):
        print((len(str(h))-len(str(i)))*' '+str(i),end='')
        for j in range(d):
            cel=game.get_cell(j,i)
            print('| '+str(cel)+' ', end='')
        print('|')
        print(len(str(h))*' ',end='')
        print(d*'+---',end='')
        print('+')

def play_minesweeper(width=20,height=10,nbombs=15):
    """

    """
    game=Minesweeper(width,height,nbombs)
    mines_print(game)
    while game.get_state() == GameState.unfinished:
        choice=input('Your play x,y,C (C=(R)eveal,(S)et,(U)nset): ')
        print('\n')
        try:
            x,y,action=choice.split(',')
            cel=game.get_cell(int(x),int(y))
            if action.upper()=='R':
                game.reveal_all_cells_from(int(x),int(y))
            elif action.upper()=='S':
                cel.set_hypothetic()
            elif action.upper()=='U':
                cel.unset_hypothetic()
        except ValueError:
            print('invalid input try again please !!!')
        mines_print(game)
    if game.get_state() == GameState.winning:
        print('you won :-)')
    elif game.get_state() == GameState.losing:
        for i in range(width):
            for j in range(height):
                cel=game.get_cell(i,j)
                if cel.is_bomb():
                    cel.reveal()
        mines_print(game)
        print('you lost ...')

def usage():
    '''
    prints how to use the program
    '''
    print("Usage : %s width height nbombs\n" % sys.argv[0], file=sys.stderr)
    print("\t -width: for grid width  \n\t -height: for grid length\n\t -nbombs: for number of bombs\n")
    exit(1)


def main():
    """

    """
    if len(sys.argv) != 4:
        usage()
    else:
        width = int(sys.argv[1])
        height = int(sys.argv[2])
        nbombs = int(sys.argv[3])
        play_minesweeper(width,height,nbombs)

if __name__ == '__main__':
    main()









            
        
