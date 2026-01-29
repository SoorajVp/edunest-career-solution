import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Engineering Student, IIT Delhi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "EduNest helped me navigate the complex admission process for IIT. Their guidance was invaluable in choosing the right branch and preparing for counseling.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MBA Student, IIM Ahmedabad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "The career counseling sessions opened my eyes to possibilities I hadn't considered. Thanks to EduNest, I'm now pursuing my dream at IIM Ahmedabad.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Medical Student, AIIMS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    quote: "From NEET preparation guidance to AIIMS admission, EduNest was with me every step of the way. Highly recommend their services!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-muted-foreground">
            Hear from students who achieved their dreams with our guidance and support.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="h-full bg-card border-border hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
