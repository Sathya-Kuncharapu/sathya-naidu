
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sathya_Naidu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 transition-all duration-500 hover:scale-105">
            Hi, I'm{' '}
            <span className="gradient-text hover:animate-pulse">Sathya Naidu</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-portfolio-text-secondary mb-6 transition-colors duration-300 hover:text-portfolio-golden">
            Full Stack Developer
          </h2>
          <p className="text-lg text-portfolio-text-muted mb-8 max-w-2xl transition-all duration-300 hover:text-portfolio-text-secondary">
            Passionate developer crafting modern web applications with cutting-edge technologies. 
            I transform ideas into powerful, user-friendly digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="https://github.com/Sathya-Kuncharapu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark button-hover rounded-lg"
            >
              <Github size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sathya-naidu-kuncharapu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark button-hover rounded-lg"
            >
              <Linkedin size={20} className="transition-transform duration-300 group-hover:rotate-12" />
              LinkedIn
            </a>
            <button 
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-6 py-3 border border-portfolio-golden text-portfolio-golden hover:bg-portfolio-golden hover:text-portfolio-dark button-hover rounded-lg"
            >
              <Download size={20} className="transition-transform duration-300 hover:translate-y-1" />
              Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-slide-in-left">
          <div className="relative group">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-portfolio-golden hover-glow">
              <img
                src="/lovable-uploads/2aa241d8-a1e8-4bd2-8e07-686688c1f319.png"
                alt="Sathya Naidu Kuncharapu"
                className="w-full h-full object-cover image-hover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-golden rounded-full flex items-center justify-center animate-pulse transition-all duration-300 hover:scale-110 hover:bg-portfolio-golden-dark">
              <span className="text-portfolio-dark font-bold text-sm">Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
