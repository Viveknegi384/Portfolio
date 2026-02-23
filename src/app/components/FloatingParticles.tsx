import { useEffect, useRef } from 'react';

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles distributed on a sphere
    const NUM = 90;
    const particles = Array.from({ length: NUM }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 130 + Math.random() * 90;
      return {
        ox: r * Math.sin(phi) * Math.cos(theta),
        oy: r * Math.sin(phi) * Math.sin(theta),
        oz: r * Math.cos(phi),
      };
    });

    let angle = 0;
    let animId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 0.3;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.0015;

      const cx = width / 2;
      const cy = height / 2;
      const FL = 380;

      const cosA = Math.cos(angle + mouseX);
      const sinA = Math.sin(angle + mouseX);
      const cosB = Math.cos(angle * 0.35 + mouseY);
      const sinB = Math.sin(angle * 0.35 + mouseY);

      const pts = particles.map((p) => {
        // Rotate around Y axis
        const x1 = p.ox * cosA - p.oz * sinA;
        const z1 = p.ox * sinA + p.oz * cosA;
        const y1 = p.oy;

        // Rotate around X axis slightly
        const y2 = y1 * cosB - z1 * sinB;
        const z2 = y1 * sinB + z1 * cosB;

        const perspective = FL / (z2 + FL);
        const sx = x1 * perspective + cx;
        const sy = y2 * perspective + cy;
        const depth = Math.max(0.05, Math.min(1, (z2 + 250) / 500));

        return { sx, sy, perspective, depth };
      });

      // Draw connections
      const MAX_DIST = 110;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].sx - pts[j].sx;
          const dy = pts[i].sy - pts[j].sy;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.45 * Math.min(pts[i].depth, pts[j].depth);
            ctx.beginPath();
            ctx.moveTo(pts[i].sx, pts[i].sy);
            ctx.lineTo(pts[j].sx, pts[j].sy);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      pts.forEach((p) => {
        const r = p.perspective * 3;
        const alpha = p.depth * 0.95;

        // Glow halo
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 5);
        glow.addColorStop(0, `rgba(6, 182, 212, ${alpha * 0.3})`);
        glow.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
}
