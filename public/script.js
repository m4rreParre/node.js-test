const background = document.querySelector('body');
const redBtn = document.querySelector('.red');
const greenBtn = document.querySelector('.green');
const blueBtn = document.querySelector('.blue');
const button = document.querySelectorAll('button:not(.banana-Btn)');
const textElements = document.querySelectorAll("p, h1");
const bananaBtn = document.querySelector('.banana-Btn');


redBtn.addEventListener('click', () => {
  background.style.backgroundColor = 'red'
});
greenBtn.addEventListener('click', () => {
  background.style.backgroundColor = 'green'
});
blueBtn.addEventListener('click', () => {
  background.style.backgroundColor = 'blue'
});
let counter = 0;
bananaBtn.addEventListener('click', () => {
  counter++;
  if (counter % 2 === 1) {
    bananaBtn.classList.add('rotate-animation');
    background.classList.add("animated");
  } else {
    history.go(0);
  }
  background.style.backgroundColor = 'yellow';
  textElements.forEach(element => {
    element.style.color = 'black';
});
});
button.forEach(button => {
    button.addEventListener('click', () => {
        textElements.forEach(element => {
            element.style.color = 'white';
        });
    });
});