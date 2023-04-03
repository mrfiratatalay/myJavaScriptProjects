window.onload = function () {
  // Hexadecimal renk kodlarını içeren bir dizi tanımlama
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  // HTML belgesinden bazı öğeleri seçme
  const button = document.getElementById("btn"); // "btn" id'sine sahip buton öğesi
  const color = document.querySelector(".color"); // ".color" sınıfına sahip bir öğe
  const containerTop = document.querySelector(".container-top"); // ".container-top" sınıfına sahip bir öğe
  const colorBox = document.querySelectorAll(".colorbox"); // ".colorbox" sınıfına sahip tüm öğelerin bir listesi
  const colorBoxColor = document.querySelector(".colorbox-color"); // ".colorbox-color" sınıfına sahip bir öğe
  const containerBottom = document.querySelector(".container-bottom"); // ".container-bottom" sınıfına sahip bir öğe
  const buttonBottom = document.querySelectorAll(".btn-bottom"); // ".btn-bottom" sınıfına sahip tüm öğelerin bir listesi

  // Rastgele bir hexadecimal renk kodu oluşturma fonksiyonu tanımlama
  const randomColorGenerator = function () {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexCode;
  };

  // Rastgele bir hexadecimal renk kodu oluşturma fonksiyonunu çağırma
  randomColorGenerator();

  // Sayfa yüklendiğinde ve butona her tıklandığında arka plan rengini ve renk kodunu değiştirme
  document.addEventListener("DOMContentLoaded", function () {
    color.textContent = randomColorGenerator();
    document.body.style.backgroundColor = randomColorGenerator();
  });

  // Butona her tıklandığında arka plan rengini ve renk kodunu değiştirme
  button.addEventListener("click", function () {
    color.textContent = randomColorGenerator();
    document.body.style.backgroundColor = randomColorGenerator();
  });

  // Butonlar için forEach döngüsü oluşturuyoruz
  buttonBottom.forEach(function (btn) {
    // Butona tıklanınca çalışacak fonksiyonu tanımlıyoruz
    btn.addEventListener("click", function (e) {
      // Tıklanan butonun parent elementinin ilk çocuğunun ilk çocuğunu seçiyoruz.Yani h1'leeri seciyor.
      let colorboxText = e.target.parentElement.children[0].firstElementChild;
      // Colorbox text content'i, tıklanan butonun parent elementinin son karakterine göre belirleniyor
      if (
        colorboxText.textContent ===
        `Favorite Color - ${e.target.parentElement.id.slice(-1)}`
      ) {
        // Eğer text content "Favorite Color - n" ise, o butona tıklandığında
        // body arkaplan rengini kullanarak o colorbox'ın arkaplan rengini ayarlıyoruz
        e.target.closest(".colorbox").style.backgroundColor =
          document.body.style.backgroundColor;
        // Colorbox text content'i, "Color n: hexCode" formatında değiştiriliyor
        colorboxText.textContent = `Color ${e.target.parentElement.id.slice(
          -1
        )}: ${color.textContent}`;
        // Butonun text content'i "Use Me" olarak değiştiriliyor
        e.target.textContent = "Use Me";
      } else {
        // Eğer text content "Color n: hexCode" ise, o butona tıklandığında
        // body arkaplan rengi, o colorbox'ın arkaplan rengine göre değiştiriliyor
        document.body.style.backgroundColor = e.target.parentElement
          .getAttribute("style")
          .slice(18, -1);
        // Renk değeri, o colorbox'ın text content'indeki hexCode'dan alınıyor
        color.textContent = colorboxText.textContent.slice(9);
        // Colorbox text content'i "Favorite Color - n" olarak değiştiriliyor
        colorboxText.textContent = `Favorite Color - ${e.target.parentElement.id.slice(
          -1
        )}`;
        // Butonun text content'i "Save Me" olarak değiştiriliyor
        e.target.closest(".colorbox").style.backgroundColor = null;
        e.target.textContent = "Save Me";
      }
    });
  });
};
