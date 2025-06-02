
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-golden mx-auto transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-golden transition-all duration-300 hover:text-portfolio-golden-dark">
              Full Stack Developer & Problem Solver
            </h3>
            <p className="text-portfolio-text-secondary mb-6 leading-relaxed transition-all duration-300 hover:text-portfolio-text-primary">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I enjoy turning complex problems into simple, beautiful and intuitive designs. 
              My goal is to build applications that are not only functional but also provide 
              excellent user experiences.
            </p>
            <p className="text-portfolio-text-secondary mb-8 leading-relaxed transition-all duration-300 hover:text-portfolio-text-primary">
              With a strong foundation in both frontend and backend development, I can take 
              your project from concept to deployment. I believe in writing clean, maintainable 
              code and staying updated with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-portfolio-dark-secondary rounded-lg hover-glow transition-all duration-300 hover:bg-portfolio-dark-tertiary">
                <div className="text-2xl font-bold text-portfolio-golden mb-1 transition-all duration-300 hover:scale-110">50+</div>
                <div className="text-sm text-portfolio-text-muted">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-portfolio-dark-secondary rounded-lg hover-glow transition-all duration-300 hover:bg-portfolio-dark-tertiary">
                <div className="text-2xl font-bold text-portfolio-golden mb-1 transition-all duration-300 hover:scale-110">2+</div>
                <div className="text-sm text-portfolio-text-muted">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="skill-card bg-portfolio-dark-secondary p-6 rounded-xl">
              <Code className="text-portfolio-golden mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12" size={32} />
              <h4 className="font-semibold mb-2 transition-colors duration-300 hover:text-portfolio-golden">Frontend Development</h4>
              <p className="text-sm text-portfolio-text-muted transition-colors duration-300 hover:text-portfolio-text-secondary">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            
            <div className="skill-card bg-portfolio-dark-secondary p-6 rounded-xl">
              <Database className="text-portfolio-golden mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12" size={32} />
              <h4 className="font-semibold mb-2 transition-colors duration-300 hover:text-portfolio-golden">Backend Development</h4>
              <p className="text-sm text-portfolio-text-muted transition-colors duration-300 hover:text-portfolio-text-secondary">
                Node.js, Python, PostgreSQL, MongoDB
              </p>
            </div>
            
            <div className="skill-card bg-portfolio-dark-secondary p-6 rounded-xl">
              <Globe className="text-portfolio-golden mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12" size={32} />
              <h4 className="font-semibold mb-2 transition-colors duration-300 hover:text-portfolio-golden">Web Development</h4>
              <p className="text-sm text-portfolio-text-muted transition-colors duration-300 hover:text-portfolio-text-secondary">
                Responsive design, SEO optimization
              </p>
            </div>
            
            <div className="skill-card bg-portfolio-dark-secondary p-6 rounded-xl">
              <Smartphone className="text-portfolio-golden mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12" size={32} />
              <h4 className="font-semibold mb-2 transition-colors duration-300 hover:text-portfolio-golden">Mobile Development</h4>
              <p className="text-sm text-portfolio-text-muted transition-colors duration-300 hover:text-portfolio-text-secondary">
                React Native, Progressive Web Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
