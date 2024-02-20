function getName() {
  let name = prompt("What is your name?");
  document.write("Thank you for coming to my page " + name + "!")
}

function getAge() {
  let age = prompt("Are you over 30?");
  let answer = age.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("Nice! I am right around the corner to 30.");
  } else {
    document.write("Enjoy your 20s while you can!")
  }
}

function guessMyFavoriteColor() {
  let favoriteColors = ["Orange", "Red"];
  let guess = prompt("Guess my favorite Colors");
  guess = guess.toLowerCase();
  if( favoriteColors.includes(guess)) {
    document.write("Fantastic guess!")
  } else {
    document.write("Close! But no cigar!")
  }
}

function whichCoast() {
  let coast = prompt("Are you from the West Coast?")
  let answer =coast.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("The west coast aint all that bad!")
  } else {
    document.write("East coast is really the best coast....")
  }
}

function anyPets() {
  let pets = prompt("Do you have any pets?")
  let answer =pets.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("I also have a pet! I have a Border Collie named Phantom!👻")
  } else {
    document.write("There's nothing wrong with that! You save money!")
  }
}

function everSnowboard() {
  let snowboard = prompt("Have you ever been Snowboarding?🏂")
  let answer =snowboard.charAt(0).toLowerCase();
  if( answer === "y") {
    document.write("I love snowboarding, my favorite place for it is Japan!")
  } else {
    document.write("Would you ever want to learn how to snowboard?")
  }
}
