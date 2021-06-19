var contagem = 0;
function inicializacao() {
    let verify = 0
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilmes;
    xhr1.open('GET', ' https://api.themoviedb.org/3/discover/movie?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28%2C%2012&without_genres=16&with_watch_monetization_types=buy')
    xhr1.send();
    if(xhr1.readyState == 4){
        contagem++;
    }

    let xhr2 = new XMLHttpRequest();
    xhr2.onload = carregarFilmes;
    xhr2.open('GET', ' https://api.themoviedb.org/3/discover/movie?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&without_genres=16%2C%2028%2C%2012&with_watch_monetization_types=buy')
    xhr2.send(); 
    if(xhr2.readyState == 4){
        contagem++;
    }

    

    let xhr3 = new XMLHttpRequest();
    xhr3.onload = carregarFilmes;
    xhr3.open('GET', ' https://api.themoviedb.org/3/discover/movie?api_key=44d302b5c67a19b15c6effc9654af134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16%2C%2028%2C%2012&without_genres=18&with_watch_monetization_types=buy')
    xhr3.send(); 
    if(xhr3.readyState == 4){
        contagem = 0;
    }
    console.log(verify)
}

function carregarFilmes(genero) {
    //console.log(this.responseText);
    var dados = JSON.parse(this.responseText);
    console.log(dados);
    for (let i = 0; i < dados.results.length; i++) {
            renderizarFilmes(dados.results[i], genero);
        
        /*28 - "Ação"
        12 - "Aventura"	
        16 - "Animação"
        35 - "Comédia"
        18 - Drama*/
    }
    contagem++;
}
function renderizarFilmes(dadosFilme, genero) {
    var container = document.querySelectorAll(`div.container`)
    var newDate = dadosFilme.release_date.split('-');
    var preRender = [];
    let preRenderText = `
            <div class="movie-card" onclick="mostrarDetalhes(${dadosFilme.id},1)">
                <div class="movie-poster">
                    <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}" alt="">
                </div>
                <div class="movie-info">
                    <ul>
                        <li>${dadosFilme.original_title}</li>
                        <li>${newDate[0]}</li>
                    </ul>
                </div>
            </div>
                `
    preRender.push(preRenderText);
    preRender.join("");
    container[contagem].innerHTML += preRender;
    
}
/*

*/