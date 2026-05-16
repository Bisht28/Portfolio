export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-muted-foreground">&copy; {currentYear} Aryan Bisht. All rights reserved.</p>
      </div>
    </footer>
  )
}
