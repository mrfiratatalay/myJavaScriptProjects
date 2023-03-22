window.onload = function () {
  // Set initial count to zero
  let count = 0;

  // Select the value element and all buttons
  const value = document.querySelector("#value");
  const btns = document.querySelectorAll(".btn");

  // Loop through all buttons and add click event listeners to each one
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;

      // If Decrease button is clicked, decrement the count by 1
      if (styles.contains("decrease")) {
        count--;
      }
      // If Increase button is clicked, increment the count by 1
      else if (styles.contains("increase")) {
        count++;
      }
      // If Reset button is clicked, set the count to zero
      else {
        count = 0;
      }

      // Change the color of the count text based on its value
      if (count > 0) {
        value.style.color = "green";
      } else if (count < 0) {
        value.style.color = "red";
      } else {
        value.style.color = "#222";
      }

      // Update the text content of the value element to the new count value
      value.textContent = count;
    });
  });
};
