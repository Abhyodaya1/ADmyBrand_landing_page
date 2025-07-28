import { useState } from "react";
import { GlassCard, CardHeader, CardTitle, CardContent } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <GlassCard variant="featured" className="text-center">
        <CardContent className="p-8">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold gradient-text mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <GlassButton 
            variant="hero" 
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </GlassButton>
        </CardContent>
      </GlassCard>
    );
  }

  return (
    <GlassCard variant="featured">
      <CardHeader>
        <CardTitle className="text-2xl gradient-text text-center">
          Get in Touch
        </CardTitle>
        <p className="text-muted-foreground text-center">
          Ready to transform your marketing? Let's talk about your goals.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                errors.name 
                  ? "border-destructive focus:ring-destructive/50" 
                  : "border-glass-border/30 focus:ring-primary/50"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="flex items-center space-x-2 mt-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? "border-destructive focus:ring-destructive/50" 
                  : "border-glass-border/30 focus:ring-primary/50"
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="flex items-center space-x-2 mt-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-input/50 border border-glass-border/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Your company name"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.message 
                  ? "border-destructive focus:ring-destructive/50" 
                  : "border-glass-border/30 focus:ring-primary/50"
              }`}
              placeholder="Tell us about your marketing goals and challenges..."
            />
            {errors.message && (
              <div className="flex items-center space-x-2 mt-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <GlassButton
            type="submit"
            variant="hero"
            size="lg"
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </GlassButton>
        </form>
      </CardContent>
    </GlassCard>
  );
}