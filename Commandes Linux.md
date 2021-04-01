# Commandes Linux

## Création   
Installation machine :  
Suivre ce tutoriel :  https://docs.microsoft.com/en-us/windows/wsl/install-win10  
(création de l'utilisateur)  

Personalisation du terminal : voir dans "setting.json"

## Commandes installation machine & mise à niveau
Mise à niveau de Unbuntu 20.04 : `sudo apt update && sudo apt upgrade`  
`sudo` permet de passer en mode Super utilisateur

**Installation de NVM :**   
Lien pour l'installation : https://github.com/nvm-sh/nvm   
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`   

Fermer et reouvrir le Terminal !  

Vérifier l'installation :   
`command -v nvm` => `nvm`   

Activation de NVM et affichage des options :   
`nvm on`  

Installation de NODE.js :  
`nvm install node`  

Liaison VS Code à WSL 2 :  
Extensions => installer **Remote - WSL**  
Dans le terminal => `code .`  

## Paramètres VS Code
### Paramètres
- tab size
- format on save

### Extensions
- Code Runner
- Live Server


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
https://github.com/AbsoluteVirtueXI/blockchain-courses/blob/master/programming/02-setup-dev-environment.md 
### Configuration de git
`git config --global user.name "Your Github username"`
`git config --global user.email "youremail@domain.com"`
### Créer un dossier lié à GitHub

1. Créer un "repository" sur GitHub  
2. Créer un dossier du même nom sur Unbuntu  
3. *(optionnel mais recommandé)* Créer un fichier README.md :  
`echo "# Début du README" >> README.md`
4. Initialisation avec GitHub :  
  `git init`  
  Rendu : `Initialized empty Git repository in /home/raphael/alyra/TEST/.git/`
5. Ajouter le README.md au dossier :  
  `git add README.md`
6. Valider les modifications faites (l'ajout du README.md) :  
  `git commit -m "Message annexe à la modification"`  
  Rendu : `[master (root-commit) cb0bef6] Message annexe à la modification
 1 file changed, 1 insertion(+)
 create mode 100644 README.md`  
 7. Association à la branche principale de GitHub (main) :  
 `git branch -M main`

8. `git remote add origin https://github.com/RaphaelHardFork/TEST.git`
9. Transmettre les modifications à GitHub  
`git push -u origin main`  
**Username & password GitHub requis**  
Rendu : `Enumerating objects: 3, done.`  `Counting objects: 100% (3/3), done.`  `Writing objects: 100% (3/3), 252 bytes | 126.00 KiB/s, done.`  `Total 3 (delta 0), reused 0 (delta 0)`  `To https://github.com/RaphaelHardFork/TEST.git`  ` * [new branch]      main -> main`  `Branch 'main' set up to track remote branch 'main' from 'origin'.`    

L'initialisation est ok

### Créer un clone sur GitHub
1. Appuyer sur fork sur un repo sur GitHub  
Le dossier est copier sur GitHub
2. Go Code puis copier dans le press papier le lien
3. Aller dans le terminal, dans le dossier où l'on veut coller le dossier  
Taper la commande `git clone https://leliencopiercidessus`   
Le dossier est copier en local


## Installation de Yarn
https://github.com/AbsoluteVirtueXI/blockchain-courses/blob/master/node/1-node-introduction.md 
### Installation global de Yarn
`npm install -g yarn`  

Verification de la version :  
`yarn --version`

### Initiation d'un package avec yarn
Dans le dossier du package en cours de création : `yarn init -y`

Ajouter un fichier .gitignore :  
`echo "node_modules">>.gitignore`  
Ajouter un code plus complet dans le .gitignore : https://github.com/github/gitignore/blob/master/Node.gitignore 

Utiliser `git add .` pour ajouter le README.md, .gitignore et le package.json