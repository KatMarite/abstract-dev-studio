import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('All fields are required');
      }
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      console.log('Supabase response:', { data, error });
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      const result = data;

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "katlehomarite@gmail.com",
      href: "mailto:katlehomarite@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 (833) 744-926",
      href: "tel:+27833744926"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pretoria, South Africa",
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
                disabled={isSubmitting}
                className="btn-hero w-full group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                </span>
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
