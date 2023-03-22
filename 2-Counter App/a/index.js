window.onload = function () {
  const myPlus = document.getElementById("increment-btn");
  const mySave = document.getElementById("save-btn");

  // Save ve count öğeleri alınıyor
  let saveEl = document.getElementById("save-el");
  let countEl = document.getElementById("count-el");

  // Başlangıçta sayacın değeri sıfırlanıyor
  let count = 0;

  // Artırma fonksiyonu
  function increment() {
    // Sayacın değeri artırılıyor
    count += 1;
    // Sayacın HTML öğesine yazdırılması
    countEl.textContent = count;
  }

  // Kaydetme fonksiyonu
  function save() {
    // Kaydedilecek sayacın değeri bir string olarak oluşturuluyor
    let countStr = " " + count + " - ";
    // Kaydetme HTML öğesine kaydedilen sayacın değeri ekleniyor
    saveEl.textContent += countStr;
    // Sayacın HTML öğesine sıfır değeri atanıyor
    countEl.textContent = 0;
    // Sayacın değeri sıfırlanıyor
    count = 0;
  }

  myPlus.addEventListener("click", () => increment());

  mySave.addEventListener("click", () => save());
};
