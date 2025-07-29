import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "accent" | "glass";
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

const iconSizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

const variantClasses = {
  default: "bg-muted/20 text-foreground",
  primary: "bg-primary/20 text-primary border border-primary/30",
  accent: "bg-accent/20 text-accent border border-accent/30",
  glass: "glass text-foreground border border-glass-border/50",
};

export function AnimatedIcon({ 
  icon: Icon, 
  size = "md", 
  variant = "primary",
  className,
  ...props 
}: AnimatedIconProps) {
  return (
    <div
      className={cn(
        "rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Icon 
        size={iconSizes[size]} 
        className="transition-all duration-300" 
      />
    </div>
  );
}