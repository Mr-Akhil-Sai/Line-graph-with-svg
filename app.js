let svg = document.querySelector("#svg");
let maths = document.querySelector("#maths");
let physics = document.querySelector("#physics");
let chemistry = document.querySelector("#chemistry");

let x1 = 0;
let y1 = 100;
let x2 = 0;
let y2 = 0;
let subjects = [];

let count = 0;
function drawGraph() {
  maths.value > 100 ? (maths.value = 100) : console.log();
  physics.value > 100 ? (physics.value = 100) : console.log();
  chemistry.value > 100 ? (chemistry.value = 100) : console.log();
  subjects.push(maths.value, physics.value, chemistry.value);
  let colors = [];
  colors.push("red", "green", "blue");
  let classes = [];
  classes.push("one", "two", "three");
  for (let i = 0; i < subjects.length; i++) {
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (x2 > 90 || x1 >= 90 || y2 == 101) {
      count = count + 2;
      x1 = 0;
      y1 = 100;
      x2 = 0;
      y2 = 0;
      console.log(count);
      for(let j = 0; j <= count;j++){
        removingLine();
        if (count == 4){
          count = count +1;
        }
        if(count == 7){
          count = count +1;
        }
        if (count == 10){
          count = count+1;
        }
        if (count == 13){
          count = count + 1;
        }
      }
    }
    y2 = 101 - Number(subjects[i]);
    x2 = x2 + 90 / subjects.length;
    line.setAttribute("stroke", colors[i % 3]);
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", "line")
    svg.append(line);
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

function removingLine(){
  document.querySelector(".line").remove();
}