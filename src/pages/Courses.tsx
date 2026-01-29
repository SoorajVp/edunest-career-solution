import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, Stethoscope, Building, Palette, Scale, 
  Calculator, Plane, Hotel, FlaskConical, Cpu, ArrowRight, BookOpen 
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const courseCategories = [
  {
    icon: Code,
    title: "Engineering & Technology",
    description: "Computer Science, Mechanical, Civil, Electronics, and more",
    courses: ["B.Tech/B.E.", "M.Tech", "BCA", "MCA", "Diploma Engineering"],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Medical & Healthcare",
    description: "MBBS, Nursing, Pharmacy, and allied health sciences",
    courses: ["MBBS", "BDS", "B.Pharm", "Nursing", "Physiotherapy"],
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Building,
    title: "Management & Business",
    description: "MBA, BBA, and professional business programs",
    courses: ["MBA", "BBA", "PGDM", "Executive MBA", "Entrepreneurship"],
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Scale,
    title: "Law & Legal Studies",
    description: "LLB, LLM, and integrated law programs",
    courses: ["BA LLB", "BBA LLB", "LLM", "Corporate Law", "Criminal Law"],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Palette,
    title: "Arts & Design",
    description: "Fine arts, fashion, interior design, and creative fields",
    courses: ["B.Des", "BFA", "Fashion Design", "Interior Design", "Animation"],
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Calculator,
    title: "Commerce & Finance",
    description: "CA, CS, accounting, and financial management",
    courses: ["B.Com", "M.Com", "CA", "CS", "CFA"],
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: FlaskConical,
    title: "Science & Research",
    description: "Pure sciences, research programs, and specialized studies",
    courses: ["B.Sc", "M.Sc", "Integrated Ph.D.", "Biotechnology", "Chemistry"],
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
    description: "Hotel management, culinary arts, and travel & tourism",
    courses: ["BHM", "BA Tourism", "Culinary Arts", "Event Management"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Plane,
    title: "Aviation",
    description: "Pilot training, aviation management, and cabin crew",
    courses: ["Commercial Pilot", "Aviation Management", "Air Hostess Training"],
    color: "bg-sky-500/10 text-sky-600",
  },
];

const careerPaths = [
  {
    title: "After 10th Standard",
    description: "Diploma courses, ITI, polytechnic options for early career start",
    paths: ["Diploma Engineering", "ITI Courses", "Polytechnic", "10+2 Streams"],
  },
  {
    title: "After 12th Standard",
    description: "Undergraduate programs in various streams",
    paths: ["Engineering", "Medical", "Arts", "Commerce", "Science"],
  },
  {
    title: "After Graduation",
    description: "Postgraduate and professional certification programs",
    paths: ["MBA/PGDM", "M.Tech", "Law", "Civil Services", "Abroad Studies"],
  },
  {
    title: "Working Professionals",
    description: "Part-time, distance, and executive programs",
    paths: ["Executive MBA", "Online Degrees", "Certifications", "Skill Courses"],
  },
];

export default function Courses() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Course Guidance</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Find Your Perfect Course
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore diverse career paths and educational opportunities. Our expert counselors 
              help you choose the course that matches your interests and career goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Categories */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Course Categories
            </h2>
            <p className="text-muted-foreground">
              Browse through our comprehensive list of course categories and find what suits you best.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category, index) => (
              <AnimatedCard key={index} delay={index * 0.05}>
                <Card className="h-full border-border hover:border-primary/30 transition-colors group bg-card">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg ${category.color} flex items-center justify-center mb-2`}>
                      <category.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.courses.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      {/* <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Career Paths</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Choose Your Path Based on Your Stage
            </h2>
            <p className="text-muted-foreground">
              Different life stages require different guidance. Find resources tailored to where you are now.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((path, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="h-full bg-card border-border hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{path.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {path.paths.map((p, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Guidance Banner */}
      <section className="section-padding bg-primary/5">
        <div className="container-main">
          <AnimatedSection className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Need Personalized Course Guidance?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our expert counselors will analyze your aptitude, interests, and career 
                  goals to recommend the perfect course and college combination for you.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">
                    Get Free Counseling Session
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                  alt="Student studying"
                  className="rounded-xl shadow-soft"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
