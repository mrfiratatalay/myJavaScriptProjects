window.onload = function () {
  // Sayfa tamamen yüklendiğinde tetiklenir
  const hexaArray = [
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
  ]; // HEX renk kodlarını içeren bir dizi tanımlanır.

  const btn = document.getElementById("mybtn"); // HTML düğmesi alınır
  const color = document.querySelector(".mycolor"); // HTML elementi (span) alınır

  btn.addEventListener("click", function () {
    // Düğmeye tıklandığında tetiklenir
    let newHexColor = "#"; // Yeni bir HEX renk kodu için boş bir dize tanımlanır ve '#' karakteri eklenir
    for (let i = 0; i < 6; i++) {
      // HEX renk kodunun altı hanesi için döngü başlatılır
      newHexColor += hexaArray[generateRandomNumber()]; // HEX dizisinden rastgele bir karakter alınarak yeni renk koduna eklenir.
    }
    document.body.style.backgroundColor = newHexColor; // Sayfanın arkaplan rengi yeni HEX kodu ile değiştirilir.
    color.textContent = newHexColor; // Oluşturulan renk kodu HTML elementine yazdırılır.
  });

  function generateRandomNumber() {
    // Rastgele sayı oluşturan bir fonksiyon tanımlanır.
    return Math.floor(Math.random() * hexaArray.length); // HEX dizisinin uzunluğu ile çarpılan Math.random fonksiyonundan elde edilen sayı, dizinin indisleri arasından bir sayı oluşturur. Math.floor fonksiyonu ile sayı aşağıya yuvarlanır.
  }
};
