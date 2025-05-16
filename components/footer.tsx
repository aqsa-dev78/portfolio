export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/70">© {currentYear} Aqsa Iftikhar. All rights reserved.</p>
        <p className="text-foreground/50 text-sm mt-2">Full Stack Developer</p>
      </div>
    </footer>
  )
}

