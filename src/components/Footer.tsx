import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-4">
            <Link
              to="/"
              className="font-serif text-2xl font-bold text-brand-navy inline-block"
            >
              Hope Adoptions
            </Link>
            <p className="text-gray-600 mt-4">
              Creating forever families through compassionate adoption services,
              guidance, and support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Resources
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Vision
            </h3>
            <p className="text-gray-600 mt-4">
              As an extension of the ministry of Women's Hope Medical Clinic,
              Hope Adoptions exists to glorify God thorugh sharing the gospel of
              Christ while empowering individuals to make healthy Godly
              decisions for life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-brand-navy">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-blue" />
                <span className="text-gray-600">
                  820 Stage Road <br /> Auburn, AL 36830
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-blue" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  (334) 502-7000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-blue" />
                <a
                  href="mailto:info@lovelyadopt.com"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  contact@hopeadoptions.org
                </a>
              </li>
            </ul>

            {/* Donate Button */}
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

        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              © {currentYear} Hope Adoptions. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Web design and hosting by Mayfly Creative
              <span className="mx-2 inline-block">•</span>
              <span className="inline-block">
                Made with{" "}
                <Heart
                  size={14}
                  className="text-brand-blue mx-1 inline"
                  fill="#51B9CD"
                />{" "}
                for families everywhere.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
