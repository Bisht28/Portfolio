"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { BookOpen, Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
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
          <h2 className="section-title">Publications & Certifications</h2>

          <div className="max-w-3xl mx-auto space-y-16">
            {/* Publications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Publications</h3>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border border-border/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                            <BookOpen className="h-6 w-6" />
                          </div>

                          <div className="flex-grow">
                            <h4 className="text-xl font-semibold mb-2">{pub.title}</h4>
                            <p className="text-muted-foreground mb-4">
                              {pub.publisher} &middot; {pub.date}
                            </p>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                View Publication
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
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
