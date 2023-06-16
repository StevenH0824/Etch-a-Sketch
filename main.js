function createContainers(column){
    let container = document.querySelector('.mainContainer');
    // iterates through the column adding new divs to the container
    for (let i = 1; i <= column; i++){
        let newContainer = document.createElement('div');
        newContainer.classList.add("columns");
        newContainer.classList.add("column-" + i); // Necessary for createDiv function. 
        container.appendChild(newContainer);
    } 
}

function createDiv(column,row){
    // Remember that column is the iterator i
    let search = '.column-' + column;
    let columnContainer = document.querySelector(search);

    for (let i = 1; i <= row; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id","grid");
        newDiv.classList.add("rows");
        // newDiv.classList.add("C" + column + "-R" + i); Debugging
        columnContainer.appendChild(newDiv);
    }
}

function gridGenerator(columns) {
    
    createContainers(columns);
    // Iterates and creats new elements for each row in the column
    for (let i = 1; i <= columns; i++){
        createDiv(i,columns);
    }
    // Adds interaction of JS to the grid
    interact();
    button_newgrid();
}

function interact(){
    let grids = document.querySelectorAll('#grid');

    grids.forEach((grid) => {
        grid.addEventListener('mouseenter',() => {
            grid.style.backgroundColor = 'black';
        })
    });

}

function removeGrid(){
    let container = document.querySelector('.mainContainer');
    container.innerHTML = "";
}

function button_newgrid(){
    const btn = document.querySelector("button");

    btn.addEventListener('click',() =>{
    removeGrid();
    number = prompt("How many boxes do you want inside of the grid");
    gridGenerator(Number(number),Number(number));
})
}






gridGenerator(16); // Generating the default grid