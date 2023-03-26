window.onload = function () {
  // sayfa yüklendiğinde bu fonksiyon çalışacak
  let saveEl = document.getElementById("save-el"); // kaydedilmiş sayıların görüneceği <p> öğesi
  let countEl = document.getElementById("count-el"); // sayacın görüneceği <p> öğesi
  let totalEl = document.getElementById("total"); // toplam sayının görüneceği <p> öğesi
  let btns = document.querySelectorAll(".btn"); // butonların tümünü seçen NodeList nesnesi
  let count = 0; // sayacın başlangıç değeri

  // butonların her birine olay dinleyicisi ekleme
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // "increment-btn" sınıfına sahip butona tıklandığında
      if (btn.classList.contains("increment-btn")) {
        count += 1; // sayacı bir artır
        countEl.textContent = count; // sayacın görünümünü güncelle
      }
      // "save-btn" sınıfına sahip butona tıklandığında
      else if (btn.classList.contains("save-btn")) {
        let countStr = count + " + "; // sayacın değerini kaydetmek için bir dize oluştur
        saveEl.textContent += countStr; // kaydedilen sayıları <p> öğesine ekle
        countEl.textContent = 0; // sayacı sıfırla

        // KAYDEDİLEN SAYILARIN TOPLAMI
        let totalContent = saveEl.textContent; // kaydedilmiş sayıların tümünü içeren metni al
        let arrayOfString = totalContent.match(/\d+/g); // O keydedilmis olan metnimin icerisindeki tum sayıları alipn bir array oluştur (regex kullanarak).Fakat burdaki kritik nokta bu olusturmus oldugum array'imin herbir elemani olan sayilar string biciminde.ORN:["5","13"]

        //Bu altta map methodumu array'im uzerinde kullanarak her string biciminde olan sayilarimi number bicimine donusturup yeni bir array olusturuyorum.
        let arrayOfNumber = arrayOfString.map((element) => {
          return parseInt(element); // her bir dize öğesini tam sayıya dönüştür
        });
        //En sonda sahip oldugum bu array'imin her bir elemanini toplayip sum'a aktariyorum ve displayTotal fonksiyonumla ekranda gosteriyorum
        let sum = arrayOfNumber.reduce((total, num) => total + num, 0); // sayıların toplamını hesapla
        displayTotal(sum); // toplam sayının görünümünü güncelle

        // sayacı sıfırla
        count = 0;
      }
      // "cleared-btn" sınıfına sahip butona tıklandığında
      else if (btn.classList.contains("cleared-btn")) {
        saveEl.textContent = " "; // kaydedilmiş sayıların görünümünü sıfırla
        totalEl.textContent = "Total: "; // toplam sayının görünümünü sıfırla
      }
    });
  });

  // toplam sayının görünüm

  function displayTotal(number) {
    let str = "Total: ";
    totalEl.textContent = str + number;
  }
};

//*********************************************************************************************** */
//******************   KULLANDIGIM FONKSIYONLARIM NASIL CALISIR     ********************* */
//*********************************************************************************************** */

/*
!Bir string ifadedeki tüm sayıları seçmek için düzenli ifadeler (regular expressions) kullanabilirsiniz. Aşağıdaki örnek, bir string içindeki tüm sayıları seçer:

let str = "Bu bir örnek 123 string ifadedir ve içinde 456 sayıları bulunmaktadır.";
let nums = str.match(/\d+/g);
console.log(nums); // ["123", "456"]


!Bu örnekte, match methodu bir dizi döndürür ve her bir eleman string içindeki bir sayıdır. /\d+/g ifadesi düzenli ifadedir ve \d tüm rakamları ifade eder, + ise en az bir rakam olduğunu ifade eder ve g ise tüm string içindeki tüm eşleşmeleri arar.
*/

/*
!Array içerisindeki tüm elemanları sayıya dönüştürmek için map() metodu kullanılabilir. Bu metot, array içindeki her bir elemanı alır, belirtilen işlemi uygular ve sonuçları yeni bir array olarak döndürür.

?Örneğin, aşağıdaki arraydeki her bir elemanın sayıya dönüştürülmesini istediğimizi varsayalım:

let arr = ['3', '8', '12', '45'];

?Bu durumda, map() metodunu kullanarak her elemanı sayıya dönüştürebiliriz:

let newArr = arr.map((element) => {
  return parseInt(element);
});
console.log(newArr); // [3, 8, 12, 45]

?Burada, map() metodu her bir elemanı parseInt() fonksiyonu kullanarak sayıya dönüştürür ve sonuçları yeni bir dizi olan newArr içinde saklar.

*/

/*
!reduce() metodu, bir dizinin her elemanı üzerinde işlem yaparak tek bir değer döndürmek için kullanılır. Bu metot, bir dizi üzerindeki elemanları toplayarak, çarpılarak, birleştirerek vb. işlemler yapmamızı sağlar.  reduce() metodu, iki parametre alır: birincisi, her dizi elemanı üzerinde işlem yapacak olan bir fonksiyondur, ikincisi ise, başlangıç değeridir. İşlem sonunda, sonuç olarak tek bir değer döndürülür.

?Aşağıda, bir dizi içindeki sayıların toplamını bulmak için kullanabileceğimiz bir reduce() örneği verilmiştir:

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(total, num) {
  return total + num;
}, 0);
console.log(sum); // 15


?Yukarıdaki kodda, reduce() metodunun ilk parametresi olarak bir fonksiyon tanımlanmıştır. Bu fonksiyon, her dizi elemanı üzerinde işlem yapar. Fonksiyon, iki parametre alır: total ve num. total, önceki işlemler sonucu elde edilen değerdir. İlk işlemde, bu değer başlangıç değeri olan 0'dır. num, dizi içindeki elemandır. Fonksiyonun gövdesinde, total ve num değişkenleri toplanarak bir sonraki işlem için bir ara değer oluşturulur. Döngü sonlandığında, toplam değer sum değişkenine atanır.

?Aynı örnek, modern JavaScript ok işaretçisi (arrow function) kullanılarak da yazılabilir:


let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15


?Yukarıdaki örneklerde, reduce() metodu bir dizi üzerinde işlem yapmak için kullanılmıştır. Ancak, reduce() metodunu bir nesne üzerinde de kullanabilirsiniz. Bu durumda, fonksiyonun ilk parametresi olarak kullanılan fonksiyon, nesnenin özellikleri üzerinde işlem yapar.
*/
