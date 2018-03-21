const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let a = new Vector2 (100,400);
let b = new Vector2 (600,100);
let c = new Vector2 (600,300);
let z = new Vector2(a.dx, a.dy);
let afstand = new Vector2();
let vel = new Vector2(1,1);

let A = new Point(a.dx, a.dy, 10,"blue");
let B = new Point(b.dx, b.dy, 10,"red");
let C = new Point(c.dx, c.dy, 10,"yellow");
let Z = new Point(a.dx, a.dy, 5, "black");

let array = [a,b,c];
let zDing =[];
for (var i = 0; i < 4; i++) {
  zDing[i] = {};
  zDing[i].pok = new Point(0,0,20,"black");
}
let targetNumber = 1;
let target = {};
target = array[targetNumber];
vel.difVector(z,target);
vel.r =1;

//let pass = false;

function loop()
{
  context.clearRect(0,0,800,450);
  requestAnimationFrame(loop);
  z.add(vel);

  Z.x = z.dx; Z.y = z.dy;

  A.draw();
  B.draw();
  C.draw();
  Z.draw();
//  a.draw(context,0,0,1);
//  b.draw(context,0,0,1);
  vel.r = 1;
  vel.draw(context,z.dx, z.dy, 20);
  afstand.difVector(z,target);
  if (afstand.r <= 2){
    targetNumber ++;
    if (targetNumber >= array.length){
      targetNumber = 0;
    }
    target = array[targetNumber];
    vel.difVector(z,target);
    vel.r =1;
  }

  for (var i = 0; i < zDing.length; i++) {
    zDing[i].pok.x = 50*i;
    zDing[i].pok.draw();
  }

}
loop();
