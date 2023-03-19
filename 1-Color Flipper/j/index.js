// Sayfa yüklenince çalışacak fonksiyon tanımlanır
window.onload = function () {
  // Rastgele bir renk seçmek için fonksiyon tanımlanır
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let clear;
  // Sol düğmeye tıklanınca her saniye arka plan rengi değişir ve 0.5 saniyelik bir geçiş efekti uygulanır
  document.getElementById("left").addEventListener("click", () => {
    clear = setInterval(function () {
      document.getElementById("color").innerHTML = getRandomColor();
      document.body.style.background = getRandomColor();
      document.body.style.transition = "0.5s";
    }, 1000);
  });

  // Sağ düğmeye tıklanınca otomatik arka plan değiştirme işlemi durdurulur
  document.getElementById("right").addEventListener("click", () => {
    clearInterval(clear);
  });
};

//!   `setInterval` ve `clearInterval` JavaScript metodları, sürekli olarak tekrarlanan işlemler yapmak için kullanılan zamanlayıcıları kontrol etmek için kullanılır.

//* `setInterval` metodunun kullanımı şu şekildedir:
//! setInterval(fonksiyon, zamanAralığı);

//* Bu metod, `fonksiyon` parametresi olarak verilen işlevi, `zamanAralığı` parametresi olarak belirtilen süre aralıklarında yineler. Yani, örneğin, `setInterval(myFunction, 1000)` kodu, `myFunction` işlevini her saniyede bir kez çağıracaktır.
//* `setInterval` metodunun döndürdüğü bir sayısal değer vardır, bu sayısal değer, zamanlayıcıyı kontrol etmek için kullanılır. Örneğin, `var timerId = setInterval(myFunction, 1000)` kodu, bir zamanlayıcıyı başlatır ve zamanlayıcının kimliğini `timerId` değişkenine atar.

//* `clearInterval` metodunun kullanımı şu şekildedir:
//! clearInterval(timerId);

//* Bu metod, `timerId` parametresi olarak belirtilen zamanlayıcıyı durdurur ve tekrarlanan işlemlerin yapılmasını durdurur. Örneğin, yukarıdaki örnekteki zamanlayıcıyı durdurmak için `clearInterval(timerId)` kodunu kullanabilirsiniz.

//?ORNEK?
/*

var count = 0;
var timerId = setInterval(function () {
  count++;
  console.log(count);
}, 1000);

setTimeout(function () {
  clearInterval(timerId);
}, 5000);

*/
//! Bu kod, her saniye bir `count` değişkenini artırır ve `console.log` işlevini çağırır. Ancak, 5 saniye sonra `setTimeout` metodunu kullanarak zamanlayıcıyı durdurur ve tekrarlanan işlemleri durdurur.

//?/`setTimeout` metodunun amacı, belirli bir süre sonra bir işlevi yürütmektir. Yani, belirli bir süre sonra yalnızca bir kez bir işlevi çağırmak istediğiniz durumlarda kullanabilirsiniz. Örneğin, bir kullanıcının butona tıklamasından sonra bir mesajı göstermek veya bir animasyonu başlatmak gibi durumlar için `setTimeout` kullanabilirsiniz.Öte yandan, `setInterval` metodunun amacı, belirli aralıklarla bir işlevi yürütmektir. Yani, bir işlevi sürekli olarak belirli bir süre aralığına göre çağırmak istediğiniz durumlarda kullanabilirsiniz. Örneğin, bir saatten kısa süre aralıklarıyla bir saatlik verileri güncellemek veya bir animasyonu sürekli olarak yinelemek gibi durumlar için `setInterval` kullanabilirsiniz.

/*

//* 2 saniye sonra bir işlevi çağırmak için setTimeout kullanma örneği
setTimeout(function () {
  console.log("2 saniye sonra bu metin görünecek!");
}, 2000);

//* 1 saniyede bir bir işlevi çağırmak için setInterval kullanma örneği
var counter = 0;
var intervalId = setInterval(function () {
  console.log("Bu mesaj her saniye bir kez görünecek!");
  counter++;
  if (counter === 5) {
    clearInterval(intervalId); // 5 kez çağırdıktan sonra interval'ı durdur
  }
}, 1000);

*/

//!JavaScript'te `setTimeout` ve `setInterval` metotları, zamanlama ile ilgili işlemler yapmak için kullanılırlar. Hangi metodu kullanacağınız, yapmak istediğiniz işleme bağlıdır.

//?`setTimeout` metodu, belirli bir süre sonra yalnızca bir kez bir işlevi çağırmak istediğiniz durumlarda kullanılır. Örneğin, bir kullanıcının butona tıklamasından sonra bir mesajı göstermek veya bir animasyonu başlatmak gibi durumlar için `setTimeout` kullanabilirsiniz.`setInterval` metodu, belirli aralıklarla bir işlevi yürütmek istediğiniz durumlarda kullanılır. Örneğin, bir saatten kısa süre aralıklarıyla bir saatlik verileri güncellemek veya bir animasyonu sürekli olarak yinelemek gibi durumlar için `setInterval` kullanabilirsiniz.

//*Ancak, `setInterval`'ın bazı dezavantajları vardır. Özellikle, interval aralığından daha fazla sürede işlevin çalışması durumunda, işlevler yavaşlayabilir veya çakılabilir. Bu nedenle, özellikle interval aralığına bağlı olarak, `setInterval` yerine `setTimeout` kullanmak daha iyi olabilir. Örneğin, bir saatte bir işlevi çağırmak yerine her saat başında işlevi çağırmak için `setTimeout` kullanmak daha uygun olabilir.Ayrıca, her iki metodun da tarayıcıda fazla kaynak tüketebileceği unutulmamalıdır. Bu nedenle, zamanlama işlemleri yaparken özenli olunması ve gereksiz yere yüksek frekanslı işlemlerden kaçınılması önemlidir.
