
function inicializarLancamentos() {
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilmes;
    xhr1.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021&with_watch_monetization_types=flatrate')
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
    var container = document.querySelector(`div.container-lancamentos`)
    var newDate = dadosFilme.release_date.split('-');
    var preRender = [];
    let preRenderText = `
            <div class="movie-card-lancamentos" onclick="mostrarDetalhes(${dadosFilme.id})">
                <div class="movie-poster-lancamentos">
                    <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}" alt="">
                </div>
                <div class="movie-info-lancamentos">
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