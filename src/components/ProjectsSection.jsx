import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Chess - Stockfish Engine",
    description:
      "A Python chess game with a GUI using Pygame and Stockfish engine integration.",
    image: "/projects/project23.png",
    tags: ["Python", "Pygame", "Stockfish"],
    demoUrl:
      "https://github.com/KarinaKKarinaK/ChessWithEngine/blob/main/assets/images/project23.png",
    githubUrl: "https://github.com/KarinaKKarinaK/ChessWithEngine",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A modern glassmorphism expense tracker built with HTML, CSS, and vanilla JS.",
    image: "/projects/project21.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl:
      "https://github.com/KarinaKKarinaK/expense-tracker/blob/main/screenshots/Screenshot%202025-06-26%20at%2017.32.05.png",
    githubUrl: "https://github.com/KarinaKKarinaK/expense-tracker",
  },
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   description: "Modern portfolio site with animations and dark mode.",
  //   image: "/projects/project7.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl:
  //     "https://github.com/KarinaKKarinaK/react-portfolio?tab=readme-ov-file",
  //   githubUrl:
  //     "https://github.com/KarinaKKarinaK/personal-portfolio/tree/main/portfolio",
  // },
  {
    id: 3,
    title: "AI-Powered Learning App",
    description:
      "AI-powered app for learning Spanish - with login, chat, speech tools, and AI features.",
    image: "/projects/project24.png",
    tags: ["Python", "OpenAI", "SQLite"],
    demoUrl: "https://github.com/KarinaKKarinaK/SpanishApp",
    githubUrl: "https://github.com/KarinaKKarinaK/SpanishApp",
  },
  // {
  //   id: 5,
  //   title: "Portfolio Website",
  //   description: "A hacker-inspired portfolio website with a unique design.",
  //   image: "/projects/project25.png",
  //   tags: ["Vite", "TailwindCSS", "JavaScript"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 6,
  //   title: "SaaS Website",
  //   description: "Landing page with testimonials and animations.",
  //   image: "/projects/project13.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 7,
  //   title: "Dashboard UI",
  //   description: "Analytics dashboard with graphs and responsive layout.",
  //   image: "/projects/project16.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 8,
  //   title: "Quiz Game",
  //   description:
  //     "Interactive quiz web app with instant feedback and progress tracking.",
  //   image: "/projects/project4.png",
  //   tags: ["JavaScript", "CSS", "HTML"],
  //   demoUrl:
  //     "https://github.com/KarinaKKarinaK/quiz-game/blob/main/screenshots/Screenshot%202025-06-26%20at%200.30.09.png",
  //   githubUrl: "https://github.com/KarinaKKarinaK/quiz-game",
  // },
  // {
  //   id: 9,
  //   title: "Digital Business Card",
  //   description: "Digital business card using dummy data and animations.",
  //   image: "/projects/project19.png",
  //   tags: ["HTML", "CSS"],
  //   demoUrl: "#",
  //   githubUrl:
  //     "https://github.com/KarinaKKarinaK/html_business_card?tab=readme-ov-file",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-12 md:px-16 lg:px-24 xl:px-32 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a unique solution
          to a problem or a creative endeavor that I am passionate about.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 max-w-xs mx-auto"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-start items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            className="cosmic-button inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KarinaKKarinaK"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
