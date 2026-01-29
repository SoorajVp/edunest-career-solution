import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Building2, Compass, GraduationCap, Users, FileText, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Career Counseling",
    description: "Personalized guidance to help you discover the right career path based on your interests and aptitude.",
    link: "/courses",
  },
  {
    icon: BookOpen,
    title: "Course Guidance",
    description: "Expert advice on choosing the best courses aligned with your career goals and academic background.",
    link: "/courses",
  },
  {
    icon: Building2,
    title: "College Selection",
    description: "Comprehensive information about top colleges, their rankings, and admission processes.",
    link: "/colleges",
  },
  {
    icon: FileText,
    title: "Admission Assistance",
    description: "End-to-end support for application forms, documentation, and admission procedures.",
    link: "/contact",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description: "Information about scholarships, financial aid, and education loans to fund your dreams.",
    link: "/fees",
  },
  {
    icon: Users,
    title: "Parent Counseling",
    description: "Special sessions for parents to understand career options and support their children's decisions.",
    link: "/contact",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            How We Help You Succeed
          </h2>
          <p className="text-muted-foreground">
            Comprehensive educational consulting services designed to guide you 
            at every step of your academic journey.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <Card className="h-full border-border hover:border-primary/30 transition-colors group bg-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
