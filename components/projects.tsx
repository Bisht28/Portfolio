"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
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
        "Empowered a sleek, secure shopping cart for an e-commerce platform using the MERN stack. Built an intuitive interface, added customizable features, and created a scalable architecture to drive business growth by 20%.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "E-commerce"],
      githubUrl: "https://github.com/Bisht28/Shopping-Cart",
    },
    {
      title: "Email-Validator",
      description:
        "Constructed an email validator that ensures compliance with standard email conventions, boosting validation speed by 50%. Applied to user registration, contact verification and input validation scenarios.",
      technologies: ["JavaScript", "Validation", "Web Development"],
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="h-full flex flex-col rounded-lg border border-border/30 bg-card p-5"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5 font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 w-full text-xs" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
