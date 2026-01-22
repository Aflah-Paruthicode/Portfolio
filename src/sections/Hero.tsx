import BorderAnimatedButton from "@/components/BorderAnimatedButton";
import { Button } from "@/components/Button";
import { ArrowRight, Github, Linkedin, Mail, Code, type LucideIcon, ChevronDown, Download } from "lucide-react";

interface SocialInterface {
  icon: LucideIcon;
  href: string;
}

export const Hero = () => {
  const socialLinks: SocialInterface[] = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Mail, href: "#" },
    { icon: Code, href: "#" },
  ];

  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Bootstrap",
    "Redux",
    "Axios",
    "REST APIs",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "Mongodb",
    "Firebase",
    "EJS",
    "MVC Architecture",
    "Postman",
    "Socket.io",
    "Jest",
    "Git/GitHub",
    "Next.js",
    "Context API",
    "JWT",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((el, ind) => (
          <div key={ind}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-slip ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div id="home" className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fadeIn">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fadeIn animation-delay-100">
                Building <span className="text-primary glow-text">thoughtful, </span>
                <br />
                reliable web
                <br />
                <span className="font-serif italic font-normal text-white">experiences.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fadeIn animation-delay-200">
                Hi, I’m Muhammed Aflah, a frontend developer who loves building clean, interactive web experiences using React, Next.js, and TypeScript.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fadeIn animattion-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <BorderAnimatedButton >
                <Download className="w-5 h-5" /> Download CV
              </BorderAnimatedButton>
            </div>

            <div className="flex items-center gap-4 animate-fadeIn animation-delay-400">
              <span className="text-sm text-muted-foreground">Let's connect : </span>
              {socialLinks.map((socialLink, index) => (
                <a key={index} href={socialLink.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<socialLink.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeIn animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/Proffile.png" alt="Muhammed Aflah" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">7+</div>
                  <div className="text-xs text-muted-foreground">Projects Built.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fadeIn animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I Wrok With</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 " />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 " />
            <div className="flex animate-horizQueue">
              {
                [...skills,...skills].map((skill,ind) => (
                  <div key={ind} className="shrink-0 px-8 py-4">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fadeIn animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
