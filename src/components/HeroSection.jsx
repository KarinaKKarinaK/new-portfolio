import {ArrowDown} from "lucide-react";
import { Interactive3DShape } from "./Interactive3DShape";
import { useEffect, useState } from "react";


export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-24 md:pt-20 overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
              rgba(139, 92, 246, 0.15) 0%, 
              rgba(34, 197, 94, 0.1) 50%,
              transparent 100%
            )
          `,
          transition: 'background 0.5s ease-out',
        }}
      />

      {/* Split Layout Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center justify-center min-h-[80vh] max-w-6xl mx-auto">
          
          {/* Left Side - Interactive 3D Shape */}
          <div 
            className="relative flex items-center justify-center lg:justify-start animate-fade-in-delay-2 order-2 lg:order-1"
            style={{
              transform: `translateY(${scrollY * -0.05}px) translateX(${mousePosition.x * 5}px)`,
            }}
          >
            {/* 3D Shape Container - Simplified */}
            <div className="relative w-full max-w-lg h-96 lg:h-[500px] flex items-center justify-center">
              <Interactive3DShape />
              
              {/* Minimal floating info cards - only keep the essential ones */}
              <div className="absolute top-8 left-4 hidden lg:block animate-float" style={{animationDelay: '0.5s'}}>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-sm text-primary font-semibold">React & AI</div>
                  <div className="text-xs text-foreground/70">Modern Tech Stack</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-green-400 rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="absolute bottom-12 right-8 hidden lg:block animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-sm text-green-500 font-semibold">Creative Design</div>
                  <div className="text-xs text-foreground/70">User Focused</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-primary rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-4 hidden xl:block animate-float" style={{animationDelay: '1.5s'}}>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-sm text-purple-400 font-semibold">Innovation</div>
                  <div className="text-xs text-foreground/70">Driven</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-primary rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Minimal Text Content */}
          <div 
            className="flex flex-col justify-center space-y-8 lg:pl-4 xl:pl-0 order-1 lg:order-2"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            {/* Main Heading Only */}
            <div className="space-y-6 animate-fade-in text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-10xl xl:text-9xl 2xl:text-[9rem] font-bold leading-tight">
                <span className="text-foreground/90">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary via-purple-400 to-green-400 bg-clip-text text-transparent text-glow relative">
                  Karina
                  {/* Subtle glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-green-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                    Karina
                  </span>
                </span>
              </h1>
            </div>

            {/* Action Buttons Only */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-1 justify-center lg:justify-start">
              <a href= "#contact" className="cosmic-button">
                Contact Me
              </a>
              <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-xs text-foreground/50 mb-2 font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
