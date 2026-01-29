import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, GraduationCap, IndianRupee, Search, Building2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/home/CTASection";

const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology (IIT) Delhi",
    location: "New Delhi",
    type: "Engineering",
    rating: 4.9,
    ranking: 1,
    courses: ["B.Tech", "M.Tech", "Ph.D."],
    feeRange: "₹2.5L - ₹3L per year",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad, Gujarat",
    type: "Management",
    rating: 4.9,
    ranking: 1,
    courses: ["MBA", "PGDM", "Executive MBA"],
    feeRange: "₹23L - ₹25L total",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: 3,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi",
    type: "Medical",
    rating: 4.9,
    ranking: 1,
    courses: ["MBBS", "MD", "MS", "DM"],
    feeRange: "₹5,000 - ₹10,000 per year",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: 4,
    name: "National Law School of India University",
    location: "Bangalore, Karnataka",
    type: "Law",
    rating: 4.8,
    ranking: 1,
    courses: ["BA LLB", "LLM", "Ph.D."],
    feeRange: "₹2.5L - ₹3L per year",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 5,
    name: "Delhi University",
    location: "New Delhi",
    type: "Arts & Science",
    rating: 4.5,
    ranking: 5,
    courses: ["BA", "B.Sc", "B.Com", "MA", "M.Sc"],
    feeRange: "₹15,000 - ₹50,000 per year",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 6,
    name: "Jawaharlal Nehru University (JNU)",
    location: "New Delhi",
    type: "Arts & Science",
    rating: 4.6,
    ranking: 3,
    courses: ["BA", "MA", "M.Phil", "Ph.D."],
    feeRange: "₹10,000 - ₹30,000 per year",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 7,
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    type: "Engineering",
    rating: 4.7,
    ranking: 4,
    courses: ["B.E.", "M.E.", "MBA", "Ph.D."],
    feeRange: "₹5L - ₹6L per year",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 8,
    name: "St. Stephen's College",
    location: "New Delhi",
    type: "Arts & Science",
    rating: 4.6,
    ranking: 2,
    courses: ["BA", "B.Sc", "M.A."],
    feeRange: "₹30,000 - ₹60,000 per year",
    image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 9,
    name: "National Institute of Design (NID)",
    location: "Ahmedabad, Gujarat",
    type: "Design",
    rating: 4.7,
    ranking: 1,
    courses: ["B.Des", "M.Des", "Ph.D."],
    feeRange: "₹3L - ₹4L per year",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

const collegeTypes = ["All", "Engineering", "Medical", "Management", "Law", "Arts & Science", "Design"];
const locations = ["All Locations", "New Delhi", "Ahmedabad, Gujarat", "Bangalore, Karnataka", "Pilani, Rajasthan"];

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          college.courses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === "All" || college.type === selectedType;
    const matchesLocation = selectedLocation === "All Locations" || college.location === selectedLocation;
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Top Colleges</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Explore India's Best Colleges
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover detailed information about top-ranked colleges, their courses, 
              fee structures, and admission processes. Make an informed decision for your future.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-y border-border sticky top-16 md:top-20 z-40">
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges or courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="College Type" />
              </SelectTrigger>
              <SelectContent>
                {collegeTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-56">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* College List */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <strong className="text-foreground">{filteredColleges.length}</strong> colleges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college, index) => (
              <AnimatedCard key={college.id} delay={index * 0.05}>
                <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/30 transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {college.featured && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-xs font-medium">{college.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-semibold text-foreground leading-tight line-clamp-2">
                        {college.name}
                      </h3>
                      <Badge variant="secondary" className="flex-shrink-0">
                        #{college.ranking}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {college.courses.slice(0, 3).map((course, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                        >
                          {course}
                        </span>
                      ))}
                      {college.courses.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                          +{college.courses.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm">
                        <IndianRupee className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">{college.feeRange}</span>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        <Link to="/fees">
                          View Details
                          <ExternalLink className="ml-1 w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No colleges found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
