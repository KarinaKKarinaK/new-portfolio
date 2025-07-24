import { useEffect, useRef, useState } from 'react';

export const Interactive3DShape = () => {
  const shapeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert mouse position to normalized coordinates (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate rotation and translation based on mouse position with enhanced smoothness
  const rotateX = mousePosition.y * -6; // Smoother rotation
  const rotateY = mousePosition.x * 6;
  const translateZ = isHovered ? 25 : 0;
  const scale = isHovered ? 1.05 : 1;

  // Enhanced responsive sizing for split layout
  const shapeSize = windowSize.width < 768 ? 'w-56 h-56' : windowSize.width < 1024 ? 'w-72 h-72' : 'w-80 h-80';

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Main 3D Shape Container */}
      <div
        ref={shapeRef}
        className="relative transition-all duration-700 ease-out pointer-events-auto cursor-pointer"
        style={{
          transform: `
            perspective(1200px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(${translateZ}px)
            scale(${scale})
          `,
          transformStyle: 'preserve-3d',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Primary Shape with Enhanced Glassmorphism */}
        <div className={`relative ${shapeSize}`}>
          {/* Enhanced outer glow ring with purple-green gradient */}
          <div 
            className="absolute inset-0 rounded-full opacity-25 blur-3xl transition-all duration-1000"
            style={{
              background: isHovered 
                ? 'radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(34, 197, 94, 0.6), rgba(167, 139, 250, 0.4), transparent)'
                : 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(34, 197, 94, 0.3), rgba(167, 139, 250, 0.2), transparent)',
              transform: 'translateZ(-30px) scale(1.2)',
              animation: 'gradient-shift 8s ease-in-out infinite',
            }}
          />
          
          {/* Secondary glow layer */}
          <div 
            className="absolute inset-0 rounded-full opacity-15 blur-xl transition-all duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5), rgba(139, 92, 246, 0.3), transparent)',
              transform: 'translateZ(-20px) scale(1.1)',
              animation: 'pulse-subtle 6s ease-in-out infinite',
            }}
          />
          
          {/* Main shape container with enhanced glassmorphism */}
          <div 
            className={`relative w-full h-full rounded-3xl backdrop-blur-xl border transition-all duration-700 overflow-hidden ${
              isHovered ? 'border-white/30' : 'border-white/15'
            }`}
            style={{
              background: isHovered 
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(34, 197, 94, 0.1), rgba(139, 92, 246, 0.08))' 
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.10), rgba(34, 197, 94, 0.06), rgba(139, 92, 246, 0.05))',
              boxShadow: isHovered 
                ? '0 30px 60px -12px rgba(139, 92, 246, 0.4), 0 0 40px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
                : '0 25px 50px -12px rgba(139, 92, 246, 0.3), 0 0 25px rgba(34, 197, 94, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Shape image with enhanced effects */}
            <img 
              src="/shapes/shape1.png" 
              alt="Interactive 3D Shape" 
              className={`w-full h-full object-contain transition-all duration-1000 ${
                isHovered ? 'opacity-90 scale-105' : 'opacity-80 scale-100'
              }`}
              style={{
                filter: isHovered 
                  ? 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 15px rgba(34, 197, 94, 0.4)) brightness(1.1) contrast(1.05)' 
                  : 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 10px rgba(34, 197, 94, 0.2)) brightness(1.05)',
                transform: `translateZ(15px)`,
              }}
            />
            
            {/* Animated overlay gradient with purple-green theme */}
            <div 
              className={`absolute inset-0 opacity-30 mix-blend-overlay transition-opacity duration-700 ${
                isHovered ? 'opacity-50' : 'opacity-25'
              }`}
              style={{
                background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(34, 197, 94, 0.3), rgba(167, 139, 250, 0.4), rgba(34, 197, 94, 0.2))',
                backgroundSize: '400% 400%',
                animation: 'gradient-shift 10s ease-in-out infinite',
              }}
            />

            {/* Enhanced inner light reflections */}
            <div 
              className="absolute top-6 left-6 w-16 h-16 rounded-full opacity-20 transition-all duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(139, 92, 246, 0.3), transparent)',
                transform: `translateZ(20px) ${isHovered ? 'scale(1.5)' : 'scale(1)'} rotate(${mousePosition.x * 10}deg)`,
                filter: 'blur(8px)',
              }}
            />
            
            <div 
              className="absolute bottom-8 right-8 w-12 h-12 rounded-full opacity-15 transition-all duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.8), rgba(255, 255, 255, 0.3), transparent)',
                transform: `translateZ(18px) ${isHovered ? 'scale(1.3)' : 'scale(1)'} rotate(${mousePosition.y * -15}deg)`,
                filter: 'blur(6px)',
              }}
            />
          </div>

          {/* Enhanced floating particles around the shape with purple-green theme */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 45 + (i % 3) * 10;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            const colors = [
              'rgba(139, 92, 246, 0.6)', // Purple
              'rgba(34, 197, 94, 0.6)',   // Green  
              'rgba(167, 139, 250, 0.6)', // Light purple
            ];
            const color = colors[i % 3];
            
            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full animate-float transition-all duration-700"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  backgroundColor: color,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${5 + (i % 3)}s`,
                  transform: `translateZ(${25 + i * 3}px) ${isHovered ? 'scale(1.6)' : 'scale(1)'}`,
                  boxShadow: `0 0 8px ${color}, 0 0 16px ${color.replace('0.6', '0.3')}`,
                  opacity: isHovered ? 0.8 : 0.5,
                }}
              />
            );
          })}
        </div>

        {/* Enhanced reflection/shadow layers */}
        <div 
          className={`absolute inset-0 ${shapeSize} rounded-3xl opacity-12 transition-all duration-1000`}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(34, 197, 94, 0.15), rgba(167, 139, 250, 0.1), transparent)',
            transform: 'translateZ(-15px) translateY(8px) rotateX(2deg)',
            filter: 'blur(12px)',
          }}
        />
        
        {/* Secondary shadow for depth */}
        <div 
          className={`absolute inset-0 ${shapeSize} rounded-3xl opacity-8 transition-all duration-1000`}
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(139, 92, 246, 0.1), transparent)',
            transform: 'translateZ(-25px) translateY(12px) rotateX(4deg)',
            filter: 'blur(16px)',
          }}
        />
      </div>

      {/* Enhanced interactive light rays that follow mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(
              ellipse 800px 400px at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
              rgba(139, 92, 246, ${isHovered ? 0.12 : 0.06}) 0%, 
              rgba(34, 197, 94, ${isHovered ? 0.08 : 0.04}) 25%,
              rgba(167, 139, 250, ${isHovered ? 0.06 : 0.03}) 50%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Additional dynamic gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 pointer-events-none transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)',
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) scale(${isHovered ? 1.3 : 1})`,
          filter: 'blur(20px)',
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-24 h-24 pointer-events-none transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08), transparent 70%)',
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px) scale(${isHovered ? 1.2 : 1})`,
          filter: 'blur(16px)',
        }}
      />

      {/* Ambient background enhancement */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.03), rgba(34, 197, 94, 0.02), transparent 70%)',
        }}
      />
    </div>
  );
};
