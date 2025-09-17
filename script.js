/******************************
 * Part 1: Basics
 ******************************/
console.log("=== Part 1: Basics ===");

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let num1 = 10;
let num2 = 5;
console.log("Sum:", num1 + num2);


/******************************
 * Part 2: Functions
 ******************************/
console.log("=== Part 2: Functions ===");

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Patience"));

function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total:", calculateTotal(50, 3));


/******************************
 * Part 3: Loops
 ******************************/
console.log("=== Part 3: Loops ===");

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// While loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


/******************************
 * Part 4: DOM Manipulation
 ******************************/

// 1. Changing text content dynamically
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

greetBtn.addEventListener("click", function () {
  const name = nameInput.value;
  if (name) {
    message.textContent = `Hello, ${name}! Welcome to JavaScript.`;
  } else {
    message.textContent = "Please enter your name.";
  }
});

// 2. Toggling a class to change styles
const toggleBtn = document.getElementById("toggleHighlight");
const box = document.getElementById("highlightBox");

toggleBtn.addEventListener("click", function () {
  box.classList.toggle("highlight");
});

// 3. Creating and appending new list items
const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener("click", function () {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const li = document.createElement("li");
    li.textContent = noteText;
    notesList.appendChild(li);
    noteInput.value = ""; // clear input
  }
});
