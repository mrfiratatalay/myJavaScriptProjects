const colorList = [
  "violet",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "cyan",
  "pink",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let x = getRandomNumber();
  color.textContent = colorList[x];
  document.body.style.backgroundColor = colorList[x];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorList.length);
}

const button1 = document.getElementById("butt")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];
function myFun() {
  navLinks.classList.toggle("active");
  document.body.classList.toggle("active");
  console.log("Executed");
}
