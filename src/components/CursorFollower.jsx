import { useEffect, useState } from 'react';

export const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect when hovering over interactive elements
    const handleMouseOver = (e) => {
      const isInteractive = e.target.matches('a, button, [role="button"], input, textarea, select, .cosmic-button, .card-hover');
      setIsHovering(isInteractive);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    // Hide cursor follower on touch devices
    const handleTouchStart = () => {
      setIsVisible(false);
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower sphere */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(0, 0)',
        }}
      >
        <div 
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-gradient-to-br from-primary via-secondary to-primary shadow-lg shadow-primary/50' 
              : 'bg-gradient-to-br from-primary to-secondary opacity-80'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.4)' 
              : '0 0 8px rgba(139, 92, 246, 0.5)',
          }}
        />
      </div>

      {/* Trailing effect sphere */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ease-out ${
          isVisible ? 'opacity-40' : 'opacity-0'
        } ${isHovering ? 'scale-125' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(0, 0)',
        }}
      >
        <div className="w-6 h-6 rounded-full bg-primary/20 blur-sm"></div>
      </div>

      {/* Large glow effect */}
      <div
        className={`fixed pointer-events-none z-30 transition-all duration-700 ease-out ${
          isVisible ? (isHovering ? 'opacity-60' : 'opacity-30') : 'opacity-0'
        } ${isHovering ? 'scale-110' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(0, 0)',
        }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/15 blur-md"></div>
      </div>

      {/* Extra large glow for hover effect */}
      {isHovering && (
        <div
          className={`fixed pointer-events-none z-20 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-20' : 'opacity-0'
          }`}
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 30,
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-15 h-15 rounded-full bg-primary/10 blur-lg animate-pulse"></div>
        </div>
      )}
    </>
  );
};
