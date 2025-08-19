import { useState } from "react"
import { Menu, X, Home, GraduationCap, Heart, BookOpen, Mail } from "lucide-react"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ui/theme-toggle"
import { Button } from "./ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/teachers", label: "Teachers", icon: GraduationCap },
    { href: "/about", label: "About & Mission", icon: Heart },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-card shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link-3d group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <div className="nav-icon-container relative">
                    <IconComponent className="h-6 w-6 nav-icon transition-all duration-300" />
                  </div>
                  <span className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* User Logo */}
            <img 
              src="/lovable-uploads/8c31e5aa-f857-4dad-8554-c50c27731863.png" 
              alt="Hope for Life Ministry Logo" 
              className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full shadow-lg"
            />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link-mobile flex items-center gap-3 px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="nav-icon-container-mobile">
                      <IconComponent className="h-5 w-5 nav-icon-mobile" />
                    </div>
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}