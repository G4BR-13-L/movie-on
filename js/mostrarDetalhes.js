function mostrarDetalhes(id){
    localStorage.setItem('filme_id', id);
    console.log('Detalhes do filme '+ id)
    window.location.replace("/movie-on/pages/detalhes/detalhes.html")
}