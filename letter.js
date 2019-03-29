const UNREVEALED_CHAR = "_";

function Letter(value) {
    this.value = value;
    // Function is run during object creation and is set to revealed to false if the passed value is a-z and true if it is not. 
    this.revealed = (function() {
        return !/[a-z]/.test(value.toLowerCase());
    }());

    /** Returns either the letter or a blank depending on the guessed state. */
    this.toString = function() {
        if (this.revealed) {
            return this.value;
        } else {
            return UNREVEALED_CHAR;
        }
    }

    /**Takes a letter and compares it the stored value and returns a bool on whether they match. Updates the guessed bool on a match. */
    this.guess = function(character) {
        if (!this.revealed) {
            if (character.toUpperCase() === this.value.toUpperCase()) {
                this.revealed = true;
                return true;
            }
        }
        //Either the letter wasn't a match or it was already revealed.
        return false;
    }
}


module.exports = Letter;