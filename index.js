const Word = require("./word");
const inquirer = require("inquirer");
const PHRASE_LIST = ["It is a good day to die!", "The king is dead, long live the king.", "Life is like a box of chocolates"];
const STARTING_LIVES = 15;
let lives;
let gameWord;

//TODO: Define a game
function game() {
    // Game starts with a random phrase being chosen and lives being set. 
    gameWord = new Word(PHRASE_LIST[Math.floor(Math.random() * PHRASE_LIST.length)]);
    lives = STARTING_LIVES;
    //Then begins taking turns until the game ends.
    takeTurn();
}

function takeTurn() {
    let promptString = gameWord.toString() + "\n\n Select a letter (case doesn't matter)."
    inquirer.prompt([{
                    type: "input",
                    name: "guessedLetter",
                    message: promptString
                }
            }


            //TODO: Prompts the player for a guess
            //TODO: Keep prompting until the player has guessed all letters or is out of guesses
            //TODO: Prompt for another game