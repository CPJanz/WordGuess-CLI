# WordGuess-CLI

Wordguess-CLI is a game run in the command line. The player tries to guess the hidden quote by picking letters. If they reveal the message before they run out of guesses, the win!

## Installation Instructions

* Clone the the repo from [github](https://github.com/CPJanz/WordGuess-CLI).
* Run `npm install` in the cloned folder.
* You're now ready to use WordGuess-CLI.

## Usage

`node index.js` to begin running the game.

Example [video](https://drive.google.com/file/d/1r489U2NeFyenaY67-lBnL4SBhhr1m_x9/view)

## Packages used

fs - To read from the text file of saved quotes
inquirer - To handle user input.

## Lessons Learned

* Once again, spending a bit of time to plan my approach made this assignment much easier than it coud have been.

* I learned about self invoking anonomous functions and utilized them to initialize the letters array in the word object as well as the revealed property in the letter object. [Article](https://blog.mgechev.com/2012/08/29/self-invoking-functions-in-javascript-or-immediately-invoked-function-expression/) on their uses.

* I began learning about creating JSDoc markup to pass information to the IDE to show the user when using methods and objects I've created (See letter.js and word.js for examples). [Wikipedia](https://en.wikipedia.org/wiki/JSDoc) link to JSDoc.

### Note

This projecct has been added to my temporary portfolio [page](http://cpjanz.github.io/Responsive-Portfolio). If I decide that it is one that I will use for my public portfolio I will update the screenshot and add it to the new page.
