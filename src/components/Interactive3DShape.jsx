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

  // Calculate rotation and translation based on mouse position
  const rotateX = mousePosition.y * -10; // Inverted for natural feel
  const rotateY = mousePosition.x * 10;
  const translateZ = isHovered ? 30 : 0;
  const scale = isHovered ? 1.05 : 1;

  // Responsive sizing
  const shapeSize = windowSize.width < 768 ? 'w-64 h-64' : windowSize.width < 1024 ? 'w-80 h-80' : 'w-96 h-96';

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Main 3D Shape Container */}
      <div
        ref={shapeRef}
        className="relative transition-all duration-500 ease-out pointer-events-auto cursor-pointer"
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
          {/* Outer glow ring */}
          <div 
            className="absolute inset-0 rounded-full opacity-30 blur-3xl transition-all duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(167, 139, 250, 0.4), transparent)',
              transform: 'translateZ(-30px) scale(1.2)',
              animation: 'pulse-subtle 3s ease-in-out infinite',
            }}
          />
          
          {/* Main shape container with glassmorphism */}
          <div 
            className={`relative w-full h-full rounded-3xl backdrop-blur-lg border transition-all duration-500 overflow-hidden ${
              isHovered ? 'border-white/30' : 'border-white/10'
            }`}
            style={{
              background: isHovered 
                ? 'rgba(139, 92, 246, 0.15)' 
                : 'rgba(139, 92, 246, 0.08)',
              boxShadow: isHovered 
                ? '0 35px 60px -12px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
                : '0 25px 50px -12px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Shape image with enhanced effects */}
            <img 
              src="/shapes/shape1.png" 
              alt="Interactive 3D Shape" 
              className={`w-full h-full object-contain transition-all duration-700 ${
                isHovered ? 'opacity-90 scale-105' : 'opacity-70'
              }`}
              style={{
                filter: isHovered 
                  ? 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6)) brightness(1.1)' 
                  : 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))',
                transform: `translateZ(15px)`,
              }}
            />
            
            {/* Animated overlay gradient */}
            <div 
              className={`absolute inset-0 opacity-40 mix-blend-overlay transition-opacity duration-500 ${
                isHovered ? 'opacity-60' : 'opacity-30'
              }`}
              style={{
                background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(167, 139, 250, 0.3), rgba(139, 92, 246, 0.4))',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease-in-out infinite',
              }}
            />

            {/* Inner light reflection */}
            <div 
              className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-20 transition-all duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
                transform: `translateZ(20px) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`,
                filter: 'blur(8px)',
              }}
            />
          </div>

          {/* Floating particles around the shape */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const radius = 45 + (i % 3) * 10;
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float transition-all duration-500"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                  transform: `translateZ(${25 + i * 3}px) ${isHovered ? 'scale(1.5)' : 'scale(1)'}`,
                  boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)',
                  opacity: isHovered ? 0.8 : 0.5,
                }}
              />
            );
          })}
        </div>

        {/* Secondary reflection/shadow layers */}
        <div 
          className={`absolute inset-0 ${shapeSize} rounded-3xl opacity-15 transition-all duration-700`}
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(167, 139, 250, 0.1), transparent)',
            transform: 'translateZ(-15px) translateY(8px) rotateX(5deg)',
            filter: 'blur(10px)',
          }}
        />
        
        <div 
          className={`absolute inset-0 ${shapeSize} rounded-3xl opacity-10 transition-all duration-700`}
          style={{
            background: 'linear-gradient(225deg, rgba(139, 92, 246, 0.15), transparent)',
            transform: 'translateZ(-25px) translateY(15px) rotateX(8deg)',
            filter: 'blur(15px)',
          }}
        />
      </div>

      {/* Interactive light rays that follow mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(
              ellipse 800px 400px at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
              rgba(139, 92, 246, ${isHovered ? 0.15 : 0.08}) 0%, 
              rgba(167, 139, 250, ${isHovered ? 0.08 : 0.04}) 30%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Ambient background enhancement */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.03), transparent 70%)',
        }}
      />
    </div>
  );
};
