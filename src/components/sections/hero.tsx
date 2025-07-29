import { GlassButton } from "@/components/ui/glass-button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center glass-card px-4 py-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              AI-Powered Marketing Revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-space leading-tight">
              <span className="gradient-text">ADmyBRAND</span>
              <br />
              <span className="text-foreground">AI Suite</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your marketing with AI-driven insights, automated campaigns, 
              and intelligent brand optimization. Boost conversions by 300% with our 
              cutting-edge marketing intelligence platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <GlassButton variant="hero" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </GlassButton>
            
            <GlassButton variant="glass" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-glass-border/30">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">300%</div>
              <div className="text-sm text-muted-foreground">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative fade-in-right">
          <div className="relative">
            <img
              src={heroImage.src}
              alt="ADmyBRAND AI Dashboard"
              className="w-full h-auto rounded-3xl shadow-glow-primary"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass-card p-4 animate-bounce">
              <div className="text-success text-sm font-medium">+47% CTR</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-bounce delay-500">
              <div className="text-accent text-sm font-medium">AI Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}