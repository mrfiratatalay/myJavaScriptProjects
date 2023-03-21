const body = document.body;
const clrCode = document.querySelector(".color-code");
const btns = document.querySelectorAll("button");

const randomClr = (intensity = 255) => {
  return Math.ceil(Math.random() * intensity);
};

const bgChange = () => {
  const rndBg = `rgb(${randomClr()}, ${randomClr()}, ${randomClr()})`;
  body.style.backgroundColor = rndBg;
  clrCode.innerText = rndBg;
};

const rgb2hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
    .join("")}`;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;

    if (btnClass.contains("get-color")) {
      bgChange();
    } else {
      const pageClr = getComputedStyle(body)["background-color"];
      const hexCode = rgb2hex(pageClr);
      clrCode.innerText = hexCode;
    }
  });
});

//***********************************************************************************************/
//************* Math.floor(), Math.ceil(), Math.random() FONKSIYONLARIM NASIL CALISIR **********/
//***********************************************************************************************/

//! Math.random fonksiyonum nasil calisir ve hangi amaclarda kullanilir

// ? Math.random() fonksiyonu, JavaScript programlama dilinde rastgele sayılar oluşturmak için kullanılır. Bu fonksiyon, 0 ile 1 arasında bir ondalıklı sayı üretir ve her çalıştırıldığında farklı bir sayı üretir. Bu nedenle, Math.random() fonksiyonu kullanılarak rastgele sayılar üretmek, örneğin oyunlarda veya simülasyonlarda kullanılan birçok farklı amaç için faydalıdır. Math.random() fonksiyonu, genellikle bir tamsayı aralığına rastgele bir sayı üretmek için kullanılır. Örneğin, 1 ila 10 arasında rastgele bir sayı üretmek istediğinizde, Math.random() fonksiyonunun sonucunu çarpıp yuvarlamak gibi bir yöntem kullanabilirsiniz. Aşağıdaki örnek bu yöntemi gösterir:

// 1 ile 10 arasında rastgele bir tamsayı üretin

// var randomNumber = Math.floor(Math.random() * 10) + 1;

//?  Bu kod örneği, Math.random() fonksiyonundan üretilen ondalıklı sayıyı 10 ile çarparak bir tamsayı elde eder ve ardından bu sayıya 1 ekleyerek 1 ila 10 arasında bir sayı elde eder. Math.random() fonksiyonu ayrıca, örneğin bir dizi öğeleri rastgele sıraya koymak veya bir şeyin olasılığını hesaplamak gibi diğer senaryolarda da kullanılabilir.

//! Math.floor ve Math.ceil fonsiyonumlarim nasil calisir ve ne ise yarar

//?  JavaScript programlama dilinde, Math.floor() ve Math.ceil() fonksiyonları, bir ondalıklı sayıyı tam sayıya yuvarlamak için kullanılır. İki fonksiyon arasındaki fark, yuvarlama işleminin hangi yöne doğru yapılacağıdır. Math.floor() fonksiyonu, bir ondalıklı sayıyı aşağı doğru yuvarlar ve en yakın tam sayıya yuvarlar. Örneğin, Math.floor(3.7) işlevi, 3 değerini döndürür.

// console.log(Math.floor(3.7)); // 3
// console.log(Math.floor(9.2)); // 9
// console.log(Math.floor(-4.6)); // -5

//?Math.ceil() fonksiyonu ise, bir ondalıklı sayıyı yukarı doğru yuvarlar ve en yakın tam sayıya yuvarlar. Örneğin, Math.ceil(3.7) işlevi, 4 değerini döndürür.

// console.log(Math.ceil(3.7)); // 4
// console.log(Math.ceil(9.2)); // 10
// console.log(Math.ceil(-4.6)); // -4

//?  Math.floor() fonksiyonu, özellikle matematiksel hesaplarda kullanışlıdır. Örneğin, bir öğrencinin ortalama notunu hesaplarken, notların toplamını öğrenci sayısına böldüğünüzde, ortalama bir ondalıklı sayı çıkabilir. Bu durumda, Math.floor() fonksiyonunu kullanarak sonucu tam sayıya yuvarlayabilirsiniz.Math.ceil() fonksiyonu ise, özellikle ekran boyutu, yükseklik veya genişlik gibi tam sayı olması gereken değerler için kullanışlıdır. Örneğin, bir HTML sayfasının genişliğini hesaplarken, Math.ceil() fonksiyonunu kullanarak, tarayıcının penceresinin her zaman sayfanın tümünü göstereceği bir tam sayı elde edebilirsiniz.

//***********************************************************************************************/
//************* NODELIST ARRAYIM NASIL CALISIR **********/
//***********************************************************************************************/
/*
//* JavaScript'te, querySelectorAll() yöntemi, bir CSS seçici kullanarak belirli bir DOM ağacındaki tüm eşleşen öğeleri seçmek için kullanılır. Bu yöntem, Document, Element veya DocumentFragment gibi bir elemanın altındaki tüm öğeleri seçmek için kullanılabilir. Bu yöntem, bir veya daha fazla CSS seçicisi alır ve eşleşen tüm öğeleri içeren bir NodeList nesnesi döndürür. Bu NodeList, bir dizi öğe gibi davranır ve öğeler üzerinde işlemler yapmak için forEach() veya for döngüsü gibi dizi işlevlerini kullanabilirsiniz.
?Örneğin, tüm <p> etiketlerini seçmek için aşağıdaki kodu kullanabilirsiniz:

const paragraphs = document.querySelectorAll('p');

?Bu kod, belgedeki tüm <p> etiketlerini seçer ve paragraphs adlı NodeList nesnesine atar. Daha sonra, bu NodeList nesnesindeki her bir öğeyi dolaşmak için forEach() veya for döngüsü gibi bir dizi yöntemi kullanabilirsiniz.querySelectorAll() yöntemi, özellikle bir web sayfasında birden çok öğenin özelliklerini veya içeriğini aynı anda değiştirmek istediğinizde kullanışlıdır. Örneğin, belirli bir sınıfa sahip tüm öğeleri seçerek, bu öğelerin stil özelliklerini veya içeriklerini değiştirebilirsiniz.

!NodeList hakkinda bilgi verirmisin

?NodeList, bir HTML belgesindeki veya bir XML belgesindeki düğümlerin bir koleksiyonudur. NodeList, bir dizi benzer öğeyi (örneğin, belgedeki tüm <p> etiketleri) seçmek için kullanılan çeşitli JavaScript yöntemleri tarafından döndürülür. NodeList, bir dizinin benzer özelliklerine sahiptir ve belirli bir sıraya sahip öğeler listesidir.NodeList, bir NodeList nesnesine atanan bir dizi düğümün her bir düğümüne (öğesine) erişim sağlayan özelliklere sahiptir. NodeList, DOM ağacındaki belirli bir düğümün altındaki tüm öğeleri içerebilir veya belirli bir seçicinin eşleştirdiği öğeleri içerebilir. NodeList, belirli bir öğeye veya düğüme bir seçici kullanarak ulaşmak için kullanılan getElementsByClassName(), getElementsByTagName() ve querySelectorAll() gibi DOM yöntemleri tarafından oluşturulabilir. NodeList nesnesi, özellikle belirli bir öğenin altındaki tüm öğelerde belirli bir işlem yapmak istediğinizde kullanışlıdır. Örneğin, bir NodeList nesnesindeki her bir öğeyi forEach() veya for döngüsü gibi bir dizi yöntemi kullanarak dolaşabilir ve her bir öğenin özelliklerini veya içeriğini değiştirebilirsiniz.

Örneğin, belirli bir sınıfa sahip tüm öğeleri seçmek istediğimizde, NodeList kullanabiliriz. Aşağıdaki örnek, HTML belgesindeki tüm öğeleri seçer ve bu öğelerin sınıf adını değiştirir:


<!DOCTYPE html>
<html>
  <head>
    <title>NodeList Example</title>
  </head>
  <body>
    <p class="example">This is an example paragraph.</p>
    <p class="example">This is another example paragraph.</p>
    <p>This is a normal paragraph.</p>
    
    <script>
      // Get all elements with class "example"
      const elements = document.querySelectorAll(".example");
      
      // Loop through elements and change class name
      elements.forEach(element => {
        element.className = "new-class";
      });
    </script>
  </body>
</html>

Bu örnek, belgedeki tüm sınıfı "example" olan öğeleri seçer ve bu öğelerin sınıf adını "new-class" olarak değiştirir. elements adlı NodeList nesnesi, seçici ".example" ile eşleşen öğeleri içerir.
*/
