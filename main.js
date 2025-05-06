

let myspan = document.querySelector("span");
let incbutton = document.querySelector("#increament");
let decbutton = document.querySelector("#decreament");

incbutton.addEventListener("click", () => {
  myspan.innerHTML = +myspan.innerHTML + 1;
  myspan.style.color = "green";
});

decbutton.addEventListener("click", () => {
  if (+myspan.innerHTML > 1) {
    myspan.innerHTML = +myspan.innerHTML - 1;
  } else {
    myspan.innerHTML = 0;
    myspan.style.color = "black";
  }
});
