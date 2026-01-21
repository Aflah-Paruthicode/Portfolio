import { Code2, Lightbulb, Rocket, type LucideIcon } from "lucide-react";

interface HighlightsInterface {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highLights: HighlightsInterface[] = [
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "I focus on writing code that is easy to read and simple to follow. I use clear names for my variables and follow industry standards so that other developers can easily understand and work on my projects.",
  },

  {
    icon: Rocket,
    title: "Performance & Optimization",
    description:
      "I don't just make things work; I make them fast. I build apps that load quickly and run smoothly by keeping my code lightweight and optimizing images and data handling for a better user experience.",
  },
  {
    icon: Code2,
    title: "Version Control & Git Flow",
    description:
      "I am comfortable working in a team environment using Git. I follow professional workflows, manage different branches carefully, and write clear commit messages to keep the project history organized and safe.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I enjoy learning new tools and staying updated with the latest web technologies. I am always looking for ways to improve my skills and grow as a developer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fadeIn">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeIn animation-delay-100 text-secondary-foreground">
              Building the future, <span className="font-serif italic font-normal text-white">one component at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fadeIn animation-delay-200">
              <p>
                i'm a passionate software engineer who loves building digital products that looks great and work perfectly. My journey started with a simple
                curiosity about how websites are made, and it has grown into a strong foundation in modern web technologies.
              </p>
              <p>
                i focus on building clean and fast applications using tools like React, Next.js, and TypeScript. Even though i am at the start of my career, i
                treat every project with a high level of detail, focusing on clean code and a great experience for the user.
              </p>
              <p>
                when i am not coding, i spend my time learning new technologies, solving logic puzzles, and building personal projects to sharpen my skills. i
                am always excited to learn more and contribute to a team.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fadeIn animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build quality products that look great and run smoothly. I always focus on writing clean code and creating web applications
                that are simple and helpful for everyone."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
