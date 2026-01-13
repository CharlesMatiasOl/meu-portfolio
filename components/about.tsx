"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiBookOpen, FiTarget, FiStar } from "react-icons/fi"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: FiStar,
      title: "Hobbies",
      description:
        "En mi tiempo libre voy al gimnasio (musculación) para mantenerme en forma, me gusta conectar con la naturaleza y escuchar música en general. Aprovecho ese tiempo para despejar la mente y relajarme.",
    },
    {
      icon: FiBookOpen,
      title: "Métodos de estudio",
      description:
        "Me gusta ver videos sobre nuevas tecnologías y herramientas, analizar qué tiene sentido y aplicarlo en mini proyectos. Así estudio de manera práctica: divertida y desafiante.",
    },
    {
      icon: FiTarget,
      title: "Objetivos",
      description:
        "Mi objetivo es profundizar mis habilidades como programador y entregar soluciones innovadoras y eficaces para problemas reales, en escenarios reales de trabajo.",
    },
  ]

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
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
              Sobre mí
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Quién soy
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Foto (inalterado) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8">
                <img src="/Foto de perfil.jpg" alt="Foto / Avatar" className="w-full rounded-2xl object-cover" />
              </div>
            </motion.div>

            {/* Texto + Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* ---------- TIPOGRAFÍA SOLAMENTE (wrapper nuevo) ---------- */}
              <div className="max-w-prose text-[1.05rem] md:text-lg leading-8 md:leading-9 text-foreground/90 tracking-[0.01em] [text-pretty] [hyphens:auto]">
                <p className="mb-4">
                  Me llamo Charles Soy Analista de Sistemas. Me gusta aprender nuevas
                  tecnologías y herramientas de trabajo, y siempre estoy en búsqueda de desafíos o problemas para
                  resolver en proyectos personales.
                </p>
                <p>
                  Desarrollé soluciones end-to-end orientadas a la gestión operativa y la automatización de procesos, creando herramientas internas para centralizar información y optimizar el seguimiento de casos en el ámbito de siniestros. Además, participé en el desarrollo de sistemas a medida para distintos negocios (como reservas y gestión comercial), integrando frontend web, APIs REST y bases de datos relacionales para asegurar trazabilidad, eficiencia y un flujo de trabajo claro.
                </p>
              </div>
              {/* --------------------------------------------------------- */}

              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 flex gap-4 group cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                  >
                    <div className="w-12 h-12 rounded-full bg-linearto-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm md:text-[0.95rem] leading-6 text-muted-foreground [text-pretty]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


/*codigo antigo 

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FiMusic, FiPackage, FiMap, FiSmile, FiBookOpen, FiTarget, FiStar } from "react-icons/fi"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: FiStar,
      title: "Hobbies",
      description: "No meu tempo livre, vou à academia (musculação) para me manter em forma, gosto de me conectar com a natureza e ouvir músicas em geral. Aproveito esse tempo para esvaziar a mente e relaxar.",
    },
    {
      icon: FiBookOpen,
      title: "Metodos de estudo",
      description: "Gosto de assistir vídeos sobre novas tecnologias e ferramentas, analisar o que faz sentido e aplicar em mini-projetos. Assim, estudo de forma prática - divertida e desafiadora.",
    },
    {
      icon: FiTarget,
      title: "Objetivos",
      description: "Meu objetivo é aprofundar minhas habilidades como programador e entregar soluções inovadoras e eficazes para problemas reais, em cenários reais de trabalho.",
    },
  ]

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
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
              Sobre Mim
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Quem sou eu
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8">
                <img src="/image0.jpg" alt="Foto/Avatar" className="w-full rounded-2xl object-cover" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="absolute -bottom-6 -right-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 max-w-xs"
              >
                <p className="text-sm italic text-muted-foreground">
                  ""
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Me chamo Charles e sou formado no curso Analista de Sistemas. Sou autodidata, gosto de aprender novas
                  tecnologias e ferramentas de trabalho e estou sempre em busca de desafios ou problemas para resolver
                  em projetos pessoais. Atualmente, estou em busca da minha primeira experiência profissional em
                  Desenvolvimento de Software, com interesse em Full Stack/Backend.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-6 flex gap-4 group cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

*/
