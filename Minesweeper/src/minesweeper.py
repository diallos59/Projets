#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""
:mod:`minesweeper` module

:author:   SOULEYMANE Diallo

:date:  07/10/2017

This module provides functions and a class for minesweeper's game's management.

"""

import random
from enum import Enum
from cell import Cell

################################################
# Type declaration
################################################

class GameState(Enum):
    """
    A class to define an enumerated type with three values :

    * ``winning``
    * ``losing``
    * ``unfinished``

    for the three state of minesweeper game.
    """
    winning = 1
    losing = 2
    unfinished = 3


##############################################
# Function for game's setup and management
##############################################


def neighborhood(x, y, width, height):
    """
    :param x: x-coordinate of a cell
    :type x: int
    :param y: y-coordinate of a cell
    :type y: int
    :param height: height of the grid
    :type height: int
    :param width: widthof the grid
    :type width: int
    :return: the list of coordinates of the neighbors of position (x,y) in a
             grid of size width*height
    :rtype: list of tuple
    :UC: 0 <= x < width and 0 <= y < height
    :Examples:

    >>> neighborhood(3, 3, 10, 10)
    [(2, 2), (2, 3), (2, 4), (3, 2), (3, 4), (4, 2), (4, 3), (4, 4)]
    >>> neighborhood(0, 3, 10, 10)
    [(0, 2), (0, 4), (1, 2), (1, 3), (1, 4)]
    >>> neighborhood(0, 0, 10, 10)
    [(0, 1), (1, 0), (1, 1)]
    >>> neighborhood(9, 9, 10, 10)
    [(8, 8), (8, 9), (9, 8)]
    >>> neighborhood(3, 9, 10, 10)
    [(2, 8), (2, 9), (3, 8), (4, 8), (4, 9)]
    """
    assert type(x)==type(y)==int,'x and y coordinates must be integers'
    assert 0 <= x < width and 0 <= y < height,'x between 0 and width and y between 0 and height'
    a,b,c,d=x-1,x+2,y-1,y+2
    if a<0:
        a=x
    if b>width:
        b=x+1
    if c<0:
        c=y
    if d>height:
        d=y+1
    return [(i,j) for i in range(a,b) for j in range(c,d) if i!=x or j!=y]

class Minesweeper():
    """
    >>> game = Minesweeper(20, 10, 4)
    >>> game.get_width()
    20
    >>> game.get_height()
    10
    >>> game.get_nbombs()
    4
    >>> game.get_state() == GameState.unfinished 
    True
    >>> cel = game.get_cell(1, 2)
    >>> cel.is_revealed()
    False
    >>> 
    """
    

    def __init__(self, width=30, height=20, nbombs=99):
        """
        build a minesweeper grid of size width*height cells
        with nbombs bombs randomly placed.  

        :param width:[optional] horizontal size of game (default = 30)
        :type width: int
        :param height: [optional] vertical size of game (default = 20)
        :type height: int
        :param nbombs: [optional] number of bombs (default = 99)
        :type nbombs: int
        :return: a fresh grid of  width*height cells with nbombs bombs randomly placed.
        :rtype: Minesweeper
        :UC: width and height must be positive integers, and
             nbombs <= width * height
        :Example:

        >>> game = Minesweeper(20, 10, 4)
        >>> game.get_width()
        20
        >>> game.get_height()
        10
        >>> game.get_nbombs()
        4
        >>> game.get_state() == GameState.unfinished 
        True
        """
        self.__width=width
        self.__height=height
        self.__nbombs=nbombs
        self.__content=dict([((i,j),Cell()) for i in range(width) for j in range(height)])
        liste=random.sample(list(self.__content),nbombs)
        for a,b in liste:
            cel=self.__content[(a,b)]
            cel.set_bomb()
        for x in range(width):
            for y in range(height):
                self.__neighborhood=neighborhood(x,y,width,height)
                cel=self.__content[(x,y)]
                for i,j in self.__neighborhood:
                    cel2=self.__content[(i,j)]
                    if cel2.is_bomb():
                        cel.incr_number_of_bombs_in_neighborhood()
                    
    def get_height(self):
        """
        :return: height of the grid in self
        :rtype: int
        :UC: none
        """
        return self.__height

    def get_width(self):
        """
        :return: width of the grid in game
        :rtype: int
        :UC: none
            """
        return self.__width
    
    def get_nbombs(self):
        """
        :return: number of bombs in game
        :rtype: int
        :UC: none
        """
        return self.__nbombs


    def get_cell(self, x, y):
        """
        :param x: x-coordinate of a cell
        :type x: int
        :param y: y-coordinate of a cell
        :type y: int
        :return: the cell of coordinates (x,y) in the game's grid
        :type: cell
        :UC: 0 <= x < width of game and O <= y < height of game
        """
        assert type(x)==type(y)==int,'x and y coordinates must be integers'
        assert 0 <= x < self.get_width() and 0 <= y < self.get_height(),'x between 0 and width and y between 0 and height'
        return self.__content[(x,y)]

    def get_state(self):
        """
        :return: the state of the game (winning, losing or unfinished)
        :rtype: GameState
        :UC: none
        """
        x,cpt=0,0
        res=True
        while res and x<self.get_width():
            y=0
            while res and y<self.get_height():
                cel=self.get_cell(x,y)
                if cel.is_revealed():
                    cpt+=1
                    if cel.is_bomb():
                        res=False
                y+=1
            x+=1
        if not res:
            return GameState.losing
        else:
            if cpt==(self.get_width()*self.get_height())-self.get_nbombs():
               return GameState.winning
            else:
                return GameState.unfinished



    def reveal_all_cells_from(self, x, y):
        """ 
        :param x: x-coordinatef
        :param y: y-coordinate
        :return: none
        :side effect: reveal all cells of game game from the initial cell (x,y).
        :UC: 0 <= x < width of game and O <= y < height of game
        """
        cel=self.get_cell(x,y)
        cel.reveal()
        for i,j in neighborhood(x,y,self.get_width(),self.get_height()):
            cel2=self.get_cell(i,j)
            if not cel2.is_bomb() and cel2.is_revealed():
                cel2.reveal
            if not cel2.is_bomb() and not cel2.is_revealed():
                if cel2.number_of_bombs_in_neighborhood()==0:
                    self.reveal_all_cells_from(i,j)
        
        
if __name__ == '__main__':
    import doctest
    doctest.testmod(optionflags=doctest.NORMALIZE_WHITESPACE | doctest.ELLIPSIS, verbose=True)


