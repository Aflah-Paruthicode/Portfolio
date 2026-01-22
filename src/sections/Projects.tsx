import BorderAnimatedButton from "@/components/BorderAnimatedButton";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Almir Collections",
    description:
      'I built this platform for my own reselling business to show products clearly with a search feature and a "Buy" button that sends me an automatic WhatsApp message.',
    image: "/projects/almirCollections.png",
    tags: ["React", "TailwindCss", "Firebase", "Cloudinary"],
    link: "www.almircollections.com",
    github: "#",
  },
  {
    title: "Almir Collections",
    description:
      'I built this platform for my own reselling business to show products clearly with a search feature and a "Buy" button that sends me an automatic WhatsApp message.',
    image: "/projects/almirCollections.png",
    tags: ["React", "TailwindCss", "Firebase", "Cloudinary"],
    link: "#",
    github: "#",
  },
  {
    title: "Almir Collections",
    description:
      'I built this platform for my own reselling business to show products clearly with a search feature and a "Buy" button that sends me an automatic WhatsApp message.',
    image: "/projects/almirCollections.png",
    tags: ["React", "TailwindCss", "Firebase", "Cloudinary"],
    link: "#",
    github: "#",
  },
  {
    title: "Almir Collections",
    description:
      'I built this platform for my own reselling business to show products clearly with a search feature and a "Buy" button that sends me an automatic WhatsApp message.',
    image: "/projects/almirCollections.png",
    tags: ["React", "TailwindCss", "Firebase", "Cloudinary"],
    link: "#",
    github: "#",
  },
  {
    title: "Almir Collections",
    description:
      'I built this platform for my own reselling business to show products clearly with a search feature and a "Buy" button that sends me an automatic WhatsApp message.',
    image: "/projects/almirCollections.png",
    tags: ["React", "TailwindCss", "Firebase", "Cloudinary"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fadeIn">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fadeIn animation-delay-100 text-secondary-foreground">
            Projects that <span className="font-serif italic font-normal text-white">make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fadeIn animtion-delay-200">Here are some of the projects I have built while learning new technologies. Each one helped me improve my logic and design skills.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {
            projects.map((project,ind) => (
              <div key={ind} className="group glass rounded-2xl overflow-hidden animate-fadeIn md:row-span-1" style={{
                animationDelay : `${(ind + 1) * 100}ms`
              }}>
                <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowUpRight className="h-5 w-5" /></a>
                    <a href="" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><Github className="h-5 w-5" /></a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag,indx) => (
                      <span key={indx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50  hover:text-primary transition-all duration-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="text-center mt-12 animate-fadeIn animation-delay-500">
          <BorderAnimatedButton >
            View All Projects <ArrowUpRight />
          </BorderAnimatedButton> 
        </div>
      </div>
    </section>
  );
};
