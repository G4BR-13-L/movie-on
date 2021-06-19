/**/
function buscarFilme() {
    var filme_id = localStorage.getItem('filme_id');
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = carregarFilme;
    xhr1.open('GET',`https://api.themoviedb.org/3/movie/${filme_id}?api_key=44d302b5c67a19b15c6effc9654af134&language=pt-Br`)
    xhr1.send();
}

function carregarFilme() {
    var dadosFilme = JSON.parse(this.responseText);
    var container = document.querySelector(`div.conjunto-detalhe`)
    var newDate = dadosFilme.release_date.split('-');
    var generos = [];
    for(let i = 0 ; i < dadosFilme.genres.length; i++){
      console.log(dadosFilme.genres[i].name);
        generos.push(dadosFilme.genres[i].name);
    }
    generos.join(", ")
    console.log(generos)
    var preRender = [];
    let preRenderText = `
    <div class="detalhe-poster">
            <img src="https://image.tmdb.org/t/p/w185${dadosFilme.poster_path}"/>
          </div>
          <div class="detalhe-info">
            
          <ul>
          <li><strong>Título:</strong>${dadosFilme.original_title}</li>
          <li><strong>Ganeros:</strong>${generos}</li>
          <li><strong>Ano:</strong>${newDate[0]}</li>
          <li><strong>Orçamento:</strong>${dadosFilme.budget}</li>
          <li><strong>Sinopse: </strong>${dadosFilme.overview}</li>
          </ul>
          </div>
                `
    preRender.push(preRenderText);
    preRender.join("");
    container.innerHTML += preRender;
    
}
/*
{
  "adult": false,
  "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
  "belongs_to_collection": null,
  "budget": 20000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 12,
      "name": "Adventure"
    }
  ],
  "homepage": "https://www.mortalkombatmovie.net",
  "id": 460465,
  "imdb_id": "tt0293429",
  "original_language": "en",
  "original_title": "Mortal Kombat",
  "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
  "popularity": 1373.864,
  "poster_path": "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
  "production_companies": [
    {
      "id": 76907,
      "logo_path": "/wChlWsVgwSd4ZWxTIm8PTEcaESz.png",
      "name": "Atomic Monster",
      "origin_country": "US"
    },
    {
      "id": 8000,
      "logo_path": "/f8NwLg72BByt3eav7lX1lcJfe60.png",
      "name": "Broken Road Productions",
      "origin_country": "US"
    },
    {
      "id": 12,
      "logo_path": "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
      "name": "New Line Cinema",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2021-04-07",
  "revenue": 81265058,
  "runtime": 110,
  "spoken_languages": [
    {
      "english_name": "Japanese",
      "iso_639_1": "ja",
      "name": "日本語"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    },
    {
      "english_name": "Mandarin",
      "iso_639_1": "zh",
      "name": "普通话"
    }
  ],
  "status": "Released",
  "tagline": "Get over here.",
  "title": "Mortal Kombat",
  "video": false,
  "vote_average": 7.5,
  "vote_count": 3025
}
*/