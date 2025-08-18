import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Heart, Users, Globe, Book, Award, Zap } from "lucide-react"
import bibleBackground from "@/assets/bible-background.jpg"

const About = () => {
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
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary">About & Mission</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our heart, vision, and calling to prepare faithful servants for God's kingdom
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="glass-card hover-scale transition-all duration-300 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  At Hope for Life Bible College, our vision is to prepare faithful men and women of God who are 
                  deeply rooted in Scripture, equipped for ministry, and ready for the Second Coming of our Lord Jesus Christ.
                </p>
                <div className="neon-verse-container">
                  <p className="neon-verse">
                    📖 "Study to show yourself approved unto God, a workman who does not need to be ashamed, 
                    rightly dividing the word of truth." — 2 Timothy 2:15
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <Card className="glass-card hover-scale transition-all duration-300 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-accent">Our Mission</h2>
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-lg">Our mission is to:</p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Teach the Word of God with accuracy and depth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Train and equip leaders for service in the church and community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Strengthen the faith of believers through discipleship and mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Spread the Good News of Jesus Christ to all nations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Inspire believers to live in holiness and readiness for His return</span>
                  </li>
                </ul>
                <div className="neon-verse-container">
                  <p className="neon-verse">
                    📖 "Go therefore and make disciples of all nations, baptizing them in the name of the Father 
                    and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you." 
                    — Matthew 28:19–20
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Faithfulness to Scripture */}
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Book className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Faithfulness to Scripture</h3>
                  </div>
                  <div className="neon-verse-container">
                    <p className="neon-verse text-sm">
                      "Your word is a lamp to my feet and a light to my path." — Psalm 119:105
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Integrity & Character */}
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold text-accent">Integrity & Character</h3>
                  </div>
                  <div className="neon-verse-container">
                    <p className="neon-verse text-sm">
                      "Whatever you do, work heartily, as for the Lord and not for men." — Colossians 3:23
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Excellence in Service */}
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-secondary" />
                    <h3 className="text-xl font-bold text-secondary">Excellence in Service</h3>
                  </div>
                  <div className="neon-verse-container">
                    <p className="neon-verse text-sm">
                      "Each one should use whatever gift he has received to serve others, faithfully 
                      administering God's grace in its various forms." — 1 Peter 4:10
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Discipleship & Mentorship */}
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Discipleship & Mentorship</h3>
                  </div>
                  <div className="neon-verse-container">
                    <p className="neon-verse text-sm">
                      "And what you have heard from me in the presence of many witnesses entrust to faithful 
                      men who will be able to teach others also." — 2 Timothy 2:2
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Hope in Christ's Return */}
              <Card className="glass-card hover-scale transition-all duration-300 shadow-lg md:col-span-2 lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-accent" />
                    <h3 className="text-xl font-bold text-accent">Hope in Christ's Return</h3>
                  </div>
                  <div className="neon-verse-container">
                    <p className="neon-verse text-sm">
                      "For the Lord himself will descend from heaven with a cry of command, with the voice 
                      of an archangel, and with the sound of the trumpet of God." — 1 Thessalonians 4:16
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Calling Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary">Our Calling</h2>
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-lg">
                  We believe the Bible is the inspired Word of God, and through this ministry, we strive to 
                  equip the saints for the work of ministry, for building up the body of Christ (Ephesians 4:12).
                </p>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  Our calling is not only to teach, but also to empower and send out leaders who will transform 
                  families, churches, and nations for the glory of God.
                </p>
                <div className="neon-verse-container">
                  <p className="neon-verse">
                    📖 "And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, 
                    to equip the saints for the work of ministry, for building up the body of Christ." 
                    — Ephesians 4:11–12
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

export default About;