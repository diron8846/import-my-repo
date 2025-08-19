import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Facebook, Youtube } from "lucide-react"
import bibleBackground from "@/assets/bible-background.jpg"

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Nairobi, Githurai 45, Mwihoko",
      link: "https://maps.google.com/?q=Nairobi,+Githurai+45,+Mwihoko",
      color: "neon-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+254 727 691035",
      link: "tel:+254727691035",
      color: "neon-pink"
    },
    {
      icon: Mail,
      title: "Email",
      details: "dismusmutuku@gmail.com",
      link: "mailto:dismusmutuku@gmail.com",
      color: "neon-green"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 727 691035",
      link: "https://wa.me/254727691035",
      color: "neon-cyan"
    },
    {
      icon: Facebook,
      title: "Facebook",
      details: "Follow us on Facebook",
      link: "https://www.facebook.com/dismus.mwania.1",
      color: "neon-blue"
    },
    {
      icon: Youtube,
      title: "YouTube",
      details: "Watch our videos",
      link: "https://www.youtube.com/@dismusmutuku1277",
      color: "neon-pink"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900" />
      
      {/* Faint Open Bible Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bibleBackground})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 glow-text">
                Get In Touch
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We'd love to hear from you. Reach out for more information or a visit.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 ${info.color} neon-icon group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                          <p className="text-white/80">{info.details}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Right Side - QR Code */}
                <div className="flex items-center justify-center">
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover-scale transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <h2 className="text-2xl font-bold text-white mb-6">Visit Our Website</h2>
                      <p className="text-white/80 mb-6">
                        Scan the QR code to visit our website and access more resources
                      </p>
                      <div className="flex justify-center mb-6">
                        <img 
                          src="/lovable-uploads/aeb18e35-e335-42a3-b40f-cd88577c1af2.png" 
                          alt="QR Code to Hope for Life Ministry Website" 
                          className="w-48 h-48 object-contain rounded-lg"
                        />
                      </div>
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3"
                      >
                        <a 
                          href="https://diron8846.github.io/hope-for-life-ministries-international/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Visit Our Website
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;