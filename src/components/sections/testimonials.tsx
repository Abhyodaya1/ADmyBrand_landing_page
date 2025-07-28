import { GlassCard, CardContent } from "@/components/ui/glass-card";
import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "ADmyBRAND AI Suite completely transformed our marketing ROI. We saw a 340% increase in conversions within the first month. The AI insights are incredibly accurate and actionable.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "Growth Labs",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "The automated campaign optimization is mind-blowing. Our team can now focus on strategy while the AI handles the heavy lifting. Best marketing investment we've ever made.",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Digital Marketing Manager",
    company: "Innovate Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "The predictive analytics feature helped us identify trends before our competitors. We've stayed ahead of the market and our revenue has grown by 250% this quarter.",
  },
  {
    id: 4,
    name: "David Park",
    role: "Growth Hacker",
    company: "StartupX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "As a startup, we needed every marketing dollar to count. ADmyBRAND's AI optimization reduced our CAC by 60% while tripling our conversion rate. Incredible results!",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "Creative Agency",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "The creative automation tools are phenomenal. We're producing 3x more content while maintaining quality. The AI understands our brand voice perfectly.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "eCommerce Director",
    company: "Retail Plus",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    quote: "Our conversion rates skyrocketed by 280% after implementing ADmyBRAND. The personalization engine is incredibly sophisticated and drives real results.",
  },
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Loved by Thousands</span>
            <br />
            of Marketing Teams
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how businesses like yours are achieving incredible results with 
            ADmyBRAND AI Suite's intelligent marketing automation.
          </p>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative mb-12 stagger-parent">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto horizontal-scroll pb-4 cursor-grab active:cursor-grabbing"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x'
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-none w-80 sm:w-96 scroll-snap-align-start stagger-child"
                style={{ scrollSnapAlign: 'start' }}
              >
                <GlassCard 
                  variant="hover"
                  className="h-full hover-scale-lift ripple-effect group"
                >
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-warning fill-current hover-glow-purple transition-all duration-300 group-hover:scale-110" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg leading-relaxed text-foreground mb-8 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 hover-glow-purple transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-full gradient-lavender opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-primary font-medium group-hover:glow-purple transition-all duration-300">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Instruction Text */}
        <div className="text-center fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span className="hidden sm:inline">Drag to explore more testimonials</span>
            <span className="sm:hidden">Swipe to explore more testimonials</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Active Users", value: "25,000+" },
            { label: "ROI Increase", value: "340%" },
            { label: "Time Saved", value: "15hrs/week" },
            { label: "Success Rate", value: "98%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center fade-in-up hover-scale-lift"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}