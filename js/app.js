let score = 0; // Initialize score variable

function getName() {
  let name = prompt("What is your name?");
  document.write("Thank you for coming to my page " + name + "!");
}

function getAge() {
  let age = prompt("Are you over 30?");
  let answer = age.charAt(0).toLowerCase();
  if (answer === "y") {
    document.write("Nice! I am right around the corner to 30.");
    score++; // Increment score for correct answer
    return true;
  } else {
    document.write("Enjoy your 20s while you can!");
    return false;
  }
}

function guessMyFavoriteColor() {
  let favoriteColors = ["orange", "red"];
  let guess = prompt("Guess my favorite Colors");
  guess = guess.toLowerCase();
  if (favoriteColors.includes(guess)) {
    document.write("Fantastic guess!");
    score++; // Increment score for correct answer
    return true;
  } else {
    document.write("Close! But no cigar!");
    return false;
  }
}

function whichCoast() {
  let coast = prompt("Are you from the West Coast?");
  let answer = coast.charAt(0).toLowerCase();
  if (answer === "y") {
    document.write("The west coast aint all that bad!");
    score++; // Increment score for correct answer
    return true;
  } else {
    document.write("East coast is really the best coast....");
    return false;
  }
}

function anyPets() {
  let pets = prompt("Do you think I have any pets?");
  let answer = pets.charAt(0).toLowerCase();
  if (answer === "y") {
    document.write("Correct! I have a Border Collie named Phantom!👻");
    score++; // Increment score for correct answer
    return true;
  } else {
    document.write("Incorrect! I have 1 dog!");
    return false;
  }
}

function everSnowboard() {
  let snowboard = prompt("Do you think I have ever been Snowboarding?🏂");
  let answer = snowboard.charAt(0).toLowerCase();
  if (answer === "y") {
    document.write("I love snowboarding, my favorite place for it is Japan!");
    score++; // Increment score for correct answer
    return true;
  } else {
    document.write("Incorrect! I love snowboarding!");
    return false;
  }
}

function guessingGame() {
  let statesLivedIn = 8;
  let attempts = 4;
  let correctGuess = false;
  for (let i = 0; i < attempts; i++) {
    let guess = parseInt(prompt("Guess how many states I have lived in (between 1 and 10):"));
    if (guess === statesLivedIn) {
      correctGuess = true;
      score++; // Increment score for correct answer
      break;
    } else if (guess < statesLivedIn) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
  }
  return correctGuess;
}

function guessCar() {
  let possibleVehicles = ["bike", "truck", "motorcycle"];
  let attempts = 6;
  let correctGuess = false;
  for (let i = 0; i < attempts; i++) {
    let guess = prompt("Can you guess one type of vehicle I own? (Hint: I have more than one)");
    if (possibleVehicles.includes(guess.toLowerCase())) {
      correctGuess = true;
      score++; // Increment score for correct answer
      break;
    } else {
      let remainingAttempts = attempts - (i + 1);
      if (remainingAttempts > 0) {
        alert("Sorry, that's incorrect. You have " + remainingAttempts + " attempts left.");
      } else {
        alert("Sorry, you've run out of attempts. The possible correct answers are: " + possibleVehicles.join(", "));
      }
    }
  }
  return correctGuess;
}

function getScore() {
  document.write("<br>Your score correct!: " + score);
}

