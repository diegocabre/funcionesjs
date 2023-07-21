const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('key');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');

const cambiodecolor = (elemento) => {
    return (elemento.target.style.backgroundColor = 'black');
}
div1.addEventListener('click', cambiodecolor);
div2.addEventListener('click', cambiodecolor);
div3.addEventListener('click', cambiodecolor);
div4.addEventListener('click', cambiodecolor);



