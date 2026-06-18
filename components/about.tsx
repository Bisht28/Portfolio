"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const skills = [
  "Python (LLMs and RAG)",
  "Microsoft Azure (Cloud and AI)",
  "M365 Copilot Studio",
  "Computer Vision",
  "Blockchain",
  "Smart Contracts",
  "OpenAI API",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js (REST APIs)",
  "MongoDB",
  "TensorFlow",
  "Git",
]

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="bg-transparent">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* About Me Column */}
            <div>
              <h2 className="section-title text-left">About Me</h2>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  AI Engineer pursuing an M.Sc. in Web Engineering at Technische
                  Universit&auml;t Chemnitz, with a B.Tech in Computer Science
                  (Blockchain) from SRM Institute of Science and Technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced in full-stack development, Microsoft Copilot
                  Studio Agents, and Microsoft Azure AI &amp; database services.
                  I design and build scalable REST APIs and AI-powered
                  applications using OpenAI technologies, focusing on secure,
                  production-ready, and cloud-native solutions.
                </p>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="bg-sky-500 hover:bg-sky-600 text-white border-none" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-sky-500/40 text-sky-400 hover:bg-sky-500/10"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1V35hVwCepvEB3oDTb3Mxdx63PBJPoZ9-/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Skills Column */}
            <div id="skills">
              <h2 className="section-title text-left">
                Skills &amp; Technologies
              </h2>

              <div className="flex flex-wrap gap-[14px]">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      scale: inView ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-default bg-sky-500/10 border border-sky-500/20 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/40 hover:scale-105"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
