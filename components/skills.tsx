"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVercel,
  SiRailway,
  SiPostman,
  SiSpring,
} from "react-icons/si"

const skillCategories = [
  {
    title: "Backend",
    gradient: "from-green-400 to-emerald-600",
    skills: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiSpring, name: "Spring" },
    ],
  },
  {
    title: "Frontend",
    gradient: "from-cyan-400 to-blue-600",
    skills: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      
    ],
  },
  {
    title: "Deploy y herramientas",
    gradient: "from-blue-400 to-indigo-600",
    skills: [
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiVercel, name: "Vercel" },
      { icon: SiRailway, name: "Railway" },
      { icon: SiPostman, name: "Postman" },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
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
              Stack tecnológico
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Tecnologías y herramientas
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className={`text-2xl font-bold bg-linear-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.08, y: -5, rotate: 1 }}
                      className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-5 group cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${category.gradient} flex items-center justify-center`}
                        >
                          <skill.icon className="text-white" size={24} />
                        </motion.div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumen estilo “lista” (como tu foto) */}
         
        </motion.div>
      </div>
    </section>
  )
}
