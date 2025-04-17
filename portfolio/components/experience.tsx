"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "Nihilent Technologies",
      period: "Present",
      description:
        "Developed cloud-based solutions using Microsoft Azure, including Azure Functions, Logic Apps, and Azure SQL, to enhance automation and scalability. Designed and implemented custom applications using Microsoft Power Apps, optimizing business processes and improving operational efficiency. Integrated Power Platform tools such as Power Automate, Power BI, and Azure services to streamline workflows and enable data-driven decision-making.",
      technologies: ["Microsoft Azure", "Power Apps", "Power Automate", "Power BI", "Azure SQL"],
    },
    {
      title: "Software Developer Intern",
      company: "Primafelicitas",
      period: "2023",
      description:
        "Engineered an AI-driven automation system, cutting response times by 50%. Initiated and managed server-side applications and RESTful APIs using Node.js and Express.js, optimizing data handling and performance by 25%. Designed and maintained NoSQL databases with MongoDB, using Mongoose for data modeling and queries 15% faster.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "AI Automation"],
    },
    {
      title: "Web Development Intern",
      company: "Prodigy Infotech",
      period: "2023",
      description:
        "Established an Agile development methodology that enhanced team collaboration and resulted in a 15% reduction in development cycles. Led the configuration and launch of an SDLC, improving code quality and reducing development time by 30%. Identified and introduced best practices for software development, resulting in a 22% reduction in development time.",
      technologies: ["Agile Methodology", "SDLC", "Web Development", "Best Practices"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Bharat Intern",
      period: "2023",
      description:
        "Conducted extensive research on state-of-the-art AI techniques and emerging technologies, ensuring up-to-date knowledge. Assisted in the development of a chatbot system which elevated the results by 25%. Implemented an AI-based system that autonomously solves complex tasks by a reduced time of 15%.",
      technologies: ["Full Stack Development", "AI", "Chatbot Development", "Research"],
    },
  ]

  return (
    <section id="experience" className="bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border border-border/50 bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                        <Briefcase className="h-6 w-6" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>

                        <div className="flex items-center mb-4 text-primary">
                          <ChevronRight className="h-4 w-4 mr-1" />
                          <span className="font-medium">{exp.company}</span>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
