import { HTMLbuscarPreencherFilmes, apiBuscarFilmesPreLancamento, HTMLpreencherFilmes } from "./filmes.js";

async function buscarFilmes(event) {
    if (event.key == "Enter") {
        HTMLbuscarPreencherFilmes(event.target.value, "filmes");
        var titulo = document.getElementById("titulo");
        titulo.innerHTML = event.target.value;
    }
}

async function preencherFilmesPopulares() {
    var filmesPreLancamento = await apiBuscarFilmesPreLancamento();
    HTMLpreencherFilmes(filmesPreLancamento, "filmes");
}

window.onload = function () {
    var input = document.querySelector("#inputBusca");
    input.addEventListener("keyup", buscarFilmes);
    preencherFilmesPopulares()
}