window.onload = function () {
  // Web sayfası yüklendiğinde çalışacak fonksiyon tanımlandı.

  const hexletters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  // Renk kodları için kullanılacak harfler ve sayılar bir dizi içinde tanımlandı.

  const genBtn = document.querySelector(".generateBtn");
  const clearBtn = document.querySelector(".clearBtn");
  // generateBtn ve clearBtn sınıflarına sahip butonlar seçildi.

  genBtn.addEventListener("click", function () {
    // generateBtn butonuna tıklandığında çalışacak fonksiyon tanımlandı.

    let color = randomhexcolor();
    let color2 = randomhexcolor();
    let color3 = randomhexcolor();
    let color4 = randomhexcolor();
    // randomhexcolor fonksiyonu kullanılarak dört adet rastgele renk oluşturuldu.

    document.querySelector(".colorOne").style.backgroundColor = color;
    document.querySelector(".colorTwo").style.backgroundColor = color2;
    document.querySelector(".colorThree").style.backgroundColor = color3;
    document.querySelector(".colorFour").style.backgroundColor = color4;
    // HTML belgesindeki .colorOne, .colorTwo, .colorThree ve .colorFour sınıflarına sahip elemanların arka plan rengi rastgele oluşturulan renklere ayarlandı.

    document.querySelector(".randomColor").style.color = color;
    document.querySelector(".randomColor2").style.color = color2;
    document.querySelector(".randomColor3").style.color = color3;
    document.querySelector(".randomColor4").style.color = color4;
    // HTML belgesindeki .randomColor, .randomColor2, .randomColor3 ve .randomColor4 sınıflarına sahip elemanların metin rengi rastgele oluşturulan renklere ayarlandı.
  });

  function randomhexcolor() {
    // Rastgele hex renk kodu oluşturan fonksiyon tanımlandı.

    let hexColor = "#";
    // Renk kodunun başına # karakteri eklendi.

    for (let x = 0; x < 6; x++) {
      hexColor = hexColor + hexletters[Math.floor(Math.random() * 16)];
    }
    // hexletters dizisindeki harfler ve sayılar kullanılarak altı karakterlik bir rastgele renk kodu oluşturuldu.

    return hexColor;
    // Oluşturulan rastgele renk kodu fonksiyondan döndürüldü.
  }

  clearBtn.addEventListener("click", () => {
    // clearBtn butonuna tıklandığında çalışacak fonksiyon tanımlandı.

    document.querySelectorAll(".clear").forEach((cur) => {
      cur.style.backgroundColor = "lightgrey";
      cur.style.color = "lightgrey";
    });
    // HTML belgesindeki .clear sınıfına sahip tüm elemanların arka planlari sifirlandi.
  });
};
