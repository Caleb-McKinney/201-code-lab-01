"use strict";

let userName = prompt("Welcome, What is your name?");
alert(userName + ", welcome to my page");

if (userName) {
  let yourPoints = 0;
function baseballQuestion(){
  let greeting = prompt("Am I a baseball fan?'").toLowerCase();
  //console.log(greeting + "," + alert + "That's right");
  if (greeting == "yes" || greeting == "y") {
    //console.log("greeting: " + greeting);
    alert("That's right!");
    yourPoints++;
  } else {
    //console.log("Sorry, wrong answer.");
    alert("Sorry, wrong answer.");
  }
}
baseballQuestion();

function kidsQuestion(){
  let anyKids = prompt("Do I have kids?").toLowerCase();
  //console.log(codeSchool + "," + alert + "You're right I have 2.");
  if (anyKids == "yes" || anyKids == "y") {
    alert("You're right, I have 2.");
    yourPoints++;
  } else {
    alert("Wrong answer, I have 2 kids.");
  }
}
kidsQuestion();

function cookQuestion(){
  let muffinMan = prompt("Can i cook?").toLowerCase();
  //console.log(muffinMan + "," + alert + "Sure can and my kids say it's good.");
  if (muffinMan == "yes" || muffinMan == "y") {
    alert("Sure can and my kids say I'm good at it.");
    yourPoints++;
  } else {
    alert("Incorrect");
  }
}
cookQuestion();

function nicklebackQuestion(){
  let photoGraph = prompt("Do I like Nickelback").toLowerCase();
  //console.log(theFair + "," + alert + "False Hobbit");
  if (photoGraph == "yes" || photoGraph == "y") {
    alert("False, that is incorrect.");
    yourPoints++;
  } else {
    alert("Mostly correct, but would you look at this photograph!");
  }
}
nicklebackQuestion();
function jokesQuestion(){
  let funnyPage = prompt("Do you like Dad jokes?").toLowerCase();
  //console.log(funnyPage + "," + alert + "good, carry on");
  if (funnyPage == "yes" || funnyPage == "y") {
    alert("good, carry on my wayward son.");
    yourPoints++;
  } else {
    alert("Please try again.");
  }
}
jokesQuestion();
  alert(userName + ", Thank you for your participation");

  let pickaNumber = 4;
  let yourGuess;

  while (pickaNumber !== yourGuess) {
    yourGuess = prompt("guess a number between 1 and 10");
    yourGuess = parseInt(yourGuess);

    if (yourGuess < pickaNumber) {
      alert("Too low, try again!");
    } else if (yourGuess > pickaNumber) {
      alert("Too high, guess again.");
    } else if (yourGuess === pickaNumber) {
      alert("That's right! The answer was " + pickaNumber);
      yourPoints++;
    }
  }

  //let tries = 4;

  //triesLeft: while (tries !== 0) {
  //tries--;
  //yourGuess = prompt("Try to guess the number!");
  //}

  alert("Great job! Your score is " + yourPoints);
}

//let colorsArray = ["green", "blue", "red", "pink", "brown", "gray"];
//let guesses = 6;

//hasGuesses;
//while (guesses !== 0) {
//guesses--;
//letGuess = prompt("Guess one of our favorite colors");

//  for (let i = 0; i < colorsArray.length; i++) {
//  if (letGUess ===) colorsArray[i]) {
//  alert("Correct! " + colorsArray[i]) + " is a great color";
//break hasGuesses;
//   }
