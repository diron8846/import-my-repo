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

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, 
        { type: 'user', content: inputMessage },
        { type: 'bot', content: 'Thank you for your question! This is a demo AI assistant. In the full version, I would provide detailed Biblical insights and theological guidance.' }
      ])
      setInputMessage('')
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