export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-white/10 glassmorphic-light">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-white/65">&copy; {currentYear} Aryan Bisht. All rights reserved.</p>
      </div>
    </footer>
  )
}
