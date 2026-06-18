"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { BookOpen, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PublicationsCertifications() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const publications = [
    {
      title: "2025 International Conference on Smart and Sustainable Technology (INCSST)",
      publisher: "IEEE",
      date: "Jul 11, 2025",
      url: "https://ieeexplore.ieee.org/document/11210266",
    },
  ]

  const certificates = [
    {
      title: "Claude with the Anthropic API",
      issuer: "Anthropic",
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      issuer: "Oracle",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "AWS",
    },
    {
      title: "Cisco - Data Analytics Essentials",
      issuer: "Cisco",
    },
  ]

  return (
    <section id="publications">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Publications &amp; Certifications</h2>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Publications */}
            <div>
              <h3 className="text-lg font-semibold mb-5 text-center text-muted-foreground">Publications</h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-xl p-4 glassmorphic hover:glassmorphic-light transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-primary/20 text-primary">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base font-semibold mb-1">{pub.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {pub.publisher} &middot; {pub.date}
                        </p>
                        <Button variant="outline" size="sm" className="text-xs" asChild>
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            View Publication
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-5 text-center text-muted-foreground">Certifications</h3>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-xl glassmorphic hover:glassmorphic-light transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
