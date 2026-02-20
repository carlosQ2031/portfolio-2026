import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Aprendizaje en Desarrollo de Software",
      description: "Enfoque en fortalecer bases de programación, lógica y buenas prácticas"
    },
    {
      icon: Lightbulb,
      title: "Resolución de Problemas",
      description: "Análisis de problemas y búsqueda de soluciones claras y funcionales"
    },
    {
      icon: Target,
      title: "Enfoque en Calidad",
      description: "Atención al detalle, código ordenado y mejora continua"
    },
    {
      icon: Users,
      title: "Colaboración y Aprendizaje",
      description: "Disposición para aprender en equipo y recibir retroalimentación"
    }
  ];


  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-[#0a0f1a] to-[#1a2332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-[#00d4ff] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/30 to-[#00d4ff]/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0a0f1a] p-8 rounded-2xl border border-[#00d4ff]/20">
                <div className="w-full aspect-square bg-gradient-to-br from-[#00d4ff]/20 to-transparent rounded-xl flex items-center justify-center">
                  <Code2 size={120} className="text-[#00d4ff]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Interesado en el desarrollo de software y en el aprendizaje constante de tecnologías modernas, enfocado en fortalecer mis bases en programación y buenas prácticas.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Me interesa la construcción de soluciones funcionales, claras y bien estructuradas, con especial atención a la lógica y a la experiencia del usuario.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Me motiva seguir aprendiendo, enfrentar nuevos retos y aportar valor en proyectos donde pueda crecer técnica y personalmente.
            </p>


            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-[#1a2332]/50 backdrop-blur-sm p-4 rounded-lg border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
                >
                  <highlight.icon className="text-[#00d4ff] mb-2" size={24} />
                  <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;