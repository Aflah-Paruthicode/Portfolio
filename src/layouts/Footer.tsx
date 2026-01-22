
import { Github,Linkedin,Mail,Code,Heart } from "lucide-react";

const socialLinks = [
  {icon : Github, href : '#', label : 'GitHub'},
  {icon : Linkedin, href : '#', label : 'LinkedIn'},
  {icon : Mail, href : '#', label : 'Email'},
  {icon : Code, href : '#', label : 'Leetcode'}
]

const footerLinks = [
  {href: '#about', label : 'About'},
  {href : '#projects',label : 'Projects'},
  {href : '#experience',label : 'Experience'},
  {href : '#contact', label : 'Contact'}
]

 export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight" >
              MA<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Muhammed Aflah. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          
        </div>
      </div>
    </footer>
  )
}

