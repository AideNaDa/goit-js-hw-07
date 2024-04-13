function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

const colorText = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();});
