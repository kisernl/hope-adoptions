
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`;

  const linkClasses = "text-brand-navy font-medium hover:text-brand-blue transition-colors duration-300";
  const activeLinkClasses = "text-brand-blue font-semibold";

  return (
    <nav className={navClasses}>
      <div className="container-custom flex justify-between items-center">
        <Link 
          to="/" 
          className="font-serif text-2xl font-bold text-brand-navy transition-all duration-300 hover:opacity-80 flex items-center gap-2"
          aria-label="Home"
        >
          <Heart className="text-brand-blue" size={24} />
          LovelyAdopt
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={location.pathname === "/" ? activeLinkClasses : linkClasses}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? activeLinkClasses : linkClasses}>
            About Us
          </Link>
          <Link to="/staff" className={location.pathname === "/staff" ? activeLinkClasses : linkClasses}>
            Our Staff
          </Link>
          <Link to="/resources" className={location.pathname === "/resources" ? activeLinkClasses : linkClasses}>
            Resources
          </Link>
          <Link to="/faq" className={location.pathname === "/faq" ? activeLinkClasses : linkClasses}>
            FAQ
          </Link>
          <Link to="/donate" className={location.pathname === "/donate" ? activeLinkClasses : linkClasses}>
            Donate
          </Link>
          <Link to="/contact">
            <Button className="btn-primary ml-2">Contact Us</Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-brand-navy"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 items-center">
          <Link to="/" className={`text-xl ${location.pathname === "/" ? activeLinkClasses : linkClasses}`}>
            Home
          </Link>
          <Link to="/about" className={`text-xl ${location.pathname === "/about" ? activeLinkClasses : linkClasses}`}>
            About Us
          </Link>
          <Link to="/staff" className={`text-xl ${location.pathname === "/staff" ? activeLinkClasses : linkClasses}`}>
            Our Staff
          </Link>
          <Link to="/resources" className={`text-xl ${location.pathname === "/resources" ? activeLinkClasses : linkClasses}`}>
            Resources
          </Link>
          <Link to="/faq" className={`text-xl ${location.pathname === "/faq" ? activeLinkClasses : linkClasses}`}>
            FAQ
          </Link>
          <Link to="/donate" className={`text-xl ${location.pathname === "/donate" ? activeLinkClasses : linkClasses}`}>
            Donate
          </Link>
          <Link to="/contact" className="w-full">
            <Button className="btn-primary w-full mt-4">Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
