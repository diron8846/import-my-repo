import { Logo } from "./Logo"
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#teachers", label: "Teachers" },
    { href: "#about", label: "About & Mission" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:info@hopeforlifeministry.org", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Equipping disciples for the work of ministry and the second coming of Christ. 
              Join us in this divine calling to prepare hearts and minds for service in God's kingdom.
            </p>
            <p className="text-secondary font-semibold italic">
              "The Spirit of the Lord is upon me..." - Luke 4:18
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-sm">123 Ministry Lane, Faith City, FC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-sm">info@hopeforlifeministry.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-200 hover-scale"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} Hope For Life Ministry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}