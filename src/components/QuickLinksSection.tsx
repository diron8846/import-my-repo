import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Users, Heart, BookOpen, Phone } from "lucide-react"

export function QuickLinksSection() {
  const quickLinks = [
    {
      title: "Teachers Profile",
      description: "Meet our dedicated faculty and their areas of expertise",
      icon: Users,
      href: "#teachers",
      color: "primary"
    },
    {
      title: "About & Mission",
      description: "Discover our vision, mission, and core values",
      icon: Heart,
      href: "#about",
      color: "accent"
    },
    {
      title: "Resources & Study Materials",
      description: "Access Bible studies, courses, and learning materials",
      icon: BookOpen,
      href: "#resources",
      color: "secondary"
    },
    {
      title: "Contact & Support",
      description: "Get in touch with us for guidance and support",
      icon: Phone,
      href: "#contact",
      color: "primary"
    }
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Quick Access</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card 
                key={index}
                className="glass-card hover-scale transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-2xl"
                onClick={() => {
                  const element = document.getElementById(link.href.substring(1))
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}