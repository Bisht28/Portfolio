import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aryan Bisht | Full-Stack & AI Engineer",
  description:
    "Portfolio of Aryan Bisht, Full-Stack & AI Engineer specializing in Full Stack Development, AI, and Cloud Technologies",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
