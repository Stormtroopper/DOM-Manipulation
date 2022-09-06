const colorSpan = document.getElementById('color');
const main = document.getElementById('colors');
const colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

let changecolor = () => {
  let finalcolor = '#';

  for (let i = 0; i < 6; i++) {
    let color = colorcode[Math.floor(Math.random() * colorcode.length)];
    finalcolor += color;
  }

  main.style.backgroundColor = finalcolor;
  colorSpan.innerHTML = finalcolor;
};

const btn = document.getElementById('btn');
btn.addEventListener('click', changecolor);