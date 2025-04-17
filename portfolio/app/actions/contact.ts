"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract and validate form data
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    // Validate the form data
    const validatedData = contactFormSchema.parse(rawData)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      // In a real application, you would use your SMTP settings here
      // For example, with Gmail:
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com", // Use environment variable in production
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // Use environment variable in production
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: "bisht.aryannn@gmail.com",
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      }
    }

    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
