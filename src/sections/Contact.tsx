import { Button } from "@/components/Button"
import { Linkedin, Mail, MapPin, Send } from "lucide-react"
import type React from "react"

const contact = [
  {
    icon : Mail,
    label : 'Email',
    value : 'amaflu4424@gmail.com',
    href : 'mailto:amaflu4424@gmail.com',
  },
  {
    icon : Linkedin,
    label : 'Linkedin',
    value : 'Muhammed Aflah',
    href : 'https://www.linkedin.com/in/muhammed-aflah-24b58725b/',
  }
  ,{
    icon : MapPin,
    label : 'Location',
    value : 'Malappuram, Kerala',
    href : '#',
  }
]

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground  text-sm font-medium tracking-wider uppercase animate-fadeIn">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fadeIn animatoin-delay-100 text-secondary-foreground">
            Let's build 
            <span className="font-serif italic font-normal text-white"> something great.</span>
          </h2>

          <p>
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fadeIn animation-delay-300" >
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input id="name" type="text" required placeholder="Your name..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div> 

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" >Email</label>
                <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} required placeholder="Your message..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" />
              </div>

              <Button className="w-full" size="lg" type="submit">
                Send Message
                <Send />
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

