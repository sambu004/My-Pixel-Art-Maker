// Select color input
// Select size input




const table = document.getElementById("pixel_canvas");

// The function creates grid and adds event for each grid.

    function makeGrid() {

        const height = document.getElementById("input_height").value;
        const width = document.getElementById("input_width").value;

        table.innerHTML = "";//This clears the previous grid formation.

        for (let N = 0; N < height; N++){
            const row = document.createElement("tr");
            let M = 0;
            while(M < width){
                const pixels = document.createElement("td");
                M++;
                row.appendChild(pixels);

                pixels.addEventListener("click", function(){
                    changeColor(this);
                });//This creates an event for each cells.
            }
            table.appendChild(row);
        }
    }

//The function is executed when cells are clicked

    function changeColor(paint) {
        const colour = document.getElementById("colorPicker").value;
        paint.style.backgroundColor = colour;
    }

//The event calls makeGrid function.

const enter = document.getElementById("sizePicker");

    enter.lastElementChild.addEventListener("click", function (e){
        e.preventDefault();
        makeGrid();
    });