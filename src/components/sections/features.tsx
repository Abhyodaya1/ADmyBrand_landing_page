import { AnimatedIcon } from "@/components/ui/animated-icon";
import { GlassCard, CardHeader, CardTitle, CardContent } from "@/components/ui/glass-card";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Rocket,
  TrendingUp,
  Users
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your campaigns in real-time, providing actionable insights to optimize performance and maximize ROI.",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Precision audience targeting using behavioral data, demographics, and predictive modeling to reach your ideal customers at the perfect moment.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Automated A/B testing and campaign optimization that continuously improves your marketing performance without manual intervention.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with our intuitive onboarding process. Connect your channels and watch AI take over your marketing optimization.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, GDPR compliance, and SOC 2 certification to protect your valuable marketing data.",
  },
  {
    icon: Rocket,
    title: "Automated Campaigns",
    description: "Set up campaigns once and let AI handle the rest. Smart bidding, content optimization, and scheduling work 24/7 to grow your business.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "Forecast campaign performance, identify trends before competitors, and make data-driven decisions with our advanced prediction engine.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless team workflows with role-based access, shared dashboards, and real-time collaboration tools for marketing teams of any size.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            for Modern Marketing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the future of marketing with AI-driven tools designed to 
            scale your business and maximize your advertising performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              variant="hover"
              className={`fade-in-up group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <AnimatedIcon 
                    icon={feature.icon} 
                    variant="primary"
                    className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  />
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card inline-block p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful businesses using ADmyBRAND AI Suite
            </p>
            <button className="btn-hero">
              Get Started Free Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}