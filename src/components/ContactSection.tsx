
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-golden mx-auto mb-6 transition-all duration-500 hover:w-32"></div>
          <p className="text-portfolio-text-secondary max-w-2xl mx-auto transition-colors duration-300 hover:text-portfolio-text-primary">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-portfolio-golden transition-colors duration-300 hover:text-portfolio-golden-dark">
              Let's Work Together
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4 transition-all duration-300 group-hover:bg-portfolio-golden/20 group-hover:scale-110">
                  <Mail className="text-portfolio-golden transition-all duration-300 group-hover:rotate-12" size={20} />
                </div>
                <div>
                  <p className="font-semibold transition-colors duration-300 group-hover:text-portfolio-golden">Email</p>
                  <p className="text-portfolio-text-muted transition-colors duration-300 group-hover:text-portfolio-text-secondary">sathya.kuncharapu@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4 transition-all duration-300 group-hover:bg-portfolio-golden/20 group-hover:scale-110">
                  <MapPin className="text-portfolio-golden transition-all duration-300 group-hover:rotate-12" size={20} />
                </div>
                <div>
                  <p className="font-semibold transition-colors duration-300 group-hover:text-portfolio-golden">Location</p>
                  <p className="text-portfolio-text-muted transition-colors duration-300 group-hover:text-portfolio-text-secondary">Available for Remote Work</p>
                </div>
              </div>
              
              <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4 transition-all duration-300 group-hover:bg-portfolio-golden/20 group-hover:scale-110">
                  <Phone className="text-portfolio-golden transition-all duration-300 group-hover:rotate-12" size={20} />
                </div>
                <div>
                  <p className="font-semibold transition-colors duration-300 group-hover:text-portfolio-golden">Phone</p>
                  <p className="text-portfolio-text-muted transition-colors duration-300 group-hover:text-portfolio-text-secondary">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Sathya-Kuncharapu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sathya-naidu-kuncharapu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark rounded-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="social-icon p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark rounded-lg"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 transition-colors duration-300 hover:text-portfolio-golden">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-all duration-300 hover:border-portfolio-golden/50 focus:scale-[1.02]"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 transition-colors duration-300 hover:text-portfolio-golden">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-all duration-300 hover:border-portfolio-golden/50 focus:scale-[1.02]"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 transition-colors duration-300 hover:text-portfolio-golden">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-all duration-300 hover:border-portfolio-golden/50 focus:scale-[1.02]"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 transition-colors duration-300 hover:text-portfolio-golden">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-all duration-300 hover:border-portfolio-golden/50 focus:scale-[1.02] resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-portfolio-golden text-portfolio-dark font-semibold rounded-lg hover:bg-portfolio-golden-dark button-hover"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
