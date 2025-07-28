import { PricingCard } from "@/components/ui/pricing-card";
import { useState } from "react";
import { GlassButton } from "@/components/ui/glass-button";

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
    <section id="pricing" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Simple Pricing</span>
            <br />
            That Scales With You
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan for your business. Start free and upgrade 
            as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 glass-card inline-block p-2">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <GlassButton
              variant="ghost"
              size="sm"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative h-6 w-12 rounded-full transition-all ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </GlassButton>
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-parent">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="stagger-child">
              <PricingCard
                title={plan.title}
                price={plan.price === "Custom" ? plan.price : 
                  `$${isAnnual ? Math.round(parseInt(plan.price.slice(1)) * 0.8) : plan.price.slice(1)}`}
                description={plan.description}
                features={plan.features}
                featured={plan.featured}
                ctaText={plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                onCtaClick={() => {
                  // Handle CTA click
                  console.log(`Selected ${plan.title} plan`);
                }}
              />
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