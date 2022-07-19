var apiKey = "67e9c3a1751aa5cc396aa86f00e71af5"
var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query="

function buscaApi(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            resolve(data);
        }
        ).catch(function (error) {
            reject(error);
        }
        );
    });
}

export function apiBuscarFilmes(textBusca) {
    var url = apiUrl + textBusca;
    return buscaApi(url)
}

export function apiBuscarFilmesPopulares() {
    var url = "https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey;
    return buscaApi(url)
}

export function apiBuscarFilmesLancamento() {
    var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey;
    return buscaApi(url)
}

export function apiBuscarFilmesPreLancamento() {
    var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey;
    return buscaApi(url)
}

function getEstrelas(nota) {
    var estrelas = "";
    var notaInteira = Math.floor(nota / 2);
    for (var i = 0; i < notaInteira; i++) {
        estrelas += "⭐";
    }
    return estrelas;
}

export function HTMLpreencherFilmes(filmes, elementId) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";
    filmes.results.forEach(function (filme) {
        var div = document.createElement("div");
        div.className = "filme";
        div.innerHTML = `<img class="filme__imagem" alt="${filme.original_title}"
                            src="https://image.tmdb.org/t/p/w500${filme.poster_path || filme.backdrop_path}">
                        <div class="filme__titulo">${filme.title}</div>
                        <div class="filme__classificacao">
                            ${getEstrelas(filme.vote_average)}
                        </div>`;
        element.appendChild(div);
    });
}

export async function HTMLbuscarPreencherFilmes(query, elementId) {
    var filmes = await apiBuscarFilmes(query);
    console.log(filmes);
    HTMLpreencherFilmes(filmes, elementId);
}
