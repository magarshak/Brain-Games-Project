# Brain Games Project

### Tests and code analysis:
[![Actions Status](https://github.com/magarshak/brain-games-project/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/magarshak/brain-games-project/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/4adba62c404a5d10651a/maintainability)](https://codeclimate.com/github/magarshak/brain-games-project/maintainability)

## About project
__Brain Games__ - a set of 5 console games that will require some brainstorming. Each game asks 3 questions. The player must give the correct answer to 3 questions in a row. An incorrect answer (or any incorrect input) ends the game.

## How to install
Before you start, make sure that:
1. You are using a development-friendly operating system (e.g. Ubuntu, macOS). For Windows owners, I recommend that you set up a Windows Subsystem for Linux (WSL).
2. You know how to start a terminal and can execute commands in it.

If you understand what is written above, you need to execute the following commands:
```sh
$ git clone git@github.com:magarshak/brain-games-project.git
$ cd brain-games-project/
$ make install
$ npm link
```
## Game 1 - Brain Even
The parity check game. The essence of the game is as follows: a random number is shown to the player. He needs to answer 'yes' if the number is even, or 'no' if it's odd.

Start the game:
``
$ brain-even
``

[![asciicast](https://asciinema.org/a/2QiDnncszr6KkKknDgXK4IkW4.svg)](https://asciinema.org/a/2QiDnncszr6KkKknDgXK4IkW4)

> <sup>Note: in these and subsequent terminal session entries, you can see that the project directory is named “.../frontend-project-44”. This is the old name of my project. In your case, the directory after cloning the repository will be named “.../brain-games-project”.</sup>

## Game 2 - Brain Calc
The Calculator game. The essence of the game is as follows: the player is shown a random mathematical expression, for example 35 + 16, which needs to be calculated and written down the correct answer.

Start the game:
``
$ brain-calc
``

[![asciicast](https://asciinema.org/a/SMuOYarwCY59DWdbXegtEYIC0.svg)](https://asciinema.org/a/SMuOYarwCY59DWdbXegtEYIC0)

## Game 3 - Brain GСD
The greatest common divisor game. The essence of the game is as follows: the player is shown two random numbers, for example, 25 50. The player must calculate and enter the largest common divisor of these numbers.

Start the game:
``
$ brain-gсd
``

[![asciicast](https://asciinema.org/a/aXNZqV8ZqGELaDjEYOjkG7iWk.svg)](https://asciinema.org/a/aXNZqV8ZqGELaDjEYOjkG7iWk)

## Game 4 - Brain Progression
The player is shown a series of numbers forming an arithmetic progression, replacing any of the numbers with two dots. The player must determine this number.

Start the game:
``
$ brain-progression
``

[![asciicast](https://asciinema.org/a/pdHmFyMFwtJdyJtELhWr6T7NF.svg)](https://asciinema.org/a/pdHmFyMFwtJdyJtELhWr6T7NF)

## Game 5 - Brain Prime
The prime check game. Game task: a random number is shown to the player. He needs to answer 'yes' if the number is prime, or 'no' if it's not.

Start the game:
``
$ brain-prime
``

[![asciicast](https://asciinema.org/a/N99SD8NPmI7UlJjJz11mbv9yb.svg)](https://asciinema.org/a/N99SD8NPmI7UlJjJz11mbv9yb)
##
Thanks for your attention!