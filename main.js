const $color = document.querySelector('#color');
const $button = document.querySelector('#button');
const $main = document.querySelector('main');

const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','f'];

const chooseColor = () => {
  let index;
  let color = '#';
  console.log(index);

  for (let i = 0; i < 6; i++) {
    index = Math.round(Math.random() * (chars.length - 1));
    let char = chars[index];
    color += char;
  }

  $main.style = `background: ${color}`
  $color.innerHTML = color;
}

window.addEventListener('load', chooseColor)

$button.addEventListener('click', chooseColor)

