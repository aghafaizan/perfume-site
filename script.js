$(document).ready(function () {
  $(".increment").click(function () {
    let input = $(this).siblings(".quantity-input");
    let currentValue = parseInt(input.val());
    input.val(currentValue + 1);
  });

  $(".decrement").click(function () {
    let input = $(this).siblings(".quantity-input");
    let currentValue = parseInt(input.val());
    if (currentValue > parseInt(input.attr("min"))) {
      input.val(currentValue - 1);
    }
  });
});

// cart button

document.addEventListener("DOMContentLoaded", function () {
  let selectedCount = 0;

  // Select all the buttons with class 'add-cart-btn'
  const addCartButtons = document.querySelectorAll(".add-cart-btn");

  addCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle selection state
      const isSelected = button.classList.toggle("selected");

      // Update the selected count
      if (isSelected) {
        selectedCount++;
      } else {
        selectedCount--;
      }

      // Update the cart button's count display
      document.getElementById("selected-count").textContent = selectedCount;
    });
  });
});
