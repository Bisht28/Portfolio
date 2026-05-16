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
    <section id="contact">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a
                  href="mailto:bisht.aryannn@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  bisht.aryannn@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/50">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium mb-1">LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/aryan-bisht-61573923a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
