window.onload = function () {
  // HTML sayfasındaki elementlere erişmek için document objesini $ olarak tanımla
  const $ = document;

  // Gerekli değişkenleri tanımla
  let img = $.querySelector("img"); // resim
  let title = $.querySelector("h4"); // başlık
  let span = $.querySelector("span"); // alt başlık
  let text = $.querySelector("p"); // açıklama
  let pre = $.getElementsByClassName("pre")[0]; // önceki butonu
  let next = $.getElementsByClassName("next")[0]; // sonraki butonu

  // Veri setini tanımla
  const data = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      title: "lorem epson",
      span: "Web developer",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consecteturipsum dolor sit amet consectetur ",
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/79.jpg",
      title: "many pixels",
      span: "Back-End developer",
      text: "Lorem ipsum ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/0.jpg",
      title: "scarllet jon",
      span: "Front-End developer",
      text: "Lorem ipsum dolor sitipsum dolor sit amet consecteturcteturipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/men/84.jpg",
      title: "Thomas shelby",
      span: "Web developer",
      text: "Loipsum dolor sit amet conser sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consecteturtetur ",
    },
  ];

  let current = 1;

  // Verilen veri setindeki değerleri ilgili elementlere yükle
  const setData = (arr) => {
    img.src = arr[current - 1].img;
    title.innerText = arr[current - 1].title;
    span.innerText = arr[current - 1].span;
    text.innerText = arr[current - 1].text;
  };

  // Başlangıçta ilk veri setini yükle
  setData(data);

  // Önceki butonuna tıklandığında çalışacak fonksiyonu tanımla
  pre.addEventListener("click", () => {
    if (current != 1) {
      // Mevcut veri seti ilk değilse
      current--; // Bir önceki veri setine git
    } else {
      current = 4; // Mevcut veri seti ilk set ise son sete git
    }

    setData(data); // Yeni veri setini yükle
  });

  // Sonraki butonuna tıklandığında çalışacak fonksiyonu tanımla
  next.addEventListener("click", () => {
    if (current != 4) {
      // Mevcut veri seti son değilse
      current++; // Bir sonraki veri setine git
    } else {
      current = 1; // Mevcut veri seti son set ise ilk sete git
    }

    setData(data); // Yeni veri setini yükle
  });
};

//!!!!!!!!!!!!!!!!!!!! " getElementByClassName NASIL CALISIR " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//* getElementsByClassName() methodu, belirtilen sınıfa sahip tüm HTML elementlerini bir Array olarak döndürür. Bu method, sayfa üzerindeki birden fazla elementin aynı sınıfa sahip olması durumunda kullanışlıdır. Örneğin, aşağıdaki kod satırı sayfadaki pre sınıfına sahip ilk elementi seçer ve bir değişkene atar:

let pre = document.getElementsByClassName("pre")[0];

//*Burada document objesi sayfamızdaki HTML elementlerine erişmemizi sağlayan bir objedir. getElementsByClassName() methoduna verilen parametre ("pre" sınıfı) ile sayfadaki pre sınıfına sahip tüm elementler seçilir ve bir dizi olarak döndürülür. [0] ifadesi, bu dizinin ilk elemanını seçer ve değişkene atar. Bu şekilde, getElementsByClassName() methodu ile belirli bir sınıfa sahip tüm elementleri seçip, bu elementlerin özelliklerini veya eventlerini yönetebilirsiniz.
