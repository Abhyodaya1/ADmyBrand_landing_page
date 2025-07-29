export interface PricingFeature {
    text: string;
    included: boolean;
  }
  
  export interface PricingPlan {
    title: string;
    price: string;
    description: string;
    features: PricingFeature[];
    featured?: boolean;
  }
  
  export const pricingPlans: PricingPlan[] = [
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
  