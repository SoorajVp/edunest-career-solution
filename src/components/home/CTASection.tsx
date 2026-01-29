import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors. 
            Your dream college is just one consultation away!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+919656265345">
                <Phone className="mr-1 w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
