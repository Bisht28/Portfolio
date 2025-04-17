"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Firebase"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "Azure Functions", "Logic Apps", "Azure SQL", "CI/CD", "Git"],
    },
    {
      title: "Microsoft Power Platform",
      skills: ["Power Apps", "Power Automate", "Power BI", "Azure Integration", "Custom Solutions"],
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "HTML/CSS", "SQL", "NoSQL"],
    },
    {
      title: "Blockchain",
      skills: ["Blockchain Development", "Smart Contracts", "Distributed Systems"],
    },
    {
      title: "AI & ML",
      skills: ["Machine Learning", "TensorFlow", "Data Analysis", "AI Models"],
    },
    {
      title: "Other",
      skills: ["Agile Methodology", "SDLC", "Problem Solving", "Team Collaboration", "Research"],
    },
  ]

  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
