const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

var A = new Point(700,300,10,"#FF0000");
var B = new Point(200,300,10,"#FFFF00");
var C = new Point(350,100,10,"#00FFFF");
var D = new Point(360,350,10,"#0000FF");
var S = new Point(350,350,10,"#FFFFFF");


A.drag();
B.drag();
C.drag();
D.drag();

var l = new Line();
var m = new Line();
//var 2 = new LineVertical

function loop(){
  context.clearRect(0,0,800,450);
  l.letTwoPointDefineLine(A,B);
    l.draw(0,800);
  A.draw();
  B.draw();
  m.letTwoPointDefineLine(C,D);
  m.draw(0,800);
  C.draw();
  D.draw();
  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  S.draw();
}

setInterval(loop,1);
