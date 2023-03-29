// --------- UI
const gridContainer = document.querySelector('.grid-container');
const rangeSelector = document.getElementById('range-selector');

// building grid start
let inputRange = 0; // updates by the user (event istener)
let gridSize = 0; // total amount of grid elements
// register input and return gridSize
rangeSelector.addEventListener('click', buildGrid);


function buildGrid() {
  // check if there was previously created grit-items and delets them
  for (let i = 1; i <= gridSize; i++) {
    if (!!document.querySelector('.grid-items')) {
      gridContainer.removeChild(gridContainer.lastChild);
    };
  };
  //user input register
  console.log(rangeSelector.value);
  inputRange = rangeSelector.value;
  gridSize = inputRange ** 2;
  //updates CSS grid-template to properly display (1:1)
  gridContainer.style.cssText = `grid-template: repeat(${inputRange}, 1fr) / repeat(${inputRange}, 1fr)`;
  // build grid of requested size
  for (let i = 1; i <= gridSize; i++) {  
    let gridItems = document.createElement('div');
    gridItems.classList= 'grid-items';
    gridContainer.appendChild(gridItems);
  };
}
// building grid end