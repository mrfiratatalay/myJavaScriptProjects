// Bir dizi oluşturuluyor ve "colorList" değişkenine atanıyor
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

// Bir buton öğesi seçiliyor ve "btn" değişkenine atanıyor
const btn = document.getElementById("btn");

// Bir HTML öğesi seçiliyor ve "color" değişkenine atanıyor
const color = document.querySelector(".color");

// Butonun tıklanma olayı dinleyicisi ekleniyor
btn.addEventListener("click", function () {
  // "getRandomNumber" fonksiyonundan rasgele bir sayı elde ediliyor
  let x = getRandomNumber();

  // "color" değişkeninin metin içeriği, "colorList" dizisinden elde edilen renk ile güncelleniyor
  color.textContent = colorList[x];

  // Belge gövdesinin arka plan rengi, "colorList" dizisinden elde edilen renk ile güncelleniyor
  document.body.style.backgroundColor = colorList[x];
});

// Rasgele sayı üretmek için bir fonksiyon tanımlanıyor
function getRandomNumber() {
  return Math.floor(Math.random() * colorList.length);
}

// Bir buton öğesi seçiliyor ve "button1" değişkenine atanıyor
const button1 = document.getElementById("butt")[0];

// Bir HTML öğesi seçiliyor ve "navLinks" değişkenine atanıyor
const navLinks = document.getElementsByClassName("nav-links")[0];

// Butonun tıklanma olayı dinleyicisi ekleniyor
function myFun() {
  // "navLinks" HTML öğesine "active" sınıfı ekleniyor veya kaldırılıyor
  navLinks.classList.toggle("active");

  // Belge gövdesine "active" sınıfı ekleniyor veya kaldırılıyor
  document.body.classList.toggle("active");

  // "Executed" metni konsola yazdırılıyor
  console.log("Executed");
}
