import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper para asegurar links absolutos
  const formatLink = (url) =>
    url.startsWith('http') || url.startsWith('mailto:') ? url : `https://${url}`;

  const socialLinks = [
    { icon: Linkedin, link: 'https://www.linkedin.com/in/carlos-quezada-chuquiruna', label: 'LinkedIn' },
    { icon: Github, link: 'https://github.com/carlosQ2031', label: 'GitHub' },
    { icon: Mail, link: 'mailto:carlos.quezada.dev@gmail.com', label: 'Email' }
  ];

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Sobre mí', id: 'sobre-mi' },
    { name: 'Proyectos', id: 'proyectos' },
    { name: 'Habilidades', id: 'habilidades' },
    { name: 'Contacto', id: 'contacto' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0a0f1a] border-t border-[#00d4ff]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-white mb-4 block">Portfolio</span>
            <p className="text-gray-400 text-sm mb-4">
              Ingeniero de Sistemas especializado en desarrollo de software y soluciones tecnológicas innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Navegación rápida</span>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Sígueme</span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={formatLink(social.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#1a2332] rounded-lg border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 text-gray-400 hover:text-[#00d4ff] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {currentYear} Carlos Quezada. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
