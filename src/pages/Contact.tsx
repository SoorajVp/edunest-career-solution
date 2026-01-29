import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["2nd floor, City Square Mall ", "Shoranur, Kerala - 679121"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9074629789", "+91 9656265345"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["edunest.shrr01@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["09:00 AM - 06:30PM"],
  },
];

const interests = [
  "Engineering & Technology",
  "Medical Sciences",
  "Management (MBA)",
  "Law",
  "Arts & Humanities",
  "Commerce & Finance",
  "Design",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent Successfully!",
      description: "Our counselor will contact you within 24 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Let's Start Your Journey Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about courses, colleges, or admissions? Our expert counselors 
              are here to help you make the right choice. Get in touch today!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Free Consultation</CardTitle>
                  <CardDescription>
                    Fill out the form below and our counselor will reach out to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-6">
                        We've received your inquiry. Our counselor will contact you soon.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="interest">Area of Interest *</Label>
                          <Select
                            value={formData.interest}
                            onValueChange={(value) => handleChange("interest", value)}
                            required
                          >
                            <SelectTrigger id="interest">
                              <SelectValue placeholder="Select your interest" />
                            </SelectTrigger>
                            <SelectContent>
                              {interests.map((interest) => (
                                <SelectItem key={interest} value={interest}>
                                  {interest}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your educational goals and how we can help..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 w-4 h-4" />
                            Submit Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Map */}
                <Card className="bg-card border-border overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      title="EduNest Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.97740202534015!2d76.26945529999999!3d10.762324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c5cbf16f02fb%3A0x6682f2717e4c60ab!2sEduNest%20Career%20Solutions!5e0!3m2!1sen!2sin!4v1769580159285!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Is the consultation really free?",
                a: "Yes! Your first consultation is completely free with no obligations.",
              },
              {
                q: "How long does the counseling process take?",
                a: "Initial assessment takes about 1 hour. Complete guidance spans 2-4 weeks.",
              },
              {
                q: "Do you help with admission applications?",
                a: "Yes, we provide end-to-end support including documentation and applications.",
              },
              {
                q: "Can you help with study abroad options?",
                a: "Absolutely! We have partnerships with universities across the globe.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
