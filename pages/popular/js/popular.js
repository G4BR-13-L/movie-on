
function inicializarPopular() {
    varificaTema();
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilmes;
    xhr1.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&page=1')
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
    var container = document.querySelector(`div.container-popular`)
    var newDate = dadosFilme.release_date.split('-');
    var preRender = [];
    let preRenderText = `
            <div class="movie-card-popular" onclick="mostrarDetalhes(${dadosFilme.id},2)">
                <div class="movie-poster-popular">
                    <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}" alt="">
                </div>
                <div class="movie-info-popular">
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