import { Code, User, Bot } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-12 lg:px-36 xl:px-40 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-26 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">AI/Software Developer</h3>
            <p className="text-muted-foreground">
              As an AI & Software Developer, I specialize in crafting
              intelligent, scalable applications using modern technologies like
              Python, JavaScript, and AI frameworks. I enjoy turning ideas into
              real-world products through clean, efficient code.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving real problems with tech — from
              building AI agents to deploying full-stack solutions. Always
              learning, I explore cutting-edge tools to stay ahead in the
              fast-moving world of AI and software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Designing sleek, scalable websites and web apps using modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User Experience</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Providing human-centered design with performance in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Solutions</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Building intelligent systems powered by AI agents & automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
