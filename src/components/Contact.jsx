import React, { use, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () =>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "carlos.quezada.dev@gmail.com",
            link: "mailto:carlos.quezada.dev@gmail.com"
        },
        {
            icon: MapPin,
            title: "Ubicación",
            value: "Perú",
            link: null
        }
    ];

    const socialLinks = [
        {
        icon: Linkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/carlos-quezada-chuquiruna",
        color: "hover:text-blue-400"
        },
        {
        icon: Github,
        name: "GitHub",
        link: "https://github.com/carlosQ2031",
        color: "hover:text-gray-400"
        }
    ];

    
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-[#1a2332] to-[#0a0f1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00d4ff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-[#00d4ff] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-[#1a2332]/50 backdrop-blur-sm rounded-lg border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
                  >
                    <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
                      <info.icon className="text-[#00d4ff]" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-[#00d4ff] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Sígueme en
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-[#1a2332]/50 backdrop-blur-sm rounded-lg border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 text-white ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-lg border border-[#00d4ff]/20"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Disponibilidad
              </h4>
              <p className="text-gray-400">
                Actualmente abierto a oportunidades laborales y proyectos de colaboración.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#1a2332] to-[#0a0f1a] p-8 rounded-xl border border-[#00d4ff]/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Envíame un mensaje
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}



export default Contact;