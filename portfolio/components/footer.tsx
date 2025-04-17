export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {currentYear} Aryan Bisht. All rights reserved.</p>
      </div>
    </footer>
  )
}
