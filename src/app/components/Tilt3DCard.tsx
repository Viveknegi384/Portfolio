import { useRef, useState } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  glowColor?: string;
}

export function Tilt3DCard({
  children,
  className = '',
  style: externalStyle = {},
  maxTilt = 12,
  glowColor = 'rgba(6, 182, 212, 0.15)',
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const tiltX = ((relY / rect.height) - 0.5) * -maxTilt * 2;
    const tiltY = ((relX / rect.width) - 0.5) * maxTilt * 2;
    const glowX = (relX / rect.width) * 100;
    const glowY = (relY / rect.height) * 100;
    setTilt({ x: tiltX, y: tiltY });
    setGlowPos({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        ...externalStyle,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
        transition: isHovered
          ? 'transform 0.1s ease-out'
          : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow overlay */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor} 0%, transparent 65%)`,
            pointerEvents: 'none',
            zIndex: 1,
            borderRadius: 'inherit',
          }}
        />
      )}
      {children}
    </div>
  );
}