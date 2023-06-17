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
    //interact();
    // Doing too much, I need to make sure the buttons work properly
}

function interact(value="black"){
    let grids = document.querySelectorAll('#grid');

    grids.forEach((grid) => {
        grid.addEventListener('mouseenter',() => {
            grid.style.backgroundColor = value;
        })
    });
}

function removeGrid(){
    let container = document.querySelector('.mainContainer');
    container.innerHTML = "";
}



function btn_newgrid(){
    const btn = document.querySelector("button");

    btn.addEventListener('click',() =>{
    removeGrid();
    gridGenerator(Number(prompt("How many boxes do you want inside of the grid")));
    interact();
})
}


function btn_randomColor(){
    const btn = document.querySelectorAll("button");
    
    btn.forEach((button) =>{
        
        button.addEventListener('click',() =>{
            let name = button.outerText;
            name = name.charAt(0);
            console.log(name);
        });
        /*
        if (button.outerText.toLocaleLowerCase.charAt(0) == "R"){
            let colorValue = "rgb(" + Math.floor(Math.random() * (255 - 0+ 1)) + 
                                 "," + Math.floor(Math.random() * (255 - 0+ 1)) + 
                                 "," + Math.floor(Math.random() * (255 - 0+ 1)) + ")";
            interact(colorValue);
        }
        */
    });
    
}



// creating rainbow function here. 

function select_button(){
    const btn = document.querySelectorAll("button");

    btn.forEach((button) =>{
        button.addEventListener('click', () =>{

            let grids = document.querySelectorAll("#grid");
            //console.log(button);
            let button_char = button.outerText.charAt(0);
            if ( button_char == "N"){
                removeGrid();
                number = prompt("How many boxes do you want inside of the grid");
                gridGenerator(Number(number),Number(number));
            }

            if (button_char == "R"){
                let colorValue = "rgb(" + Math.floor(Math.random() * (255 - 0+ 1)) + 
                                 "," + Math.floor(Math.random() * (255 - 0+ 1)) + 
                                 "," + Math.floor(Math.random() * (255 - 0+ 1)) + ")";
                //grid.style.backgroundColor = colorValue;
                console.log(colorValue);
                grid.style.backgroundColor = colorValue;
                /*
                grids.forEach((grid) => {
                    grid.style.backgroundColor = colorValue;
                })
                */
            }

        });
    });
}




gridGenerator(16); // Generating the default grid
interact();
btn_newgrid();
btn_randomColor();