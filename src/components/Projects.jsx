import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import juegoImg from "../assets/Juego_Numero_Secreto.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Web", "Mobile", "Backend"];

  const projects = [
    {
      title: "Carlos Quezada Portfolio",
      description:
        "Portfolio personal con diseño moderno, animaciones suaves y secciones interactivas para mostrar habilidades, proyectos y experiencia.",
      image: "https://images.unsplash.com/photo-1625398122646-049e15c5fb1b",
      technologies: ["React", "Tailwind CSS"],
      category: "Web",
      link: "https://carlosq2031.github.io/portfolio-2026/",
    },
    {
      title: "Encriptador de Textos",
      description:
        "Permite encriptar y desencriptar texto. Ideal para mantener la confidencialidad de tus datos o simplemente agregar un toque de emoción a tus mensajes.",
      image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4",
      technologies: ["JavaScript", "CSS", "HTML"],
      category: "Web",
      link: "https://carlosm2031.github.io/PrimerChallenge-Encriptador/",
    },
    {
      title: "Frases al Azar: Encuentra tu Inspiración con un Clic",
      description:
        "Este es un proyecto que presenta una página web en la que, al dar clic en la frase que se muestra, se cambia por otra. Se trata de una simple interacción que permite a los usuarios explorar diferentes frases.",
      image: "https://images.unsplash.com/photo-1698945298361-365595d400eb",
      technologies: ["JavaScript", "CSS", "HTML"],
      category: "Web",
      link: "https://carlosm2031.github.io/frases/",
    },
    {
      title: "Juego del número secreto",
      description:
        "Juego interactivo donde el usuario intenta adivinar un número secreto generado aleatoriamente.",
      image: juegoImg,
      technologies: ["JavaScript", "CSS", "HTML"],
      category: "Web",
      link: "https://carlosm2031.github.io/juego-secreto/",
    },
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-br from-[#1a2332] to-[#0a0f1a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-[#00d4ff] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia y
            habilidades técnicas
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#00d4ff] text-[#1a2332] shadow-lg shadow-[#00d4ff]/30"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              🚧 En proceso
            </h3>
            <p className="text-gray-400">
              Actualmente no hay proyectos en esta categoría.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
