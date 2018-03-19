const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,70,20,"white");
let B = new Point(400,200,20,"yellow");
let C = new Point(450,280,20,"green");

let v = new Vector2(B.x - A.x, B.y - A.y);

let l = new Line(1,1);
let m = new Line(1,1);

let lineVector = new Vector2(1,1);
let normalVector = new Vector2(1,1);

A.drag();
B.drag()
C.drag();
//v.draw(context,A.x,A.y,1);

function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0,800,450);
  v.dx = B.x - A.x;
  v.dy = B.y - A.y;
  l.letTwoPointDefineLine(A,C);
  m.letSlopeAndPointDefineLine(-1/l.slope,A);

lineVector.dx = 1;
linwVector.dy = l.slope;
lineVector.r = 1;
lineVector.r = lineVector.dot(v);

normalVector.dx = -lineVector.dy;
normalVector.dy = lineVector.dx;
normalVector.r = 1;
normalVector.r = normalVector.dot(v);


  B.draw();
  C.draw();
  v.draw(context,A.x,A.y,1,"v");

  lineVector.draw(context,A.x, A.y, 1, "lv");
  normalVector.draw(context, A.x, A.y, 1, "n");

  l.draw(0,800, 'rgba(0,0,0,0.6)');
  m.draw(0,800,'rgba(255,0,0,0.6)');

  A.draw();
}
loop();







































//
