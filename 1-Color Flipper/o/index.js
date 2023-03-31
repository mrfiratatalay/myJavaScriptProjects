window.onload = function () {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const btn = document.getElementById("btn");
  const one = document.querySelector(".numOne");
  const two = document.querySelector(".numTwo");
  const three = document.querySelector(".numThree");
  const four = document.querySelector(".numFour");
  const numOne = document.getElementById("one");
  const numTwo = document.getElementById("two");
  const numThree = document.getElementById("three");
  const numFour = document.getElementById("four");

  function randHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  }

  const hexDisplay = () => {
    let hexOne = randHexColor();
    let hexTwo = randHexColor();
    let hexThree = randHexColor();
    let hexFour = randHexColor();
    one.style.backgroundColor = hexOne;
    two.style.backgroundColor = hexTwo;
    three.style.backgroundColor = hexThree;
    four.style.backgroundColor = hexFour;
    numOne.textContent = hexOne;
    numTwo.textContent = hexTwo;
    numThree.textContent = hexThree;
    numFour.textContent = hexFour;
  };

  btn.addEventListener("click", hexDisplay);
};
