const generateBtn = document.querySelector("#generate-btn");
const colorDiv = document.querySelectorAll(".color-div");

generateBtn.addEventListener("click", generateColor);

function generateColor() {
  const letters = "0123456789ABCDEF";

  let colorArray = [];

  colorDiv.forEach((div) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
    div.style.backgroundColor = color;
    console.log(color);
  });
}

generateColor();
