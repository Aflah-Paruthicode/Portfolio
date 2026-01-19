interface ButtonInterface {
  sm: string;
  default: string;
  lg: string;
}

export const Button = ({ className = "", size = "default", children }: { className: string; size: string; children: string }) => {
  const baseClasses: string =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeBasedClasses: ButtonInterface = { sm: "px-4 py-2 text-sm", default: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  const classes: string = `${baseClasses} ${sizeBasedClasses[size as keyof ButtonInterface]} ${className}`;

  return (
    <button className={classes}>
      <span className="relative flex items-center  justify-center gap-2">{children}</span>
    </button>
  );
};
