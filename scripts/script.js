/*  
Author: Shilu Manandhar
File Name: styles.css
Date: 03/02/2026
*/

// Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}

// Function to display the first answer
function ans1() {
  heading.style.display = "block";
  answer.textContent =
    "If you find an orphaned baby animal, it's best to observe from a distance first. Mothers often leave their young for short periods.";
}

// Function to display the second answer
function ans2() {
  heading.style.display = "block";
  answer.textContent =
    "Common signs of rabies include aggression, disorientation, and excessive drooling. Do not approach the animal.";
}

// Function to display the third answer
function ans3() {
  heading.style.display = "block";
  answer.textContent =
    "No, most birds have a poor sense of smell and will not abandon a baby just because it was touched by a human.";
}

// Function to display the fourth answer
function ans4() {
  heading.style.display = "block";
  answer.textContent =
    "You can volunteer by filling out the application on our Contact page or attending our next orientation.";
}
