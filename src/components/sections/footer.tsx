import { GlassCard } from "@/components/ui/glass-card";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "API Documentation", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Security", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Help Center", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Community", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <GlassCard variant="featured" size="lg" className="text-center fade-in-up">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold font-space mb-4 gradient-text">
                Stay Ahead of the Curve
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get the latest AI marketing insights, tips, and exclusive updates 
                delivered straight to your inbox. Join 25,000+ marketing professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-input/50 border border-glass-border/30 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <button className="btn-hero flex items-center justify-center sm:px-6 ripple-effect hover-glow-purple">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Main Footer */}
      <div className="border-t border-glass-border/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 fade-in-up">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-space gradient-text mb-2">
                  ADmyBRAND AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transforming marketing with artificial intelligence. 
                  Empowering businesses to achieve unprecedented growth 
                  through smart automation and data-driven insights.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>hello@admybrand.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="relative w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-white hover-glow-purple ripple-effect group transition-all duration-500 hover:scale-110 overflow-hidden"
                  >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100" />
                    
                    {/* Icon */}
                    <social.icon className="relative z-10 h-5 w-5 group-hover:scale-110 transition-all duration-300" />
                    
                    {/* Ripple effect overlay */}
                    <div className="absolute inset-0 rounded-full gradient-lavender opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product */}
                <div className="fade-in-up" style={{ animationDelay: "100ms" }}>
                  <h4 className="font-semibold text-foreground mb-4">Product</h4>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 hover-glow-purple"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="fade-in-up" style={{ animationDelay: "200ms" }}>
                  <h4 className="font-semibold text-foreground mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 hover-glow-purple"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div className="fade-in-up" style={{ animationDelay: "300ms" }}>
                  <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 hover-glow-purple"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div className="fade-in-up" style={{ animationDelay: "400ms" }}>
                  <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 hover-glow-purple"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border/30 py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for marketers</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}