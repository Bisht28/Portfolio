"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>

          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground">
              AI Engineer pursuing an M.Sc. in Web Engineering at Technische Universit&auml;t Chemnitz, with a B.Tech in
              Computer Science (Blockchain) from SRM Institute of Science and Technology.
            </p>
            <p className="text-lg text-muted-foreground">
              Experienced in full-stack development, Microsoft Copilot Studio Agents, and Microsoft Azure AI &amp; database
              services. I design and build scalable REST APIs and AI-powered applications using OpenAI technologies,
              focusing on secure, production-ready, and cloud-native solutions.
            </p>

            <div className="flex justify-center gap-4 pt-6">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
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
        </motion.div>
      </div>
    </section>
  )
}
