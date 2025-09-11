import { useState } from "react";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "from-primary to-tertiary",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux", level: 80 },
        { name: "Three.js", level: 75 }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-accent to-secondary",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 92 },
        { name: "Microservices", level: 78 },
        { name: "Docker", level: 82 }
      ]
    },
    database: {
      title: "Database & Cloud",
      icon: Database,
      color: "from-secondary to-primary",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 88 },
        { name: "Redis", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Firebase", level: 85 }
      ]
    },
    design: {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-tertiary to-accent",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Framer", level: 80 },
        { name: "Prototyping", level: 88 },
        { name: "User Research", level: 75 },
        { name: "Design Systems", level: 92 }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-accent to-tertiary",
      skills: [
        { name: "React Native", level: 82 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Progressive Web Apps", level: 88 },
        { name: "Mobile UI/UX", level: 85 },
        { name: "App Store Optimization", level: 78 }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: Zap,
      color: "from-primary to-accent",
      skills: [
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Jest", level: 88 },
        { name: "Cypress", level: 82 },
        { name: "Monitoring", level: 78 }
      ]
    }
  };

  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning the full development lifecycle - from concept to deployment
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = activeCategory === key;
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  glass-card px-6 py-4 rounded-2xl hover-scale transition-all duration-300
                  ${isActive ? 'ring-2 ring-primary bg-gradient-to-r ' + category.color + ' text-background' : 'hover-lift'}
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-background' : 'text-primary'}`} />
                  <span className={`font-semibold ${isActive ? 'text-background' : 'text-foreground'}`}>
                    {category.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              {(() => {
                const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                return <Icon className="w-8 h-8 text-primary" />;
              })()}
              <h3 className="text-3xl font-bold gradient-text">
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="space-y-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm font-bold gradient-text">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Category Summary */}
            <div className={`
              mt-8 p-6 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory as keyof typeof skillCategories].color} 
              bg-opacity-10 border border-primary/20
            `}>
              <p className="text-muted-foreground leading-relaxed">
                {activeCategory === 'frontend' && "Specialized in creating stunning, responsive user interfaces with modern frameworks and cutting-edge design principles."}
                {activeCategory === 'backend' && "Expert in building scalable server-side applications, APIs, and microservices architectures."}
                {activeCategory === 'database' && "Proficient in designing and managing robust data storage solutions and cloud infrastructure."}
                {activeCategory === 'design' && "Passionate about user-centered design, creating intuitive interfaces and delightful user experiences."}
                {activeCategory === 'mobile' && "Experienced in developing cross-platform mobile applications with native performance."}
                {activeCategory === 'tools' && "Proficient with modern development tools, testing frameworks, and DevOps practices."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;