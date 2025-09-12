import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background4.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      
      {/* Floating Abstract Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary to-tertiary rounded-full shape-blob animate-float opacity-20" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full shape-blob animate-float-delayed opacity-30" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full animate-pulse-glow opacity-40" />
      <div className="absolute top-32 right-20 w-20 h-20 bg-gradient-to-br from-tertiary to-primary rounded-full shape-blob animate-morph opacity-25" />
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full animate-float opacity-35" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Greeting */}
        <div className="inline-block glass px-6 py-2 rounded-full mb-8 animate-bounce-in">
          <span className="text-sm font-medium text-muted-foreground">👋 Hello, I'm</span>
        </div>
        
        {/* Name & Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6">
          <span className="gradient-text animate-fade-in-left bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_100%] animate-gradient-shift" style={{ animationDelay: "0.2s" }}>Katleho</span>{" "}
          <span className="text-foreground animate-fade-in-right" style={{ animationDelay: "0.4s" }}>Marite</span>
        </h1>
        
        <div className="text-2xl md:text-4xl font-bold mb-8 animate-scale-up" style={{ animationDelay: '0.6s' }}>
          <span className="gradient-text-secondary bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] animate-gradient-shift">AI/ML Engineer</span>{" "}
          <span className="text-foreground"> & Web Developer</span>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.8s' }}>
          Crafting digital experiences that blend 
          <span className="gradient-text font-semibold hover:animate-pulse"> innovation</span>, 
          <span className="gradient-text-secondary font-semibold hover:animate-pulse"> aesthetics</span>, and 
          <span className="gradient-text font-semibold hover:animate-pulse"> functionality</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero group animate-scale-up" 
            style={{ animationDelay: '1s' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <a 
            href="/resume-katleho-marite.pdf" 
            download="Katleho_Marite_Resume.pdf"
            className="btn-secondary group animate-scale-up" 
            style={{ animationDelay: '1.2s' }}
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/KatMarite", label: "GitHub", delay: "1.4s" },
            { icon: Linkedin, href: "#", label: "LinkedIn", delay: "1.6s" },
            { icon: Mail, href: "mailto:katlehomarite@gmail.com", label: "Email", delay: "1.8s" }
          ].map(({ icon: Icon, href, label, delay }) => (
            <a
              key={label}
              href={href}
              className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover-lift hover-glow group animate-bounce-in"
              style={{ animationDelay: delay }}
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-up" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center hover:border-primary transition-colors duration-300">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
