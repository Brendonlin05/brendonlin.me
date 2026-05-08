import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function ScrollProgressBar({ thickness = 2, color = '#FFFFFF' }) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollHeight = Math.max(
        body.scrollHeight, doc.scrollHeight,
        body.offsetHeight, doc.offsetHeight,
        body.clientHeight, doc.clientHeight
      );
      const max = Math.max(scrollHeight - doc.clientHeight, 1);
      const y = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
      progress.set(Math.min(Math.max(y / max, 0), 1));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [progress]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: thickness,
      zIndex: 9999,
      pointerEvents: 'none',
    }}>
      <motion.div style={{
        height: '100%',
        width: '100%',
        background: color,
        scaleX: progress,
        transformOrigin: '0% 50%',
        willChange: 'transform',
      }} />
    </div>
  );
}
