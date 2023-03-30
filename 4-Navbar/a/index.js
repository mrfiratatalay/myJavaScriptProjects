window.onload = function () {
  const primaryNavList = document.querySelector("#primary-nav-list");
  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", toggleNavList);

  function toggleNavList() {
    primaryNavList.classList.toggle("nav-closed");
    hamburger.classList.toggle("hamburger-open");
  }
};

//!!!!!!!!!!!!!!!!!!!! " getElementByClassName NASIL CALISIR " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//* getElementsByClassName() methodu, belirtilen sınıfa sahip tüm HTML elementlerini bir Array olarak döndürür. Bu method, sayfa üzerindeki birden fazla elementin aynı sınıfa sahip olması durumunda kullanışlıdır. Örneğin, aşağıdaki kod satırı sayfadaki pre sınıfına sahip ilk elementi seçer ve bir değişkene atar:

let pre = document.getElementsByClassName("pre")[0];

//*Burada document objesi sayfamızdaki HTML elementlerine erişmemizi sağlayan bir objedir. getElementsByClassName() methoduna verilen parametre ("pre" sınıfı) ile sayfadaki pre sınıfına sahip tüm elementler seçilir ve bir dizi olarak döndürülür. [0] ifadesi, bu dizinin ilk elemanını seçer ve değişkene atar. Bu şekilde, getElementsByClassName() methodu ile belirli bir sınıfa sahip tüm elementleri seçip, bu elementlerin özelliklerini veya eventlerini yönetebilirsiniz.
