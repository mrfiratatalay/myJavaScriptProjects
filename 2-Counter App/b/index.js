window.onload = function () {
  // DOM'dan sayacı, artırma düğmesini, azaltma düğmesini ve sıfırlama düğmesini seçiyoruz.
  let count = document.getElementById("count");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const reset = document.getElementById("reset");

  // Artırma düğmesine tıklama olayı ekliyoruz. Her tıklamada sayacı bir artırıyoruz ve renk uyguluyoruz.
  plus.addEventListener("click", () => {
    count.innerHTML++;
    applyColor();
  });

  // Azaltma düğmesine tıklama olayı ekliyoruz. Her tıklamada sayacı bir azaltıyoruz ve renk uyguluyoruz.
  minus.addEventListener("click", () => {
    if (count.innerHTML >= 1) {
      count.innerHTML--;
      applyColor();
    }
  });

  // Sıfırlama düğmesine tıklama olayı ekliyoruz. Her tıklamada sayacı sıfırlıyoruz ve renk uyguluyoruz.
  reset.addEventListener("click", () => {
    count.innerHTML = 0;
    applyColor();
  });

  // Sayacın değerine göre rengi uygulayan bir işlev tanımlıyoruz.
  function applyColor() {
    if (count.innerHTML > 0) {
      count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
      count.style.color = "gray";
    } else {
      count.style.color = "black";
    }
  }
};
