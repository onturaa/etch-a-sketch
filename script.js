let container = document.querySelector(".container");

const button = document.createElement("button");

button.textContent = "Size";
button.classList.add("btn");

document.body.appendChild(button);
document.body.insertBefore(container, null);

function createSquares(totalSquares, container) {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${640 / Math.sqrt(totalSquares)}px`;
        square.style.height = `${640 / Math.sqrt(totalSquares)}px`;
        
        container.appendChild(square);
    }
}

createSquares(256, container);

const squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", (myEvent) => {
        myEvent.target.style.backgroundColor = "pink";
    });
}

button.addEventListener("click", () => {
    let width = parseInt(prompt("Please select a width between 1 and 100:"));
    console.log(width);

    if (isNaN(width) || width > 100 || width < 1) {
        alert("Not a valid number. Please select a width between 1 and 100.");
    }
    else {
        document.body.removeChild(container);

        container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);

        createSquares(width * width, container);

        let squares = document.querySelectorAll(".square");

        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("mouseover", (myEvent) => {
                myEvent.target.style.backgroundColor = "pink";
            });
        }
    }
});
