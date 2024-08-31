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
