const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(700,300,10,"#FF00FF");
var B = new Point(200,300,10,"#FF4400");

A.drag();
B.drag();

var l = new Line();

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  A.draw();
  B.draw();
}

setInterval(loop,1);
