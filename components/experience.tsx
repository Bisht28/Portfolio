"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: "AI Engineer",
      company: "Nihilent",
      type: "Full-time",
      period: "Jun 2025 - Mar 2026",
      location: "Pune, India",
      description:
        "Led the architecture and delivery of a major Microsoft Copilot Studio Agents project as technical lead, designing and deploying enterprise-grade AI agents with multi-step orchestration, contextual reasoning, and secure data grounding across Microsoft 365 and enterprise systems. Integrated Azure AI services (Computer Vision, NLP, LLMs), designed Dataverse data models with robust security, and implemented data transformation workflows to optimize model performance and automate intelligent decision-making.",
      technologies: ["Microsoft Copilot Studio", "Azure AI", "Computer Vision", "NLP", "LLMs", "Dataverse", "Microsoft 365"],
    },
    {
      title: "Software Developer Trainee",
      company: "Nihilent",
      period: "Oct 2024 - Jun 2025",
      location: "Pune, India",
      description:
        "Developed cloud-based solutions using Microsoft Azure, including Azure Functions, Logic Apps, and Azure SQL, to enhance automation and scalability. Designed and implemented custom applications using Microsoft Power Apps, optimizing business processes and improving operational efficiency. Integrated Power Platform tools such as Power Automate, Power BI, and Azure services to streamline workflows and enable data-driven decision-making.",
      technologies: ["Microsoft Azure", "Power Apps", "Power Automate", "Power BI", "Azure SQL"],
    },
    {
      title: "Software Developer Intern",
      company: "Primafelicitas",
      period: "Aug 2024 - Oct 2024",
      location: "Noida, India",
      description:
        "Engineered an AI-driven automation system, cutting response times by 50%. Initiated and managed server-side applications and RESTful APIs using Node.js and Express.js, optimizing data handling and performance by 25%. Designed and maintained NoSQL databases with MongoDB, using Mongoose for data modeling and queries 15% faster.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "AI Automation"],
    },
    {
      title: "Web Development Intern",
      company: "Prodigy Infotech",
      period: "May 2024 - June 2024",
      location: "Remote, India",
      description:
        "Established an Agile development methodology that enhanced team collaboration and resulted in a 15% reduction in development cycles. Led the configuration and launch of an SDLC, improving code quality and reducing development time by 30%. Identified and introduced best practices for software development, resulting in a 22% reduction in development time.",
      technologies: ["Agile Methodology", "SDLC", "Web Development", "Best Practices"],
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Personifwy",
      period: "Oct 2023 - Dec 2023",
      location: "Remote, India",
      description:
        "Established an Agile development methodology that enhanced team collaboration and resulted in a 15% reduction in development cycles. Led the configuration and launch of an SDLC, improving code quality and reducing development time by 30%. Identified and introduced best practices for software development, resulting in a 22% reduction in development time.",
      technologies: ["Artificial Intelligence", "Agile Methodology", "SDLC", "Best Practices", "Team Collaboration"],
    },
    {
      title: "AI Engineer Trainee",
      company: "NHMAS Solutions Pvt Ltd",
      period: "Apr 2023 - Sep 2023",
      location: "Remote, India",
      description:
        "Contributed to the end-to-end development, training, and optimization of machine learning models for real-world AI applications, including extensive data cleaning, preprocessing, feature engineering, and performance evaluation using key statistical metrics to ensure accuracy, robustness, and efficiency. Collaborated with cross-functional teams on integrating and deploying AI solutions into production environments while working with Software Infrastructure and Python.",
      technologies: ["Machine Learning", "Python", "Data Engineering", "Feature Engineering", "AI Deployment", "Software Infrastructure"],
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

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-primary">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
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
