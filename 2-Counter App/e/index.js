window.onload = function () {
  // Başlangıç sayacı değeri
  let counterInitial = 0;

  // counter değişkenine counterInitial'in sayısal değeri atanıyor
  let counter = Number(counterInitial);

  // HTML sayfasındaki counter id'li öğe counterValue değişkenine atanıyor
  const counterValue = document.getElementById("counter");

  // HTML sayfasındaki btnDecrease sınıfına sahip öğe decreaseButton değişkenine atanıyor
  const decreaseButton = document.querySelector(".btnDecrease");

  // HTML sayfasındaki btnIncrease sınıfına sahip öğe increaseButton değişkenine atanıyor
  const increaseButton = document.querySelector(".btnIncrease");

  // HTML sayfasındaki btnReset sınıfına sahip öğe resetButton değişkenine atanıyor
  const resetButton = document.querySelector(".btnReset");

  // decreaseButton öğesine tıklandığında yapılacak işlemler
  decreaseButton.onclick = () => {
    // counter değişkeni 1 azaltılıyor
    counter -= 1;
    // counterValue öğesinin içeriği counter değişkeninin değeri olarak güncelleniyor
    counterValue.innerHTML = counter;
  };

  // increaseButton öğesine tıklandığında yapılacak işlemler
  increaseButton.onclick = () => {
    // counter değişkeni 1 artırılıyor
    counter += 1;
    // counterValue öğesinin içeriği counter değişkeninin değeri olarak güncelleniyor
    counterValue.innerHTML = counter;
  };

  // resetButton öğesine tıklandığında yapılacak işlemler
  resetButton.onclick = () => {
    // counter değişkenine 0 değeri atanıyor
    counter = 0;
    // counterValue öğesinin içeriği counter değişkeninin değeri olarak güncelleniyor
    counterValue.innerHTML = counter;
  };
};
