window.onload = function () {
  // HTML'de body, getNewColorBtn ve colorBox öğelerini tanımla
  const body = document.querySelector("body");
  const getNewColorBtn = document.getElementById("getNewColorBtn");
  const colorBox = document.getElementById("colorBox");

  // HEX renk kodlarını oluşturmak için kullanılacak karakterler
  const hexChars = "0123456789ABCDEF";

  // getNewColorBtn öğesine tıklanınca çalışacak işlevi tanımla
  getNewColorBtn.addEventListener("click", () => {
    // HEX renk kodunu oluşturmak için başlangıç değeri "#"
    let hexColorCode = "#";

    // HEX renk kodu altı karakter içerir, bu nedenle altı kez döngü yap
    for (let i = 0; i < 6; i++) {
      // hexChars dizisinden rastgele bir karakter indeksi seç
      let randomNumber = Math.floor(Math.random() * hexChars.length);

      // seçilen indeksteki karakteri HEX renk koduna ekle
      hexColorCode += hexChars.charAt(randomNumber);
    }

    // body öğesinin arka plan rengini oluşturulan HEX renk koduna ayarla
    body.style.backgroundColor = hexColorCode;

    // colorBox öğesine oluşturulan HEX renk kodunu yaz
    colorBox.innerHTML = `Background Color : <span>${hexColorCode}</span>`;
  });
};

//-------------------------------------------------------------------------------
//              charAt() Method
/*---------------------------------------------------------------------------------
charAt() metodu, bir dizideki belirtilen indeksteki karakteri döndürür. Dizideki karakterler sıfırdan başlayarak sayılır. Yani, bir dizi içindeki ilk karakterin indeksi 0'dır, ikincisi 1, üçüncüsü 2, vb.

Örneğin, "hello".charAt(0) ifadesi "h" karakterini döndürür. "hello".charAt(1) ifadesi "e" karakterini döndürür.

Bu örnekte charAt() metodu, hexChars adlı bir dizideki belirtilen rastgele indeksteki karakteri seçmek için kullanılır ve bu karakter hexColorCode adlı değişkene eklenir.
*/
