window.onload = function () {
  // Selecting Elements
  const preloader = document.querySelector(".preloader"); // Preloader'i seciyoruz
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387"); // Ses dosyasini yukluyoruz
  let count = 0; // Sayaci sifirliyoruz
  const click = document.getElementById("click"); // Tiklama sayisini gosteren yaziyi seciyoruz
  const button = document.getElementById("btn"); // Renk degistiren butonu seciyoruz
  const color = document.querySelector(".color"); // Hex renk degerinin gosterildigi elementi seciyoruz
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // Kullanicinin secmesi icin hex degerlerini diziye atiyoruz

  // Random function
  function getRandomNumber() {
    // Rastgele bir sayi ureten fonksiyonumuz
    return Math.floor(Math.random() * hex.length); // 0 ile hex dizisinin boyutu arasinda rastgele bir sayi donduruyoruz
  }

  // Event Listener
  btn.addEventListener("click", function () {
    // Butona tiklandiginda calisacak olan fonksiyonumuz
    count += 1; // Sayaci bir artiriyoruz
    click.textContent = count; // Tiklama sayisini ekranda gosteriyoruz
    audio.play(); // Ses dosyasini calistiriyoruz
    let hexColor = "#"; // Hex degerini tutacak degiskenimizi "#" ile baslatiyoruz
    for (let i = 0; i < 6; i++) {
      // 6 karakterli bir hex degeri olusturmak icin 6 kez donguye giriyoruz
      hexColor += hex[getRandomNumber()]; // Her seferinde rastgele bir hex karakteri ekliyoruz
    }
    color.textContent = hexColor; // Hex degerini ekranda gosteriyoruz
    document.body.style.backgroundColor = hexColor; // Arka plan rengini hex degeri ile degistiriyoruz
    document.body.style.transition = "all ease-in-out 400ms"; // Animasyon efektini ekliyoruz
    button.style.backgroundColor = hexColor; // Butonun arka plan rengini hex degeri ile degistiriyoruz
  });

  // Sayfa yuklendiginde calisacak fonksiyonumuz
  preloader.classList.add("hide-preloader"); // Preloader elementinin gorunurlugunu kaldiriyoruz
};
