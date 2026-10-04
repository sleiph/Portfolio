import { useState, useEffect, useRef } from 'react';
import styles from './ProtetorDeTela.module.css';

export default function ProtetorDeTela() {
  const [isVisivel, setIsVisivel] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });
  const [opacity, setOpacity] = useState(0);
  const idleTimerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const IDLE_TIMEOUT = 2 * 60 * 1000; // 2 minutos

  const resetIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    setIsVisivel(false);
    setOpacity(0);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      setIsVisivel(true);
      setPosition({ x: 0, y: 0 });
      setDirection({ dx: 2, dy: 2 });
      setOpacity(0);
      
      let currentOpacity = 0;
      fadeIntervalRef.current = setInterval(() => {
        currentOpacity += 0.02;
        if (currentOpacity >= 1) {
          currentOpacity = 1;
          clearInterval(fadeIntervalRef.current);
        }
        setOpacity(currentOpacity);
      }, 50);
    }, IDLE_TIMEOUT);
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      window.addEventListener(event, resetIdleTimer);
    });

    resetIdleTimer();

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, resetIdleTimer);
      });
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisivel)
      return;

    const animate = () => {
      setPosition(prevPos => {
        const spriteSize = 100;
        const maxX = window.innerWidth - spriteSize;
        const maxY = window.innerHeight - spriteSize;
        
        let newX = prevPos.x + direction.dx;
        let newY = prevPos.y + direction.dy;
        let newDx = direction.dx;
        let newDy = direction.dy;

        if (newX <= 0 || newX >= maxX) {
          newDx = -direction.dx;
          newX = Math.max(0, Math.min(newX, maxX));
        }
        
        if (newY <= 0 || newY >= maxY) {
          newDy = -direction.dy;
          newY = Math.max(0, Math.min(newY, maxY));
        }

        setDirection({ dx: newDx, dy: newDy });
        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisivel, direction]);

  if (!isVisivel)
    return null;

  return (
    <div className={styles.screensaver}>
      <div 
        className={styles.overlay}
        style={{ opacity }}
      />
      <img 
        src='/img/win98-logo.png' 
        alt='screensaver sprite'
        className={styles.sprite}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity
        }}
      />
    </div>
  );
}
