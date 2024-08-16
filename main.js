const canvas = document.getElementById("myCanvas");

canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  car.update();

  canvas.height = window.innerHeight;
  car.draw(ctx);
  // calls the animate method again and again many times per second and gives the illusion of it moving
  requestAnimationFrame(animate);
}
