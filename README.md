### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dmitry-Skladchikov/frontend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dmitry-Skladchikov/frontend-project-lvl1/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/ccb9e9df1975ff8e4272/maintainability)](https://codeclimate.com/github/Dmitry-Skladchikov/frontend-project-lvl1/maintainability)

# Brain games

“Brain games” is a set of five console games built on the principle of popular mobile applications for brain training. Each game asks questions that must be answered correctly. After three correct answers, the game is considered completed. Wrong answers end the game and prompt you to play it again.

Games:
- Determination of an even number.
- Definition of a prime number.
- Calculator. Arithmetic expressions to be evaluated.
- Progression. Finding missing numbers in a sequence of numbers.
- Determination of the greatest common divisor.

## Installation

### Cloning the project
```
git clone https://github.com/Dmitry-Skladchikov/frontend-project-lvl1.git
```

### Install dependencies in the project folder
```
npm ci
```

### Install the package on the system
```
sudo npm link
```

## Game: "Parity check"

 The player is shown a random number. He needs to answer **yes** if the number is even, or **no** if it is odd.

### Command to start the game

```
brain-even
```  

### Example gameplay

[![asciicast](https://asciinema.org/a/635929.svg)](https://asciinema.org/a/635929)

## Game: "Calculator"

The player is shown a random mathematical expression that must be calculated and the correct answer written down.

### Command to start the game

```
brain-calc
```  

### Example gameplay

[![asciicast](https://asciinema.org/a/636292.svg)](https://asciinema.org/a/636292)

## Game: "JCD"

The player is shown two random numbers. It is necessary to calculate and enter the greatest common divisor of these numbers.

### Command to start the game

```
brain-gcd
```  

### Example gameplay

[![asciicast](https://asciinema.org/a/636575.svg)](https://asciinema.org/a/636575)

## Game: "Arithmetic progression"

The player is shown a series of numbers forming an arithmetic progression. You need to guess the hidden number.

### Command to start the game

```
brain-progression
```  

### Example gameplay

[![asciicast](https://asciinema.org/a/637065.svg)](https://asciinema.org/a/637065)

## Game: "Is the number prime?"

The player is shown a random number. He needs to answer **yes** if the number is prime, or **no** if not.

### Command to start the game

```
brain-prime
```  

### Example gameplay

[![asciicast](https://asciinema.org/a/637075.svg)](https://asciinema.org/a/637075)