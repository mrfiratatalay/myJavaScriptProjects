// window.onload olayı gerçekleştiğinde sayfa tamamen yüklendiğinde yapılacak işlemler tanımlanıyor
window.onload = function () {
  // count değişkeni, HTML sayfasındaki counter id'sine sahip öğeye atanıyor
  let count = document.getElementById("counter");

  // btns değişkeni, tüm button öğelerine atanıyor
  let btns = document.querySelectorAll("button");

  // 3 tane buton için döngü oluşturuluyor
  for (let i = 0; i < 3; i++) {
    // Her butonun tıklama olayına, bir fonksiyon atanıyor
    btns[i].addEventListener("click", function (type) {
      // Eğer butonun içeriği "Decrease" ise, sayacı 1 azalt
      if (btns[i].innerText === "Decrease") {
        count.innerText--;
      }
      // Eğer butonun içeriği "Increase" ise, sayacı 1 artır
      else if (btns[i].innerText === "Increase") {
        count.innerText++;
      }
      // Eğer butonun içeriği "Reset" ise, sayacı sıfırla
      else {
        count.innerText = 0;
      }
    });
  }
};

//*************************************************************************************************
//*******************innerHtml ve innerText KULLANIM DURUMLARI*************************************
//*************************************************************************************************
/*
innerText ve innerHTML, DOM öğelerinin içeriğine erişmek veya içeriğini değiştirmek için kullanılan iki farklı özelliktir.

innerText, bir öğenin içeriğini temsil eder ve yalnızca öğenin görüntülenen metnini içerir. Örneğin, bir <p> öğesi içindeki bir metnin yalnızca düz metnini döndürür ve HTML etiketlerini yok sayar. innerText özelliği, öğenin alt öğelerini döndürmez ve yalnızca öğenin kendisine ait metni içerir.

innerHTML özelliği, bir öğenin içeriğine erişir ve öğenin içeriğini, HTML olarak döndürür. Örneğin, bir <p> öğesi içindeki metnin tamamını, HTML etiketleri dahil, döndürür. innerHTML özelliği, öğenin alt öğelerini de döndürür ve alt öğelerin içeriği de dahil edilir.

Kullanım durumlarına gelince, innerText, yalnızca düz metinle ilgilenen basit bir metin öğesi içeriği için kullanışlıdır. Bu nedenle, HTML öğelerini içeren bir içeriği değiştirmek istiyorsanız innerHTML kullanmalısınız. Ancak, innerHTML kullanırken, güvenlik açıklarına neden olabilecek kötü niyetli kodların enjekte edilmesine karşı dikkatli olunmalıdır.

!Özetlemek gerekirse, innerText özelliği, öğenin içeriğine erişmenizi sağlar ve yalnızca görüntülenen metni içerirken innerHTML, öğenin içeriğine erişmenizi sağlar ve HTML formatında içeriği döndürür. Hangi özellik kullanılacağı, öğenin içeriğinin doğası ve amaçlarına göre değişir.



?Örnek olarak, aşağıdaki HTML kodunu ele alalım:

<div id="example-div">
  <p>This is a <strong>sample</strong> paragraph.</p>
</div>

?Eğer `example-div` öğesindeki metni değiştirmek istiyorsak ve yalnızca düz metin ile ilgileniyorsak `innerText` özelliğini kullanabiliriz:


let divElement = document.getElementById("example-div");
divElement.innerText = "This is a new paragraph.";


?Bu kod çalıştırıldığında, `example-div` öğesi aşağıdaki gibi görünecektir:

<div id="example-div">
  This is a new paragraph.
</div>

?Eğer `example-div` öğesindeki metni değiştirmek ve HTML öğelerini değiştirmek istiyorsak `innerHTML` özelliğini kullanabiliriz:

let divElement = document.getElementById("example-div");
divElement.innerHTML = "<p>This is a <em>new</em> paragraph.</p>";


?Bu kod çalıştırıldığında, `example-div` öğesi aşağıdaki gibi görünecektir:

<div id="example-div">
  <p>This is a <em>new</em> paragraph.</p>
</div>


?Gördüğünüz gibi, `innerText` özelliği, yalnızca metni değiştirirken `innerHTML` özelliği, metin ve HTML öğelerini değiştirebilir.
*/
