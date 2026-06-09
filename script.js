const generateButton = document.getElementById("generateButton");
const spellArea = document.getElementById("spellArea");
const ingredientList = document.getElementById("ingredientList");
const resetButton = document.getElementById("resetButton");
const spellMessage = document.getElementById("spellMessage"); // new message element

let activeIntervalId = null;

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

generateButton.addEventListener("click", function () {
  const items = ingredientList.getElementsByTagName("li");
  const randomIndex = Math.floor(Math.random() * items.length);
  const chosenIngredient = items[randomIndex].textContent;
  startCountdown(chosenIngredient);
});

resetButton.addEventListener("click", function () {
  if (activeIntervalId) {
    clearInterval(activeIntervalId);
    activeIntervalId = null;
  }
  // Reset only the message and background
  spellMessage.textContent = "Your spell will appear here...";
  spellArea.style.backgroundColor = "";
  spellArea.style.color = "";
});

function startCountdown(chosenIngredient) {
  if (activeIntervalId) {
    clearInterval(activeIntervalId);
    activeIntervalId = null;
  }

  let count = 3;
  spellMessage.textContent = "⏳ " + count + "...";

  activeIntervalId = setInterval(function () {
    count--;
    if (count > 0) {
      spellMessage.textContent = "⏳ " + count + "...";
    } else {
      clearInterval(activeIntervalId);
      activeIntervalId = null;
      spellMessage.textContent = "Your spell uses: " + chosenIngredient;
      spellArea.style.backgroundColor = randomColor();
      spellArea.style.color = "#ffffff";
    }
  }, 1000);
}
