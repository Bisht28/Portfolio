"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const education = [
    {
      degree: "M.Sc. in Web Engineering",
      institution: "Technische Universit\u00E4t Chemnitz",
      period: "2026 - Present",
      description: "Currently pursuing Master's degree in Web Engineering.",
    },
    {
      degree: "B.Tech Computer Science w/s Blockchain Technology",
      institution: "SRM Institute of Science and Technology",
      period: "2021 - 2025",
      description: "Completed Bachelor's degree with specialization in Blockchain Technology.",
    },
  ]

  const trainings = [
    {
      title: "AI Essential Comprehensive",
      institution: "appliedAI Institute for Europe gGmbH",
      date: "Oct 2025",
    },
    {
      title: "McKinsey.org Forward Program",
      institution: "McKinsey and Company",
      date: "Jul 2025",
    },
  ]

  return (
    <section id="education" className="bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Trainings</h2>

          <div className="max-w-3xl mx-auto space-y-16">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
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
                            <GraduationCap className="h-6 w-6" />
                          </div>

                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <h4 className="text-xl font-semibold">{edu.degree}</h4>
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="text-sm">{edu.period}</span>
                              </div>
                            </div>

                            <div className="text-primary font-medium mb-2">{edu.institution}</div>

                            <p className="text-muted-foreground">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trainings */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Trainings</h3>
              <div className="space-y-4">
                {trainings.map((training, index) => (
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
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                              <h4 className="text-lg font-semibold">{training.title}</h4>
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span className="text-sm">{training.date}</span>
                              </div>
                            </div>
                            <div className="text-primary font-medium">{training.institution}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
