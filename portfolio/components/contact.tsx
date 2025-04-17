"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendContactEmail } from "@/app/actions/contact"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: result.message,
        })

        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out if you have any questions or if you'd like to work together. I'm always open to
                discussing new projects and opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:bisht.aryannn@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      bisht.aryannn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919911163667" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9911163667
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border border-border/50">
              <CardContent className="p-6">
                <form id="contact-form" action={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Subject" required className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
