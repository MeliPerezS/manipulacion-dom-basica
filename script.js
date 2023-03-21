// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');
// const img  = document.createElement('img');
// img.setAttribute('src', 'https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg?w=360');
// console.log(img);

// pid.innerHTML = "";
// pid.append(img);
//para comentar varios parrafos cmd kc

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
    event.preventDefault();
    const sumaInputs = parseInt(calculo1.value) + parseInt(calculo2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}