let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];
let left_btn2 = document.getElementsByClassName("bi2 bi-chevron-left")[0];
let right_btn2 = document.getElementsByClassName("bi2 bi-chevron-right")[0];
let left_btn3 = document.getElementsByClassName("bi3 bi-chevron-left")[0];
let right_btn3 = document.getElementsByClassName("bi3 bi-chevron-right")[0];
let left_btn4 = document.getElementsByClassName("bi4 bi-chevron-left")[0];
let right_btn4 = document.getElementsByClassName("bi4 bi-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let cards2 = document.getElementsByClassName("cards2")[0];
let cards3 = document.getElementsByClassName("cards3")[0];
let cards4 = document.getElementsByClassName("cards4")[0];
const seriebotao = document.getElementById("seriesbtn");
const homebotao = document.getElementById("homebtn");
const filmebotao = document.getElementById("filmesbtn");
const animebotao = document.getElementById("animesbtn");
const anime = document.getElementById("animes");
const populares = document.getElementById("populares");
const serie = document.getElementById("series");
const filme = document.getElementById("filmes");
const contact = document.getElementById("contact");
const contactssreen = document.getElementById("contacts");
const closetabicon = document.getElementById("closetab");
const seta = document.querySelector(".seta");
const content = document.querySelector(".perfil2");
const nav = document.getElementsByClassName(".logo_ul");
const aviso = document.getElementById("aviso_filme");
const poster_coringa = document.getElementById("coringa_filme");
const poster_coringa2 = document.getElementById("coringa_filme_populares");
const poster_assimqueacaba = document.getElementById("assimqueacaba_filme");
const poster_oabutre = document.getElementById("oabutre_filme");
const poster_oabutre2 = document.getElementById("oabutre_filme_populares");
const poster_terrifier = document.getElementById("terrifier_filme");
const poster_bladerunner = document.getElementById("bladerunner_filme");
const poster_oculpado = document.getElementById("oculpado_filme");
const closefilme = document.getElementById("closefilm");

left_btn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});
right_btn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

left_btn2.addEventListener("click", () => {
  cards2.scrollLeft -= 140;
});
right_btn2.addEventListener("click", () => {
  cards2.scrollLeft += 140;
});

left_btn3.addEventListener("click", () => {
  cards3.scrollLeft -= 140;
});
right_btn3.addEventListener("click", () => {
  cards3.scrollLeft += 140;
});

left_btn4.addEventListener("click", () => {
  cards4.scrollLeft -= 140;
});
right_btn4.addEventListener("click", () => {
  cards4.scrollLeft += 140;
});

populares.classList.add("show");

const video_coringa = document.getElementById("Coringa");
const video_assimqueacaba = document.getElementById("É_Assim_que_acaba");
const video_bladerunner = document.getElementById("Blade_Runner_2049");
const video_oabutre = document.getElementById("O_abutre");
const video_oculpado = document.getElementById("culpado_tr");
const video_terrifier = document.getElementById("Terrifier_3");

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search_input");

  // Adiciona evento para captura de tecla
  input.addEventListener("keydown", function (event) {
    // Verifica se a tecla pressionada foi Enter
    if (event.key === "Enter") {
      const valorSelecionado = input.value.trim();

      // Esconde todos os vídeos primeiro
      video_coringa.classList.remove("show");
      video_assimqueacaba.classList.remove("show");
      video_bladerunner.classList.remove("show");
      video_oabutre.classList.remove("show");
      video_oculpado.classList.remove("show");
      video_terrifier.classList.remove("show");

      populares.classList.remove("show");
      filme.classList.remove("show");
      aviso.classList.remove("show");

      if (valorSelecionado === "") {
        populares.classList.add("show");
      } else if (valorSelecionado === "O culpado") {
        video_oculpado.classList.add("show");
        closefilme.classList.add("show");
      } else if (valorSelecionado === "É Assim que acaba") {
        video_assimqueacaba.classList.add("show");
        closefilme.classList.add("show");
      } else if (valorSelecionado === "Coringa: Delírio a dois") {
        video_coringa.classList.add("show");
        closefilme.classList.add("show");
      } else if (valorSelecionado === "O abutre") {
        video_oabutre.classList.add("show");
        closefilme.classList.add("show");
      } else if (valorSelecionado === "Terrifier 3") {
        video_terrifier.classList.add("show");
        closefilme.classList.add("show");
      } else if (valorSelecionado === "Blade Runner 2049") {
        video_bladerunner.classList.add("show");
        closefilme.classList.add("show");
      } else {
        aviso.classList.add("show");
      }
    }
  });
});

if (poster_coringa) {
  poster_coringa.addEventListener("click", function () {
    video_coringa.classList.toggle("show");
    video_assimqueacaba.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_coringa2) {
  poster_coringa2.addEventListener("click", function () {
    video_coringa.classList.toggle("show");
    video_assimqueacaba.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_assimqueacaba) {
  poster_assimqueacaba.addEventListener("click", function () {
    video_assimqueacaba.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_bladerunner) {
  poster_bladerunner.addEventListener("click", function () {
    video_bladerunner.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_assimqueacaba.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_oabutre) {
  poster_oabutre.addEventListener("click", function () {
    video_oabutre.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_assimqueacaba.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_oabutre2) {
  poster_oabutre2.addEventListener("click", function () {
    video_oabutre.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_assimqueacaba.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_oculpado) {
  poster_oculpado.addEventListener("click", function () {
    video_oculpado.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_assimqueacaba.classList.remove("show");
    video_terrifier.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}
if (poster_terrifier) {
  poster_terrifier.addEventListener("click", function () {
    video_terrifier.classList.toggle("show");
    video_coringa.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_assimqueacaba.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    closefilme.classList.add("show");
  });
}

if (seta && content) {
  seta.addEventListener("click", function () {
    content.classList.toggle("show");
  });
}

if (animebotao && populares && anime && serie && filme && populares) {
  animebotao.addEventListener("click", function () {
    anime.classList.add("show");
    populares.classList.remove("show");
    serie.classList.remove("show");
    filme.classList.remove("show");
  });
}

if (homebotao && populares && anime && serie && filme && populares) {
  homebotao.addEventListener("click", function () {
    anime.classList.remove("show");
    serie.classList.remove("show");
    filme.classList.remove("show");
    populares.classList.add("show");
  });
}

if (seriebotao && populares && anime && serie && filme && populares) {
  seriebotao.addEventListener("click", function () {
    anime.classList.remove("show");
    populares.classList.remove("show");
    filme.classList.remove("show");
    serie.classList.add("show");
  });
}

if (filmebotao && populares && anime && serie && filme && populares) {
  filmebotao.addEventListener("click", function () {
    anime.classList.remove("show");
    populares.classList.remove("show");
    serie.classList.remove("show");
    filme.classList.add("show");
  });
}

if (contact && contactssreen && seta && content) {
  contact.addEventListener("click", function () {
    contactssreen.classList.add("show");
    content.classList.remove("show");
  });
}

if (closetabicon && contact && contactssreen) {
  closetabicon.addEventListener("click", function () {
    contactssreen.classList.remove("show");
  });
}

if (closefilme && video_assimqueacaba && video_bladerunner) {
  closefilme.addEventListener("click", function () {
    video_assimqueacaba.classList.remove("show");
    video_bladerunner.classList.remove("show");
    video_coringa.classList.remove("show");
    video_oabutre.classList.remove("show");
    video_oculpado.classList.remove("show");
    video_terrifier.classList.remove("show");
    closefilme.classList.remove("show");
    populares.classList.add("show");
  });
}

if (window.matchMedia("(max-width: 500px)").matches) {
  populares.classList.add("show");
  serie.classList.add("show");
  filme.classList.add("show");
  anime.classList.add("show");

  if (
    closefilme &&
    video_assimqueacaba &&
    video_bladerunner &&
    video_coringa &&
    video_oabutre &&
    video_oculpado &&
    video_terrifier &&
    populares &&
    filme &&
    serie &&
    anime
  ) {
    closefilme.addEventListener("click", function () {
      video_assimqueacaba.classList.remove("show");
      video_bladerunner.classList.remove("show");
      video_coringa.classList.remove("show");
      video_oabutre.classList.remove("show");
      video_oculpado.classList.remove("show");
      video_terrifier.classList.remove("show");
      closefilme.classList.remove("show");
      populares.classList.add("show");
      serie.classList.add("show");
      filme.classList.add("show");
      anime.classList.add("show");
    });
  }
}

if (
  window.matchMedia("(max-width: 900px) and (orientation: landscape)").matches
) {
  populares.classList.add("show");
  serie.classList.add("show");
  filme.classList.add("show");
  anime.classList.add("show");

  if (
    closefilme &&
    video_assimqueacaba &&
    video_bladerunner &&
    video_coringa &&
    video_oabutre &&
    video_oculpado &&
    video_terrifier &&
    populares &&
    filme &&
    serie &&
    anime
  ) {
    closefilme.addEventListener("click", function () {
      video_assimqueacaba.classList.remove("show");
      video_bladerunner.classList.remove("show");
      video_coringa.classList.remove("show");
      video_oabutre.classList.remove("show");
      video_oculpado.classList.remove("show");
      video_terrifier.classList.remove("show");
      closefilme.classList.remove("show");
      populares.classList.add("show");
      serie.classList.add("show");
      filme.classList.add("show");
      anime.classList.add("show");
    });
  }
}
