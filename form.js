document.getElementById("slider").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("prueba");
  let respuestas = [];

  let user = document.getElementById("Q1").value;
  console.log(user);

  let valores = document.querySelector('input[name="p2"]:checked').value;
  console.log(valores);
  respuestas.push(valores.split(","));

  let frases = Array.from(
    document.querySelectorAll('input[name="p3"]:checked')
  ).map((e) => e.value.split(","));
  respuestas.push(frases.flat());

  let rango = document.getElementById("4").value;
  console.log(rango);
  if (rango < 20) {
    respuestas.push(["1"]);
  } else if (rango < 40) {
    respuestas.push(["2"]);
  } else if (rango < 60) {
    respuestas.push(["3"]);
  } else if (rango < 80) {
    respuestas.push(["4"]);
  } else {
    respuestas.push(["5"]);
  }

  let imagen = document.querySelector('input[name="p5"]:checked').value;
  console.log(imagen);
  respuestas.push(imagen.split(","));

  let descripcion = document.querySelector('input[name="p6"]:checked').value;
  console.log(descripcion);
  respuestas.push(descripcion.split(","));
  respuestas = respuestas.flat();
  console.log(respuestas);

  for (let i = 0; i < respuestas.length; i++) {
    const element = respuestas[i];
    dioses[element] += 1;
  }
  console.log(dioses);
  console.log(getPropertyWithHighestValue(dioses));
  window.alert(
    `${user}, eres ${mensajes[getPropertyWithHighestValue(dioses)]}`
  );
});

let dioses = {
  zeus: 0,
  afrodita: 0,
  anubis: 0,
  buddah: 0,
  baldur: 0,
  loki: 0,
  sekhmet: 0,
  sungwukong: 0,
};

function getPropertyWithHighestValue(obj) {
  let highestValue = 0;
  let propWithHighestValue = null;

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] > highestValue) {
        highestValue = obj[prop];
        propWithHighestValue = prop;
      }
    }
  }

  return propWithHighestValue;
}

let mensajes = {
  zeus: "Zeus: Eres un líder nato, siempre buscas la justicia y la verdad. Eres muy valiente y siempre buscas la manera de ayudar a los demás. Eres muy inteligente y siempre buscas la manera de ayudar a los demás.",
  afrodita:
    "Afrodita: Eres una persona muy amorosa y siempre buscas la manera de ayudar a los demás. Eres muy inteligente y siempre buscas la manera de ayudar a los demás.",
  anubis: "Anubis: [Breve descripción de la personalidad]",
  buddah: "Buddah: [Breve descripción de la personalidad]",
  baldur: "Baldur: [Breve descripción de la personalidad]",
  loki: "Loki: [Breve descripción de la personalidad]",
  sekhmet: "Sekhmet: [Breve descripción de la personalidad]",
  sungwukong: "Sungwukong: [Breve descripción de la personalidad]",
};
