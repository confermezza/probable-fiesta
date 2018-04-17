const reset_button = document.querySelector('#reset');
const rainbow_button = document.querySelector('#rainbow');
const black_button = document.querySelector('#black');
const shades_button = document.querySelector('#shades');
const main = document.querySelector('#main');
const side = main.clientWidth;
let grid = 32; // quantity of square per side be default (medium grid);


const small_button = document.querySelector('#small');
const medium_button = document.querySelector('#medium');
const big_button = document.querySelector('#big');



function reset() {
  const main = document.getElementById('main');
  const container = document.querySelector('.container');
  main.removeChild(container);
}


function printCells(row) {
  let cells = row * row;
  let container;
  container = document.createElement('div');
  container.classList.add('container');
  for (let i = 0; i < cells; i++) {
    const square = document.createElement('div');
    let width = (side / row) + "px";
    square.classList.add('cell');
    square.style.width = square.style.height = width;
    container.appendChild(square);
  }
  main.appendChild(container);
}


function randomizeColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  this.style.background = "rgb(" + red + "," + green + "," + blue + ")";
}


function makeGradient() {
  let value = parseFloat(this.style.opacity);
  value += 0.1;
  if (value == 1) return;
  this.style.opacity = value;
  console.log(value);
}

// black etch
function paintBlack() {
  this.style.background = 'black';
}

// paint black (by default) 
function paint() {
  document.querySelectorAll('.cell').forEach(square => square.addEventListener('mouseover', paintBlack));
}

// paint rainbow
function paintColor() {
  document.querySelectorAll('.cell').forEach(square => square.addEventListener('mouseover', randomizeColor));
}

// shader
function paintShades() {
  document.querySelectorAll('.cell').forEach(square => square.addEventListener('mouseover', makeGradient));
}



small_button.addEventListener('click', () => {
  grid = 64;
  reset();
  printCells(grid);
  paint();
});

medium_button.addEventListener('click', () => {
  grid = 32;
  reset();
  printCells(grid);
  paint();
});

big_button.addEventListener('click', () => {
  grid = 16;
  reset();
  printCells(grid);
  paint();
})

black_button.addEventListener('click', () => {
  reset();
  printCells(grid);
  paint();
});

rainbow_button.addEventListener('click', () => {
  reset();
  printCells(grid);
  paintColor();
});

shades_button.addEventListener('click', () => {
  reset();
  printCells(grid);
  document.querySelectorAll('.cell').forEach(function (e) {
    e.classList.add('shader');
    e.style.opacity = 0;
  });
  paintShades();
});



reset_button.addEventListener('click', () => {
  reset();
  printCells(grid);
  paint();
});


printCells(grid);
paint();