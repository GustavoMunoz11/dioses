const form = document.getElementById("form_id");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(form.elements[0].value);
  console.log(form.elements[1].value);
});
