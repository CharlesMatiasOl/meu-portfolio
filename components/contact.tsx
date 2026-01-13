"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare } from "react-icons/fi"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

      if (!accessKey) {
        console.error("Falta NEXT_PUBLIC_WEB3FORMS_KEY en .env.local")
        setStatus("error")
        return
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Contacto desde Portfolio — ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (data?.success) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
       icon: FiMail,
      title: "Email",
      value: "contactocharlesmatias@gmail.com",
      href: "mailto:contactocharlesmatias@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Charles,%0D%0A%0D%0A",
      gradient: "from-red-400 to-pink-600",
      external: false,
    },
    {
      icon: FiGithub,
      title: "GitHub",
      value: "Charles Matias",
      href: "https://github.com/CharlesMatiasOl",
      gradient: "from-gray-400 to-gray-600",
      external: true,
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      value: "Charles Matias",
      href: "https://www.linkedin.com/in/charlesmatias/",
      gradient: "from-blue-400 to-blue-600",
      external: true,
    },
  ]

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
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
              Contacto
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Trabajemos juntos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Siempre estoy abierto a nuevos proyectos y oportunidades. Podés contactarme a través de cualquiera de las
              opciones de abajo.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
  key={method.title}
  href={method.href}
  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.5 + index * 0.1 }}
  whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
  whileTap={{ scale: 0.95 }}
  className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 text-center space-y-4 group cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
>
  <motion.div
    whileHover={{ rotate: 360, scale: 1.2 }}
    transition={{ duration: 0.6, type: "spring" }}
    className={`w-16 h-16 mx-auto rounded-2xl bg-linear-to-br ${method.gradient} flex items-center justify-center`}
  >
    <method.icon className="text-white" size={28} />
  </motion.div>

  <div>
    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
    <p className="text-sm text-muted-foreground break-all">{method.value}</p>
  </div>
</motion.a>

            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-bold">Enviá un mensaje</h3>
                <p className="text-muted-foreground">Completá el formulario y me pondré en contacto a la brevedad</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 text-muted-foreground" />
                    <textarea
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </motion.div>
                </div>

                {status === "success" && (
                  <p className="text-sm text-primary text-center">Mensaje enviado. Gracias, te respondo a la brevedad.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">
                    No se pudo enviar. Probá de nuevo o escribime directo al email.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full px-8 py-4 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold flex items-center justify-center gap-2 text-lg transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.div
                    animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                    transition={isSubmitting ? { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : {}}
                  >
                    <FiSend />
                  </motion.div>
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center text-sm text-muted-foreground pt-8 border-t border-border"
          >
            <p>© 2025 Charles Matias.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
