"use strict";

let userName = prompt("Welcome, What is your name?");
alert(userName + ", welcome to my page");

let greeting = prompt("Am I a baseball fan?'").toLowerCase();
//console.log(greeting + "," + alert + "That's right");
if (greeting == "yes" || greeting == "y") {
  //console.log("greeting: " + greeting);
  alert("That's right!");
} else {
  //console.log("Sorry, wrong answer.");
  alert("Sorry, wrong answer.");
}
let anyKids = prompt("Do I have kids?").toLowerCase();
//console.log(codeSchool + "," + alert + "You're right I have 2.");
if (anyKids == "yes" || anyKids == "y") {
  alert("You're right, I have 2.");
} else {
  alert("Wrong answer, I have 2 kids.");
}
let muffinMan = prompt("Can i cook?").toLowerCase();
//console.log(muffinMan + "," + alert + "Sure can and my kids say it's good.");
if (muffinMan == "yes" || muffinMan == "y") {
  alert("Sure can and my kids say I'm good at it.");
} else {
  alert("Incorrect");
}

let photoGraph = prompt("Do I like Nickelback").toLowerCase();
//console.log(theFair + "," + alert + "False Hobbit");
if (photoGraph == "yes" || photoGraph == "y") {
  alert("False, that is incorrect.");
} else {
  alert("Mostly correct, but would you look at this photograph!");
}
let funnyPage = prompt("Do you like Dad jokes?").toLowerCase();
//console.log(funnyPage + "," + alert + "good, carry on");
if (funnyPage == "yes" || funnyPage == "y") {
  alert("good, carry on my wayward son.");
} else {
  alert("Please try again.");
}
alert(userName + ", Thank you for your participation");
