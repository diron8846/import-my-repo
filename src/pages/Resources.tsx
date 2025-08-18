import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Download, Video, FileText, Headphones, Users } from "lucide-react"
import bibleBackground from "@/assets/bible-background.jpg"

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Study Guides",
      description: "Comprehensive Bible study materials and lesson plans",
      items: ["Systematic Theology", "Biblical Hermeneutics", "Church History", "Apologetics"]
    },
    {
      icon: Video,
      title: "Video Lectures",
      description: "In-depth teaching sessions from our experienced faculty",
      items: ["Old Testament Survey", "New Testament Studies", "Pastoral Ministry", "Evangelism"]
    },
    {
      icon: Headphones,
      title: "Audio Sermons",
      description: "Inspiring messages and teachings for spiritual growth",
      items: ["Sunday Sermons", "Bible Exposition", "Devotional Messages", "Conference Talks"]
    },
    {
      icon: FileText,
      title: "Academic Papers",
      description: "Scholarly articles and research papers on biblical topics",
      items: ["Theological Research", "Biblical Archaeology", "Ministry Studies", "Church Planting"]
    },
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
                <BookOpen className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-primary">Resources & Study Materials</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access our comprehensive library of biblical resources, study materials, and educational content
              </p>
              <div className="neon-verse-container mt-8">
                <p className="neon-verse">
                  📖 "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness." — 2 Timothy 3:16
                </p>
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {resourceCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <Card key={index} className="glass-card hover-scale transition-all duration-300 shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                            <p className="text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-3">
                              <Download className="w-4 h-4 text-accent" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Community Resources */}
          <section className="py-16 px-4 bg-muted/20">
            <div className="container mx-auto max-w-6xl">
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-accent">Community & Discussion</h2>
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 text-lg max-w-3xl mx-auto">
                    Join our online community for fellowship, discussion, and collaborative study. 
                    Connect with fellow students and engage in meaningful conversations about faith and Scripture.
                  </p>
                  <div className="neon-verse-container">
                    <p className="neon-verse">
                      📖 "Iron sharpens iron, and one man sharpens another." — Proverbs 27:17
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

export default Resources;