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

  // Super Logic Bible knowledge base with comprehensive responses
  const getBibleResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    const words = lowerQuestion.split(' ')
    
    // BIBLICAL CHARACTERS - Detailed responses
    
    // Sarah/Sara
    if (lowerQuestion.includes('sarah') || lowerQuestion.includes('sara')) {
      return 'Sarah was Abraham\'s wife and the mother of Isaac. Originally named Sarai, God changed her name to Sarah, meaning "princess." Despite being barren for many years, she miraculously conceived Isaac at age 90, fulfilling God\'s promise. "Is anything too hard for the Lord? At the appointed time I will return to you, according to the time of life, and Sarah shall have a son" (Genesis 18:14). She represents God\'s faithfulness to His promises.'
    }
    
    // Abraham
    if (lowerQuestion.includes('abraham') || lowerQuestion.includes('abram')) {
      return 'Abraham is called the "Father of Faith" and the father of many nations. God called him from Ur to the Promised Land and made a covenant with him. "And he believed in the Lord, and He accounted it to him for righteousness" (Genesis 15:6). Abraham\'s willingness to sacrifice Isaac demonstrated ultimate faith. Through Abraham, all nations are blessed through Jesus Christ (Galatians 3:8-9).'
    }
    
    // Moses
    if (lowerQuestion.includes('moses')) {
      return 'Moses was chosen by God to lead the Israelites out of Egyptian slavery. He received the Ten Commandments and the Law on Mount Sinai. "By faith Moses, when he became of age, refused to be called the son of Pharaoh\'s daughter, choosing rather to suffer affliction with the people of God" (Hebrews 11:24-25). Moses represents God\'s deliverance and His law.'
    }
    
    // David
    if (lowerQuestion.includes('david') || lowerQuestion.includes('king david')) {
      return 'David was Israel\'s greatest king, "a man after God\'s own heart" (1 Samuel 13:14). Despite his failures, he always repented and returned to God. He wrote many Psalms and was promised that the Messiah would come from his lineage. "The Lord has sought for Himself a man after His own heart" (1 Samuel 13:14). Jesus is called the "Son of David" (Matthew 1:1).'
    }
    
    // Mary (Jesus\' mother)
    if (lowerQuestion.includes('mary') && (lowerQuestion.includes('virgin') || lowerQuestion.includes('mother') || lowerQuestion.includes('jesus'))) {
      return 'Mary, the virgin mother of Jesus, was chosen by God to bear the Messiah. Her response of faith is remarkable: "Behold the maidservant of the Lord! Let it be to me according to your word" (Luke 1:38). She demonstrates perfect submission to God\'s will and is blessed among women. Her song of praise (Magnificat) in Luke 1:46-55 shows her deep faith and knowledge of Scripture.'
    }
    
    // Paul/Saul
    if (lowerQuestion.includes('paul') || lowerQuestion.includes('saul') && lowerQuestion.includes('apostle')) {
      return 'Paul, originally Saul of Tarsus, was a persecutor of Christians until his dramatic conversion on the road to Damascus. He became the greatest missionary and wrote 13 New Testament letters. "But by the grace of God I am what I am, and His grace toward me was not in vain" (1 Corinthians 15:10). His life shows that no one is beyond God\'s reach for salvation.'
    }
    
    // Peter
    if (lowerQuestion.includes('peter') || lowerQuestion.includes('simon peter')) {
      return 'Peter was a fisherman who became the leader of the apostles. Despite denying Jesus three times during the crucifixion, he was restored and became the foundational preacher of the early church. "And I also say to you that you are Peter, and on this rock I will build My church" (Matthew 16:18). Peter\'s life shows God\'s grace in using imperfect people for His glory.'
    }
    
    // John (the Baptist)
    if (lowerQuestion.includes('john') && (lowerQuestion.includes('baptist') || lowerQuestion.includes('baptizer'))) {
      return 'John the Baptist was Jesus\' forerunner, preparing the way for the Messiah. He baptized Jesus and proclaimed, "Behold! The Lamb of God who takes away the sin of the world!" (John 1:29). John represents humility and dedication to God\'s calling: "He must increase, but I must decrease" (John 3:30).'
    }
    
    // THEOLOGICAL CONCEPTS - Advanced responses
    
    // Trinity
    if (lowerQuestion.includes('trinity') || (lowerQuestion.includes('father') && lowerQuestion.includes('son') && lowerQuestion.includes('spirit'))) {
      return 'The Trinity is the Christian doctrine that God exists as three distinct persons - Father, Son, and Holy Spirit - yet remains one God. This mystery is seen throughout Scripture: Jesus\' baptism (Matthew 3:16-17), the Great Commission (Matthew 28:19), and Paul\'s benediction (2 Corinthians 13:14). Each person is fully God, co-equal and co-eternal, working in perfect unity for our salvation.'
    }
    
    // Grace
    if (lowerQuestion.includes('grace')) {
      return 'Grace is God\'s unmerited favor - His kindness toward us that we don\'t deserve. "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast" (Ephesians 2:8-9). Grace is not just God\'s attitude toward us, but His power working in us to live righteously. It\'s the foundation of the Gospel.'
    }
    
    // Prophecy/Prophets
    if (lowerQuestion.includes('prophet') || lowerQuestion.includes('prophecy')) {
      return 'Prophets were God\'s messengers who spoke His word to the people. They called people to repentance, foretold future events, and pointed to the coming Messiah. "All Scripture is given by inspiration of God" (2 Timothy 3:16). Major prophets include Isaiah, Jeremiah, Ezekiel, and Daniel. Their prophecies about Jesus demonstrate the divine inspiration of Scripture.'
    }
    
    // End Times/Second Coming
    if (lowerQuestion.includes('end times') || lowerQuestion.includes('second coming') || lowerQuestion.includes('rapture') || lowerQuestion.includes('tribulation')) {
      return 'Jesus promised to return to establish His kingdom and judge the world. "And if I go and prepare a place for you, I will come again and receive you to Myself" (John 14:3). While we don\'t know the exact time, believers should live in readiness and hope. "Even so, come, Lord Jesus!" (Revelation 22:20). The Second Coming brings comfort to believers and justice to the world.'
    }
    
    // BIBLICAL BOOKS - Context and significance
    
    // Genesis
    if (lowerQuestion.includes('genesis')) {
      return 'Genesis, meaning "beginning," records the creation of the world, the fall of mankind, and God\'s covenant with Abraham. It establishes foundational truths: God as Creator, humanity made in His image, the reality of sin, and God\'s plan of redemption. "In the beginning God created the heavens and the earth" (Genesis 1:1). Genesis shows God\'s sovereignty and grace from the very beginning.'
    }
    
    // Psalms
    if (lowerQuestion.includes('psalm') || lowerQuestion.includes('psalms')) {
      return 'The Psalms are the prayer and worship book of the Bible, expressing every human emotion to God. Many were written by David and point to Christ. "Your word I have hidden in my heart, that I might not sin against You" (Psalm 119:11). The Psalms teach us how to praise, lament, confess, and trust God in all circumstances.'
    }
    
    // Revelation
    if (lowerQuestion.includes('revelation')) {
      return 'Revelation unveils Jesus Christ in His glory and God\'s ultimate victory over evil. Though symbolic, its message is clear: Jesus wins! "Behold, I am coming quickly! Blessed is he who keeps the words of the prophecy of this book" (Revelation 22:7). It brings hope to persecuted believers and warns of coming judgment for the unrepentant.'
    }
    
    // SPIRITUAL PRACTICES - Practical guidance
    
    // Worship
    if (lowerQuestion.includes('worship')) {
      return 'Worship is our response to God\'s worthiness, involving our whole being - heart, mind, soul, and strength. "God is Spirit, and those who worship Him must worship in spirit and truth" (John 4:24). True worship isn\'t just singing but living a life that honors God. "Present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service" (Romans 12:1).'
    }
    
    // Fasting
    if (lowerQuestion.includes('fast') || lowerQuestion.includes('fasting')) {
      return 'Fasting is voluntarily abstaining from food to focus on prayer and seeking God. Jesus fasted 40 days and taught about fasting in Matthew 6:16-18. It\'s not to manipulate God but to humble ourselves and align our hearts with His. "Is this not the fast that I have chosen... to share your bread with the hungry?" (Isaiah 58:6-7). Fasting should include caring for others.'
    }
    
    // Fellowship
    if (lowerQuestion.includes('fellowship') || lowerQuestion.includes('church') || lowerQuestion.includes('community')) {
      return 'Christian fellowship is vital for spiritual growth. "And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together" (Hebrews 10:24-25). The early church "devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer" (Acts 2:42). We need each other to grow in faith.'
    }
    
    // ORIGINAL SIMPLE RESPONSES (Enhanced)
    
    if (lowerQuestion.includes('who is god') || lowerQuestion.includes('what is god')) {
      return 'God is the eternal, self-existent Creator who revealed Himself as "I AM WHO I AM" (Exodus 3:14). He exists in perfect Trinity - Father, Son, and Holy Spirit. God is holy (Isaiah 6:3), love (1 John 4:8), light (1 John 1:5), and spirit (John 4:24). "Before the mountains were brought forth, or ever You had formed the earth and the world, even from everlasting to everlasting, You are God" (Psalm 90:2).'
    }
    
    if (lowerQuestion.includes('jesus') || lowerQuestion.includes('christ')) {
      return 'Jesus Christ is fully God and fully man - the eternal Word who became flesh (John 1:14). He lived a sinless life, died as our substitute for sin, and rose victorious over death. "And she will bring forth a Son, and you shall call His name Jesus, for He will save His people from their sins" (Matthew 1:21). He is Prophet, Priest, and King - our only hope for salvation.'
    }
    
    if (lowerQuestion.includes('salvation') || lowerQuestion.includes('saved') || lowerQuestion.includes('eternal life')) {
      return 'Salvation is deliverance from sin\'s penalty, power, and ultimately its presence. It\'s entirely by grace through faith in Christ\'s finished work. "He saved us, not because of righteous things we had done, but because of his mercy" (Titus 3:5). Salvation includes justification (declared righteous), sanctification (being made holy), and glorification (perfect in heaven).'
    }
    
    if (lowerQuestion.includes('prayer') || lowerQuestion.includes('pray')) {
      return 'Prayer is intimate communication with our heavenly Father through Jesus Christ. The acronym ACTS helps: Adoration (praising God), Confession (admitting sin), Thanksgiving (expressing gratitude), and Supplication (making requests). "Therefore let us draw near with confidence to the throne of grace" (Hebrews 4:16). Prayer changes us more than our circumstances.'
    }
    
    if (lowerQuestion.includes('bible') || lowerQuestion.includes('scripture')) {
      return 'The Bible is God\'s inspired, inerrant Word - our ultimate authority for faith and practice. Written by human authors moved by the Holy Spirit, it perfectly reveals God\'s will. "The grass withers, the flower fades, but the word of our God stands forever" (Isaiah 40:8). Scripture is profitable for doctrine, reproof, correction, and instruction in righteousness (2 Timothy 3:16).'
    }
    
    if (lowerQuestion.includes('love')) {
      return 'God\'s love is agape - unconditional, self-sacrificing love that seeks the highest good of others. "In this is love, not that we loved God, but that He loved us and sent His Son to be the propitiation for our sins" (1 John 4:10). This love transforms us to love God supremely and others genuinely. Love is the greatest commandment and the mark of discipleship.'
    }
    
    if (lowerQuestion.includes('purpose') || lowerQuestion.includes('meaning') || lowerQuestion.includes('why')) {
      return 'Our chief purpose is to glorify God and enjoy Him forever. Created in God\'s image, we find meaning in relationship with Him and service to others. "Whether you eat or drink or whatever you do, do it all for the glory of God" (1 Corinthians 10:31). True fulfillment comes from knowing and following Jesus Christ.'
    }
    
    if (lowerQuestion.includes('sin')) {
      return 'Sin is rebellion against God\'s holy character and law. It entered through Adam\'s disobedience, corrupting all humanity. "The wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord" (Romans 6:23). Sin affects our relationship with God, others, and ourselves. Only Christ\'s sacrifice can atone for sin.'
    }
    
    if (lowerQuestion.includes('heaven')) {
      return 'Heaven is the eternal dwelling place of God where believers will live in perfect fellowship with Him. "And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying" (Revelation 21:4). It\'s not just a destination but a relationship - being with Jesus forever. Heaven begins now for believers and culminates in the new heaven and earth.'
    }
    
    if (lowerQuestion.includes('faith')) {
      return 'Faith is trusting God\'s character and promises despite circumstances. It\'s both a gift from God and our response to His revelation. "Without faith it is impossible to please Him, for he who comes to God must believe that He is" (Hebrews 11:6). Faith grows through hearing God\'s Word (Romans 10:17) and is demonstrated through obedience.'
    }
    
    // Greetings
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi') || lowerQuestion.includes('hey')) {
      return 'Blessings in Christ! I\'m your AI Bible Assistant, equipped with comprehensive biblical knowledge to help you explore God\'s Word. Whether you\'re curious about biblical characters, theological concepts, or practical Christian living, I\'m here to provide scriptural guidance. What biblical topic would you like to explore today?'
    }
    
    // Default enhanced response
    return `That's a profound question that deserves careful consideration! While I can provide guidance on many Biblical topics including characters, theology, church history, and Christian living, I encourage you to "be like the Bereans, who received the message with great eagerness and examined the Scriptures every day to see if what Paul said was true" (Acts 17:11). Please feel free to ask about specific Bible verses, characters, doctrines, or practical Christian living - I'm here to help you dig deeper into God's Word!`
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