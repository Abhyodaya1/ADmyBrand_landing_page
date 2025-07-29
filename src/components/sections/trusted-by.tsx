import { InteractiveCard } from "@/components/ui/interactive-card";

const clients = [
  // Airlines
  { name: "Air India", category: "Airlines", logo: "AI" },
  { name: "Vistara", category: "Airlines", logo: "VS" },
  { name: "IndiGo", category: "Airlines", logo: "6E" },
  
  // Cinema Chains
  { name: "PVR-INOX", category: "Cinema", logo: "PVR" },
  { name: "Cinépolis", category: "Cinema", logo: "CNP" },
  { name: "Carnival", category: "Cinema", logo: "CRN" },
  
  // Newspapers
  { name: "Times of India", category: "Media", logo: "TOI" },
  { name: "Dainik Bhaskar", category: "Media", logo: "DB" },
  { name: "The Hindu", category: "Media", logo: "TH" },
  
  // Magazines
  { name: "Forbes", category: "Publications", logo: "FBS" },
  { name: "Cosmopolitan", category: "Publications", logo: "COS" },
  { name: "Elle", category: "Publications", logo: "ELL" },
];

export function TrustedBySection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Trusted by</span>
            <br />
            Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our omnichannel solutions empower India's top brands across Airlines, Cinemas, Media, and Publications.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 stagger-parent">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="stagger-child fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <InteractiveCard
                className="h-24 flex items-center justify-center group cursor-pointer"
                glowIntensity="low"
                enableTilt={true}
                enableParallax={false}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {client.category}
                  </div>
                </div>
                
                {/* Ripple Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl animate-pulse" />
                </div>
              </InteractiveCard>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: "800ms" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-4">
              <div className="text-2xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold gradient-text">4</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold gradient-text">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}