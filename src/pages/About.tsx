import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make puts our students' best interests at the forefront.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in all our services and maintain the highest standards.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Honest and transparent guidance with no hidden agendas or biases.",
  },
  {
    icon: Clock,
    title: "Commitment",
    description: "Dedicated support throughout your educational journey, from start to finish.",
  },
];

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Meera Gupta",
    role: "Head of Counseling",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Arjun Singh",
    role: "Senior Education Consultant",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Kavitha Nair",
    role: "Admissions Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Shaping Futures, One Student at a Time
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 7 years of experience in educational consultancy, EduNest has been 
              the trusted partner for thousands of students in their academic journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="EduNest team collaborating"
                className="rounded-2xl shadow-elevated"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2019, EduNest began with a simple mission: to provide unbiased, 
                expert guidance to students confused about their educational choices. What 
                started as a small consultancy in Delhi has now grown into one of India's 
                most trusted educational consulting firms.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founder, Mr. Adarsh M, experienced firsthand the challenges students 
                face when making crucial educational decisions. This inspired him to create 
                a platform where students receive personalized, honest advice based on their 
                unique strengths and aspirations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, with a team of 20+ dedicated counselors and partnerships with 100+ 
                colleges, we continue to uphold our commitment: <strong>"We Connect, We Lead."</strong>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Card className="h-full bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower every student with the knowledge and guidance they need to make 
                    informed educational decisions, ensuring they find the perfect institution 
                    and course that aligns with their career aspirations and personal goals.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="h-full bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted educational consultancy in India, known for 
                    our integrity, expertise, and commitment to student success. We envision 
                    a future where every student has access to quality guidance regardless 
                    of their background.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              What We Stand For
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="h-full text-center bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground">
              Our team of experienced educators and counselors are dedicated to your success.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <div className="text-center group">
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      <CTASection />
    </Layout>
  );
}
