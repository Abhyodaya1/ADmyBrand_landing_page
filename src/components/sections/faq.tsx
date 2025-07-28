import { useState } from "react";
import { GlassCard, CardContent } from "@/components/ui/glass-card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most customers see significant improvements within the first 7-14 days. Our AI algorithms begin optimizing your campaigns immediately, with measurable ROI improvements typically visible within the first month. Some clients have reported up to 300% conversion increases in their first quarter.",
  },
  {
    id: 2,
    question: "What integrations does ADmyBRAND support?",
    answer: "ADmyBRAND integrates with all major marketing platforms including Google Ads, Facebook Ads, Instagram, LinkedIn, Twitter, TikTok, Shopify, WooCommerce, HubSpot, Salesforce, Mailchimp, and 50+ other popular tools. Our API also supports custom integrations for enterprise clients.",
  },
  {
    id: 3,
    question: "Is my data secure with ADmyBRAND?",
    answer: "Absolutely. We use bank-level encryption, are SOC 2 certified, and fully GDPR compliant. Your data is encrypted in transit and at rest, with regular security audits and penetration testing. We never share your data with third parties and you maintain full ownership of your information.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. You'll continue to have access to all features until the end of your current billing period. We also offer a 14-day free trial so you can test everything risk-free before committing.",
  },
  {
    id: 5,
    question: "Do you offer support and training?",
    answer: "We provide comprehensive 24/7 support across all plans. This includes live chat, email support, detailed documentation, video tutorials, and webinars. Professional and Enterprise plans also include dedicated account managers and custom training sessions for your team.",
  },
  {
    id: 6,
    question: "How does the AI actually improve my marketing performance?",
    answer: "Our AI analyzes thousands of data points including audience behavior, campaign performance, market trends, and conversion patterns. It automatically optimizes bidding strategies, adjusts targeting parameters, tests creative variations, and identifies the best performing combinations to maximize your ROI in real-time.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
            <span className="gradient-text">Frequently Asked</span>
            <br />
            Questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            
            return (
              <GlassCard
                key={faq.id}
                variant="interactive"
                className={`fade-in-up transition-all duration-300 ${
                  isOpen ? "ring-1 ring-primary/30" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => toggleItem(faq.id)}
              >
                <CardContent className="p-0">
                  {/* Question */}
                  <div className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-primary transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-glass-border/30 mb-4" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <GlassCard variant="featured" className="inline-block">
            <CardContent className="text-center p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert team is here to help you succeed with AI marketing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Contact Support
                </button>
                <button className="btn-glass">
                  Schedule Demo
                </button>
              </div>
            </CardContent>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}