import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  enableParallax?: boolean;
  enableTilt?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function InteractiveCard({
  children,
  className,
  enableParallax = true,
  enableTilt = true,
  glowIntensity = 'medium'
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const parallaxBg = parallaxRef.current;
    
    if (!card || !parallaxBg) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      if (enableTilt) {
        const rotateX = deltaY * -10;
        const rotateY = deltaX * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      }

      if (enableParallax) {
        const moveX = deltaX * 20;
        const moveY = deltaY * 20;
        parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        parallaxBg.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      parallaxBg.style.transform = 'translate(0px, 0px) scale(1)';
      parallaxBg.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isHovered, enableTilt, enableParallax]);

  const glowClasses = {
    low: 'hover:shadow-glow-primary',
    medium: 'hover:shadow-neon',
    high: 'hover:glow-purple-intense'
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'glass-card relative overflow-hidden transition-all duration-300 card-3d-tilt ripple-click',
        glowClasses[glowIntensity],
        'hover:scale-[1.02] hover:-translate-y-2',
        className
      )}
    >
      <div ref={parallaxRef} className="parallax-bg" />
      {children}
    </div>
  );
}