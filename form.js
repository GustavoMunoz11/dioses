document.getElementById("slider").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("prueba");
  let user = document.getElementById("Q1").value;
  console.log(user);
  let valores = document.querySelector('input[name="p2"]:checked').value;
  valores = Question2;
  console.log(valores);
  let frases = Array.from(
    document.querySelectorAll('input[name="p3"]:checked')
  ).map((e) => e.value);
  console.log(frases);
  let rango = document.getElementById("4").value;
  console.log(rango);
  let imagen = document.querySelector('input[name="p5"]:checked').value;
  console.log(imagen);
  let descripcion = document.querySelector('input[name="p6"]:checked').value;
  console.log(descripcion);
});

let puntos = [1, 2, 3, 4, 5, 6, 7, 8];

let dioses = [
  "Zeus",
  "Afrodita",
  "Anubis",
  "Budda",
  "Baldur",
  "Loki",
  "Sekhmet",
  "SungWukong",
];

function Question2() {
  if (valores == 1) {
    puntos.map((e) => e - 2, 3, 4, 5, 7);
    return [[puntos]];
  }
}
