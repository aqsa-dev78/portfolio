"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "./logo"
import ThemeToggle from "./theme-toggle"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-foreground/80 hover:text-[#CBFFDB] transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-[rgba(0,18,15,1)] via-[rgba(2,90,74,1)] to-[rgba(0,18,15,1)] text-white px-6">
  <a href="#" id="resume-button">
    Resume
  </a>
</Button>

        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <a href="#" id="mobile-resume-button">
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

