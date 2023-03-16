// Renkleri içeren bir dizi oluşturuyoruz
const colors = [
  "#8EE4AF",
  "#5CDB95",
  "#3500D3",
  "#C38D9E",
  "#41B3A3",
  "#F64C72",
  "#8D8741",
  "#05386B",
  "#FC4445",
  "#3FEEE6",
  "#C3073F",
];

// Rastgele bir renk seçen bir fonksiyon oluşturuyoruz
function randomSelector(list) {
  const random = Math.floor(Math.random() * list.length);
  return list[random];
}

// Arka plan rengini değiştiren bir fonksiyon oluşturuyoruz
function changeBackground(theme) {
  // Rastgele bir renk seçiyoruz
  let currentColor = randomSelector(theme);
  // Seçilen rengi arka plan rengi olarak ayarlıyoruz
  document.body.style.backgroundColor = currentColor;
  // Renk kodunu HTML'de gösteren bir element seçiyoruz
  const colorElement = document.getElementById("color");
  // Renk kodunu bu elementin içeriğine yazıyoruz
  colorElement.innerHTML = currentColor;
  // Renk kutusunun arka plan rengini seçilen renk ile uyumlu hale getiriyoruz
  colorElement.style.background = currentColor;
}

// Butona tıklanınca arka plan rengini değiştiren fonksiyonu çalıştıran bir fonksiyon oluşturuyoruz
function buttonClickHandler() {
  changeBackground(colors);
}

// Sayfa yüklenince butona tıklanınca arka plan rengini değiştiren fonksiyonu çalıştıracak bir event listener ekliyoruz
window.onload = function () {
  const changerButton = document.getElementById("changer");
  changerButton.addEventListener("click", buttonClickHandler);
};
