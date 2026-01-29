import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Info, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const feeData = {
  engineering: {
    title: "Engineering & Technology",
    description: "Fee structures for top engineering colleges across India",
    institutions: [
      { name: "IIT (All Campuses)", tuition: "₹2,00,000", hostel: "₹50,000", total: "₹2,50,000", duration: "4 Years" },
      { name: "NIT (All Campuses)", tuition: "₹1,25,000", hostel: "₹40,000", total: "₹1,65,000", duration: "4 Years" },
      { name: "BITS Pilani", tuition: "₹5,00,000", hostel: "₹1,50,000", total: "₹6,50,000", duration: "4 Years" },
      { name: "VIT Vellore", tuition: "₹2,00,000", hostel: "₹1,00,000", total: "₹3,00,000", duration: "4 Years" },
      { name: "SRM University", tuition: "₹2,50,000", hostel: "₹1,00,000", total: "₹3,50,000", duration: "4 Years" },
    ],
  },
  medical: {
    title: "Medical Sciences",
    description: "Fee structures for top medical colleges",
    institutions: [
      { name: "AIIMS Delhi", tuition: "₹5,000", hostel: "₹5,000", total: "₹10,000", duration: "5.5 Years" },
      { name: "JIPMER", tuition: "₹8,000", hostel: "₹12,000", total: "₹20,000", duration: "5.5 Years" },
      { name: "CMC Vellore", tuition: "₹70,000", hostel: "₹40,000", total: "₹1,10,000", duration: "5.5 Years" },
      { name: "Maulana Azad Medical", tuition: "₹15,000", hostel: "₹20,000", total: "₹35,000", duration: "5.5 Years" },
      { name: "Private Medical Colleges", tuition: "₹10-25 Lakhs", hostel: "₹1-2 Lakhs", total: "₹11-27 Lakhs", duration: "5.5 Years" },
    ],
  },
  management: {
    title: "Management (MBA/PGDM)",
    description: "Fee structures for top B-schools",
    institutions: [
      { name: "IIM Ahmedabad", tuition: "₹23,00,000", hostel: "Included", total: "₹23,00,000", duration: "2 Years" },
      { name: "IIM Bangalore", tuition: "₹24,50,000", hostel: "Included", total: "₹24,50,000", duration: "2 Years" },
      { name: "XLRI Jamshedpur", tuition: "₹25,00,000", hostel: "₹2,00,000", total: "₹27,00,000", duration: "2 Years" },
      { name: "FMS Delhi", tuition: "₹1,92,000", hostel: "N/A", total: "₹1,92,000", duration: "2 Years" },
      { name: "ISB Hyderabad", tuition: "₹42,00,000", hostel: "Included", total: "₹42,00,000", duration: "1 Year" },
    ],
  },
  law: {
    title: "Law Programs",
    description: "Fee structures for top law schools",
    institutions: [
      { name: "NLSIU Bangalore", tuition: "₹2,50,000", hostel: "₹80,000", total: "₹3,30,000", duration: "5 Years" },
      { name: "NALSAR Hyderabad", tuition: "₹2,25,000", hostel: "₹75,000", total: "₹3,00,000", duration: "5 Years" },
      { name: "NLU Delhi", tuition: "₹1,75,000", hostel: "₹60,000", total: "₹2,35,000", duration: "5 Years" },
      { name: "NUJS Kolkata", tuition: "₹2,00,000", hostel: "₹70,000", total: "₹2,70,000", duration: "5 Years" },
      { name: "Faculty of Law DU", tuition: "₹15,000", hostel: "₹25,000", total: "₹40,000", duration: "3 Years" },
    ],
  },
};

const scholarships = [
  {
    name: "National Scholarship Portal",
    eligibility: "Merit-based & Means-based for various categories",
    amount: "Varies by scheme",
  },
  {
    name: "AICTE Pragati & Saksham",
    eligibility: "Girl students in technical courses",
    amount: "₹50,000/year",
  },
  {
    name: "Central Sector Scheme",
    eligibility: "Top 20% in Class 12 boards",
    amount: "₹20,000-25,000/year",
  },
  {
    name: "State Government Scholarships",
    eligibility: "Varies by state",
    amount: "Partial to Full Fee Waiver",
  },
  {
    name: "Institution-specific Aid",
    eligibility: "Merit & Financial need",
    amount: "Up to 100% Fee Waiver",
  },
];

export default function Fees() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Fee Structure</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Transparent Fee Information
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compare fee structures of top colleges across different streams. 
              Plan your education budget with accurate, up-to-date information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Fee Tables */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-4">
              {Object.entries(feeData).map(([key, data]) => (
                <AccordionItem key={key} value={key} className="border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IndianRupee className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-foreground">{data.title}</h3>
                        <p className="text-sm text-muted-foreground font-normal">{data.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="rounded-lg border border-border overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-secondary/50">
                            <TableHead className="font-semibold">Institution</TableHead>
                            <TableHead className="font-semibold">Tuition Fee/Year</TableHead>
                            <TableHead className="font-semibold">Hostel Fee/Year</TableHead>
                            <TableHead className="font-semibold">Total/Year</TableHead>
                            <TableHead className="font-semibold">Duration</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {data.institutions.map((inst, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{inst.name}</TableCell>
                              <TableCell>{inst.tuition}</TableCell>
                              <TableCell>{inst.hostel}</TableCell>
                              <TableCell className="font-semibold text-primary">{inst.total}</TableCell>
                              <TableCell>
                                <Badge variant="secondary">{inst.duration}</Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <p>Fees mentioned are approximate and subject to change. Contact us for the latest fee structure.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Scholarships */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Financial Aid</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
              Scholarships & Education Loans
            </h2>
            <p className="text-muted-foreground">
              Don't let finances stop your dreams. Explore various scholarship and loan options available.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Eligibility</p>
                        <p className="text-sm text-foreground">{scholarship.eligibility}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Amount</p>
                        <p className="text-sm font-semibold text-primary">{scholarship.amount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Education Loan Info */}
          <AnimatedSection delay={0.3} className="mt-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl">Education Loan Options</CardTitle>
                <CardDescription>
                  We help you navigate education loan options from leading banks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-primary mb-1">4-12%</p>
                    <p className="text-sm text-muted-foreground">Interest Rates</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-primary mb-1">₹20L+</p>
                    <p className="text-sm text-muted-foreground">Loan Amount</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-primary mb-1">15 Years</p>
                    <p className="text-sm text-muted-foreground">Repayment Period</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-secondary/50">
                    <p className="text-2xl font-bold text-primary mb-1">Tax Benefits</p>
                    <p className="text-sm text-muted-foreground">Section 80E</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
