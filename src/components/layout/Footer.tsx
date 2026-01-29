import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Careers", path: "/contact" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Course Guidance", path: "/courses" },
    { name: "College Selection", path: "/colleges" },
    { name: "Fee Structure", path: "/fees" },
    { name: "Career Counseling", path: "/courses" },
  ],
  resources: [
    { name: "Blog", path: "/" },
    { name: "FAQs", path: "/contact" },
    { name: "Testimonials", path: "/about" },
    { name: "Success Stories", path: "/about" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="EduNest Logo" className="h-10" />
              </div>
              {/* <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-background">EduNest</span>
                <span className="text-[10px] text-background/70 -mt-1">Build Your Career</span>
              </div> */}
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              We Connect, We Lead. Your trusted partner in educational consultancy, 
              helping students make informed decisions about their academic future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span className="text-sm text-background/70">
                  2nd floor, City Square Mall,Shoranur<br />Kerala 679121 - India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919656265345" className="text-sm text-background/70 hover:text-primary transition-colors">
                  +91 9656265345
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="edunest.shrr01@gmail.com" className="text-sm text-background/70 hover:text-primary transition-colors">
                  edunest.shrr01@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} EduNest. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
