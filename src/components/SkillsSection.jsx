import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Vite", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Python", level: 95, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // AI
  { name: "LangChain", level: 80, category: "ai" },
  { name: "n8n", level: 75, category: "ai" },
  { name: "RAG/KAG", level: 70, category: "ai" },
  { name: "TensorFlow", level: 75, category: "ai" },
  { name: "PyTorch", level: 70, category: "ai" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Streamlit", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },

  // Bonus
  { name: "UX/UI Design", level: 80, category: "design" },
  { name: "API Integration", level: 85, category: "backend" },
];

const categories = ["all", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
    <section id="skills" className="py-24 px-6 md:px-8 lg:px-12 relative bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, key) => (
            <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
            >
                {category}
            </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {filteredSkills.map((skill, key) => (
            <div
                key={key}
                className="bg-card p-8 rounded-lg shadow-xs card-hover"
            >
                <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="relative w-full h-3 rounded-full overflow-hidden">
                {/* Background bar (100% filled) */}
                <div className="absolute inset-0 bg-slate-600/60 dark:bg-slate-700/80 rounded-full" />
                {/* Progress bar */}
                <div
                    className="absolute inset-y-0 left-0 bg-primary rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
    };
