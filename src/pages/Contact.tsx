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
            <div className="container mx-auto max-w-4xl">
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block p-6 rounded-2xl transition-all duration-300 group hover:scale-[1.02] contact-card"
                      style={{
                        background: `linear-gradient(135deg, ${
                          info.color === 'neon-blue' ? 'rgba(0, 123, 255, 0.3)' :
                          info.color === 'neon-pink' ? 'rgba(255, 20, 147, 0.3)' :
                          info.color === 'neon-green' ? 'rgba(0, 255, 127, 0.3)' :
                          info.color === 'neon-cyan' ? 'rgba(0, 255, 255, 0.3)' :
                          'rgba(138, 43, 226, 0.3)'
                        }, rgba(75, 0, 130, 0.2))`,
                        boxShadow: `0 8px 32px ${
                          info.color === 'neon-blue' ? 'rgba(0, 123, 255, 0.3)' :
                          info.color === 'neon-pink' ? 'rgba(255, 20, 147, 0.3)' :
                          info.color === 'neon-green' ? 'rgba(0, 255, 127, 0.3)' :
                          info.color === 'neon-cyan' ? 'rgba(0, 255, 255, 0.3)' :
                          'rgba(138, 43, 226, 0.3)'
                        }`,
                        border: `1px solid ${
                          info.color === 'neon-blue' ? 'rgba(0, 123, 255, 0.5)' :
                          info.color === 'neon-pink' ? 'rgba(255, 20, 147, 0.5)' :
                          info.color === 'neon-green' ? 'rgba(0, 255, 127, 0.5)' :
                          info.color === 'neon-cyan' ? 'rgba(0, 255, 255, 0.5)' :
                          'rgba(138, 43, 226, 0.5)'
                        }`
                      }}
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: `${
                              info.color === 'neon-blue' ? 'rgba(0, 123, 255, 0.8)' :
                              info.color === 'neon-pink' ? 'rgba(255, 20, 147, 0.8)' :
                              info.color === 'neon-green' ? 'rgba(0, 255, 127, 0.8)' :
                              info.color === 'neon-cyan' ? 'rgba(0, 255, 255, 0.8)' :
                              'rgba(138, 43, 226, 0.8)'
                            }`,
                            boxShadow: `0 0 20px ${
                              info.color === 'neon-blue' ? 'rgba(0, 123, 255, 0.6)' :
                              info.color === 'neon-pink' ? 'rgba(255, 20, 147, 0.6)' :
                              info.color === 'neon-green' ? 'rgba(0, 255, 127, 0.6)' :
                              info.color === 'neon-cyan' ? 'rgba(0, 255, 255, 0.6)' :
                              'rgba(138, 43, 226, 0.6)'
                            }`
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                          <p className="text-white/90">{info.details}</p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Logo Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/f8e069b6-8c41-4a05-8fc7-fd0feff9a6ff.png" 
                  alt="Hope for Life Ministry Logo" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 glow-text">Hope for Life Ministry</h2>
              <p className="text-white/80 text-lg italic">"The Spirit of the Lord is upon me..." - Luke 4:18</p>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;