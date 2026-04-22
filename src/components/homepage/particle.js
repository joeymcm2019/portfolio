export const numberOfParticles = 5000;
export const particles = [];

export class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = 0;
    this.speed = 0;
    this.velocity = Math.random() * 3.5;
    this.size = Math.random() * 1.5 + 1;
  }
  update() {
    this.y += this.velocity;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
export function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }
}
