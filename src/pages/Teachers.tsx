import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import bibleBackground from "@/assets/bible-background.jpg"

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Pst Jose Mathew",
      photo: "/lovable-uploads/7e02486c-a73a-4c5d-932a-6ec83053268d.png",
    },
    {
      id: 2,
      name: "Ev Stanley George",
      photo: "/lovable-uploads/d1073eae-d807-4a10-b0dc-333043892a67.png",
    },
    {
      id: 3,
      name: "Ev Ronal Maina",
      photo: "/lovable-uploads/c54793fc-c1c4-4b30-8dfa-c66334ee4c74.png",
    },
  ]

  const bibleVerses = [
    {
      text: "Welcome one another as Christ has welcomed you, for the glory of God.",
      reference: "Romans 15:7"
    },
    {
      text: "Go therefore and make disciples of all nations…",
      reference: "Matthew 28:19"
    },
    {
      text: "And He gave… teachers, to equip the saints for the work of ministry.",
      reference: "Ephesians 4:11–12"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${bibleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Main Content */}
        <main className="pt-16">
          {/* Page Title & Intro Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Meet Our Dedicated Teachers
              </h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Our ministry is blessed with passionate educators who are committed to 
                equipping disciples for the work of ministry and preparing hearts for 
                the second coming of Christ.
              </p>

              {/* Bible Verses */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {bibleVerses.map((verse, index) => (
                  <Card key={index} className="glass-card hover-scale">
                    <CardContent className="p-6 text-center">
                      <p className="text-foreground italic mb-3 leading-relaxed">
                        "{verse.text}"
                      </p>
                      <p className="text-primary font-semibold">
                        {verse.reference}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Teachers Display Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teachers.map((teacher) => (
                  <Card 
                    key={teacher.id} 
                    className="glass-card hover-scale group cursor-pointer transition-all duration-300 hover:shadow-xl"
                  >
                    <CardContent className="p-8 text-center">
                      {/* Teacher Photo */}
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      {/* Teacher Name */}
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {teacher.name}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center">
              <Card className="glass-card max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Join Our Bible College Community
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Are you ready to deepen your faith and prepare for ministry? 
                    Our dedicated teachers are here to guide you on your spiritual journey 
                    and equip you with the knowledge and wisdom needed for God's calling.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg hover-scale"
                  >
                    Join Our Bible College
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}