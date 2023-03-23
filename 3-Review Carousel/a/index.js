window.onload = function () {
  // HTML'de bulunan inceleme (review) öğelerini seç
  const reviews = document.querySelectorAll(".review");

  // Önceki ve sonraki düğmelerini seç
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Şu anki gösterilen incelemenin dizini (index) (varsayılan olarak 0)
  let currentIndex = 0;

  // Şu anki gösterilen incelemeye 'active' sınıfını ekle
  reviews[currentIndex].classList.add("active");

  // Önceki düğmeye tıklanırsa
  prevBtn.addEventListener("click", function () {
    // Şu anki gösterilen incelemenin 'active' sınıfını kaldır
    reviews[currentIndex].classList.remove("active");

    // Şu anki gösterilen incelemenin dizinini (index) azalt
    currentIndex--;

    // Dizini sıfırdan küçükse, son incelemeye geç
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }

    // Yeni inceleme için 'active' sınıfını ekle
    reviews[currentIndex].classList.add("active");
  });

  // Sonraki düğmeye tıklanırsa
  nextBtn.addEventListener("click", function () {
    // Şu anki gösterilen incelemenin 'active' sınıfını kaldır
    reviews[currentIndex].classList.remove("active");

    // Şu anki gösterilen incelemenin dizinini (index) arttır
    currentIndex++;

    // Dizini son incelemeye eşit veya büyükse, ilk incelemeye dön
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }

    // Yeni inceleme için 'active' sınıfını ekle
    reviews[currentIndex].classList.add("active");
  });
};
