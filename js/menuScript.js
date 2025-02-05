//menu right click
//right clicking makes the menu pop up
const contextMenu = document.querySelector(".menu")
document.addEventListener("contextmenu", e => {
  e.preventDefault();

  let x = e.offsetX, y = e.offsetY;
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
})

//left clicking outside the menu makes it disappear
document.addEventListener("click", (event) => {
  // Hide the menu when clicking outside
  if (!contextMenu.contains(event.target)) {
    contextMenu.style.visibility = "";
  }
})

