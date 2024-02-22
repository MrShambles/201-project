function getName() {
  let name = prompt("What is your name?");
  document.write("Thank you for coming to my page " + name + "!")
}

function getAge() {
  let age = prompt("Are you over 30?");
  let answer = age.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("Nice! I am right around the corner to 30.");
    return true;
  } else {
    document.write("Enjoy your 20s while you can!");
    return false;
  }
}

function guessMyFavoriteColor() {
  let favoriteColors = ["Orange", "Red"];
  let guess = prompt("Guess my favorite Colors");
  guess = guess.toLowerCase();
  if( favoriteColors.includes(guess)) {
    document.write("Fantastic guess!")
    return true;
  } else {
    document.write("Close! But no cigar!")
    return false;
  }
}

function whichCoast() {
  let coast = prompt("Are you from the West Coast?")
  let answer =coast.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("The west coast aint all that bad!")
    return true;
  } else {
    document.write("East coast is really the best coast....")
    return false;
  }
}

function anyPets() {
  let pets = prompt("Do you have think I have any pets?")
  let answer =pets.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("Correct! I have a Border Collie named Phantom!👻")
    return true;
  } else {
    document.write("Incorrect! I have 1 dog!")
    return false;
  }
}

function everSnowboard() {
  let snowboard = prompt("Do you think I have ever been Snowboarding?🏂")
  let answer =snowboard.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("I love snowboarding, my favorite place for it is Japan!")
    return true;
  } else {
    document.write("incorrect! I love snowboarding!")
    return false;
  }
}

function guessingGame() {
  let statesLivedIn = 8;
  let attempts = 4;

  for (let i = 0; i < attempts; i++) {
      let guess = parseInt(prompt("Guess how many states I have lived in (between 1 and 10):"));

      if (guess === statesLivedIn) {
          alert("Congratulations! You guessed it right.");
          correctGuess = true;
          return true;
          break;
      } else if (guess < statesLivedIn) {
          alert("Too low! Try again.");
          return false;
      } else {
          alert("Too high! Try again.");
          return false;
      }
  }
if (!correctGuess) {
  alert("Sorry, you've run out of attempts. The correct answer is " + statesLivedIn + ".");
}
}
function guessCar() {
  let possibleVehicles = ["bike", "truck","motorcycle"];
  let attempts = 6;

  for (let i = 0; i < attempts; i++) {
    let guess = prompt("Can you guess one type of vehicle I own? (Hint: I have more than one)");

    if (possibleVehicles.includes(guess.toLowerCase())) {
      alert("Congratulations! You guessed it right.");
      return true;
    } else {
      let remainingAttempts = attempts - (i + 1); // Calculate remaining attempts
      if (remainingAttempts > 0) {
        alert("Sorry, that's incorrect. You have " + remainingAttempts + " attempts left.");
      } else {
        alert("Sorry, you've run out of attempts. The possible correct answers are: " + possibleVehicles.join(", "));
        return false;
      }
    }
  }
}




