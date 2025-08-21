import { useState } from "react"
import { Menu, X, Home, GraduationCap, Heart, BookOpen, Mail } from "lucide-react"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ui/theme-toggle"
import { Button } from "./ui/button"
import { useLocation } from "react-router-dom"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/teachers", label: "Teachers", icon: GraduationCap },
    { href: "/about", label: "About & Mission", icon: Heart },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true
    if (href !== "/" && location.pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="fixed top-0 w-full z-50 nav-neumorphism backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => {
              const IconComponent = link.icon
              const active = isActive(link.href)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-3d-container group flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    active ? 'nav-active' : ''
                  }`}
                  aria-label={link.label}
                  role="button"
                >
                  <div className={`nav-icon-3d relative ${active ? 'nav-icon-active' : ''}`}>
                    <IconComponent className="h-7 w-7 nav-icon transition-all duration-300" />
                  </div>
                  <span className="text-xs font-semibold nav-text transition-all duration-300">
                    {link.label}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="nav-3d-container p-2 rounded-lg">
              <ThemeToggle />
            </div>
            
            {/* User Logo */}
            <div className="nav-logo-container relative">
              <img 
                src="/lovable-uploads/8c31e5aa-f857-4dad-8554-c50c27731863.png" 
                alt="Hope for Life Ministry Logo" 
                className="h-14 w-14 object-contain rounded-full nav-logo-3d"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden nav-3d-container p-2 rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="nav-mobile-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden nav-mobile-menu">
            <div className="py-6 space-y-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                const active = isActive(link.href)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-mobile-link flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 ${
                      active ? 'nav-mobile-active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={link.label}
                    role="button"
                  >
                    <div className={`nav-icon-mobile-3d ${active ? 'nav-icon-mobile-active' : ''}`}>
                      <IconComponent className="h-6 w-6 nav-icon-mobile transition-all duration-300" />
                    </div>
                    <span className="font-semibold nav-mobile-text">{link.label}</span>
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