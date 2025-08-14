import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent light-effect">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Flowing gradient border */}
      <div className="absolute inset-0">
        <div className="gradient-flow absolute top-0 left-0 right-0 h-1"></div>
        <div className="gradient-flow absolute bottom-0 left-0 right-0 h-1"></div>
        <div className="gradient-flow absolute top-0 bottom-0 left-0 w-1"></div>
        <div className="gradient-flow absolute top-0 bottom-0 right-0 w-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="text-secondary">Hope For Life</span>{" "}
          <span className="text-accent">Ministry</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in">
          Equipping disciples for the work of ministry and the second coming of Christ.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-4 hover-scale"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary hover-scale"
            onClick={() => scrollToSection("contact")}
          >
            Join Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}