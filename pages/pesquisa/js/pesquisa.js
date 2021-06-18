



function pesquisar() {
    let queryDePesquisa = document.querySelector('input.pesquisa').value
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilmes;
    xhr1.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&query=${queryDePesquisa}&page=1&include_adult=false`)
    xhr1.send();
}

function carregarFilmes() {
    var dados = JSON.parse(this.responseText);
    console.log(dados);
    var container = document.querySelector('div.resultado-pesquisa')
    if (dados.results.length == 0) {
        container.innerHTML = `
            <div class="nada-encontrado">
                <i class='bx bxs-meteor'></i>
                <h2>Nada encontrado</h2>
            </div>
        `
    } else {
        container.innerHTML = ``;
        for (let i = 0; i < dados.results.length; i++) {
            renderizarFilmes(dados.results[i],);
            /*28 - "Ação"
            12 - "Aventura"	
            16 - "Animação"
            35 - "Comédia"
            18 - Drama*/
        }
    }
}
function renderizarFilmes(dadosFilme) {
    var container = document.querySelector(`div.resultado-pesquisa`)
    var newDate = dadosFilme.release_date.split('-');
    var preRender = [];
    let preRenderText = `
            <div class="movie-card-pesquisa">
                <div class="movie-poster-pesquisa">
                    <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}" alt="">
                </div>
                <div class="movie-info-pesquisa">
                    <ul>
                        <li>${dadosFilme.original_title}</li>
                        <li>${newDate[0]}</li>
                    </ul>
                </div>
            </div>
                `
    preRender.push(preRenderText);
    preRender.join("");
    container.innerHTML += preRender;

}
/*

*/