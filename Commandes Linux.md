# Commandes Linux

## Commandes installation & mise à niveau
Mise à niveau de Unbuntu 20.04 : `sudo apt update && sudo apt upgrade`
`sudo` permet de passer en mode Super utilisateur

Installation de NVM : `curl-o-https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh|bash`
`curl` permet de télécharger le fichier du lien qui suit.
`| bash` permet d'executer le fichier une fois téléchargé.


Puis `nvm on` permet d'activer NVM (activé par défault) et voir les commandes asociées

Installation de Node : `nvm install node` permet d'installer la dernière version stable de Node


## Commandes de gestion des répertoires
*D'après le cours du 11/02 et https://www.hostinger.fr/tutoriels/commandes-linux/*

`~` Permet d'afficher la racine de Linux (home/utilisateur/).
`cd` Pour "change directory", permet de changer de répertoire. Donc `cd ~` permet de se placer à la racine de Linux. 
On peut simplement écrire `cd` pour aller à la racine.
`cd ..` permet de remonter d'un niveau dans l'arborescence.
`cd -` permet de se déplacer vers le précédent répertoire.

`pwd` pour savoir où l'on est dans l'arborescence.

`ls` permet de lister les fichiers et répertoires dans le répertoire où l'on est. 
Des options peuvent être ajoutée comme `ls -filah` pour afficher les dossiers et fichiers cachés.
`ls -al` à plus ou moins la même fonction
`ls -R` permet de lister les répertoires et fichiers dans les sous répertoires.

`mkdir` permet de créer un répertoire

`cp` permet de copier des éléments

`mv`

`rf` suppression de fichier

`code` permet d'ouvrir VScode. On ajoute un point après un espace pour l'ouvrir dans le répertoire où l'on est.

`node [nomdufichier.extension]` permet d'executer le fichier sélectionné.

## Commandes concernant GitHub
`git init` 