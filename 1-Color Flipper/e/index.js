window.onload = function () {
  // Renk kodları için kullanılacak olan hexadecimals dizisi oluşturulur
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  // 0 ile hexadecimals dizisi uzunluğu arasında rastgele bir sayı oluşturulması için randomNumber fonksiyonu tanımlanır
  const randomNumber = () => Math.floor(Math.random() * hex.length);

  // Sayfadaki buton ve renk kodunu gösterecek olan elementler seçilir
  const btn = document.getElementById("btn");
  const color = document.querySelector(".color");

  // Butona click eventi ataması yapılır
  btn.addEventListener("click", function () {
    // Başlangıçta hexColor değeri boş string olarak atanır
    let hexColor = "#";

    // 6 haneli bir renk kodu oluşturmak için for döngüsü kullanılır
    for (let i = 0; i < 6; i++) {
      // Her turda, hex dizisinden rastgele bir eleman seçilerek hexColor değerine eklenir
      hexColor += hex[randomNumber()];
    }

    // Sayfanın arka plan rengi, oluşturulan hexColor değeri ile değiştirilir
    document.body.style.backgroundColor = hexColor;

    // Renk kodu, kullanıcının görebilmesi için color class'ına sahip öğeye yazdırılır
    color.textContent = hexColor;

    // Renk kodunun yazı rengi, oluşturulan hexColor değeri ile değiştirilir
    color.style.color = hexColor;

    // Butonun yazı rengi, oluşturulan hexColor değeri ile değiştirilir
    btn.style.color = hexColor;
  });
};
