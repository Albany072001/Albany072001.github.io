document.write("For loop:" + "<br>");
for (i = 0; i <= 10; i++) {
     document.write("Line " + i + "<br>");
}

document.write("While loop:"+ "<br>");
var beginning = 10;
var limit = 1;
while(beginning>limit)
  {
    document.write("current count: " + beginning+ "<br />")
    beginning = beginning -2;
  }
document.write("Math.random: <br>")
var ans= Math.floor(Math.random()*20)
document.write("Random of " + ans+ "<br>");


// new input 01-22-20

function myLoop(){

var start = document.getElementById("start").value;
var end = document.getElementById("end").value;
var jump = document.getElementById("jump").value;
 
 console.log(typeof start);
 console.log(typeof end);
 console.log(typeof jump);
  
  start = Number(start);
  end = Number(end);
  jump = Number(jump);
  
 console.log(typeof start);
 console.log(typeof end);
 console.log(typeof jump);
  
  for(var i = start; i <= end; i+=jump)
  {
  document.write('<p>' + i);
  }
}

