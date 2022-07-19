import { apiBuscarFilmesLancamento, HTMLpreencherFilmes } from "./filmes.js";

async function preencherFilmeLancamentos() {
    var filmesLantamentos = await apiBuscarFilmesLancamento();
    HTMLpreencherFilmes(filmesLantamentos, "filmes");
}

window.onload = function () {
    preencherFilmeLancamentos()
}