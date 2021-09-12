$(document).ready(function () {
  $("input:text").on("keydown", function () {
    $("div h2").text($(this).val());
  });
});