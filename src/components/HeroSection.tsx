import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full shape-blob animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full animate-pulse-glow opacity-40" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Greeting */}
        <div className="inline-block glass px-6 py-2 rounded-full mb-8 animate-fade-up">
          <span className="text-sm font-medium text-muted-foreground">👋 Hello, I'm</span>
        </div>
        
        {/* Name & Title */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Alex</span>{" "}
          <span className="text-foreground">Rivera</span>
        </h1>
        
        <div className="text-2xl md:text-4xl font-bold mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <span className="gradient-text-secondary">Creative</span>{" "}
          <span className="text-foreground">Software Developer</span>
        </div>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Crafting digital experiences that blend 
          <span className="gradient-text font-semibold"> innovation</span>, 
          <span className="gradient-text-secondary font-semibold"> aesthetics</span>, and 
          <span className="gradient-text font-semibold"> functionality</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <button className="btn-hero group">
            <span className="relative z-10 flex items-center gap-3">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="btn-secondary group">
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: '1s' }}>
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover-lift hover-glow group"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-transparent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;