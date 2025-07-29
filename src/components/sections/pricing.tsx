import { PricingCard } from "@/components/ui/pricing-card";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { useState } from "react";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";
import glassAnalytics from '../../assets/glass-analytics.jpg'

import omniChannelDashboard from "@/assets/omnichannel-dashboard.jpg";

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    description: "Perfect for small businesses and startups getting started with AI marketing",
    features: [
      { text: "Up to 5,000 monthly visitors tracked", included: true },
      { text: "Basic AI analytics dashboard", included: true },
      { text: "Email campaign automation", included: true },
      { text: "2 social media integrations", included: true },
      { text: "Standard support", included: true },
      { text: "Advanced targeting options", included: false },
      { text: "Custom AI models", included: false },
      { text: "White-label solutions", included: false },
    ],
  },
  {
    title: "Professional",
    price: "$99",
    description: "For growing businesses that need advanced AI marketing capabilities",
    features: [
      { text: "Up to 50,000 monthly visitors tracked", included: true },
      { text: "Advanced AI analytics & insights", included: true },
      { text: "Multi-channel campaign automation", included: true },
      { text: "Unlimited social media integrations", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced targeting & segmentation", included: true },
      { text: "A/B testing automation", included: true },
      { text: "Custom AI models", included: false },
    ],
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with complex marketing needs",
    features: [
      { text: "Unlimited visitor tracking", included: true },
      { text: "Enterprise AI suite", included: true },
      { text: "Omnichannel automation", included: true },
      { text: "All platform integrations", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Advanced targeting & AI models", included: true },
      { text: "Custom integrations & APIs", included: true },
      { text: "White-label & reseller options", included: true },
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={glassAnalytics.src} 
          alt="Analytics background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold font-space mb-8">
              <span className="gradient-text ">Simple Pricing</span>
              <br />
              <span className="text-foreground">That Scales With You</span>
            </h2>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-neon blur-sm" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Choose the perfect plan for your omnichannel advertising platform. 
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Enhanced Billing Toggle */}
          <InteractiveCard 
            className="inline-block p-4 gradient-flow"
            enableTilt={false}
            enableParallax={true}
            glowIntensity="medium"
          >
            <div className="flex items-center justify-center space-x-6">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <div 
                className="relative h-8 w-16 rounded-full cursor-pointer transition-all duration-300 ripple-click"
                onClick={() => setIsAnnual(!isAnnual)}
                style={{
                  background: isAnnual 
                    ? 'var(--gradient-neon)' 
                    : 'hsl(var(--muted))'
                }}
              >
                <div
                  className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full transition-all duration-300 shadow-lg ${
                    isAnnual ? 'translate-x-8' : 'translate-x-0'
                  }`}
                  style={{
                    boxShadow: isAnnual ? 'var(--shadow-neon)' : '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                />
              </div>
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <span className="text-xs bg-gradient-neon text-background px-3 py-1 rounded-full font-semibold neon-pulse">
                Save 20%
              </span>
            </div>
          </InteractiveCard>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto stagger-parent">
  {pricingPlans.map((plan, index) => (
    <div 
      key={index} 
      className={`relative group transform transition-all duration-300 cursor-pointer ${
        plan.featured ? 'z-20' : 'hover:z-10'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* OUTERMOST WRAPPER for FULL CARD HIGHLIGHT */}
      <div
        
      >
        {/* Most Popular Badge */}
        {plan.featured && (
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-[-1.5rem] group-hover:opacity-100 transition-all duration-500 ease-out z-30">
            <span className="inline-block bg-gradient-neon text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg neon-pulse">
              Most Popular
            </span>
          </div>
        )}

        {/* Actual Card Content */}
        <InteractiveCard
          className="h-full relative overflow-hidden backdrop-blur-md"
          enableParallax={true}
          enableTilt={true}
          glowIntensity={plan.featured ? "high" : "medium"}
        >
          <div className={`p-8 h-full flex flex-col ${plan.featured ? 'gradient-flow' : ''}`}>
            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className={cn(
                "text-2xl font-bold font-space mb-4",
                plan.featured && "gradient-text"
              )}>
                {plan.title}
              </h3>
              <div className="mb-4">
                <span className="text-5xl font-bold gradient-text">
                  {plan.price === "Custom" ? plan.price : 
                    `$${isAnnual ? Math.round(parseInt(plan.price.slice(1)) * 0.8) : plan.price.slice(1)}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground text-lg">/month</span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
            </div>

            {/* Features List */}
            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className={cn(
                      "rounded-full p-1 transition-all duration-300",
                      feature.included 
                        ? "bg-primary/20 text-primary hover:bg-primary/30" 
                        : "bg-muted/20 text-muted-foreground"
                    )}>
                      <svg 
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <span className={cn(
                      "text-sm transition-colors",
                      feature.included ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <GlassButton
              variant={plan.featured ? "hero" : "glass"}
              size="lg"
              className="w-full ripple-click"
              onClick={() => {
                console.log(`Selected ${plan.title} plan`);
              }}
            >
              {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
            </GlassButton>
          </div>
        </InteractiveCard>
      </div>
    </div>
  ))}
</div>



        {/* Bottom Note */}
        <div className="text-center mt-12 fade-in-up">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}