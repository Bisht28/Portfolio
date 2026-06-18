"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

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
      title: "AI Skill Fest 2026",
      institution: "Microsoft",
      date: "Jun 2026",
    },
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
    <section id="education" className="bg-transparent">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education &amp; Trainings</h2>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-5 text-center text-muted-foreground">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                          <h4 className="text-base font-semibold">{edu.degree}</h4>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span className="text-xs">{edu.period}</span>
                          </div>
                        </div>
                        <div className="text-sky-400 text-sm font-medium mb-1">{edu.institution}</div>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trainings */}
            <div>
              <h3 className="text-lg font-semibold mb-5 text-center text-muted-foreground">Trainings</h3>
              <div className="space-y-3">
                {trainings.map((training, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                          <h4 className="text-base font-semibold">{training.title}</h4>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 mr-1" />
                            <span className="text-xs">{training.date}</span>
                          </div>
                        </div>
                        <div className="text-sky-400 text-sm font-medium">{training.institution}</div>
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
