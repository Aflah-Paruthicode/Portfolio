import { Code2, Lightbulb, Rocket,GitBranch, type LucideIcon } from "lucide-react";

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
      "I write code that is organized and easy to read. I follow simple rules to make sure my projects are easy for me and other developers to update in the future.",
  },

  {
    icon: Rocket,
    title: "Performance & Optimization",
    description:
      "I care about speed. I build apps that load fast and run smoothly by keeping the code efficient and making sure images and files don't slow things down.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Git Flow",
    description:
      "I use Git to manage my projects and track changes. I understand how to work with branches and how to collaborate with a team to keep the code safe and organized.",
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

          <div className="grid sm:grid-cols-2 gap-6">
            {
              highLights.map((item,ind) => (
                <div key={ind} className="glass p-6 rounded-2xl animate-fadeIn" style={{
                  animationDelay : `${(ind+1) * 100} ms`
                }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors"><item.icon/></div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
