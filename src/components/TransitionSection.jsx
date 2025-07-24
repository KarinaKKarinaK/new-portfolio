import { useEffect, useState, useRef } from 'react';

export const TransitionSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background/50 to-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-green-500/3 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Animated lines */}
        <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-green-400/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-green-500/10 border border-primary/20 backdrop-blur-sm shadow-lg">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent font-medium">
                Available for work
              </span>
            </div>
          </div>

          {/* Main Description */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground/80 leading-relaxed font-light">
              A passionate developer crafting innovative web experiences with{' '}
              <span className="font-medium bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                cutting-edge technologies
              </span>{' '}
              and{' '}
              <span className="font-medium bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                creative design solutions
              </span>
              .
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Stat 1 */}
            <div className={`group text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/10 border border-green-400/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400/60 rounded-full animate-float"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-300/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2">5+ Years Experience</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">Building scalable web applications and digital experiences</p>
            </div>

            {/* Stat 2 */}
            <div className={`group text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-600/10 border border-blue-400/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-1 -left-2 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute -bottom-2 -right-1 w-2 h-2 bg-blue-300/40 rounded-full animate-float" style={{animationDelay: '1.3s'}}></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2">50+ Projects Completed</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">Successful deliveries across various industries and platforms</p>
            </div>

            {/* Stat 3 */}
            <div className={`group text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/10 border border-purple-400/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                {/* Floating particles */}
                <div className="absolute -top-2 -left-1 w-2 h-2 bg-purple-400/60 rounded-full animate-float" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-purple-300/40 rounded-full animate-float" style={{animationDelay: '1.7s'}}></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2">AI & Web Expert</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">Specializing in modern frameworks and AI integration</p>
            </div>

          </div>

          {/* Decorative Elements */}
          <div className="relative mt-20">
            {/* Central connector line */}
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
            
            {/* Side decorative dots */}
            <div className={`absolute top-8 left-1/4 w-2 h-2 bg-primary/40 rounded-full transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
            <div className={`absolute top-8 right-1/4 w-2 h-2 bg-green-400/40 rounded-full transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};
