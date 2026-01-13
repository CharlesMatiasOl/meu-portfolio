"use client"

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi"
import { TbFileCv } from "react-icons/tb"

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-primary text-sm font-semibold tracking-wider uppercase"
              >
                Desarrollador Full Stack
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-5xl md:text-7xl font-bold text-balance"
              >
                <span className="bg-linear-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Charles Matias
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-xl text-muted-foreground text-balance"
              >
                {/* (Texto opcional / tagline) */}
              </motion.p>
            </div>

            {/* Botones principales */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                Ver proyectos
                <FiArrowDown className="ml-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-3 rounded-full bg-card/40 backdrop-blur-xl border border-border/50 font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
              >
                Contacto
              </motion.button>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex gap-4"
            >
              {[
  { icon: FiGithub, href: "https://github.com/CharlesMatiasOl", label: "GitHub", external: true },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/charlesmatias/", label: "LinkedIn", external: true },
  { icon: TbFileCv, href: "/CV-Charles-Matias.pdf", label: "CV", download: true },
].map((social) => (
  <motion.a
    key={social.label}
    href={social.href}
    {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    {...(social.download ? { download: "CV-Charles-Matias.pdf" } : {})}
    whileHover={{ scale: 1.2, y: -3 }}
    className="w-12 h-12 rounded-full bg-card/40 backdrop-blur-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
    aria-label={social.label}
  >
    <social.icon size={20} />
  </motion.a>
))}

            </motion.div>
          </motion.div>

          {/* Foto / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-accent/20"
              />
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden bg-card/40 backdrop-blur-xl border border-border/50 p-2"
              >
                <div className="w-full h-full rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src="/Foto de perfil.jpg" /* reemplazá por tu archivo/foto en /public */
                    alt="Charles Matias"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
