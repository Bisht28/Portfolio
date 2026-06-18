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
      title: "DocuLens | Multilingual AI Document Intelligence Platform",
      description:
        "Built a multilingual document intelligence platform using FastAPI, React, ChromaDB, and LLMs for PDFs, images, and scanned documents. Developed a RAG pipeline with OCR, embeddings, and vector search for semantic retrieval and multilingual question answering. Engineered scalable document ingestion and knowledge extraction services for AI-powered interaction with unstructured data.",
      technologies: ["FastAPI", "React", "ChromaDB", "LLMs", "RAG", "OCR"],
      githubUrl: "https://github.com/Bisht28/DOCULENS",
    },
    {
      title: "German Accident Analytics AI Platform",
      description:
        "Built a FastAPI, PostgreSQL, SQLAlchemy, and Alembic backend for German accident and regional data. Created ETL pipelines to ingest, clean, and unify accident, vehicle, population, and geospatial datasets. Designed an AI-ready data layer for analytics, predictive modeling, and future LLM/RAG applications.",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "ETL", "Data Engineering"],
      githubUrl: "https://github.com/Bisht28/accident-atlas-germany",
    },
    {
      title: "Dynamic Data-Encoder",
      description:
        "A next-generation QR code generator that allows users to input a URL or text and generate a corresponding QR code. Features include generating QR codes for various inputs, downloading generated QR codes as images, and a responsive design for all devices.",
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
      title: "Mobility-as-a-Service Platform",
      description:
        "A comprehensive car booking and carpooling platform that allows users to book rides or offer carpooling services. Features include user authentication, ride listings, and booking management with a responsive interface for seamless user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development", "UI/UX"],
      githubUrl: "https://github.com/Bisht28/Car-Booking",
    },
    {
      title: "Syntax & Domain Validator",
      description:
        "An advanced email validator that ensures compliance with standard email conventions, boosting validation speed by 50%. Integrated into user registration, contact verification, and input validation scenarios for enhanced data quality.",
      technologies: ["JavaScript", "Validation", "Web Development"],
      githubUrl: "https://github.com/Bisht28/Email-Validator",
    },
  ]

  return (
    <section id="projects" className="bg-transparent">
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
                className="h-full flex flex-col glass-card p-5"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5 font-normal bg-indigo-500/10 border-indigo-500/20 text-indigo-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 w-full text-xs border-sky-500/30 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400/50" asChild>
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
