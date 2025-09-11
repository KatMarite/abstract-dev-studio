import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.rivera@email.com",
      href: "mailto:alex.rivera@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  return (
    <section className="section-container bg-gradient-to-br from-surface/50 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-full shape-blob animate-float" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full animate-morph" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's <span className="gradient-text">Create</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have an exciting project in mind? Let's discuss how we can bring your vision to life with cutting-edge technology and creative design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & CTA */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <div className="glass-card p-8 rounded-3xl hover-lift">
              <div className="space-y-6">
                <div className="inline-block glass px-4 py-2 rounded-full">
                  <span className="text-sm font-medium gradient-text">🚀 Ready to start?</span>
                </div>
                
                <h3 className="text-3xl font-bold">
                  <span className="gradient-text">Available</span> for new projects
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm currently accepting new client projects and would love to hear about your next big idea. 
                  Whether it's a web application, mobile app, or something completely unique - let's make it happen!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-hero flex-1">
                    <span>Start a Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="btn-secondary">
                    <span>Schedule Call</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card p-6 rounded-2xl hover-lift hover-glow group flex items-center gap-4 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl text-center hover-scale">
                <div className="text-3xl font-black gradient-text mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center hover-scale">
                <div className="text-3xl font-black gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold gradient-text mb-6">Send me a message</h3>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full glass px-4 py-3 rounded-xl border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full glass px-4 py-3 rounded-xl border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full glass px-4 py-3 rounded-xl border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground"
                  placeholder="Web Development Project"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full glass px-4 py-3 rounded-xl border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-transparent text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-hero w-full group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 rounded-3xl hover-lift max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to turn your <span className="gradient-text">ideas into reality</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let's collaborate and create something extraordinary together.
            </p>
            <button className="btn-secondary">
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;