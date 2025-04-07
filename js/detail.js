let count = 1;
const countDisplay = document.getElementById("count");

function increase() {
  count++;
  countDisplay.textContent = count;
}

function decrease() {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
}
