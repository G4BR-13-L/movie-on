



var containerCor = document.querySelector('html.view');
function varificaTema() {
    let tema1 = JSON.parse(localStorage.getItem('darktheme'));
    if (tema) {
        document.querySelector("input#switch-1").checked = false;
        localStorage.setItem('darktheme', tema1);
        containerCor.setAttribute('data-theme', 'dark')
    } else {
        document.querySelector("input#switch-1").checked = true;
        localStorage.setItem('darktheme', tema1);
        containerCor.removeAttribute('data-theme')
    }
}
var tema = JSON.parse(localStorage.getItem('darktheme'));
if (tema) {
    document.querySelector("input#switch-1").checked = false;
    localStorage.setItem('darktheme', tema);
    containerCor.setAttribute('data-theme', 'dark')
} else {
    document.querySelector("input#switch-1").checked = true;
    localStorage.setItem('darktheme', tema);
    containerCor.removeAttribute('data-theme')
}
var switcher = document.querySelector('input#switch-1').addEventListener('change', (event) => {
    console.log('switch-1')
    console.log('Trocando tema')
    if (event.target.checked) {
        containerCor.removeAttribute('data-theme')
        tema = false;
        localStorage.setItem('darktheme', tema);
    } else {
        containerCor.setAttribute('data-theme', 'dark')
        tema = true;
        localStorage.setItem('darktheme', tema);
    }
});