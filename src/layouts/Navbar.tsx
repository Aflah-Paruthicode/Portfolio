import { Button } from "@/components/Button";

interface linksInterface {
  href: string;
  label: string;
}

const navLinks: linksInterface[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          MA <span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, ind) => (
              <a href={link.href} key={ind} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full">
                {link.label}
              </a>
            ))}
          </div> 
        </div>
        <div>
          <Button size="sm" className="">
            Contact Me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
