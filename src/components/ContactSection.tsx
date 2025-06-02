
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-golden mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-portfolio-golden">
              Let's Work Together
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4">
                  <Mail className="text-portfolio-golden" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-portfolio-text-muted">sathya.kuncharapu@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4">
                  <MapPin className="text-portfolio-golden" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-portfolio-text-muted">Available for Remote Work</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-portfolio-golden/10 rounded-lg mr-4">
                  <Phone className="text-portfolio-golden" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-portfolio-text-muted">Available upon request</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Sathya-Kuncharapu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark transition-all duration-300 rounded-lg hover-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sathya-naidu-kuncharapu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark transition-all duration-300 rounded-lg hover-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-portfolio-dark-secondary hover:bg-portfolio-golden hover:text-portfolio-dark transition-all duration-300 rounded-lg hover-glow"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-colors"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-dark-secondary border border-portfolio-dark-tertiary rounded-lg focus:border-portfolio-golden focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-portfolio-golden text-portfolio-dark font-semibold rounded-lg hover:bg-portfolio-golden-dark transition-colors hover-glow"
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
