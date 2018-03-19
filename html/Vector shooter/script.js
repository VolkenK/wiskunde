const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2 (100,100);
let direction = new Vector2 (1,0);
let velocity = new Vector2 (3,4);

let player = new Point(position.dx, position.dy, 10, 'yellow', 'a');
let bullets = [];

window.addEventListener('keydown',(evt)=>{
  console.log("evt.keycode");
  switch (evt.keyCode){
    case 37:
      velocity.angle -= 0.1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 38:
      velocity.r ++;
      break;
    case 40:
      velocity.r --;
      break;
    case 32:
      let bullet = {};
      bullet.position = new Vector2(position.dx, position.dy);
      bullet.point = new Point(bullet.position.dx, bullet.position.dy, "10", "blue", "b");
      bullets.push(bullet);
      break;

  }
})

function animationloop() {
  context.clearRect(0,0,800,450)
  requestAnimationFrame(animationloop);
  player.x = position.dx; player.y = position.dy
  position.add(velocity);
  player.draw();
  velocity.draw(context,player.x, player.y, 20);
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].point.draw();
  }

  if (position.dx < 0){
    position.dx = 800;
  }

  if (position.dx > 800){
    position.dx = 0;
  }

  if (position.dy < 0){
    position.dy = 450;
  }

  if (position.dy > 450){
    position.dy = 0;
  }
}
