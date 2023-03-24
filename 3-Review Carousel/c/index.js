window.onload = function () {
  "use strict";

  // Review verileri içeren bir dizi tanımlanıyor.
  const reviews = [
    {
      name: "Mark Rebucas",
      job: "Web developer",
      comment:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio temporibus fugiat architecto iste! Voluptates cupiditate amet reiciendis impedit maiores. Maxime repellendus officiis, sequi odit eaque accusamus labore ipsam nobis.",
    },
    {
      name: "Hanna Estillana",
      job: "Teacher",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus iste harum. Error deleniti perferendis temporibus, blanditiis alias laborum atque placeat modi nihil sunt eius aliquam, ipsum dignissimos voluptas culpa!",
    },
    {
      name: "Johanna Viola",
      job: "Master Teacher",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque hic dolorem praesentium nam temporibus nobis nesciunt, at quaerat, odio ullam aliquam. Commodi corporis officiis accusantium dicta accusamus quibusdam quae, dolore nihil fugiat!",
    },
  ];

  // HTML'deki ileri, geri ve rastgele butonlarını seçiyoruz.
  const nextBtnEl = document.querySelector(".right-arrow");
  const prevBtnEl = document.querySelector(".left-arrow");
  const bioEl = document.querySelector(".bio");
  const nameEl = document.querySelector(".name");
  const jobEl = document.querySelector(".profession");
  const randBtnEl = document.querySelector("#surprise-me");

  // Şimdiki incelemeyi izlemek için bir sayaç tanımlanıyor.
  let i = 0;

  // Geri butonuna bir olay dinleyicisi ekleniyor.
  prevBtnEl.addEventListener("click", function () {
    // Eğer mevcut inceleme dizininin başındaysa, son incelemeye git.
    if (i === 0) i = reviews.length;

    // Sıradaki incelemeye geç.
    i--;
    // Mevcut incelemeyi göstermek için fonksiyon çağrılıyor.
    dispOutput(i);
  });

  // İleri butonuna bir olay dinleyicisi ekleniyor.
  nextBtnEl.addEventListener("click", function () {
    // Eğer mevcut inceleme dizininin sonunda ise, ilk incelemeye git.
    if (i === reviews.length - 1) i = -1;

    // Sıradaki incelemeye geç.
    i++;
    // Mevcut incelemeyi göstermek için fonksiyon çağrılıyor.
    dispOutput(i);
  });

  // Rastgele butonuna bir olay dinleyicisi ekleniyor.
  randBtnEl.addEventListener("click", function () {
    // Rastgele bir sayı oluşturun ve rastgele bir incelemeyi göstermek için fonksiyon çağrılıyor.
    const randValue = Math.floor(Math.random() * reviews.length);
    dispOutput(randValue);
  });

  // Mevcut incelemeyi gösteren bir fonksiyon tanımlanıyor. Son olarak, dispOutput fonksiyonu, index numarası i olan yoruma ait bilgileri görüntülemek için kullanılır. Fonksiyonun ilk satırları, i indeksindeki yorumu review adlı bir değişkene atar. Daha sonra, bioEl, nameEl ve jobEl adlı değişkenler, HTML'deki uygun sınıflara sahip öğeleri seçmek için kullanılır. Son olarak, bu öğelerin textContent özelliği, review nesnesindeki ilgili değerlerle değiştirilir.

  function dispOutput(i) {
    const review = reviews[i];
    bioEl.textContent = review.comment;
    nameEl.textContent = review.name;
    jobEl.textContent = review.job;
  }

  //Bu, yorumların belirli bir sırayla görüntülendiği basit bir inceleme sayfası oluşturur. Kullanıcılar, önceki veya sonraki yorumlara gitmek için ok düğmelerini kullanabilirler veya "Surprise Me" düğmesini tıklayarak rastgele bir yorum görebilirler.
};
