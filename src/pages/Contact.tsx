import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import bibleBackground from "@/assets/bible-background.jpg"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 727 891 035"],
      description: "Call us during office hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["diemsusmutuku@gmail.com"],
      description: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Hope for Life Jesus Ministry", "International"],
      description: "Visit our ministry centers"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Sunday: After Service"],
      description: "When we're available to help"
    }
  ]

  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${bibleBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
      
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with Hope for Life Bible College. We're here to answer your questions and guide your spiritual journey.
              </p>
              <div className="neon-verse-container mt-8">
                <p className="neon-verse">
                  📖 "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you." — Matthew 7:7
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="glass-card hover-scale transition-all duration-300 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-foreground font-medium text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* QR Code and Quick Contact */}
          <section className="py-16 px-4 bg-muted/20">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* QR Code Card */}
                <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <h2 className="text-2xl font-bold text-secondary">Quick Access</h2>
                    </div>
                    <p className="text-foreground mb-6">
                      Scan the QR code to visit our website and access more resources
                    </p>
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/lovable-uploads/fea897ea-762e-4aeb-9d5b-28e6ebd12ef9.png" 
                        alt="QR Code to Hope for Life Ministry Website" 
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      https://diren8846.github.io/hope-for-life-ministries-international/
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Form */}
                <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-accent">Send Message</h2>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <textarea 
                          rows={4} 
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <Button className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Scripture Encouragement */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-primary mb-6">We're Here for You</h2>
                  <p className="text-foreground leading-relaxed mb-6 text-lg">
                    Whether you have questions about our courses, need spiritual guidance, or want to learn more about our ministry, 
                    we're here to support you on your journey of faith. Don't hesitate to reach out to us.
                  </p>
                  <div className="neon-verse-container">
                    <p className="neon-verse">
                      📖 "Cast all your anxieties on him, because he cares for you." — 1 Peter 5:7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;