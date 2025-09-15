import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar4.jpg";

const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Rocket },
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
    { label: "Creative Solutions", value: "100+", icon: Lightbulb }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-surface/50 to-surface-elevated/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-centered digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Avatar & Decorative Elements */}
          <div className="relative">
            {/* Background Decorative Shapes */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-tertiary/20 rounded-full shape-blob animate-morph" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full animate-float" />
            
            {/* Main Avatar Container */}
            <div className="relative glass-card p-8 rounded-3xl hover-lift">
              <div className="relative">
                <img
                  src={developerAvatar}
                  alt="Katleho Marite - Software Developer"
                  className="w-full h-80 object-cover rounded-2xl shadow-elevated"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl">
                  <span className="text-sm font-bold gradient-text">Available for hire!</span>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="glass-card p-4 rounded-2xl hover-scale text-center">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="glass-card p-8 rounded-3xl hover-lift">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Crafting Digital Excellence
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A passionate and results driven AI/ML enthusiast with a strong foundation in full-stack web development. I specialize in building  <span className="text-primary font-semibold">data-driven applications</span> and models that 
                  <span className="text-accent font-semibold"> solve real-world problems.</span> My career objective is to leverage my skills in machine learning, Python, and modern web frameworks to contribute to innovative projects in a collaborative environment.
                </p>
                
              </div>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Creative Problem Solving",
                  description: "Turning complex challenges into elegant solutions",
                  gradient: "from-primary to-tertiary"
                },
                {
                  title: "User-Centric Design",
                  description: "Building experiences that users love and remember",
                  gradient: "from-accent to-secondary"
                },
                {
                  title: "Technical Excellence",
                  description: "Writing clean, scalable, and maintainable code",
                  gradient: "from-secondary to-primary"
                },
                {
                  title: "Continuous Learning",
                  description: "Always staying ahead of the latest trends and technologies",
                  gradient: "from-tertiary to-accent"
                }
              ].map(({ title, description, gradient }) => (
                <div key={title} className="portfolio-card p-6 hover-scale">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-background/20 rounded-full" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
