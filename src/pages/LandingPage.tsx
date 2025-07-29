import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { PricingSection } from "../components/sections/pricing";
import { PricingSectionWithSelector } from "../components/sections/PricingSectionWithSelector";
import { FAQScreen } from "../components/sections/faq";

export default function LandingPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
       <PricingSection /> 
        <TestimonialsSection />
        <FAQScreen/>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
                  <span className="gradient-text">Let's Build</span>
                  <br />
                  Something Amazing
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to revolutionize your marketing? Our team is here to help 
                  you achieve extraordinary results with AI-powered solutions.
                </p>
              </div>
              
              <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}