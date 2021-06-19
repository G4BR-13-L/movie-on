function mostrarDetalhes(id, rota){
    localStorage.setItem('filme_id', id);
    console.log('Detalhes do filme '+ id)
    if(rota == 1){
        window.location.href = "pages/detalhes/detalhes.html"
    }else{
        window.location.href = "../detalhes/detalhes.html"
    }
}