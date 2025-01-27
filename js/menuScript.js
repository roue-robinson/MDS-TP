//menu right click
const contextMenu = document.querySelector(".menu")
document.addEventListener("contextmenu", e => {
  console.log("right click pressed");
  e.preventDefault();

  let x = e.offsetX, y = e.offsetY;
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
})

//document.addEventListener("click", () => contextMenu.style.visibility = "hidden")
let plusMenu = document.getElementById("plusMenu");
plusMenu.addEventListener('click', () => {
  if (!plusMenu.disabled) {
    plusMenu.classList.toggle('active');
    setTimeout(() => {
      plusMenu.classList.remove('active');
    }, 100);
  }
})

let minusMenu = document.getElementById("minusMenu");
minusMenu.addEventListener('click', () => {
  if (!minusMenu.disabled) {
    minusMenu.classList.toggle('active');
    setTimeout(() => {
      minusMenu.classList.remove('active');
    }, 100);
  }
})

let lockMenu = document.getElementById("lockMenu");
lockMenu.addEventListener('click', () => {
  if (!lockMenu.disabled) {
    lockMenu.classList.toggle('active');
    setTimeout(() => {
      lockMenu.classList.remove('active');
    }, 100);
  }
})

console.log(plusMenu, minusMenu, lockMenu);