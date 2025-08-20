import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Download, FileText, MessageCircle, Send, Bot } from "lucide-react"
import bibleBackground from "@/assets/bible-background.jpg"
import { useState } from "react"

const Resources = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I\'m your AI Bible Assistant. Ask me about the Bible, theology, or any spiritual questions you have.' }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Bible knowledge base for intelligent responses
  const getBibleResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    // God-related questions
    if (lowerQuestion.includes('who is god') || lowerQuestion.includes('what is god')) {
      return 'God is the eternal, all-powerful Creator of the universe. The Bible teaches that God exists in three persons - Father, Son (Jesus Christ), and Holy Spirit - known as the Trinity. "In the beginning God created the heavens and the earth" (Genesis 1:1). God is love (1 John 4:8), holy, just, and merciful.'
    }
    
    // Jesus-related questions
    if (lowerQuestion.includes('jesus') || lowerQuestion.includes('christ')) {
      return 'Jesus Christ is the Son of God who became human to save humanity from sin. He lived a perfect life, died on the cross for our sins, and rose again on the third day. "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life" (John 3:16).'
    }
    
    // Salvation questions
    if (lowerQuestion.includes('salvation') || lowerQuestion.includes('saved') || lowerQuestion.includes('eternal life')) {
      return 'Salvation is God\'s gift of eternal life through faith in Jesus Christ. "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God" (Ephesians 2:8). We are saved not by our works, but by believing in Jesus Christ as our Lord and Savior.'
    }
    
    // Prayer questions
    if (lowerQuestion.includes('prayer') || lowerQuestion.includes('pray')) {
      return 'Prayer is our communication with God. Jesus taught us to pray in Matthew 6:9-13 (The Lord\'s Prayer). We can pray anywhere, anytime, about anything. "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God" (Philippians 4:6).'
    }
    
    // Bible questions
    if (lowerQuestion.includes('bible') || lowerQuestion.includes('scripture')) {
      return 'The Bible is God\'s Word, containing 66 books written by various authors inspired by the Holy Spirit. "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness" (2 Timothy 3:16). It reveals God\'s character, His plan for humanity, and how we can have a relationship with Him.'
    }
    
    // Love questions
    if (lowerQuestion.includes('love')) {
      return 'God\'s love is unconditional and sacrificial. "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us" (Romans 5:8). We are called to love God and love others as Jesus commanded in Matthew 22:37-39.'
    }
    
    // Purpose/meaning questions
    if (lowerQuestion.includes('purpose') || lowerQuestion.includes('meaning') || lowerQuestion.includes('why')) {
      return 'Our purpose is to glorify God and enjoy Him forever. "For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do" (Ephesians 2:10). We find meaning in our relationship with God and serving others in love.'
    }
    
    // Sin questions
    if (lowerQuestion.includes('sin')) {
      return 'Sin is falling short of God\'s perfect standard. "For all have sinned and fall short of the glory of God" (Romans 3:23). Sin separates us from God, but through Jesus Christ, we can be forgiven and reconciled to God.'
    }
    
    // Heaven questions
    if (lowerQuestion.includes('heaven')) {
      return 'Heaven is our eternal home with God for those who believe in Jesus Christ. "In my Father\'s house are many rooms... I am going there to prepare a place for you" (John 14:2). It\'s a place of perfect peace, joy, and fellowship with God forever.'
    }
    
    // Faith questions
    if (lowerQuestion.includes('faith')) {
      return 'Faith is trusting in God and His promises. "Now faith is confidence in what we hope for and assurance about what we do not see" (Hebrews 11:1). Faith is essential for our relationship with God and is strengthened through reading His Word and prayer.'
    }
    
    // General greetings
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return 'Hello! I\'m here to help you explore God\'s Word and answer your spiritual questions. What would you like to know about the Bible or faith today?'
    }
    
    // Default response for unrecognized questions
    return `That's a thoughtful question! While I can provide guidance on many Biblical topics, I encourage you to also study God's Word directly and seek counsel from mature believers. "Study to show yourself approved to God, a workman who does not need to be ashamed, rightly dividing the word of truth" (2 Timothy 2:15). Is there a specific Bible verse or topic you'd like to explore further?`
  }

  const downloadableResources = [
    { title: "Old Testament Notes", icon: BookOpen, type: "PDF" },
    { title: "New Testament Commentary", icon: BookOpen, type: "PDF" },
    { title: "Systematic Theology Guide", icon: FileText, type: "PDF" },
    { title: "Biblical Hermeneutics", icon: FileText, type: "PDF" },
    { title: "Church History Overview", icon: BookOpen, type: "PDF" },
    { title: "Apologetics Handbook", icon: FileText, type: "PDF" },
    { title: "Pastoral Ministry Guide", icon: BookOpen, type: "PDF" },
    { title: "Biblical Archaeology", icon: FileText, type: "PDF" },
  ]

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage = inputMessage.trim()
      setMessages(prev => [...prev, { type: 'user', content: userMessage }])
      setInputMessage('')
      setIsTyping(true)
      
      // Simulate typing delay for more realistic feel
      setTimeout(() => {
        const response = getBibleResponse(userMessage)
        setMessages(prev => [...prev, { type: 'bot', content: response }])
        setIsTyping(false)
      }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
    }
  }

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
                Access our comprehensive library of biblical resources and get help from our AI Bible Assistant
              </p>
              <div className="neon-verse-container mt-8">
                <p className="neon-verse">
                  📖 "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness." — 2 Timothy 3:16
                </p>
              </div>
            </div>
          </section>

          {/* Two Column Layout */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Downloadable Resources Section */}
                <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">📚 Downloadable Resources</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Access our collection of lecture notes, Bible study guides, and theology books
                    </p>
                    <div className="space-y-4">
                      {downloadableResources.map((resource, index) => {
                        const IconComponent = resource.icon
                        return (
                          <div 
                            key={index}
                            className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors cursor-pointer border border-border/50 hover:border-primary/30"
                          >
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{resource.title}</h3>
                              <p className="text-sm text-muted-foreground">{resource.type}</p>
                            </div>
                            <Download className="w-4 h-4 text-primary" />
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Bible Assistant Section */}
                <Card className="glass-card hover-scale transition-all duration-300 shadow-lg">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-accent">🤖 AI Bible Assistant</h2>
                    </div>
                    
                    {/* Chat Messages Area */}
                    <ScrollArea className="flex-1 h-80 mb-4 p-4 bg-muted/5 rounded-lg border border-border/30">
                      <div className="space-y-4">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[80%] p-3 rounded-lg ${
                                message.type === 'user'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted text-foreground border border-border/50'
                              }`}
                            >
                              {message.type === 'bot' && (
                                <div className="flex items-center gap-2 mb-1">
                                  <Bot className="w-4 h-4" />
                                  <span className="text-sm font-medium">AI Assistant</span>
                                </div>
                              )}
                              <p className="text-sm leading-relaxed">{message.content}</p>
                            </div>
                          </div>
                        ))}
                        
                        {/* Typing Indicator */}
                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="bg-muted text-foreground border border-border/50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <Bot className="w-4 h-4" />
                                <span className="text-sm font-medium">AI Assistant</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                                </div>
                                <span className="text-xs text-muted-foreground ml-2">typing...</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>

                    {/* Chat Input */}
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ask me about the Bible..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="px-4"
                        disabled={!inputMessage.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Resources;