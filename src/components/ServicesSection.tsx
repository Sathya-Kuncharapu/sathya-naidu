
import { Monitor, Smartphone, Database, Cloud, Palette, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "The most modern and high-quality design made at a professional level.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
      features: ["Cross-platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "High-quality development of sites at the professional level.",
      features: ["RESTful APIs", "Database Design", "Scalable Architecture"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Deployment and management of applications in cloud environments.",
      features: ["AWS/Azure", "DevOps", "Continuous Deployment"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "I make high-quality photos of any category at a professional level.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Optimization of websites for better search engine visibility.",
      features: ["Technical SEO", "Performance", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-portfolio-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105">
            What I'm <span className="gradient-text">Doing</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-golden mx-auto transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-portfolio-dark p-8 rounded-xl border border-portfolio-dark-tertiary card-hover animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4 transition-all duration-300 group-hover:bg-portfolio-golden/20 group-hover:scale-110">
                  <service.icon className="text-portfolio-golden transition-all duration-300 group-hover:rotate-12" size={24} />
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-portfolio-golden">{service.title}</h3>
              </div>
              
              <p className="text-portfolio-text-muted mb-6 leading-relaxed transition-colors duration-300 group-hover:text-portfolio-text-secondary">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-portfolio-text-secondary transition-all duration-300 hover:text-portfolio-golden hover:translate-x-2">
                    <div className="w-1.5 h-1.5 bg-portfolio-golden rounded-full mr-3 transition-all duration-300 hover:scale-150"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
