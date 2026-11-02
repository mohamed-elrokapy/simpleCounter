// Tally counter. The count never goes below zero (same rule as the original).
const output = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");

let count = 0;

function render() {
  output.textContent = String(count);
  output.dataset.state = count > 0 ? "positive" : "zero";
  // aria-disabled (not disabled) so keyboard focus is never dropped from a button.
  const atZero = String(count === 0);
  decrementBtn.setAttribute("aria-disabled", atZero);
  resetBtn.setAttribute("aria-disabled", atZero);
}

function change(delta) {
  count = Math.max(0, count + delta);
  render();
}

incrementBtn.addEventListener("click", () => change(1));
decrementBtn.addEventListener("click", () => change(-1));
resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

// Keyboard shortcuts. Ignored while a modifier key is held.
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "+" || event.key === "=") change(1);
  else if (event.key === "-" || event.key === "_") change(-1);
  else if (event.key === "0") {
    count = 0;
    render();
  }
});

render();
