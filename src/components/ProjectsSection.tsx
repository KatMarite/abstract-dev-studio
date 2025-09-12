import { ExternalLink, Github, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "EcoTrack Dashboard",
      category: "Web Application",
      description:
        "A comprehensive sustainability tracking platform that helps businesses monitor and reduce their carbon footprint through interactive data visualization and actionable insights.",
      technologies: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      gradient: "from-emerald-500 to-teal-600",
      featured: true,
    },
    {
      id: 2,
      title: "FinanceFlow Mobile",
      category: "Mobile App",
      description:
        "A beautifully designed personal finance app with AI-powered insights, budget tracking, and investment portfolio management.",
      technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      title: "CreativeSpace Platform",
      category: "SaaS Platform",
      description:
        "A collaborative workspace for creative teams with real-time editing, version control, and project management features.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: 4,
      title: "AR Shopping Experience",
      category: "AR/VR",
      description:
        "An immersive augmented reality shopping experience that allows customers to visualize products in their space before purchase.",
      technologies: ["Three.js", "WebXR", "React", "Python", "TensorFlow"],
      image:
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop&crop=center",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-surface/30 to-surface-elevated/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 animate-slide-up">
            Featured <span className="gradient-text animate-shimmer bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_100%]">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A showcase of innovative solutions that blend cutting-edge technology
            with exceptional user experiences
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          {projects.filter((p) => p.featured).map((project) => (
            <div key={project.id} className="glass-card p-8 rounded-3xl hover-lift animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 animate-pulse-glow" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-elevated group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="btn-secondary flex-1 text-sm">
                      <Play className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                    <button className="glass w-12 h-12 rounded-xl flex items-center justify-center hover-scale">
                      <Github className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block glass px-4 py-2 rounded-full mb-4">
                      <span className="text-sm font-medium gradient-text">
                        ⭐ Featured Project
                      </span>
                    </div>
                    <h3 className="text-4xl font-black mb-3 gradient-text">
                      {project.title}
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-4">
                      {project.category}
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass px-4 py-2 rounded-xl text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="btn-hero">
                      <ExternalLink className="w-5 h-5" />
                      <span>View Project</span>
                    </button>
                    <button className="glass px-6 py-3 rounded-xl font-semibold hover-lift">
                      <Github className="w-5 h-5 inline mr-2" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter((p) => !p.featured).map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card group hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="glass w-10 h-10 rounded-lg flex items-center justify-center hover-scale">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button className="glass w-10 h-10 rounded-lg flex items-center justify-center hover-scale">
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="glass px-3 py-1 rounded-lg text-xs font-medium text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
