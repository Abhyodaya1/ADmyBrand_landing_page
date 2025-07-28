import { cn } from "@/lib/utils";
import { GlassCard, CardHeader, CardTitle, CardContent, CardFooter } from "./glass-card";
import { GlassButton } from "./glass-button";
import { Check } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  featured?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  featured = false,
  ctaText = "Get Started",
  onCtaClick,
  className,
}: PricingCardProps) {
  return (
    <GlassCard
      variant={featured ? "featured" : "default"}
      className={cn(
        "relative h-full flex flex-col",
        featured && "scale-105 z-10",
        className
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className={cn(
          "text-xl font-space",
          featured && "gradient-text"
        )}>
          {title}
        </CardTitle>
        <div className="mt-2">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          {price !== "Custom" && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className={cn(
                "rounded-full p-1",
                feature.included 
                  ? "bg-success/20 text-success" 
                  : "bg-muted/20 text-muted-foreground"
              )}>
                <Check size={12} />
              </div>
              <span className={cn(
                "text-sm",
                feature.included ? "text-foreground" : "text-muted-foreground"
              )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <GlassButton
          variant={featured ? "hero" : "glass"}
          size="lg"
          className="w-full"
          onClick={onCtaClick}
        >
          {ctaText}
        </GlassButton>
      </CardFooter>
    </GlassCard>
  );
}