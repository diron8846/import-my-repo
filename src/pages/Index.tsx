import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ScriptureSection } from "@/components/ScriptureSection"
import { QuickLinksSection } from "@/components/QuickLinksSection"
import { VisionMissionSection } from "@/components/VisionMissionSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ScriptureSection />
        <QuickLinksSection />
        <VisionMissionSection />
        
        {/* Placeholder sections for future development */}
        <section id="teachers" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Teachers</h2>
            <p className="text-muted-foreground">Coming soon - Meet our dedicated faculty members</p>
          </div>
        </section>
        
        <section id="resources" className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Resources & Study Materials</h2>
            <p className="text-muted-foreground">Coming soon - Access our comprehensive library</p>
          </div>
        </section>
        
        <section id="contact" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
            <p className="text-muted-foreground">Coming soon - Get in touch with our ministry</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
