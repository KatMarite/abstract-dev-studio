import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface/50 border-t border-border/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-sm font-black text-background">AR</span>
              </div>
              <span className="font-bold text-muted-foreground">© 2024 Alex Rivera. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">Built with passion and</span>
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
