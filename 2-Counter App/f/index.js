window.onload = function () {
  // HTML sayfasındaki input öğesine input değişkenine atanıyor
  let input = document.querySelector("input");

  // HTML sayfasındaki plus-btn sınıfına sahip öğe plus değişkenine atanıyor
  let plus = document.querySelector(".plus-btn");

  // HTML sayfasındaki minus-btn sınıfına sahip öğe minus değişkenine atanıyor
  let minus = document.querySelector(".minus-btn");

  // HTML sayfasındaki default-btn sınıfına sahip öğe defaultBtn değişkenine atanıyor
  let defaultBtn = document.querySelector(".default-btn");

  // plus butonuna tıklandığında yapılacak işlemler
  plus.addEventListener("click", function () {
    // input değeri 1 arttırılıyor
    input.value++;
  });

  // minus butonuna tıklandığında yapılacak işlemler
  minus.addEventListener("click", function () {
    // input değeri 1 azaltılıyor
    input.value--;

    // Eğer input değeri 1'den küçükse, değeri 1 olarak ayarlanıyor
    if (input.value < 1) {
      input.value = 1;
    }
  });

  // defaultBtn butonuna tıklandığında yapılacak işlemler
  defaultBtn.addEventListener("click", function () {
    // input değeri varsayılan olarak 1 olarak ayarlanıyor
    input.value = 1;
  });
};
