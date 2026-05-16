"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "TaxChain",
      description:
        "A blockchain-based application designed to simplify tax-related processes for businesses. Built with JavaScript and Solidity to provide secure, transparent tax management on the blockchain.",
      technologies: ["JavaScript", "Solidity", "CSS", "Blockchain", "Smart Contracts"],
      githubUrl: "https://github.com/Bisht28/TaxChain",
    },
    {
      title: "Car-Booking",
      description:
        "A comprehensive car booking and carpooling platform that allows users to book rides or offer carpooling services. Features include user authentication, ride listings, and booking management.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "UI/UX"],
      githubUrl: "https://github.com/Bisht28/Car-Booking",
    },
    {
      title: "QR-Generator",
      description:
        "A simple QR code generator that allows users to input a URL or text and generate a corresponding QR code. Features include generating QR codes for various inputs, downloading generated QR codes as images, and a responsive design for all devices.",
      technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
      githubUrl: "https://github.com/Bisht28/Qr-Generator",
    },
    {
      title: "Dairy-Gradation-System",
      description:
        "Developed an ML-based system to grade milk quality using pH, fat content, and density. Built and deployed models with Python, TensorFlow, and Flask for real-time analysis. Optimized data pipelines and database integration for efficient processing.",
      technologies: ["Python", "TensorFlow", "Flask", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/Bisht28/Dairy-Gradation-System",
    },
    {
      title: "Shopping-Cart",
      description:
        "Empowered a sleek, secure shopping cart for an e-commerce platform using the MERN stack. Built an intuitive interface, added customizable features, and created a scalable architecture to drive business growth by 20%. Delivered a user-friendly interface with customizable features to scale with business growth.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "E-commerce"],
      githubUrl: "https://github.com/Bisht28/Shopping-Cart",
    },
    {
      title: "Email-Validator",
      description:
        "Constructed an email validator that ensures compliance with standard email conventions, boosting validation speed by 50%. Project can be applied to various scenarios requiring input validation, such as user registration, contact verification improving validation speed by 30%.",
      technologies: ["JavaScript", "Validation", "Web Development", "User Registration"],
      githubUrl: "https://github.com/Bisht28/Email-Validator",
    },
  ]

  return (
    <section id="projects">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border border-border/50">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 w-full" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
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
