/*
JavaScript'de join() methodu, bir dizi elemanını birleştirmek için kullanılan bir dizi metodu olarak kullanılır. Bu metot, bir dizi elemanını birleştirerek bir dize oluşturur.

join() metodu, bir diziyi birleştirmek için bir ayraç belirlemeyi sağlar. Bu ayraç, dizi elemanları arasında kullanılacak bir dizedir. Eğer ayraç belirtilmezse varsayılan olarak virgül (",") kullanılır.

Örnek kullanımı:
let arr = ["bir", "iki", "üç"];
let joinedArr = arr.join("-"); // Birleştirme işlemi yapılır
console.log(joinedArr); // "bir-iki-üç" yazdırılır

Yukarıdaki örnekte, join() metodu kullanılarak "bir-iki-üç" dizesi oluşturulur. Elemanlar arasındaki ayraç olarak, "-" karakteri belirtilmiştir. Bu şekilde, dizinin elemanları arasında "-" karakteri kullanılarak birleştirilir ve bir dize oluşturulur.

Dikkat edilmesi gereken bir diğer nokta da, join() metodunun, orijinal diziyi değiştirmediğidir. Yani, bu metodun kullanılması sonucunda oluşan yeni birleştirilmiş dizi, orijinal diziyi değiştirmez.
*/

// RGB renk kodu oluşturan fonksiyon
const displayRGBColor = () => {
  // Rastgele bir RGB renk kodu oluşturulur
  let color = (document.body.style.backgroundColor = `RGB(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);

  // Oluşturulan renk kodu ".color-text" sınıfına sahip bir öğeye yazdırılır
  document.querySelector(".color-text").innerText = color;

  // Oluşturulan renk kodu arka plan rengi olarak ayarlanır
  return color;
};

// HEX renk kodu oluşturan fonksiyon
const displayHexColor = () => {
  // Rastgele bir HEX renk kodu oluşturulur
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr[i] = Math.floor(Math.random() * 16).toString(16);
  }
  let hColor = arr.join("");

  // Oluşturulan renk kodu ".color-text" sınıfına sahip bir öğeye yazdırılır
  document.querySelector(".color-text").innerText = "#" + hColor;

  // Oluşturulan renk kodu arka plan rengi olarak ayarlanır
  document.body.style.backgroundColor = `#${hColor}`;
};

// Ana düğmenin tıklanması durumunda hangi fonksiyonun çağrılacağına karar veren filtreleme fonksiyonu
function filterDisplay() {
  //! Anahtar anahtarı kontrol edilirBu kod, belirtilen HTML elementinin (burada "switch" id'sine sahip bir checkbox) mevcut durumunu kontrol etmek için kullanılır."getElementById()" yöntemi, belirtilen id değerine sahip bir HTML elementini seçmek için kullanılır. Burada "switch" id'sine sahip checkbox seçilir."checked" özelliği, seçilen checkbox'un durumunu belirler. "checked" özelliği true veya false değeri alabilir ve checkbox'un işaretli veya işaretsiz olduğunu belirtir.Bu kod, "switch" id'sine sahip checkbox'un işaretli olup olmadığını kontrol eder ve bu durumu true veya false olarak döndürür.
  if (document.getElementById("switch").checked) {
    // Anahtar anahtarı açık ise RGB renk kodu oluşturma fonksiyonu çağrılır
    document
      .querySelector(".main-button")
      .addEventListener("click", displayRGBColor);
  } else {
    // Anahtar anahtarı kapalı ise HEX renk kodu oluşturma fonksiyonu çağrılır
    document
      .querySelector(".main-button")
      .addEventListener("click", displayHexColor);
  }
}
