import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </Layout>
  );
}
