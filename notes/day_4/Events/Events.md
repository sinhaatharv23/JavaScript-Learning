⭐ What Are Events in JavaScript?

Events are actions or occurrences that happen inside the browser — and JavaScript can “react” to them.

Think of events as triggers.

Example events:

A button is clicked

A user types something

The page loads

Mouse moves

A key is pressed

A form is submitted

JavaScript listens for these actions and then runs some code.

⭐ Why Do We Use Events?

Because JavaScript is used to make websites interactive.

Example:

<button id="btn">Click me</button>


JavaScript:

document.getElementById("btn").addEventListener("click", function () {
  console.log("Button was clicked!");
});


👉 When the button is clicked → the function runs → “Button was clicked!” appears.

⭐ Most Important Events (Beginner Friendly)
🔹 Mouse Events
Event	Meaning
click	User clicks an element
dblclick	Double click
mouseover	Mouse enters an element
mouseout	Mouse leaves an element
mousemove	Mouse moves
🔹 Keyboard Events
Event	Meaning
keydown	Key pressed (fires immediately)
keyup	Key released
keypress	Key pressed (deprecated, don't use now)

Example:

document.addEventListener("keydown", (e) => {
  console.log("You pressed:", e.key);
});

🔹 Form Events
Event	Meaning
submit	Form submitted
change	Value changed (like dropdown, checkbox)
input	User types (fires on each keystroke)
🔹 Window Events
Event	Meaning
load	Page fully loaded
scroll	User scrolls
resize	Window size changes

Example:

window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

⭐ How to Add Events?
✅ 1. Best way → addEventListener()
button.addEventListener("click", function() {
  console.log("Clicked!");
});

❌ 2. Don’t use this older inline method
<button onclick="alert('Hi!')">Click</button>

⭐ Event Object (event or e)

Whenever an event occurs, JavaScript gives extra info inside an event object.

Example:

document.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY); // mouse position
});

⭐ Real-Life Analogy

Think of events like sensors in a smart home:

Motion sensor → JavaScript runs code

Door opens → JavaScript runs code

Light switch toggles → JavaScript runs code

Exactly like that, elements in a webpage have sensors called events.

⭐ Most Important Concept: Event Listener

“When ___ happens, do ___.”

Example:

element.addEventListener("event", callbackFunction);

⭐ Small Demo Example

HTML:

<input id="name" placeholder="Type your name" />
<p id="output"></p>


JS:

document.getElementById("name").addEventListener("input", (e) => {
  document.getElementById("output").textContent = e.target.value;
});


👉 As you type → text updates live.