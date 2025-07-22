import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-105 active:scale-95"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-400" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-xl",
        isScrolled 
          ? "bg-background/20 dark:bg-background/30 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl" 
          : "bg-background/10 dark:bg-background/20 backdrop-blur-lg border border-white/5 dark:border-white/5"
      )}
      >
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
              <a href="#hero" className="text-lg sm:text-xl font-bold flex items-center">
                  <span>
                      <span className="text-primary">Karina</span> Portfolio
                  </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                  <div className="flex space-x-8 items-center">
                      {navItems.map((item) => (
                          <a
                              key={item.name}
                              href={item.href}
                              className="text-foreground/90 hover:text-primary transition-all duration-200 font-medium hover:scale-105"
                          >
                              {item.name}
                          </a>
                      ))}
                  </div>
                  <ThemeToggleButton />
              </div>

              {/* Mobile Navigation - Hamburger + Theme Toggle */}
              <div className="md:hidden flex items-center space-x-2">
                  <ThemeToggleButton />
                  <button
                      onClick={toggleMobileMenu}
                      className="p-2 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/5"
                      aria-label="Toggle mobile menu"
                  >
                      {isMobileMenuOpen ? (
                          <X className="h-5 w-5 text-foreground" />
                      ) : (
                          <Menu className="h-5 w-5 text-foreground" />
                      )}
                  </button>
              </div>
          </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
              {/* Backdrop */}
              <div 
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm"
                  onClick={closeMobileMenu}
              />
              
              {/* Mobile Menu */}
              <div className="fixed top-20 left-4 right-4 bg-background/95 dark:bg-background/95 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl shadow-2xl p-6">
                  <div className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                          <a
                              key={item.name}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-lg text-foreground/90 hover:text-primary transition-all duration-200 font-medium py-3 border-b border-white/10 dark:border-white/5 last:border-b-0"
                          >
                              {item.name}
                          </a>
                      ))}
                  </div>
              </div>
          </div>
      )}
    </>
  );
};
