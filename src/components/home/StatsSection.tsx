import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { GraduationCap, Building2, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Students Guided",
    description: "Successfully placed in top colleges",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Partner Colleges",
    description: "Across India ",
  },
  {
    icon: GraduationCap,
    value: "100+",
    label: "Courses Offered",
    description: "From engineering to arts",
  },
  {
    icon: Award,
    value: "7+",
    label: "Years Experience",
    description: "In educational consultancy",
  },
];

export function StatsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-lg font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
