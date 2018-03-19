const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(100,250,10,"#000000");
var B = new Point(600,250,10,"#999999");
var C = new Point(300,300,10,"#0000FF");


A.drag();
B.drag();
C.drag();


var l = new Line();

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  A.draw();
  B.draw();
  if(C.y < l.slope* C.x + l.yIntercept)
  {
    C.color = "red";
  }else{
    C.color = "blue";
  }
  C.draw();

}

setInterval(loop,1);
