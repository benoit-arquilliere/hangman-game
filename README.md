![forthebadge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=white)

![forthebadge](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)

![forthebadge](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)


# HANGMAN GAME (JEU DU PENDU)


## Présentation du projet

Ceci est un projet personnel réalisé sur mon temps libre afin de m'entraîner à la programmation en JavaScript.    
L'objectif est de créer un jeu en 1 heure en utilisant ce langage de programmation.  

Le jeu du pendu est un jeu de devinettes dans lequel un joueur doit deviner un mot en proposant des lettres. Chaque fois qu'une lettre proposée est incorrecte, une partie du corps d'un personnage est dessinée sur une potence, d'où le nom du jeu.
____

##  Règles du jeu

Le jeu du pendu fonctionne de la manière suivante :

- Le programme choisit un mot au hasard parmi une liste prédéfinie de mots.  
- Le joueur doit deviner le mot en proposant des lettres une par une.
- Si la lettre proposée par le joueur est présente dans le mot, elle est affichée à sa position respective dans le mot.
- Si la lettre proposée par le joueur n'est pas présente dans le mot, une partie du corps du personnage est ajoutée à la potence.
- Le joueur continue à proposer des lettres jusqu'à ce qu'il devine correctement le mot ou que le personnage soit complètement dessiné sur la potence.
- Le joueur gagne s'il parvient à deviner le mot avant que le personnage ne soit totalement dessiné. Sinon, il perd la partie.
____
  
## Eléments supplémentaires


- Pour simplifier le jeu, j'ai mis un nombre d'erreur maximum à 6, ce qui correspond au nombre de parties du corps du personnage.   


- La liste de mots est présente dans le fichier `words.js`.
Celui-ci est modulable et se présente de la façon suivante :

```javascript
    const WORDS = {
    fr: [
        'pendu',
        'ordinateur',
        'javascript',
        'programmation',
        'jeu',
        'étape',
        'Mafia',
        'Soupe',
        'Brouette',
        'Battre',
        'Oeil',
        'Cellules',
        'Parasol',
        'Dispositifs',
        'Artiste',
        'Trafic'
    ],
    en: [
        'hangman',
        'computer',
        'javascript',
        'programming',
        'game',
        'step',
        'Mafia',
        'soup',
        'Brown',
        'Beat',
        'Oil',
        'Cellular',
        'Beach umbrella',
        'Devices',
        'Artist',
        'Traffic'
    ]
};

export default WORDS;
```

- J'ai également ajouté la possibilité de choisir la langue du jeu directement depuis la page de jeu.  

- Une fois la partie terminée, le joueur peut choisir de rejouer ou de quitter le jeu.  

____

