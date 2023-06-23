// Liste de mots à deviner
import WORDS from './words.js';


// Récupération des éléments du DOM
const wordDisplay = document.getElementById('word-display');
const guessesDisplay = document.getElementById('guesses');
const letterInput = document.getElementById('letter-input');
const submitBtn = document.getElementById('submit-btn');
const hangmanDisplay = document.getElementById('hangman-display');
const resultDisplay = document.getElementById('result-display');
const messageDisplay = document.getElementById('message-display');
const restartBtn = document.getElementById('restart-btn');
const modal = document.getElementById('modal');
var titre = document.getElementById('title');


// Gestion des langues
// FR par défaut
let currentLanguage = 'fr';
let myWords = WORDS.fr;

// Récupération des boutons de langue
const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');

// Événement pour changer la langue en français
frBtn.addEventListener('click', function () {
    currentLanguage = 'fr';
    titre.textContent = 'Jeu du pendu';
    letterInput.placeholder = 'Proposez une lettre';
    submitBtn.textContent = 'Proposer';
    hangmanDisplay.textContent = 'Pendu : ' + errors + '/' + maxErrors;
    restartBtn.textContent = 'Rejouer';
    console.log(currentLanguage);
    check_lang();
    resetGame();
});

// Événement pour changer la langue en anglais
enBtn.addEventListener('click', function () {
    currentLanguage = 'en';
    titre.textContent = 'Hangman Game';
    letterInput.placeholder = 'Guess a letter';
    submitBtn.textContent = 'Submit';
    hangmanDisplay.textContent = 'Hangman: ' + errors + '/' + maxErrors;
    restartBtn.textContent = 'Restart';
    console.log(currentLanguage);
    check_lang();
    resetGame();
});




function check_lang() {
    if (currentLanguage === 'fr') {
        myWords = WORDS.fr;
    } else if (currentLanguage === 'en') {
        myWords = WORDS.en;
    }
}




// Fonction pour afficher le mot à deviner
function displayWord() {
    let displayedWord = '';
    for (let i = 0; i < chosenWord.length; i++) {
        if (foundLetters[i]) {
            displayedWord += chosenWord[i];
        } else {
            displayedWord += '_';
        }
        displayedWord += ' ';
    }
    wordDisplay.textContent = displayedWord;
}

// Fonction pour gérer les tentatives du joueur
function handleGuess() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';

    if (!letter.match(/^[a-z]$/)) {
        // alert('Veuillez entrer une seule lettre.');
        return;
    }

    if (!foundLetters.includes(false)) {
        // alert('Vous avez déjà trouvé toutes les lettres. Veuillez recommencer le jeu.');
        showMessage(false);
        return;
    }

    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (normalizeCharacter(chosenWord[i]) === normalizeCharacter(letter)) {
            foundLetters[i] = true;
            found = true;
        }
    }

    if (!found) {
        errors++;
        if (currentLanguage === 'fr') {
            hangmanDisplay.textContent = 'Pendu : ' + errors + '/' + maxErrors;
        } else if (currentLanguage === 'en') {
            hangmanDisplay.textContent = 'Hangman: ' + errors + '/' + maxErrors;
        }


        if (errors === maxErrors) {
            // alert('Vous avez perdu. Le mot était : ' + chosenWord);
            showMessage(false);
            // resetGame();
            return;
        }
    }

    displayWord();

    if (!foundLetters.includes(false)) {
        // alert('Félicitations, vous avez trouvé le mot : ' + chosenWord);
        // resetGame();
        showMessage(true);
    }
}

// Fonction pour afficher un message
function showMessage(isWin) {
    if (currentLanguage === 'fr') {
        if (isWin) {
            resultDisplay.textContent = 'Félicitations !';
            messageDisplay.textContent = 'Vous avez trouvé le mot.';
        } else {
            resultDisplay.textContent = 'Dommage !';
            messageDisplay.textContent = 'Vous avez perdu.';
        }
    } else if (currentLanguage === 'en') {
        if (isWin) {
            resultDisplay.textContent = 'Congratulations!';
            messageDisplay.textContent = 'You found the word.';
        } else {
            resultDisplay.textContent = 'Too bad!';
            messageDisplay.textContent = 'You lost.';
        }
    }

    resultDisplay.classList.remove('hidden');
    messageDisplay.classList.remove('hidden');
    restartBtn.classList.remove('hidden');
    modal.classList.remove('hidden');

    letterInput.disabled = true;
    submitBtn.disabled = true;
    // grise le bouton et l'entrée
    letterInput.classList.add('disabled');
    submitBtn.classList.add('disabled');
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    chosenWord = myWords[Math.floor(Math.random() * myWords.length)];
    console.log(chosenWord);
    foundLetters = new Array(chosenWord.length).fill(false);
    errors = 0;
    if (currentLanguage == 'fr') {
        hangmanDisplay.textContent = 'Pendu : ' + errors + '/' + maxErrors;
    } else if (currentLanguage == 'en') {
        hangmanDisplay.textContent = 'Hangman: ' + errors + '/' + maxErrors;
    }
    displayWord();
    modal.classList.add('hidden');
    letterInput.classList.remove('disabled');
    submitBtn.classList.remove('disabled');
    letterInput.disabled = false;
    submitBtn.disabled = false;
}

// Fonction pour normaliser un caractère en supprimant les accents
function normalizeCharacter(char) {
    return char.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

document.addEventListener('keydown', function (event) {
    const letter = event.key.toLowerCase();

    if (letter.match(/^[a-z]$/) && !letterInput.matches(':focus')) {
        letterInput.value = letter;
    }
    if (event.key === 'Enter') {
        handleGuess();
    }
});



// Lancement de mechanisme du jeu

check_lang(); // Vérifie la langue choisie

// Choix aléatoire d'un mot
let chosenWord = myWords[Math.floor(Math.random() * myWords.length)];
console.log(chosenWord);

// Tableau pour suivre les lettres trouvées
let foundLetters = new Array(chosenWord.length).fill(false);

// Nombre maximum d'erreurs autorisées
const maxErrors = 6;
let errors = 0;


// Événements du bouton et de l'entrée
submitBtn.addEventListener('click', handleGuess);
letterInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleGuess();
    }
});
restartBtn.addEventListener('click', resetGame);

// Initialisation du jeu
displayWord();
hangmanDisplay.textContent = 'Pendu : ' + errors + '/' + maxErrors;
