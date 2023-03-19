const displayRGBColor = () => {
  let color = (document.body.style.backgroundColor = `RGB(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
  document.querySelector(".color-text").innerText = color;
  return color;
};

const displayHexColor = () => {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr[i] = Math.floor(Math.random() * 16).toString(16);
  }
  let hColor = arr.join("");
  document.querySelector(".color-text").innerText = "#" + hColor;
  document.body.style.backgroundColor = `#${hColor}`;
};

function filterDisplay() {
  if (document.getElementById("switch").checked) {
    document
      .querySelector(".main-button")
      .addEventListener("click", displayRGBColor);
  } else {
    document
      .querySelector(".main-button")
      .addEventListener("click", displayHexColor);
  }
}
