"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="bg-transparent">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 p-4 glass-card hover:border-sky-400/30">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-0.5">Email</h4>
                <a
                  href="mailto:bisht.aryannn@gmail.com"
                  className="text-sm text-muted-foreground hover:text-sky-400 transition-colors"
                >
                  bisht.aryannn@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 glass-card hover:border-sky-400/30">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-0.5">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/aryan-bisht-61573923a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-sky-400 transition-colors"
                >
                  linkedin.com/in/aryan-bisht-61573923a
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
