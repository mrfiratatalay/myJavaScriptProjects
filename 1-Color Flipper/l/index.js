window.onload = function () {
  // 1. document.body ile <body> öğesini alarak body değişkenine atama yapıyoruz
  const body = document.body;

  // 2. .color-code sınıfına sahip ilk öğeyi seçerek clrCode değişkenine atama yapıyoruz
  const clrCode = document.querySelector(".color-code");

  // 3. Tüm <button> öğelerini seçerek btns değişkenine NodeList olarak atama yapıyoruz
  const btns = document.querySelectorAll("button");

  // 4. randomClr() adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, 0-255 arasında rasgele bir sayı döndürür
  const randomClr = (intensity = 255) => {
    return Math.ceil(Math.random() * intensity);
  };

  // 5. bgChange() adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, rastgele bir RGB arka plan rengi oluşturur ve <body> öğesinin arka plan rengini değiştirir.
  const bgChange = () => {
    const rndBg = `rgb(${randomClr()}, ${randomClr()}, ${randomClr()})`;
    body.style.backgroundColor = rndBg;
    clrCode.innerText = rndBg;
  };

  //!!! 6. rgb2hex() adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, bir RGB renk kodunu altı basamaklı bir hex renk koduna dönüştürür.Bu kod, bir RGB rengini alır ve bunu HEX renk koduna dönüştürür. Yani, bir fonksiyon olarak tanımlanır ve rgb parametresi olarak bir RGB renk değeri alır.Daha sonra, .match() yöntemi kullanılarak, rgb parametresi içindeki sayısal değerler üçlü gruplar halinde ayıklanır. Burada, /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/ regular ifadesi kullanılır. Bu ifade, rgb() fonksiyonunun içindeki sayısal değerleri sırayla gruplar ve bunları ayıklamak için kullanılır.Bu sayısal değerler, .slice() yöntemi kullanılarak gruplandırılır ve .map() yöntemi ile her bir sayısal değer onaltılık sistemdeki karşılığına dönüştürülür. .padStart() yöntemi, her bir sayısal değerin, iki haneli bir onaltılık sayısal değer olarak gösterilmesini sağlar. Bu, onaltılık sisteme dönüştürülen sayılar 9'dan küçük olduğunda, önlerine bir sıfır eklenerek gerçekleştirilir.Son olarak, .join() yöntemi kullanılarak, onaltılık sistemdeki sayısal değerler birleştirilir ve # sembolü ile birlikte bir HEX renk koduna dönüştürülür. Bu HEX renk kodu, fonksiyonun dönüş değeri olarak döndürülür.
  const rgb2hex = (rgb) =>
    `#${rgb
      .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      .slice(1)
      .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
      .join("")}`;

  // 7. btns NodeList'inin her bir öğesi için bir tıklama olayı dinleyicisi ekliyoruz
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const btnClass = e.currentTarget.classList;

      // 8. Eğer tıklanan buton "get-color" sınıfına sahipse, bgChange() fonksiyonunu çağırarak rastgele bir arka plan rengi oluşturuyoruz
      if (btnClass.contains("get-color")) {
        bgChange();
      }
      // 9. Eğer tıklanan buton "get-hex" sınıfına sahipse, sayfanın mevcut arka plan rengini alarak RGB renk kodunu hex renk koduna dönüştürüyoruz ve clrCode öğesinde görüntülüyoruz
      else {
        const pageClr = getComputedStyle(body)["background-color"];
        const hexCode = rgb2hex(pageClr);
        clrCode.innerText = hexCode;
      }
    });
  });
};

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

//***********************************************************************************************/
//************* event.target() ve event.currentTarget() **********/
//***********************************************************************************************/
/*
!Öncelikle bir HTML sayfası üzerindeki bir butona tıkladığımızda gerçekleşen olayı ele alalım. Bu butona tıkladığımızda JavaScript tarafında bir olay tetiklenir ve bu olayın dinleyicisi olan bir işlev çalıştırılır. Bu işlev, olaya ilişkin ayrıntıları içeren bir `event` nesnesi alır. Bu `event` nesnesi, birkaç özellik içerir. Bunlar arasında `target` ve `currentTarget` özellikleri de yer alır. `target` özelliği, olayın hedefi olan öğeyi, yani olayın gerçekleştiği butonu temsil ederken, `currentTarget` özelliği, olayın işlendiği öğeyi, yani olay dinleyicisinin bağlandığı elementi temsil eder.

<div id="outer">
  <button id="inner">Click me</button>
</div>


!Bu `button` elementine tıklandığında bir olay dinleyicisi tetiklenecek ve `event` nesnesi oluşturulacaktır. Olay dinleyicisi, `event` nesnesinin `target` ve `currentTarget` özelliklerine erişebilir.


const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');

outer.addEventListener('click', function(event) {
  console.log('target:', event.target); // <button id="inner">
  console.log('currentTarget:', event.currentTarget); // <div id="outer">
});

inner.addEventListener('click', function(event) {
  console.log('target:', event.target); // <button id="inner">
  console.log('currentTarget:', event.currentTarget); // <button id="inner">
});


*Bu örnekte, `outer` adlı `div` elementine bir tıklama olayı dinleyicisi ekledik. Olay dinleyicisi, `event.target` özelliği ile `button` öğesine (yani tıklama olayının gerçekleştiği hedef öğe) erişirken, `event.currentTarget` özelliği ile `div` öğesine erişir (yani olay dinleyicisinin bağlandığı öğe). Aynı şekilde, `inner` adlı `button` elementine bir tıklama olayı dinleyicisi ekledik. Olay dinleyicisi, `event.target` özelliği ile yine `button` öğesine (yani tıklama olayının gerçekleştiği hedef öğe) erişirken, `event.currentTarget` özelliği ile bu kez `button` öğesine erişir (yani olay dinleyicisinin bağlandığı öğe). Bu örnekte, `target` ve `currentTarget` özellikleri farklı sonuçlar verir çünkü tıklama olayının hedefi olan `button` öğesi, farklı bir öğeye (`div` öğesi) bağlı olan olay dinleyicisine ve aynı öğeye (`button` öğesi) bağlı olan olay dinleyicisine sahiptir. Bu nedenle, `currentTarget` özelliği, her olay dinleyicisi için farklı bir öğeyi temsil ederken, `target` özelliği her iki olay dinleyicisi için de aynı öğeyi temsil eder.
*/

//***********************************************************************************************/
//************* OBJECT DOMTokenList **********/
//***********************************************************************************************/
/*
!DOMTokenList, DOM öğelerinin sınıf listesi gibi bir dizi alan içeren bir arayüz öğesidir. classList özelliği ile birlikte kullanılarak, bir öğenin sınıflarıyla ilgili işlemler yapmak için kullanılır. DOMTokenList nesnesi, bir öğenin sınıf listesi gibi bir dizi alanı içeren ve bu alan üzerinde bazı işlemleri gerçekleştirmek için yöntemler sağlayan bir arayüz öğesidir. Bu yöntemler arasında sınıf ekleme, silme ve değiştirme gibi işlemler bulunur. Bir DOM öğesi üzerindeki classList özelliğini kullanarak DOMTokenList nesnesine erişilebilir. Örneğin, aşağıdaki kod parçası, myElement adlı bir öğenin sınıf listesine "active" sınıfını ekler:

const myElement = document.querySelector("#my-element");
myElement.classList.add("active");

Yukarıdaki kod, myElement öğesinin sınıf listesine "active" sınıfını ekler. classList özelliği, sınıf eklemek, silmek, değiştirmek ve sorgulamak için bir dizi farklı yöntem sağlar. Örneğin, aşağıdaki kod parçası, myElement öğesinin sınıf listesindeki "active" sınıfını kaldırır:


myElement.classList.remove("active");


DOMTokenList nesnesi ayrıca, öğenin sınıf listesinde belirli bir sınıfın olup olmadığını kontrol etmek için contains() yöntemini de sağlar. Örneğin, aşağıdaki kod parçası, myElement öğesinin sınıf listesinde "active" sınıfı varsa, true değerini döndürür:


const hasActiveClass = myElement.classList.contains("active");

Sonuç olarak, DOMTokenList nesnesi, öğelerin sınıflarıyla ilgili işlemler yapmak için oldukça kullanışlıdır.
*/

//***********************************************************************************************/
//************* window OBJEM NE ISE YARAR **********/
//***********************************************************************************************/

/*
!`window` global nesnesi, JavaScript kodunun tarayıcıda çalıştığı herhangi bir yerden erişilebilir olduğu için, web sayfalarında birçok amaç için kullanılır. Bazı örnekler şunlardır:

*   Tarayıcı penceresi ile ilgili bilgileri almak veya ayarlamak, örneğin mevcut URL, pencere boyutu, kaydırma konumu vb.
*   Bildirim kutuları, onay kutuları veya giriş kutuları gibi kullanıcı arayüzü bileşenleri oluşturmak.
*   Timerlar ve setInterval() gibi fonksiyonlarla zamanlama işlemlerini gerçekleştirmek.
*   Gezinme işlemleri yapmak, örneğin tarayıcı penceresindeki sayfalar arasında geçiş yapmak.
*   Çerezlerle ilgili işlemler yapmak, örneğin çerez değerlerini okumak veya ayarlamak.
*   Dış kaynaklar, örneğin diğer JavaScript dosyaları veya CSS dosyaları gibi dosyaları yüklemek veya içe aktarmak.

?Elde ettiğiniz DOM elemanının boyutlarına erişmek, metinleri kaydırmak, tarayıcının ekranına yeni bir pencere açmak veya özellikleriyle etkileşime girmek gibi birçok işlem için `window` nesnesi kullanılabilir. Örneğin, bir web sayfasındaki belirli bir öğenin boyutunu ve konumunu öğrenmek için, `window` nesnesi üzerinden `getComputedStyle()` yöntemini kullanabilirsiniz. Aşağıdaki örnek, belirli bir HTML öğesinin genişliğini ve yüksekliğini alır:

const element = document.getElementById("my-element");
const styles = window.getComputedStyle(element);
const height = styles.getPropertyValue("height");
const width = styles.getPropertyValue("width");
console.log(`Element height is ${height} and width is ${width}`);


?Benzer şekilde, bir metin kutusuna veya form elemanına erişmek için, `window` nesnesi üzerinden `document` özelliği kullanabilirsiniz. Aşağıdaki örnek, `getElementById()` yöntemini kullanarak bir form elemanına erişir ve kullanıcının girilen değeri konsola yazar:

const formElement = document.getElementById("my-form-element");
const userValue = formElement.value;
console.log(`User entered ${userValue}`);
`window` nesnesi ayrıca `alert()`, `prompt()`, `confirm()` gibi pop-up bildirim kutuları oluşturmak için kullanılabilir.

?Örneğin:

const result = window.confirm("Are you sure you want to delete this item?");
if (result === true) {
  // delete the item
} else {
  // do nothing
}


?`window` nesnesi ayrıca sayfayı kaydırmak için de kullanılabilir. Örneğin, aşağıdaki örnek, kullanıcının bir düğmeye tıkladığında sayfayı belirli bir mesafeye kaydırır:

const button = document.getElementById("scroll-button");
button.addEventListener("click", function() {
  window.scrollBy(0, 200); // Scroll the page down by 200 pixels
});

?Son olarak, `window` nesnesi, sayfa yenileme veya başka bir sayfaya yönlendirme gibi tarayıcı işlemlerini gerçekleştirmek için de kullanılabilir. Örneğin, aşağıdaki örnek, kullanıcının bir düğmeye tıkladığında başka bir sayfaya yönlendirir:

const button = document.getElementById("redirect-button");
button.addEventListener("click", function() {
  window.location.href = "http://www.example.com";
});
*/

//***********************************************************************************************/
//************* getComputedStyle Ozelligi**********/
//***********************************************************************************************/
/*
!!! getComputedStyle() bir obje döndürür. Bu obje, belirtilen bir öğenin tüm hesaplanmış stil özelliklerini içerir. Bu hesaplanmış stil özellikleri, öğenin stil özellikleri ve CSS kaskadına dayalı olarak belirlenir. Bu nedenle, getComputedStyle() kullanarak öğenin gerçek görünümünü alabilirsiniz. 

HTML kodumuzda, bir <div> öğesi oluşturalım ve bu öğeye bazı stil özellikleri atayalım:

<div id="myDiv" style="width: 200px; height: 100px; background-color: blue; padding: 10px;"></div>

JavaScript kodumuzda, bu <div> öğesini seçip, getComputedStyle() yöntemini kullanarak hesaplanmış stil özelliklerini alalım:

const myDiv = document.querySelector('#myDiv');

const computedStyle = getComputedStyle(myDiv);

console.log(computedStyle.width); // "200px"
console.log(computedStyle.height); // "100px"
console.log(computedStyle.backgroundColor); // "rgb(0, 0, 255)"
console.log(computedStyle.padding); // "10px"


?Yukarıdaki kodda, `getComputedStyle(myDiv)` çağrısı bir hesaplanmış stil nesnesi döndürür. Bu nesne, "width", "height", "background-color" ve "padding" gibi tüm stil özelliklerini içerir. Bu özelliklere erişmek için, hesaplanmış stil nesnesinin ilgili özelliğine erişebiliriz.

?Örneğin, `computedStyle.width` özelliği <div> öğesinin genişliğini döndürür. Ayrıca, `computedStyle.backgroundColor` özelliği <div> öğesinin arka plan rengini ("rgb(0, 0, 255)" olarak) döndürür.

?`getComputedStyle(body)["background-color"]` ifadesi, `<body>` öğesinin arka plan rengini döndürür.

Örneğin, aşağıdaki HTML kodunda:
<body style="background-color: #f1f1f1;">
  <div>Some content here</div>
</body>

JavaScript kodumuzda, `getComputedStyle()` yöntemini kullanarak `<body>` öğesinin hesaplanmış stil özelliklerini alabiliriz:
const body = document.querySelector('body');

const backgroundColor = getComputedStyle(body)['background-color'];

console.log(backgroundColor); // "rgb(241, 241, 241)"

Yukarıdaki kodda, `getComputedStyle(body)['background-color']` ifadesi `<body>` öğesinin arka plan rengini ("rgb(241, 241, 241)" olarak) döndürür.
*/
