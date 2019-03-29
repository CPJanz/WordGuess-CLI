const Word = require("./word");
const inquirer = require("inquirer");
const fs = require("fs");
const STARTING_LIVES = 5;
let phraseList = ["It is a good day to die! - Worf"]
let lives;
let gameWord;

// Read in the quotes stored in the quotes.txt file and process them.
fs.readFile("quotes.txt", "utf8", function(error, data) {
    if (error) { return console.log(error); };
    phraseList = data.split("|");
    game();
});

function game() {
    // Game starts with a random phrase being chosen and lives being set. 
    gameWord = new Word(phraseList[Math.floor(Math.random() * phraseList.length)]);
    lives = STARTING_LIVES;
    printNewGame();
    takeTurn();
}

function takeTurn() {
    printNewTurn();
    // Shows current word status and prompts the player for a guess
    inquirer.prompt([{
        type: "input",
        name: "guessedLetter",
        message: "Select a letter:",
        filter: function(input) {
            return input.toLowerCase();
        },
        validate: function(input) {
            if (input.length === 1) {
                if (/[a-z]/.test(input)) {
                    if (!gameWord.alreadyGuessed(input)) {
                        return true;
                    }
                    console.log(" That has already guessed!");
                    return false;
                }
                console.log(" That is not a letter!");
                return false;
            }
            console.log(" Please input one letter!");
            return false;
        }
    }]).then(function(input) {
        // Prompt has cleaned input. Perform a guess, and decriment lives if it is an incorrect guess (no letters flipped).
        if (gameWord.guess(input.guessedLetter)) {
            // Correct guess, at least one letter was revealed by the guess.
            if (gameWord.hasWon()) {
                //Game has been won, display congratutlations and prompt for new game
                console.clear();
                console.log("You Won!");
                promptForNewGame();
            } else {
                // Game has not been won, prompt for another letter.
                console.clear();
                console.log("Correct!!")
                takeTurn();
            }
        } else {
            // Incorrect guess, (no letters were revealed by the guess). Decrement lives and check for game loss.
            lives--;
            if (lives > 0) {
                console.clear();
                console.log("Sorry, none of those.");
                takeTurn();
            } else {
                console.clear();
                console.log("You Lost!")
                promptForNewGame();
            }
        }
    });
}

function promptForNewGame() {
    printNewTurn();
    inquirer.prompt([{
        type: "confirm",
        name: "newGame",
        message: "Play again?"
    }]).then(function(answer) {
        if (answer.newGame) {
            game();
        } else {
            console.log("Farewell...");
        }
    });
}

function printNewGame() {
    console.clear();
    console.log("Welcome to quote guesser!\n");
    console.log("I have cleverly hidden a quote, can you guess letters to reveal it before you run out of lives!?\n\n");
    console.log("Good Luck!\n")
}

function printNewTurn() {
    console.log("\n\n     " + gameWord.toString() + "\n\nLives Left: " + lives);
}