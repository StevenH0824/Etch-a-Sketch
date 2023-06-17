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
        newDiv.classList.add("C" + column + "-R" + i); //Debugging
        columnContainer.appendChild(newDiv);
    }
}

function gridGenerator(columns=5) {
    
    createContainers(columns);
    // Iterates and creats new elements for each row in the column
    for (let i = 1; i <= columns; i++){
        createDiv(i,columns);
    }
}

function interact(value="Black",brightness=100){
    let grids = document.querySelectorAll('#grid');

    grids.forEach((grid) => {

        grid.addEventListener('mouseenter',() => {
            if (value[0] === "B"){
                grid.style.backgroundColor = value;
                grid.style.filter = `brightness(${100}%)`
            }
            if (value[0] === "W"){
                grid.style.backgroundColor = value.slice(1);
                grid.style.filter = `brightness(${100}%)`
                
            }
            if (value[0] === "R"){
                grid.style.backgroundColor = generateColor();
                grid.style.filter = `brightness(${80}%)`
            }
            if (value[0] === "S"){
                let darkenBrightness = `${brightness}`;
                brightness -= 10;
                grid.style.filter = `brightness(${darkenBrightness}%)`;
            };
            if (value[0] === "L"){
                let darkenBrightness = `${brightness}`;
                brightness += 10;
                grid.style.filter = `brightness(${darkenBrightness}%)`;
            };
        });
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
    interact("Black");
})
}

randomNumber = () => {
    let number = Math.floor(Math.random() * (255 - 0 + 1))
    //console.log(number);
    return number;
};

function generateColor(){
    return  "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
}

function btn_selector(){
    const btn = document.querySelectorAll("button");
    
    btn.forEach((button) =>{
        
        button.addEventListener('click',() =>{
            let name = button.outerText;
            name = name.charAt(0);
            //console.log(name); 

            // Random Color 
            if (name == "R"){
                interact("R" + generateColor());
                
            }

            // Pen Button
            if (name == "P"){
                interact("Black");
            }

            // Erase Button
            if (name == "E"){
                interact("W"+ "rgb(255,255,255)"); // white
            }
            // Darken Button
            if (name == "S"){
                interact("S",100);
            }
            if (name == "L"){
                interact("L",100);
            }
        });
    });
    
}

gridGenerator(4); // Generating the default grid
interact();
//select_button();
btn_newgrid(); // Default color is black
btn_selector();