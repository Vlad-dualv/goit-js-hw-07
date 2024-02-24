const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeColorButton.addEventListener("click", function() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



