const Letter = require("./letter")

function Word(inputString) {
    //Array of new letter objects representing the letters of the underlying word. This function is run on object creation and sets letters to the result.
    this.letters = (function(inputString) {
        let result = []
            //Split the inputString into an array of letters
        inputString.split("").foreach(function(character) {
            result.push(new Letter(character));
        })
        return result;
    })
    this.guessedLetters = [];
    // Returns a string representing the word in it's current revealed state.
    this.toString = function() {
        let result = ""
        this.letters.foreach(function(letter) {
            result += letter.toString();
        })
        return result;
    }
    this.alreadyGuessed = function(guess) {
            return guessedLetters.includes(guess);
        }
        //Checks an input character against all letters in the array and updates any matching letters to revealed. Returns true if any letters are updated false if not.
    this.guess = function(guessedLetter) {
            let result = false;
            this.letters.foreach(function(letter) {
                if (letter.guess(guessedLetter)) {
                    result = true;
                }
            })
            return result;
        }
        // Checks each letter for revealed status, returns true if all are revealed.
}






module.exports = Word;