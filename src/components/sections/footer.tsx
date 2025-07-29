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
      {/* Enhanced Newsletter Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 -translate-y-1/2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 -translate-y-1/2 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="glass-card text-center fade-in-up relative overflow-hidden neon-pulse">
            {/* Animated Background */}
            <div className="absolute inset-0 gradient-flow opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto p-12">
              <h3 className="text-4xl md:text-5xl font-bold font-space mb-6 gradient-text">
                Stay Ahead of the Curve
              </h3>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Get the latest omnichannel advertising insights, AI marketing strategies, 
                and exclusive platform updates delivered straight to your inbox. 
                Join 25,000+ marketing professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-glass/50 backdrop-blur-md border border-glass-border/50 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-border opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <button className="btn-hero flex items-center justify-center px-8 py-4 ripple-click group">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe at any time. We respect your privacy and data security.
              </p>
            </div>
          </div>
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

              {/* Enhanced Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="icon-social-glow relative w-14 h-14 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-white ripple-click group transition-all duration-500 overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Neon Glow Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                    
                    {/* Solid Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                    
                    {/* Icon */}
                    <social.icon className="relative z-10 h-6 w-6 group-hover:scale-125 transition-all duration-300 drop-shadow-lg" />
                    
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
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

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-glass-border/30 py-8 px-4 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 <span className="gradient-text font-semibold">ADmyBRAND AI Suite</span>. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>for marketers worldwide</span>
              </span>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping opacity-75" />
                </div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}