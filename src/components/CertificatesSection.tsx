import { Award, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Artificial Intelligence on Microsoft Azure",
      issuer: "Microsoft",
      date: "2025",
      credentialId: "KPX8TRT25BLG",
      image: "/download.png",
      verifyLink: "https://coursera.org/share/d1f694cbd6cde375066a87d3e2e162c4"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "2025",
      credentialId: "JGSF1YD7ETEQ",
      image: "/placeholder.svg",
      verifyLink: "https://coursera.org/share/3d09a6ddad9e464ac1bc92767d553d05"
    },
    {
      title: "AI Essentials",
      issuer: "Intel",
      date: "2025",
      credentialId: "54FL5EAWABDT",
      image: "/placeholder.svg", 
      verifyLink: "https://coursera.org/share/8a304682d1f6e27f1550cead007c63d9"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "2025",
      credentialId: "SP9GGK1SZZDD",
      image: "/placeholder.svg",
      verifyLink: "https://coursera.org/share/8626b7c5dd099257454362caf84e6934"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI, Amazon Web Services",
      date: "2025",
      credentialId: "01XJ52FNKS6O",
      image: "/placeholder.svg",
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/01XJ52FNKS6O"
    }
  ];

  return (
    <section className="section-container">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Certificates</span> & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise across various technologies and platforms
          </p>
        </div>

        {/* Certificates Carousel */}
        <div className="max-w-6xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="glass-card p-6 rounded-2xl hover-lift h-full animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Certificate Image/Badge */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shimmer">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-foreground leading-tight">
                        {cert.title}
                      </h3>
                      
                      <p className="text-primary font-semibold">
                        {cert.issuer}
                      </p>
                      
                      <p className="text-sm text-muted-foreground">
                        Issued: {cert.date}
                      </p>
                      
                      <div className="pt-2">
                        <span className="text-xs text-muted-foreground font-mono bg-surface px-2 py-1 rounded">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>

                    {/* Verify Link */}
                    <div className="mt-6 pt-4 border-t border-border/20">
                      <a
                        href={cert.verifyLink}
                        className="flex items-center justify-center gap-2 text-sm text-primary hover:text-primary-foreground transition-colors group"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-0 glass" />
            <CarouselNext className="right-0 glass" />
          </Carousel>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold gradient-text">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to maintaining industry-standard expertise 
              and delivering high-quality solutions using proven methodologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
