import { Button } from "./ui/button"
import { ChevronDown, Cross, Book, Heart, Crown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-3d-bg">
      {/* Floating Christian Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cross className="floating-icon w-16 h-16 text-white top-20 left-20" />
        <Book className="floating-icon w-14 h-14 text-white top-32 right-32" />
        <Heart className="floating-icon w-12 h-12 text-white bottom-40 left-32" />
        <Crown className="floating-icon w-18 h-18 text-white bottom-20 right-20" />
        <Cross className="floating-icon w-10 h-10 text-white top-60 left-1/2" />
        <Book className="floating-icon w-12 h-12 text-white bottom-60 right-1/4" />
      </div>

      {/* Parallax background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animation-delay-1000 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="hero-title-3d text-6xl md:text-8xl lg:text-9xl mb-8 animate-fade-in">
          Hope For Life Ministry
        </h1>
        
        <p className="hero-subtitle-3d text-2xl md:text-3xl lg:text-4xl mb-12 font-semibold animate-fade-in">
          Equipping disciples for the work of ministry and the second coming of Christ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <button 
            className="glass-btn-learn text-xl px-10 py-5 rounded-xl font-bold text-white"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </button>
          <button 
            className="glass-btn-join text-xl px-10 py-5 rounded-xl font-bold text-white"
            onClick={() => scrollToSection("contact")}
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Animated Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-10 h-10 scroll-arrow" />
      </div>
    </section>
  )
}