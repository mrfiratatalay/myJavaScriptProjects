window.onload = function () {
  // 1. hex adında bir sabit değişken tanımlanır ve 16 farklı değer içerir
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  // 2. .btn sınıfına sahip ilk öğe seçilir ve btn adında bir değişkene atanır
  const btn = document.querySelector(".btn");

  // 3. .color sınıfına sahip ilk öğe seçilir ve color adında bir değişkene atanır
  const color = document.querySelector(".color");

  // 4. btn üzerinde bir tıklama olayı dinleyicisi eklenir
  btn.addEventListener("click", function () {
    // 5. colors adında bir değişken tanımlanır ve başlangıçta "#" değerini alır
    let colors = "#";

    // 6. 6 kez döngü oluşturulur
    for (let i = 0; i < 6; i++) {
      // 7. colors değişkenine rasgele bir hex değeri eklenir
      colors += hex[randomNum()];
    }

    // 8. color değişkeninin içeriği güncellenir ve yeni renk kodunu gösterir
    color.textContent = colors;

    // 9. sayfa arka plan rengi güncellenir
    document.body.style.backgroundColor = colors;

    // 10. düğmenin rengi de güncellenir
    btn.style.backgroundColor = colors;
  });

  // 11. rasgele bir sayı üretmek için randomNum adında bir fonksiyon tanımlanır
  function randomNum() {
    // 12. hex dizisinin uzunluğuna göre rasgele bir sayı döndürülür
    return Math.floor(Math.random() * hex.length);
  }
};
