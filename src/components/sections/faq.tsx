import { useState } from "react";
import { GlassCard, CardContent } from "@/components/ui/glass-card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

export function FAQScreen() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked</span><br />Questions
          </h2>
          <p className="text-xl text-muted-foreground">Can't find what you're looking for? Contact support.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <GlassCard
                key={faq.id}
                variant="interactive"
                className={`transition-all duration-300 ${isOpen ? "ring-1 ring-primary/30" : ""}`}
                onClick={() => toggleItem(faq.id)}
              >
                <CardContent className="p-0">
                  {/* Question Header */}
                  <div className="flex items-center justify-between p-3 cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Animated Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-glass-border/30 mb-4" />
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
