import type { ButtonHTMLAttributes, ReactNode } from "react";


interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string,
  size? : string,
  children : ReactNode
}


interface SizeBasedInterface {
  sm: string;
  default: string;
  lg: string;
}
// type?: "button" | "submit" | "reset";

export const Button = ({ className = "", size = "default", children,...props }: ButtonInterface) => {
  const baseClasses: string =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeBasedClasses: SizeBasedInterface = { sm: "px-4 py-2 text-sm", default: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  const classes: string = `${baseClasses} ${sizeBasedClasses[size as keyof SizeBasedInterface]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center  justify-center gap-2">{children}</span>
    </button>
  );
};
