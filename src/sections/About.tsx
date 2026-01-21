import { Code2, Lightbulb, Rocket, type LucideIcon } from "lucide-react";

interface HighlightsInterface {
  icon : LucideIcon,
  title : string,
  description : string
}

const highLights : HighlightsInterface[] = [
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
  return <section className="py-32 relative overflow-hidden">
    <div>
      <div>
        <div>
          <span>About Me</span>
        </div>
      </div>
    </div>
  </section>;
};
