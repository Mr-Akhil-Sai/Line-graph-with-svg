let body = document.querySelector("body");
let svg = document.querySelector("#svg");
let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
let maths = document.querySelector("#maths");
let physics = document.querySelector("#physics");
let chemistry = document.querySelector("#chemistry").value;

let x1 = 10;
let y1 = 90;
let x2 = 0;
let y2 = 0;

function drawGraph() {
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", maths.value);
        line.setAttribute("y2", -maths.value);
        line.setAttribute("stroke", "red");
        svg.append(line);

        console.log(-maths.value); 
        maths.value = "";
        physics.value = "";
}
