// --------- UI
const gridContainer = document.querySelector('.grid-container');
const rangeSelector = document.getElementById('range-selector');

// building grid start
let inputRange = 2; // updates by the user (event istener)
let gridSize = 4; // total amount of grid elements
// register input and return gridSize
rangeSelector.addEventListener('click', buildGrid);


function buildGrid() {
  // check if there was previously created grit-items and delets them
  const gridToRemove = document.querySelectorAll('.grid-items');
  for (let i = 0; i < gridToRemove.length; i++) {
    gridToRemove[i].remove();
  };
  //user input register
  console.log(rangeSelector.value);
  inputRange = rangeSelector.value;
  gridSize = inputRange ** 2;
  //updates CSS grid-template to properly display (1:1)
  gridContainer.style.cssText = `grid-template: repeat(${inputRange}, 1fr) / repeat(${inputRange}, 1fr)`;
  // build grid of requested size
  for (let i = 1; i <= gridSize; i++) {
    const gridItemsCreate = document.createElement('div');
    gridItemsCreate.classList.add('grid-items');
    gridContainer.appendChild(gridItemsCreate);
  };
  test();
}
// building grid end
function test() {
const gridItems = document.querySelectorAll('.grid-items');

gridItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    setTimeout(() => {
      item.classList.remove('hover');
    }, 100);
  });
});
}
