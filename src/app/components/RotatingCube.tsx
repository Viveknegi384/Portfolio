import { motion } from 'motion/react';
import type { CSSProperties } from 'react';

interface RotatingCubeProps {
  size?: number;
  color?: string;
  className?: string;
  duration?: number;
}

export function RotatingCube({
  size = 60,
  color = '#06b6d4',
  className = '',
  duration = 8,
}: RotatingCubeProps) {
  const s = size;
  const half = s / 2;

  const faceStyle = (
    transform: string,
    bg = 'transparent'
  ): CSSProperties => ({
    position: 'absolute',
    width: s,
    height: s,
    border: `1px solid ${color}`,
    background: bg,
    transform,
    backfaceVisibility: 'visible',
  });

  return (
    <motion.div
      className={className}
      animate={{ rotateX: 360, rotateY: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{
        width: s,
        height: s,
        position: 'relative',
        transformStyle: 'preserve-3d',
        perspective: 600,
      }}
    >
      <div style={{ width: s, height: s, position: 'relative', transformStyle: 'preserve-3d' }}>
        {/* Front */}
        <div style={faceStyle(`translateZ(${half}px)`, `${color}08`)} />
        {/* Back */}
        <div style={faceStyle(`rotateY(180deg) translateZ(${half}px)`, `${color}08`)} />
        {/* Left */}
        <div style={faceStyle(`rotateY(-90deg) translateZ(${half}px)`, `${color}08`)} />
        {/* Right */}
        <div style={faceStyle(`rotateY(90deg) translateZ(${half}px)`, `${color}08`)} />
        {/* Top */}
        <div style={faceStyle(`rotateX(90deg) translateZ(${half}px)`, `${color}08`)} />
        {/* Bottom */}
        <div style={faceStyle(`rotateX(-90deg) translateZ(${half}px)`, `${color}08`)} />
      </div>
    </motion.div>
  );
}