# AUTEURS: Souleymane Diallo 

# TP2 - LE JEU DONJON

L'objectif de ce tp était de programmer un jeu Donjon. Le joueur dois traverser des salles pour trouver la sortie.
Dans chaque salle le joueur rencontrera des monstres qu'il devra battre pour pouvoir avancer. Le joueur peut aussi collecter des objets et ainsi collecter des pièces d'or, gagner de la force, de la vie...
Le joueur a des actions prédéfinies qu'il pourra utiliser tout au long du jeu. Le joueur perd la partie s'il est battu par un monstre avant de trouver la sortie.

## How to

Récupérer le projet par:
```
% git pull
```


### GENERER LA DOCUMENTATION

A la racine du Donjon, dans la console tapez:
```
$ mvn javadoc:javadoc
```
Pour la consulter:
```
$ xdg-open target/docs/index.html
```

### COMPILER, TESTER LES CLASSES AVEC JUnit4 ET GENERER LE FICHIER EXECUTABLE

A la racine du projet Donjon tapez:
```
$ mvn package
```

### LANCER LE FICHIER EXECUTABLE
A la racine du projet Donjon, après avoir compilé (voir plus haut), tapez:
```
$ java -jar target/Donjon-1.0-SNAPSHOT.jar
```

### ELEMENTS DE CONCEPTION

- Le menu permettant d'afficher et de récupérer le choix du joueur est générique.
- Les "Rooms" sont remplies aléatoirement de monstres et d'objets.
- La création aléatoire des listes de monstres et d'objets et fait via une classe générique.
- Nous avons utilisés le design pattern adapter pour développer les Actions et Strategy pour les Items.

**LE DIAGRAMME UML DU PROJET SE TROUVE DANS LE FICHIER DonjonUML.gif**

> **Note:** POUR PLUS D'INFOS SUR LES CLASSES VOIR LA DOCUMENTATION (section GENERER LA DOCUMENTATION)
