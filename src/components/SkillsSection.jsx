import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skillsData = [
  // Frontend - Purple theme
  { name: "HTML/CSS", level: 95, category: "frontend", size: "large", priority: "high" },
  { name: "JavaScript", level: 90, category: "frontend", size: "large", priority: "high" },
  { name: "React", level: 90, category: "frontend", size: "large", priority: "high" },
  { name: "Vite", level: 85, category: "frontend", size: "medium", priority: "medium" },
  { name: "Tailwind CSS", level: 90, category: "frontend", size: "medium", priority: "medium" },

  // Backend - Blue theme
  { name: "Python", level: 95, category: "backend", size: "large", priority: "high" },
  { name: "Node.js", level: 80, category: "backend", size: "medium", priority: "medium" },
  { name: "Express", level: 75, category: "backend", size: "medium", priority: "medium" },
  { name: "PostgreSQL", level: 80, category: "backend", size: "medium", priority: "medium" },
  { name: "MongoDB", level: 70, category: "backend", size: "small", priority: "low" },

  // AI - Green theme
  { name: "LangChain", level: 80, category: "ai", size: "medium", priority: "medium" },
  { name: "n8n", level: 75, category: "ai", size: "medium", priority: "medium" },
  { name: "RAG/KAG", level: 70, category: "ai", size: "small", priority: "low" },
  { name: "TensorFlow", level: 75, category: "ai", size: "medium", priority: "medium" },
  { name: "PyTorch", level: 70, category: "ai", size: "small", priority: "low" },

  // Tools - Mixed theme
  { name: "Git/GitHub", level: 90, category: "tools", size: "large", priority: "high" },
  { name: "Streamlit", level: 90, category: "tools", size: "medium", priority: "medium" },
  { name: "VS Code", level: 95, category: "tools", size: "large", priority: "high" },
  { name: "Figma", level: 80, category: "tools", size: "medium", priority: "medium" },
];

const categories = [
  { id: "all", label: "All Skills", color: "from-purple-400 to-blue-400" },
  { id: "frontend", label: "Frontend", color: "from-purple-400 to-purple-600" },
  { id: "backend", label: "Backend", color: "from-blue-400 to-blue-600" },
  { id: "ai", label: "AI/ML", color: "from-green-400 to-green-600" },
  { id: "tools", label: "Tools", color: "from-purple-400 via-blue-400 to-green-400" },
];

const getSkillColor = (category, level) => {
  const baseColors = {
    frontend: "purple",
    backend: "blue", 
    ai: "green",
    tools: level > 90 ? "purple" : level > 80 ? "blue" : "green"
  };
  
  const color = baseColors[category];
  const intensity = level > 90 ? "500" : level > 80 ? "400" : "300";
  
  return {
    bg: `bg-gradient-to-br from-${color}-${intensity}/20 to-${color}-600/10`,
    border: `border-${color}-${intensity}/30`,
    text: `text-${color}-${intensity}`,
    glow: `shadow-${color}-${intensity}/20`
  };
};

const getSizeClasses = (size, level) => {
  const baseSize = {
    small: "w-16 h-16 md:w-20 md:h-20",
    medium: "w-20 h-20 md:w-24 md:h-24", 
    large: "w-24 h-24 md:w-28 md:h-28"
  };
  
  // Higher level skills get slightly larger
  if (level > 90) {
    return {
      small: "w-18 h-18 md:w-22 md:h-22",
      medium: "w-22 h-22 md:w-26 md:h-26",
      large: "w-26 h-26 md:w-30 md:h-30"
    }[size];
  }
  
  return baseSize[size];
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer
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

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-background via-background/90 to-background overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-purple-500/3 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.04}px) rotate(${scrollY * 0.01}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-tr from-blue-500/3 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.03}px) rotate(${scrollY * -0.008}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute top-2/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-green-500/3 to-transparent rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.02}px) rotate(${scrollY * 0.005}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "group relative px-6 py-3 rounded-full transition-all duration-300 font-medium backdrop-blur-sm",
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-foreground border border-white/10"
              )}
            >
              <span className="relative z-10">{category.label}</span>
              {activeCategory === category.id && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Floating Constellation Layout */}
        <div className="relative min-h-[650px] md:min-h-[750px]">
          {/* Dynamic connection lines between skills */}
          <svg className="absolute inset-0 pointer-events-none opacity-20" width="100%" height="100%">
            {filteredSkills.map((skill, index) => (
              filteredSkills.slice(index + 1).map((nextSkill, nextIndex) => {
                // Create more organic connections based on skill relationships
                const shouldConnect = (
                  (skill.category === nextSkill.category && Math.random() > 0.3) ||
                  (skill.priority === 'high' && nextSkill.priority === 'high' && Math.random() > 0.5) ||
                  (Math.abs(skill.level - nextSkill.level) < 20 && Math.random() > 0.7)
                );
                
                if (shouldConnect && index + nextIndex < 15) { // Limit connections for cleaner look
                  const x1 = (index % 7) * 14 + 10;
                  const y1 = Math.floor(index / 7) * 20 + 15;
                  const x2 = ((index + nextIndex + 1) % 7) * 14 + 10;
                  const y2 = Math.floor((index + nextIndex + 1) / 7) * 20 + 15;
                  
                  return (
                    <line
                      key={`${index}-${nextIndex}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#skillGradient)"
                      strokeWidth="1.5"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${index * 300}ms`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  );
                }
                return null;
              })
            )).flat()}
            <defs>
              <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Skill Bubbles with Enhanced Layout */}
          <div className="absolute inset-0">
            {filteredSkills.map((skill, index) => {
              // Create more organic, galaxy-like positioning based on skill importance
              const positions = [
                // High priority skills in central area
                { top: '20%', left: '25%' }, { top: '35%', left: '50%' }, { top: '20%', left: '75%' }, 
                { top: '50%', left: '30%' }, { top: '50%', left: '70%' }, { top: '65%', left: '50%' },
                // Medium priority skills in mid-ring
                { top: '15%', left: '45%' }, { top: '40%', left: '15%' }, { top: '60%', left: '20%' },
                { top: '75%', left: '35%' }, { top: '70%', left: '75%' }, { top: '40%', left: '85%' },
                // Lower priority skills in outer ring
                { top: '10%', left: '15%' }, { top: '10%', left: '85%' }, { top: '80%', left: '15%' },
                { top: '85%', left: '65%' }, { top: '30%', left: '95%' }, { top: '90%', left: '45%' },
                { top: '25%', left: '5%' }
              ];
              
              // Sort by priority for better positioning
              const priorityOrder = { high: 0, medium: 1, low: 2 };
              const sortedIndex = filteredSkills
                .map((s, i) => ({ skill: s, originalIndex: i }))
                .sort((a, b) => priorityOrder[a.skill.priority] - priorityOrder[b.skill.priority])
                .findIndex(item => item.originalIndex === index);
              
              const position = positions[sortedIndex % positions.length];
              
              return (
                <div
                  key={skill.name}
                  className={`absolute transition-all duration-1200 group cursor-pointer ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ 
                    top: position.top, 
                    left: position.left,
                    transitionDelay: `${700 + sortedIndex * 120}ms`,
                    transform: `translate(-50%, -50%) rotate(${Math.sin(sortedIndex * 0.8) * 4}deg)`,
                    zIndex: skill.priority === 'high' ? 30 : skill.priority === 'medium' ? 20 : 10
                  }}
                >
                  {/* Skill Bubble with Enhanced Design */}
                  <div className={`
                    ${getSizeClasses(skill.size, skill.level)}
                    rounded-full
                    ${skill.category === 'frontend' ? 
                      `bg-gradient-to-br from-purple-400/25 via-purple-500/20 to-purple-600/15 border-2 ${skill.priority === 'high' ? 'border-purple-400/50' : 'border-purple-400/30'}` :
                      skill.category === 'backend' ? 
                        `bg-gradient-to-br from-blue-400/25 via-blue-500/20 to-blue-600/15 border-2 ${skill.priority === 'high' ? 'border-blue-400/50' : 'border-blue-400/30'}` :
                      skill.category === 'ai' ? 
                        `bg-gradient-to-br from-green-400/25 via-green-500/20 to-green-600/15 border-2 ${skill.priority === 'high' ? 'border-green-400/50' : 'border-green-400/30'}` :
                        `bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-green-400/20 border-2 ${skill.priority === 'high' ? 'border-blue-400/50' : 'border-blue-400/30'}`}
                    backdrop-blur-sm
                    flex flex-col items-center justify-center
                    group-hover:scale-110 
                    group-hover:shadow-xl
                    ${skill.category === 'frontend' ? 'group-hover:shadow-purple-400/30' :
                      skill.category === 'backend' ? 'group-hover:shadow-blue-400/30' :
                      skill.category === 'ai' ? 'group-hover:shadow-green-400/30' :
                      'group-hover:shadow-blue-400/30'}
                    transition-all duration-500 ease-out
                    relative overflow-hidden
                    ${skill.priority === 'high' ? 'ring-1 ring-white/10' : ''}
                  `}>
                    
                    {/* Skill name */}
                    <div className={`
                      text-center px-2 font-semibold leading-tight
                      ${skill.size === 'large' ? 'text-sm md:text-base' :
                        skill.size === 'medium' ? 'text-xs md:text-sm' :
                        'text-xs'}
                      ${skill.category === 'frontend' ? 'text-purple-300' :
                        skill.category === 'backend' ? 'text-blue-300' :
                        skill.category === 'ai' ? 'text-green-300' :
                        'text-blue-300'}
                      transition-colors duration-300
                      group-hover:text-white
                    `}>
                      {skill.name}
                    </div>
                    
                    {/* Enhanced level indicator */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`transition-all duration-500 rounded-full ${
                            i < Math.round(skill.level / 20)
                              ? `w-1.5 h-1.5 ${
                                  skill.category === 'frontend' ? 'bg-purple-400' :
                                  skill.category === 'backend' ? 'bg-blue-400' :
                                  skill.category === 'ai' ? 'bg-green-400' :
                                  'bg-blue-400'
                                } shadow-sm`
                              : 'w-1 h-1 bg-gray-400/20'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Animated background shimmer */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <div className={`absolute inset-0 rounded-full animate-spin-slow ${
                        skill.category === 'frontend' ? 'bg-gradient-to-r from-transparent via-purple-400/30 to-transparent' :
                        skill.category === 'backend' ? 'bg-gradient-to-r from-transparent via-blue-400/30 to-transparent' :
                        skill.category === 'ai' ? 'bg-gradient-to-r from-transparent via-green-400/30 to-transparent' :
                        'bg-gradient-to-r from-transparent via-blue-400/30 to-transparent'
                      }`}></div>
                    </div>

                    {/* Enhanced floating particles */}
                    <div className={`absolute -top-2 -right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float ${
                      skill.category === 'frontend' ? 'bg-purple-400/80' :
                      skill.category === 'backend' ? 'bg-blue-400/80' :
                      skill.category === 'ai' ? 'bg-green-400/80' :
                      'bg-blue-400/80'
                    }`}></div>
                    <div className={`absolute -bottom-2 -left-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float ${
                      skill.category === 'frontend' ? 'bg-purple-300/60' :
                      skill.category === 'backend' ? 'bg-blue-300/60' :
                      skill.category === 'ai' ? 'bg-green-300/60' :
                      'bg-blue-300/60'
                    }`} style={{animationDelay: '1.5s'}}></div>
                  </div>

                  {/* Enhanced Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className={`relative px-3 py-2 rounded-xl text-white text-sm whitespace-nowrap backdrop-blur-md shadow-lg ${
                      skill.category === 'frontend' ? 'bg-purple-500/90 border border-purple-400/30' :
                      skill.category === 'backend' ? 'bg-blue-500/90 border border-blue-400/30' :
                      skill.category === 'ai' ? 'bg-green-500/90 border border-green-400/30' :
                      'bg-blue-500/90 border border-blue-400/30'
                    }`}>
                      <div className="font-medium">{skill.level}% proficiency</div>
                      <div className="text-xs opacity-80 capitalize">{skill.priority} priority</div>
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-transparent ${
                        skill.category === 'frontend' ? 'border-t-purple-500/90' :
                        skill.category === 'backend' ? 'border-t-blue-500/90' :
                        skill.category === 'ai' ? 'border-t-green-500/90' :
                        'border-t-blue-500/90'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-12">
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-t from-purple-400/30 via-blue-400/20 to-transparent transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>
          <div className={`absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-blue-400/60 rounded-full transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <div className={`absolute bottom-4 right-1/3 w-1.5 h-1.5 bg-green-400/60 rounded-full transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};
