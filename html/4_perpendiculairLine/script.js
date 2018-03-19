const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

let A = new Point(200,150,10,"blue");
let B = new Point(400,300,10,"orange");
let l = new Line(1,450, "white");
let C = new Point(200,100,10,"yellow");
let D = new Point(400,250,10,"purple");
let m = new Line(1,0,"white");

A.drag();
B.drag();
C.drag();
D.drag();


function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0, 800,450)
  A.draw(canvas);
  B.draw(canvas);
  l.slope=(B.y-A.y)/(B.x-A.x);
  l.yIntercept=A.y-l.slope*A.x;
  l.draw(0, 800);
  C.draw(canvas);
  D.draw(canvas);
  m.slope=(D.y-C.y)/(D.x-C.x);
  m.yIntercept=C.y-m.slope*C.x;
  m.draw(0,800);

}

loop();
