// --------- UI
const gridContainer = document.querySelector('.grid-container');
const rangeSelector = document.querySelector('#range-selector');
const clearBtn = document.querySelector('#clear');
const customColor = document.querySelector('#custom-color');
const randomColorBtn = document.querySelector('#random-color');

let R = 0; let G = 0; let B = 0;
let randomToggle = false;

randomColorBtn.addEventListener('click', () => {
  if (randomToggle) {
    randomToggle = false
    randomColorBtn.style.cssText = 'background-color: default; border: none';
  } else {
    randomToggle = true
    randomColorBtn.style.cssText = 'background-color: rgba(161, 186, 207, 0.555); border: 1px solid white';
  }
})

let mouseDown = false;

gridContainer.addEventListener('mousedown', () => {
  mouseDown = true;
  event.preventDefault(); // to prevent drag and drop of cells
});

gridContainer.addEventListener('mouseup', () => {
  mouseDown = false;
});


let inputRange; // updates by the user (event istener)
let gridSize; // total amount of grid elements

// register input and return gridSize
rangeSelector.addEventListener('mousemove', updateUI);
rangeSelector.addEventListener('mouseup', runGrid);

// runs funciton at the start
runGrid();

function runGrid(){
  buildGrid();
  updateUI();
  createHover();
  draw();
}

function buildGrid() {
  // check if there was previously created grit-items and deletes them
  const gridToRemove = document.querySelectorAll('.grid-items');
  for (let i = 0; i < gridToRemove.length; i++) {
    gridToRemove[i].remove();
  };
  //user input register
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
}

function updateUI() {
  //user input register
  inputRange = rangeSelector.value;
  gridSize = inputRange ** 2;
  // update info on the top of input range
  const selectorP = document.querySelector('.selector-p');
  selectorP.textContent = `${inputRange} x ${inputRange}`;
}

clearBtn.addEventListener('click', () => {
  runGrid()
})

function createHover() {
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

function randomRGB() {
  R = Math.round(Math.random() * 255);
  G = Math.round(Math.random() * 255);
  B = Math.round(Math.random() * 255);
}

function draw() {
  const gridItems = document.querySelectorAll('.grid-items');
  
  gridItems.forEach((item) => {
    item.addEventListener('mousemove', () => {
      if (mouseDown) {
        if (randomToggle) {
        // random RGB
        randomRGB();
        item.style.cssText = `background-color: rgb(${R}, ${G}, ${B})`;
        } else {
        // custom color
        item.style.cssText = `background-color: ${customColor.value}`;
      }};
    });
    item.addEventListener('click', () => {
      if (randomToggle) {
        // random RGB
        randomRGB();
        item.style.cssText = `background-color: rgb(${R}, ${G}, ${B})`;
        } else {
        // custom color
        item.style.cssText = `background-color: ${customColor.value}`;
      }
    });
  });
};