import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={`fixed top-0 left-0 right-0 ${isScroll ? 'glass-stronger py-3' : 'bg-transparent py-5' } transition-all duration-500 z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          MA <span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, ind) => (
              <a href={link.href} key={ind} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Button size="sm" className="">
            Contact Me
          </Button>
        </div>
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden glass-stronger animate-fadeIn">
          <div className="container mx-auto p-6 flex flex-col gap-4">
            {navLinks.map((link, ind) => (
              <a href={link.href} key={ind} className="text-lg text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}
            <Button size="sm" className="">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
