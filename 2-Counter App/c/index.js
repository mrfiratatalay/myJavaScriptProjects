window.onload = function () {
  // Bu satırda HTML'den sayacı gösteren etiketi (tag) seçiyoruz.
  const countertext = document.getElementById("countertext");

  // Bu satırda HTML'den tüm butonları seçiyoruz.
  const btns = document.querySelectorAll("button");

  // Bu satırlarda sayacın başlangıç değerini belirliyoruz. İlk satırda 0 değerini atıyoruz, ikinci satırda ise aynı değeri sayıya çeviriyoruz.
  let countInitial = 0;
  let count = Number(countInitial);

  // Bu satırlarda butonlara tıklanınca ne olacağını belirtiyoruz.
  // btns[0] satırı, "Decrease" butonuna tıklandığında gerçekleştirilecek işlemleri belirtiyor.
  btns[0].addEventListener("click", function () {
    // count değişkenini bir azaltıyoruz.
    count--;

    // countertext etiketinin içeriğini değiştiriyoruz, böylece sayacı güncelliyoruz.
    countertext.innerHTML = count;

    // Eğer sayacın değeri 0'dan küçükse, yazı rengini kırmızı yapıyoruz.
    if (count < 0) {
      countertext.style.color = "red";
    }
    // Eğer sayacın değeri 0'dan büyükse, yazı rengini yeşil yapıyoruz.
    else if (count > 0) {
      countertext.style.color = "green";
    }
    // Eğer sayacın değeri 0 ise, yazı rengini siyah yapıyoruz.
    else if (count == 0) {
      countertext.style.color = "black";
    }
    // Eğer sayacın değeri başka bir sayı değeri ise, yazı rengini siyah yapıyoruz.
    else {
      countertext.style.color = "black";
    }
  });

  // Ayni islemleri diger butonlarda yapiyorum...

  btns[1].addEventListener("click", function () {
    countertext.innerHTML = 0;
    count = 0;
    countertext.style.color = "black";
  });
  btns[2].addEventListener("click", function () {
    count++;
    countertext.innerHTML = count;

    if (count < 0) {
      countertext.style.color = "red";
    } else if (count > 0) {
      countertext.style.color = "green";
    } else if (count == 0) {
      countertext.style.color = "black";
    } else {
      countertext.style.color = "black";
    }
  });
};
