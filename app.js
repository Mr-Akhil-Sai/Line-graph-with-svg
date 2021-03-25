let body = document.querySelector("body");
let svg = document.querySelector("#svg");
let mathsLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
let phyLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
let chemLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
let maths = document.querySelector("#maths");
let physics = document.querySelector("#physics");
let chemistry = document.querySelector("#chemistry");

let x1 = 0;
let y1 = 100;
let x2 = 0;
let y2 = 0;

function drawGraph() {
  (maths.value > 100 )? maths.value = 100: console.log("hi");
  (physics.value > 100 )? physics.value = 100: console.log("hi");
  (chemistry.value > 100 )? chemistry.value = 100: console.log("hi");

    let subjects = [];
    subjects.push(maths.value, physics.value, chemistry.value);
    let lines = [];
    lines.push(mathsLine, phyLine, chemLine);

    for (let i = 0; i < subjects.length; i++) {
      if (x2 > 90 || x1 >= 90 || y2 == 101) {
        x1 = 0;
        y1 = 100;
        x2 = 0;
        y2 = 0;
      }
      y2 = 101 - Number(subjects[i]);
      x2 = x2 + 30;
      lines[i].setAttribute("x1", x1);
      lines[i].setAttribute("y1", y1);
      lines[i].setAttribute("x2", x2);
      lines[i].setAttribute("y2", y2);
      lines[i].setAttribute("stroke", colors[i]);
  
      svg.append(lines[i]);
      x1 = x2;
      y1 = y2;
      emptyingValues();
    }
  }

function emptyingValues() {
  maths.value = "";
  physics.value = "";
  chemistry.value = "";
}