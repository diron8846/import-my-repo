import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Users, Heart, BookOpen, Phone } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function QuickLinksSection() {
  const navigate = useNavigate()
  
  const quickLinks = [
    {
      title: "Our Teachers",
      description: "Meet our dedicated faculty and their areas of expertise",
      icon: Users,
      href: "/teachers"
    },
    {
      title: "About & Mission",
      description: "Discover our vision, mission, and core values",
      icon: Heart,
      href: "/about"
    },
    {
      title: "Resources & Study Materials",
      description: "Access Bible studies, courses, and learning materials",
      icon: BookOpen,
      href: "/resources"
    },
    {
      title: "Contact Us",
      description: "Get in touch with us for guidance and support",
      icon: Phone,
      href: "/contact"
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
                className="quick-link-card bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30"
                onClick={() => navigate(link.href)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
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