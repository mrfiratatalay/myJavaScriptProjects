window.onload = function () {
  // Referencing the Dom things in variables
  let countSpan = document.querySelector(".count-num"); // Sayacın değerini gösterecek span elementinin referansı alınır
  let count = parseInt(countSpan.textContent); // Sayacın değeri, countSpan elementinin text içeriğinden parseInt() fonksiyonu kullanılarak integer'a dönüştürülerek alınır
  let buttons = document.querySelectorAll(".btn"); // "btn" sınıfına sahip tüm button elementlerinin referansı alınır

  // Adding the Click event listener to all the buttons
  buttons.forEach((btn) => {
    // Tüm button elementleri için forEach() döngüsü oluşturulur ve her birine aşağıdaki click event listener'ı eklenir
    btn.addEventListener("click", () => {
      // click event listener'ı eklenir
      if (btn.className.includes("increase-btn-ctn")) {
        // Eğer butonun sınıf ismi "increase-btn-ctn" içeriyorsa
        count++; // sayacın değeri bir artırılır
      } else if (btn.className.includes("decrease-btn-ctn")) {
        // Eğer butonun sınıf ismi "decrease-btn-ctn" içeriyorsa
        count--; // sayacın değeri bir azaltılır
      } else if (btn.className.includes("reset-btn")) {
        // Eğer butonun sınıf ismi "reset-btn" içeriyorsa
        count = 0; // sayacın değeri sıfırlanır
      }
      countSpan.textContent = count; // Sayacın değeri countSpan elementinin text içeriğine yazdırılır
    });
  });
};

//*********************************************************************************************** */
//******************   Number() ve parseInt FONKSIYONLARIM NASIL CALISIR     ********************* */
//*********************************************************************************************** */
/*
!!!       "Number()" ve "parseInt()" fonksiyonları, string ifadeleri sayılara dönüştürmek için kullanılabilir. Ancak, bu iki fonksiyon arasında bazı farklılıklar vardır.

!!!    Number():  "Number()" fonksiyonu, bir string ifadeyi tam sayıya veya ondalık sayıya dönüştürmek için kullanılabilir. Ayrıca, boşluksuz bir string ifadeyi "NaN" olarak değerlendirir.

Örnek:

let num1 = Number("10"); // 10
let num2 = Number("10.5"); // 10.5
let num3 = Number("10 apples"); // NaN

!!!      parseInt():    "parseInt()" fonksiyonu, bir string ifadeyi tam sayıya dönüştürmek için kullanılır. Ancak, "parseInt()" fonksiyonu, string ifadenin başındaki boşlukları, "+" veya "-" işaretlerini göz ardı eder ve bunları sayısal ifadeye dönüştürmez. Ayrıca, sayısal ifadeyi geçtikten sonra gelen harf, sembol ve boşlukları görmezden gelir.

Örnek:

let num1 = parseInt("10"); // 10
let num2 = parseInt("10.5"); // 10
let num3 = parseInt("  10"); // 10
let num4 = parseInt("  +10"); // 10
let num5 = parseInt("10 apples"); // 10
let num6 = parseInt("apples 10"); // NaN


?Bu nedenle, bir string ifadenin sayıya dönüştürülmesi gerektiğinde, kullanım amacına göre "Number()" veya "parseInt()" fonksiyonlarından birinin tercih edilmesi gerekir.
*/
