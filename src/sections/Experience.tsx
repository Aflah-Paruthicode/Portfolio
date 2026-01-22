const experience = [
  {
    period: "2026 - Present",
    role: "Self-Taught Developer (Project-Based Practice)",
    company: "Independent Learning",
    description:
      "Focused on building high-quality web applications to master the MERN stack. I spend my time practicing frontend development and learning how to connect apps to modern APIs.",
    technologies: ["Next.js", "REST APIs", "React.js", "TypeScript", "Tailwind CSS"],
    current: true,
  },

  {
    period: "2024 — 2025",
    role: "Business Owner (Dropshipping & Reselling)",
    company: "Self-Employed",
    description: `Managed an All-India reselling business. I handled everything from customer support to operations. This experience helped me understand how to solve problems for real users, which led me to build "Almir Collections."`,
    technologies: ["WhatsApp Business", "Social Media Marketing", "Operations Management"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "MERN Stack Development Training",
    company: "Brototype",
    description:
      "Participated in hands-on training focused on Full-Stack development. I learned the core fundamentals of building web applications from scratch using the MERN stack.",
    technologies: ["MongoDB", "Express.js", "Node.js"],
    current: false,
  },
  {
    period: "2021 — 2023",
    role: "Higher Secondary Student (Computer Commerce)",
    company: "VPKMMHSS",
    description: "Focused on the basics of computer science and business commerce.",
    technologies: ["Basic HTML", "SQL", "C++"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5  rounded-full blur-3xl -translate-y-1/2 " />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fadeIn">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fadeIn animation-delay-100 text-secondary-foreground">
            Professional Path <span className="text-white font-normal italic font-serif"> and Growth</span>{" "}
          </h2>
          <p className="text-muted-foreground animate-fadeIn animation-delay-200">
            A look at my professional training, my self-taught projects, and my experience running a small business.
          </p>
        </div>

        <div className="relative">
          <div className="timeLine-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          <div className="space-y-12">
            {experience.map((exp, ind) => (
              <div
                key={ind}
                className="relative grid md:grid-cols-2  gap-8 animate-fadeIn"
                style={{
                  animationDelay: `${(ind + 1) * 150}ms`,
                }}
              >
                <div className="absolute left-0 md:left-1/2 top-0  w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
                )}
                </div>

                <div className={`pl-8 md:pl-0 ${ind % 2 == 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass p-6 rounded-xl border border-primary/30 hover:border-primary/60  transition-all duration-500">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${ind %2 == 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, indx) => (
                        <span key={indx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
