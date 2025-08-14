import { Card, CardContent } from "./ui/card"
import { Quote } from "lucide-react"

export function ScriptureSection() {
  // Placeholder verse - can be connected to API later
  const verseOfTheDay = {
    text: "The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed.",
    reference: "Luke 4:18",
    keywords: ["Spirit of the Lord", "anointed", "good news", "liberty", "oppressed"]
  }

  const highlightKeywords = (text: string, keywords: string[]) => {
    let highlightedText = text
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi')
      highlightedText = highlightedText.replace(regex, '<span class="text-secondary font-semibold">$1</span>')
    })
    return highlightedText
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Scripture of the Day</h2>
        
        <Card className="glass-card hover-scale transition-all duration-300 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p 
                  className="text-lg md:text-xl leading-relaxed mb-4 text-foreground italic"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightKeywords(verseOfTheDay.text, verseOfTheDay.keywords) 
                  }}
                />
                <p className="text-right text-accent font-semibold text-lg">
                  — {verseOfTheDay.reference}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}