# AUTEURS

|**Nom** | **Prénom**        |
|--------|-------------------|
|Diallo     | Souleymane|


# STARSHIP

L'objectif est de réaliser un jeu vidéo simple dans lequel le joueur contrôle à l'aide du clavier le déplacement vertical d'un vaisseau situé sur la gauche de l'écran. Des soucoupes volantes arrivent de la droite de l'écran et le joueur doit les détruire en leur tirant dessus à l'aide de la touche espace du clavier. A chaque tir réussi le joueur marque des points, à l'inverse si un vaisseau parvient à passer sans être détruit, le joueur perd des points.

## UTILISATION

* Récupérer le projet par:
```
$ git pull
```
* puis accéder au dossier l3s6javascript/starship/ par:
```
$ cd l3s6javascript/starship/
```
* ensuite installer les packages nodes utilisés dans ce projet par:
```
$ npm install
```
* enfin générer le bundle par:
```
$ npm run build
```

## EXECUTION - JOUER LE JEU

Soit lancer directement le fichier dist/index.html dans le navigateur ou taper la commande suivante :
```
$ npm run hotloader
```
et lancer l'url suivante dans le navigateur : 127.0.0.1:8000

## LE JEU - GAME

Ce jeu est représenté par un singleton de la classe Game qui gère les animations liées à celui-ci.
En effet, cette classe gère le deplacement et l'affichage des entités du jeu. De plus, met à jour le score à chaque fois que celui-ci change.
Enfin, cette classe gère les evenements liés au clavier au cours du jeu (deplacement vaisseau et tir).

## LES ENTITES DU JEU

### LE VAISSEAU - STARSHIP

Ce vaisseau est un mobile représenté par la classe Starship. De plus, c'est le vaisseau principal situé à gauche de l'écran.
En outre, celui-ci a la possiblité de détruire les soucoupes en les tirant dessus lorsqu'on appuie la touche ***espace*** du clavier.
Enfin, le joueur contrôle à l'aide du clavier le déplacement vertical de celui-ci.

### LES SOUCOUPES - SAUCERS

Cettes soucoupes apparaissent de façon aléatoire à droite de l'écran. De plus, chaque soucoupe est un mobile représenté par la classe Saucer.
En outre, elles disparaissent lorsque:
* elles sont détruites par le joueur alors celui-ci gagne 200 points par vaisseau et sortent du jeu par le bas.
* elles sortent du jeu par la gauche alors le joueur perd 1000 points par vaisseau.
Enfin, ces vaisseaux se deplacent, selon un temps donné, sur l'horizontale.

### LES TIRS - SHOOTS

Les tirs apparaissent lorsque le joueur appuie sur la touche ***espace*** du clavier, chaque tir est un mobile représenté par la classe Shoot.
En outre, elles disparaissent du jeu lorsqu'ils:
* rentrent en collision avec une soucoupe , alors celle-ci est détruite.
* sortent du jeu par la droite.
Enfin, ces tirs sortent du vaisseau principale et se deplacent, selon un temps donné, sur l'horizontale.