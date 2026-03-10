function basicGrid() {
    const container = document.querySelector(".container");
    
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }

    drawEvent()
}

function newGrid(width) {
    const elements = document.querySelectorAll("div.grid");
    elements.forEach(el => {
        el.remove()
    })

    const container = document.querySelector(".container");
    for (let i = 0; i < (width**2); i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }
    
    drawEvent()
}

function getUserInput() {
    let width;
    while (true) {
        input = prompt("Podaj nowy rozmiar siatki", 16);
        
        if (input === null) {
            break;
        }

        if (!isNaN(input) && input.length <= 3 && input.trim() !== "") {
            width = parseInt(input);
            break
        }
    }

    newGrid(width);
}

function drawEvent() {
    const divs = document.querySelectorAll("div.grid");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue"; 
        });
    });
}

const btn = document.querySelector("#new-grid");
btn.onclick = () => getUserInput();

basicGrid()

