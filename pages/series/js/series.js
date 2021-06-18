
function inicializarSeries() {
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilmes;
    xhr1.open('GET', 'https://api.themoviedb.org/3/tv/popular?api_key=44d302b5c67a19b15c6effc9654af134&language=pt-BR&page=1')
    xhr1.send();
}

function carregarFilmes() {
    //console.log(this.responseText);
    var dados = JSON.parse(this.responseText);
    console.log(dados);
    for (let i = 0; i < dados.results.length; i++) {
            renderizarFilmes(dados.results[i],);
        
        /*28 - "Ação"
        12 - "Aventura"	
        16 - "Animação"
        35 - "Comédia"
        18 - Drama*/
    }
}
function renderizarFilmes(dadosFilme) {
    var container = document.querySelector(`div.container-series`)
    var newDate = dadosFilme.first_air_date.split('-');
    var preRender = [];
    let preRenderText = `
            <div class="movie-card-series">
                <div class="movie-poster-series">
                    <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}" alt="">
                </div>
                <div class="movie-info-series">
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