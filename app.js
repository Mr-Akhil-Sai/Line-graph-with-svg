let body = document.querySelector("body");
let svg = document.querySelector("#svg");
let mathsLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
let phyLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
let chemLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
let maths = document.querySelector("#maths").value;
let physics = document.querySelector("#physics").value;
let chemistry = document.querySelector("#chemistry").value;

let x1 = 0;
let y1 = 100;
let x2 = 0;
let y2 = 0;

let mathsValue = Number(maths);
let physicsValue = Number(physics);
let chemistryValue = Number(chemistry);

function drawGraph() {
        y2 =y2 + (100 -  mathsValue);
        x2 = 30;
        mathsLine.setAttribute("x1", x1);
        mathsLine.setAttribute("y1", y1);
        mathsLine.setAttribute("x2", x2);
        mathsLine.setAttribute("y2", y2);
        mathsLine.setAttribute("stroke", "red");
        svg.append(mathsLine);
        x1 = x2;
        y1 = y2;
        physicsGraph(x1,y1);
        // console.log(x1,x2,y1,y2);
}
function physicsGraph(x1,y1){
        y2 = 0;
        y2 =y2 + (100 - ( physicsValue));
        x2 = 60;
        phyLine.setAttribute("x1", x1);
        phyLine.setAttribute("y1", y1);
        phyLine.setAttribute("x2", x2);
        phyLine.setAttribute("y2", y2);
        phyLine.setAttribute("stroke", "green");
        svg.append(phyLine);
        x1 = x2;
        y1 = y2;
        chemistryGraph(x1,y1);
}
function chemistryGraph(x1,y1){
        y2 = 0;
        y2 =y2 + (100 - ( chemistryValue));
        x2 = 90;
        chemLine.setAttribute("x1", x1);
        chemLine.setAttribute("y1", y1);
        chemLine.setAttribute("x2", x2);
        chemLine.setAttribute("y2", y2);
        chemLine.setAttribute("stroke", "blue");
        svg.append(chemLine);
        maths = "";
}
