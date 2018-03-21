const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point (100,100,10,"red");
let B = new Point (200,200,10,"blue");



A.drag();
B.drag();



function loop()
{
  requestAnimationFrame(loop);

  context.clearRect(0,0,800,450);

  A.draw();
  B.draw();
}

loop();
