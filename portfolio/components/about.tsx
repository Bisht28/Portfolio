"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
              I'm a passionate Software Developer with experience in full-stack web development, cloud technologies, and
              blockchain. Currently pursuing my B.Tech in Computer Science with specialization in Blockchain Technology
              at SRM Institute of Science and Technology.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines technical expertise with a strong focus on creating efficient, scalable solutions. I
              enjoy working with modern technologies like React, Node.js, and cloud platforms to build innovative
              applications.
            </p>

            <div className="flex justify-center gap-4 pt-6">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
