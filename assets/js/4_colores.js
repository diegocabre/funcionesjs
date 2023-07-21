const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('key');
/* const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4'); */

const cambiodecolor = (elemento) => {
    return (elemento.target.style.backgroundColor = 'black');
}
div1.addEventListener('click', cambiodecolor);
div2.addEventListener('click', cambiodecolor);
div3.addEventListener('click', cambiodecolor);
div4.addEventListener('click', cambiodecolor);

function cambiodecolortecla(evento) {
    if (evento.key === 'a' || evento.key === 'A') {
        div5.style.backgroundColor = 'pink';
    } else if (evento.key === 's' || evento.key === 'S') {
        div5.style.backgroundColor = 'orange';
    } else if (evento.key === 'd' || evento.key === 'D') {
        div5.style.backgroundColor = 'cornflowerblue';
    }
}
document.addEventListener('keydown', cambiodecolortecla);

function cambiodecolormostrardiv(evento) {
    const div6 = document.getElementById('key1');
    if (evento.key === 'q' || evento.key === 'Q') {
        div6.style.display = '';
        div6.style.backgroundColor = 'yellow';
    } else if (evento.key === 'w' || evento.key === 'W') {
        div6.style.display = '';
        div6.style.backgroundColor = 'blue';
    } else if (evento.key === 'e' || evento.key === 'E') {
        div6.style.display = '';
        div6.style.backgroundColor = 'brown';
    } else {
        div6.style.display = 'none';
    }
}
document.addEventListener('keydown', cambiodecolormostrardiv);
