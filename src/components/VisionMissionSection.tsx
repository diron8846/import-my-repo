import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ArrowRight, Target, Eye } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Vision & Mission</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vision Card */}
          <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent">Our Vision</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                To be a beacon of hope and transformation in our community, raising up disciples who are 
                equipped with biblical knowledge, spiritual maturity, and practical ministry skills to 
                serve God's kingdom effectively until Christ's return.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                To provide comprehensive biblical education, mentorship, and spiritual formation that 
                empowers believers to fulfill the Great Commission, serve their communities with love, 
                and live in readiness for the second coming of Jesus Christ.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in this divine calling to prepare hearts and minds for service in God's kingdom. 
            Discover how you can be part of this transformative journey.
          </p>
          <Button 
            size="lg" 
            className="hover-scale group"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Learn More About Our Programs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}