import { StarBackground } from "@/components/StarBackground";
import { CursorFollower } from "@/components/CursorFollower";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { TransitionSection } from "../components/TransitionSection";
import {AboutSection} from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />
            
            {/* Cursor Follower */}
            <CursorFollower />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection />
                
                {/* Transition Section */}
                <TransitionSection />
                
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};