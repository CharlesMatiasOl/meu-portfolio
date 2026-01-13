"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { SiNodedotjs, SiDotnet, SiReact, SiPostgresql, SiTypescript, SiTailwindcss, SiJavascript, SiMysql, SiHtml5, SiCss3, SiExpress } from "react-icons/si"

const projects = [
  {
    title: "Sistema de gestión de reclamos",
    description:
      "Plataforma integral para gestionar reclamos automovilísticos mejorando el flujo operativo y el seguimiento de la empresa, con arquitectura por capas y APIs REST.",
    image: "/Autoreclamo2.png",
    tags: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss3, name: "CSS" },
    ],
    github: "https://github.com/CharlesMatiasOl/Proyecto-tesis-AutoReclamo-Local",
    demo: "https://autoreclamo-frontend.vercel.app/",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    title: "Plataforma web para alquiler de cabañas",
    description:
      "Plataforma integral para gestión y publicación de cabañas, que permite al usuario consultar disponibilidad y administrar el contenido desde un panel Admin (login, CRUD de cabañas y gestión de bloqueos), con arquitectura basada en API REST y base de datos relacional.",
    image: "/cc.png",
    tags: [
      { icon: SiReact, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiMysql, name: "MySQL" },

    ],
    github: "https://github.com/CharlesMatiasOl/cabanascordoba",
    demo: "",
    gradient: "from-cyan-400 to-blue-600",
  },
  
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-semibold tracking-wider uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Proyectos destacados
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-48 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <h3
                      className={`text-xl font-bold bg-linear-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.div
                          key={tag.name}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-full px-3 py-1 flex items-center gap-1.5 group/tag cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]"
                        >
                          <tag.icon className="text-primary text-sm group-hover/tag:scale-125 transition-transform" />
                          <span className="text-xs font-medium">{tag.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-1 px-4 py-2 rounded-full bg-card/40 backdrop-blur-xl border border-border/50 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                      >
                        <FiGithub />
                        Código
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-1 px-4 py-2 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                      >
                        <FiExternalLink />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
