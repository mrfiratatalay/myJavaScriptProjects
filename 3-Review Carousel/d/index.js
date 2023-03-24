window.onload = function () {
  // `reviews` adlı bir array tanımlanıyor ve bu array içinde 5 adet nesne bulunuyor.
  const reviews = [
    {
      id: "0",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      name: "Antony Ward",
      job: "Tech Recruiter",
      review:
        "Earth spirit earth. Waters. Can't creepeth you'll the evening. Fish a. Cattle give creeping creeping fly after so female days fruitful lesser shall morning Saying under, they're which moving gathering kind won't. First, moveth. Spirit cattle void. Us of him sixth brought upon. Called fourth firmament without lights subdue void i firmament night sea. Blessed. Waters.",
    },
    {
      id: "1",
      img: "https://randomuser.me/api/portraits/men/53.jpg",
      name: "David M. Rhyne",
      job: "Travel Consultant",
      review:
        "Hath be own days saying dry dry yielding. Dry. Saying it two man created dry. Gathered you fourth morning cattle green had can't seasons so place won't. Sixth him he creature blessed you're bring to land in appear kind. I, grass yielding. Man in wherein stars the upon abundantly from Fowl female.",
    },
    {
      id: "2",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
      name: "Holly Bailey",
      job: "Estate Agent",
      review:
        "Meat, is winged. Without. Whales heaven male given they're waters had land fish cattle made unto. Be. Wherein set fourth light isn't sixth over were from shall to over together give creature called won't grass fruit firmament bearing from signs, greater fruit you earth. Moved hath heaven. His likeness. Fruitful fish so years.",
    },
    {
      id: "3",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
      name: "Kai Patel",
      job: "Recruiting Manager",
      review:
        "Forth forth living, herb had have them lesser whose all beast. Firmament, moved signs our. Multiply also lesser fly day. Seed form creepeth days midst. Under, hath above which don't his appear their earth saying dry stars. Stars lights. Lights is. Sixth first. Days she'd set won't don't likeness earth creepeth hath greater female fish yielding unto was sea let.",
    },
    {
      id: "4",
      img: "https://randomuser.me/api/portraits/women/58.jpg",
      name: "Lauren Stokes",
      job: "Credit analyst",
      review:
        "Subdue itself him male void lights itself years. You wherein moved fourth creature he gathered gathering moving bearing fruit be Upon life after. Face multiply herb thing good, our moveth fly be, a open isn't you're, open fly sea every you're beast divide god set good moveth fill beast.",
    },
  ];

  // HTML içindeki bazı elemanlar seçiliyor ve bir değişkene atanıyor.
  const img = document.querySelector(".profile-img");
  const nameUser = document.querySelector(".name");
  const job = document.querySelector(".job-title");
  const reviewText = document.querySelector(".review");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Değişken currentReview, başlangıçta sıfır olarak tanımlanır.
  let currentReview = 0;

  // showReview fonksiyonu, mevcut inceleme indeksine göre bir inceleme nesnesini görüntüler.
  function showReview(currentReview) {
    // reviews dizisinden mevcut inceleme nesnesini seçin.
    const review = reviews[currentReview];
    // HTML'de bulunan img etiketine inceleme nesnesindeki img değerini atayın.
    img.src = review.img;
    // HTML'de bulunan name etiketine inceleme nesnesindeki name değerini atayın.
    nameUser.textContent = review.name;
    // HTML'de bulunan job etiketine inceleme nesnesindeki job değerini atayın.
    job.textContent = review.job;
    // HTML'de bulunan reviewText etiketine inceleme nesnesindeki review değerini atayın.
    reviewText.textContent = review.review;
  }

  // nextBtn düğmesine tıklanırsa, mevcut inceleme indeksi artırılır ve bir sonraki inceleme nesnesi görüntülenir.
  nextBtn.addEventListener("click", () => {
    // mevcut inceleme indeksini artırın.
    currentReview++;
    // indeks reviews dizisinin boyutundan büyükse, indeksi sıfırla.
    if (currentReview > reviews.length - 1) {
      currentReview = 0;
    }
    // showReview fonksiyonunu çağırarak mevcut incelemeyi gösterin.
    showReview(currentReview);
  });

  // prevBtn düğmesine tıklanırsa, mevcut inceleme indeksi azaltılır ve bir önceki inceleme nesnesi görüntülenir.
  prevBtn.addEventListener("click", () => {
    // mevcut inceleme indeksini azaltın.
    currentReview--;
    // indeks 0'dan küçükse, indeksi reviews dizisinin sonuna ayarla.
    if (currentReview < 0) {
      currentReview = reviews.length - 1;
    }
    // showReview fonksiyonunu çağırarak mevcut incelemeyi gösterin.
    showReview(currentReview);
  });
};
