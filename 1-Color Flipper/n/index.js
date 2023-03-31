window.onload = function () {
  const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // "HEX" adında bir sabit tanımlanıyor ve içine 0-9 arası sayılar ve A-F harfleri ekleniyor. Bu dizi, rastgele HEX renk kodları oluşturmak için kullanılacak.

  const button = document.getElementById("random-generator"); // HTML'deki "random-generator" id'sine sahip buton, "button" değişkenine atandı.

  const colorText = document.getElementById("color-text"); // HTML'deki "color-text" id'sine sahip bir element, "colorText" değişkenine atandı.

  let background = document.getElementById("circle"); // HTML'deki "circle" id'sine sahip bir element, "background" değişkenine atandı.

  function getRandomNumber() {
    return Math.floor(Math.random() * HEX.length); // HEX dizisi içindeki elemanların sayısı ile çarpılan rastgele bir sayı döndüren bir fonksiyon tanımlanıyor.
  }
  // "click" olayı gerçekleştiğinde çalışacak bir olay dinleyicisi eklendi.

  button.addEventListener("click", () => {
    let hexColor = "#"; // hex renk kodunun başına "#" işareti eklendi.

    // 6 karakterli bir hex renk kodu oluşturmak için, HEX dizisinden rastgele 6 eleman seçilip hexColor değişkenine ekleniyor.
    for (let i = 0; i < 6; i++) {
      hexColor += HEX[getRandomNumber()];
    }

    colorText.textContent = hexColor; // HTML'deki "color-text" elementinin metni, oluşturulan hex renk kodu ile değiştiriliyor.
    colorText.style.color = hexColor; // "color-text" elementinin yazı rengi, oluşturulan hex renk kodu ile değiştiriliyor.
    background.style.backgroundColor = hexColor; // "circle" elementinin arka plan rengi, oluşturulan hex renk kodu ile değiştiriliyor.
  });
};
