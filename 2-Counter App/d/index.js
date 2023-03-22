window.onload = function () {
  // incrementButton, decrementButton ve numberOfPassengers seçicilerini tanımlayalım.
  let incrementButton = document.querySelector("#increment-btn");
  let numberOfPassengers = document.querySelector(".count-el");
  let count = 0; // count adında bir değişken tanımlayalım ve başlangıçta değerini sıfır olarak atayalım.
  let decrementButton = document.querySelector("#decrement-btn");
  let decrement = 1; // decrement adında bir değişken tanımlayalım ve başlangıçta değerini bir olarak atayalım.

  // Arttırma butonuna tıklanıldığında yapılacak işlemleri tanımlayalım.
  incrementButton.addEventListener("click", (e) => {
    count = count + 1; // count değişkenini 1 arttıralım.
    numberOfPassengers.innerHTML = count; // numberOfPassengers içindeki metni count değişkeninin değeri ile güncelleyelim.
  });

  // Azaltma butonuna tıklanıldığında yapılacak işlemleri tanımlayalım.
  decrementButton.addEventListener("click", (e) => {
    if (count >= 0) {
      // Eğer count değişkeni sıfırdan büyük veya eşitse:
      decrement = count--; // decrement değişkenine count değişkeninin değerini atayıp count değişkenini 1 azaltalım.
      numberOfPassengers.innerHTML = decrement; // numberOfPassengers içindeki metni decrement değişkeninin değeri ile güncelleyelim.
    }
  });
};
