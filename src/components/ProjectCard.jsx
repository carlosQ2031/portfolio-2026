import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({ project, index }) => {
  const { toast } = useToast();

  const handleViewMore = () => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "Esta característica estará disponible próximamente. ¡Gracias por tu interés!",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-[#1a2332] to-[#0a0f1a] rounded-xl overflow-hidden border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] rounded-full border border-[#00d4ff]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 bg-[#00d4ff] text-[#1a2332] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00b8e6] transition-colors duration-300 flex items-center justify-center gap-2"
  >
    <ExternalLink size={16} />
    Ver más
  </motion.a>

  <motion.a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white/5 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
  >
    <Github size={18} />
  </motion.a>
</div>

      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;