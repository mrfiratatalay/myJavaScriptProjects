window.onload = function () {
  const getColor = () => {
    // 0 ile 16777215 arasında rastgele bir sayı oluşturulur
    const randomNumber = Math.floor(Math.random() * 16777215);

    // Oluşturulan sayı, hex renk koduna çevrilmek üzere toString() metodu kullanılarak 16'lık sayı sistemi kullanılarak string'e dönüştürülür
    const randomCode = "#" + randomNumber.toString(16);

    // Sayfanın arka plan rengi, oluşturulan randomCode ile değiştirilir
    document.body.style.backgroundColor = randomCode;

    // Renk kodu, kullanıcının görebilmesi için colorcode id'li öğeye yazdırılır
    document.getElementById("colorcode").innerText = randomCode;
  };

  // getColor fonksiyonu, click olayı gerçekleştiğinde tetiklenir
  document.getElementById("btn").addEventListener("click", getColor);
};

//
//-------------------------------------------------------
//               toString() METHOD'um
//--------------------------------------------------------
/*
JavaScript'te, bir sayı veya bir nesne için string bir ifade elde etmek için toString() methodu kullanılır. Bu method sayısal ifadeleri string'e dönüştürür ve geri döndürür.

Örneğin:

javascript
Copy code
let num = 123;
let str = num.toString();
console.log(str); // "123"


Burada toString() methodu, num değişkeninde saklanan sayıyı string bir ifadeye dönüştürür ve str değişkenine atar.

Ayrıca, toString() methodu farklı sayı tabanlarına (binary, octal, hex) dönüştürmek için de kullanılabilir. Bunun için, methoda sayı tabanını belirten bir argüman vermek gerekir. Örneğin:

javascript
Copy code
let num = 255;
let binary = num.toString(2);
let octal = num.toString(8);
let hex = num.toString(16);
console.log(binary); // "11111111"
console.log(octal); // "377"
console.log(hex); // "ff"


Burada, toString() methodu sırasıyla binary, octal ve hex tabanlarına göre dönüşüm yapar ve sonuçları ilgili değişkenlere atar.
*/
