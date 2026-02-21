import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Cloud, Wrench, Layout, Server } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 88 },
        { name: "Java", level: 82 },
        { name: "C#", level: 78 },
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      gradient: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 90 },
        { name: "Figma", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="habilidades"
      className="py-20 bg-gradient-to-br from-[#0a0f1a] to-[#1a2332]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-[#00d4ff] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-[#1a2332] to-[#0a0f1a] rounded-xl p-6 border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient}`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                <div
                  className="grid gap-4
                   grid-cols-[repeat(auto-fit,minmax(160px,1fr))]"
                >
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="
              flex items-center justify-center
              h-12 px-6
              bg-gradient-to-br from-[#1f2937] to-[#111827]
              text-gray-200 text-sm font-semibold
              rounded-xl border border-gray-700
              shadow-sm
              hover:text-indigo-400 hover:border-indigo-400
              transition-colors duration-200
              whitespace-nowrap overflow-visible
            "
                      title={skill.name}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Otras Tecnologías
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST API",
              "Agile/Scrum"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full border border-[#00d4ff]/20 font-medium text-sm hover:bg-[#00d4ff]/20 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
