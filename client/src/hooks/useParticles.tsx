import { useCallback, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  update: () => boolean;
}

export const useParticles = () => {
  const animationFrameId = useRef<number>(0);

  const initialize = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const particles: Particle[] = [];

    const createParticle = (): Particle => {
      const size = Math.random() * 6 + 2;
      const x = Math.random() * canvas.width;
      const speed = 1 + Math.random() * 2;
      let y = 0;
      
      const colors = [
        'rgba(255, 91, 162, 0.7)',
        'rgba(156, 77, 244, 0.7)',
        'rgba(76, 190, 255, 0.7)',
        'rgba(255, 209, 102, 0.7)'
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        x,
        y,
        size,
        speed,
        color,
        update: function() {
          this.y += this.speed;
          ctx.globalAlpha = 1 - (this.y / canvas.height);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          
          return this.y < canvas.height;
        }
      };
    };

    return {
      particles,
      createParticle
    };
  }, []);

  const animate = useCallback((
    canvas: HTMLCanvasElement, 
    ctx: CanvasRenderingContext2D, 
    { particles, createParticle }: { particles: Particle[]; createParticle: () => Particle; }
  ) => {
    const animateFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new particles randomly
      if (Math.random() < 0.05) {
        particles.push(createParticle());
      }
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const isAlive = particles[i].update();
        if (!isAlive) {
          particles.splice(i, 1);
        }
      }
      
      animationFrameId.current = requestAnimationFrame(animateFrame);
    };
    
    animateFrame();
    
    return animationFrameId;
  }, []);

  return {
    initialize,
    animate
  };
};
