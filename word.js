const Letter = require("./letter")

function Word(inputString) {
    //Array of new letter objects representing the letters of the underlying word. This function is run on object creation and sets letters to the result.
    this.letters = (function() {
        let result = []
            //Split the inputString into an array of letters
        inputString.split("").forEach(function(character) {
            result.push(new Letter(character));
        })
        return result;
    }())
    this.guessedLetters = [];
    // Returns a string representing the word in it's current revealed state.
    this.toString = function() {
        let result = ""
        this.letters.forEach(function(letter) {
            result += letter.toString();
        })
        return result;
    }
    this.alreadyGuessed = function(guess) {
            return this.guessedLetters.includes(guess);
        }
        //Checks an input character against all letters in the array and updates any matching letters to revealed. Returns true if any letters are updated false if not.
    this.guess = function(guessedLetter) {
            let result = false;
            this.guessedLetters.push(guessedLetter);
            this.letters.forEach(function(letter) {
                if (letter.guess(guessedLetter)) {
                    result = true;
                }
            })
            return result;
        }
        // Checks each letter for revealed status, returns true if all are revealed.
    this.hasWon = function() {
        let result = true;
        this.letters.forEach(function(letter) {
            if (!letter.revealed) {
                result = false;
            }
        });
        return result;
    }
}


module.exports = Word;