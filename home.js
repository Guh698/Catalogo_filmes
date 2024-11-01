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

anime.classList.add("show");

document.addEventListener("DOMContentLoaded", function () {
  const seta = document.querySelector(".seta");
  const content = document.querySelector(".perfil2");

  if (seta && content) {
    seta.addEventListener("click", function () {
      content.classList.toggle("show");
    });
  }
});

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
