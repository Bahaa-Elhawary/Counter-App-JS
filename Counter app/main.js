let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    document.getElementById("count-el").innerText = count;
  }
}

function reset() {
  if (count > 0) {
    count = 0;
    document.getElementById("count-el").innerText = count;
  }
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
}
