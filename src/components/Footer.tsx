
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="font-serif text-2xl font-bold text-brand-navy inline-block">
              LovelyAdopt
            </Link>
            <p className="text-gray-600 mt-4">
              Creating forever families through compassionate adoption services, guidance, and support.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-brand-navy hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-navy hover:text-brand-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-navy hover:text-brand-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">Adoption Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#open-adoption" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Open Adoption
                </a>
              </li>
              <li>
                <a href="#semi-open-adoption" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Semi-Open Adoption
                </a>
              </li>
              <li>
                <a href="#closed-adoption" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Closed Adoption
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-blue" />
                <span className="text-gray-600">123 Caring Street, Love City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-blue" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-blue transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-blue" />
                <a href="mailto:info@lovelyadopt.com" className="text-gray-600 hover:text-brand-blue transition-colors">
                  info@lovelyadopt.com
                </a>
              </li>
            </ul>
            
            {/* Added Donate Button - Updated color */}
            <div className="mt-6">
              <Link to="/donate">
                <Button className="w-full bg-[#51B9CD] hover:bg-[#51B9CD]/90 text-white font-semibold">
                  <Heart className="mr-2" size={18} />
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm flex flex-col sm:flex-row items-center justify-center">
            <span>© {currentYear} LovelyAdopt. All rights reserved.</span> 
            <span className="flex items-center sm:ml-1">
              Made with <Heart size={14} className="text-brand-blue mx-1" fill="#51B9CD" /> for families everywhere.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
