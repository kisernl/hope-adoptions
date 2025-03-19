import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Home } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

  // For mobile menu - always light with dark text
  const mobileNavClasses =
    "fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out";

  // For desktop navbar
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHomePage ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`;

  // Link classes based on home page and scroll position
  const linkClasses =
    scrolled || !isHomePage
      ? "text-brand-navy font-medium hover:text-brand-blue transition-colors duration-300"
      : "text-white font-medium hover:text-brand-pink/90 transition-colors duration-300";

  const activeLinkClasses =
    scrolled || !isHomePage
      ? "text-brand-blue font-semibold"
      : "text-brand-pink font-semibold";

  return (
    <nav className={navClasses}>
      <div className="container-custom flex justify-between items-center">
        <Link
          to="/"
          className={`font-serif text-2xl font-semibold transition-all duration-300 hover:opacity-80 flex items-center gap-2 ${
            scrolled || !isHomePage ? "text-brand-navy" : "text-white"
          }`}
          aria-label="Home"
        >
          <Heart
            className={
              scrolled || !isHomePage ? "text-brand-blue" : "text-brand-pink"
            }
            size={24}
          />
          Hope Adoptions
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? activeLinkClasses : linkClasses
            }
          >
            About Us
          </Link>
          <Link
            to="/resources"
            className={
              location.pathname === "/resources"
                ? activeLinkClasses
                : linkClasses
            }
          >
            Resources
          </Link>
          <Link
            to="/faq"
            className={
              location.pathname === "/faq" ? activeLinkClasses : linkClasses
            }
          >
            FAQ
          </Link>
          <Link to="/contact">
            <Button
              className={
                scrolled || !isHomePage
                  ? "bg-brand-navy hover:bg-brand-navy/90 text-white"
                  : "bg-brand-pink hover:bg-brand-pink/90 text-brand-navy"
              }
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${
            scrolled || !isHomePage ? "text-brand-navy" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer - Always light with dark text */}
      <div
        className={`${mobileNavClasses} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-brand-navy"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col space-y-6 items-center">
          <Link
            to="/"
            className={`text-xl ${
              location.pathname === "/"
                ? "text-brand-blue font-semibold"
                : "text-brand-navy font-medium hover:text-brand-blue"
            } flex items-center gap-2`}
          >
            <Home size={20} />
            Home
          </Link>
          <Link
            to="/about"
            className={`text-xl ${
              location.pathname === "/about"
                ? "text-brand-blue font-semibold"
                : "text-brand-navy font-medium hover:text-brand-blue"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/resources"
            className={`text-xl ${
              location.pathname === "/resources"
                ? "text-brand-blue font-semibold"
                : "text-brand-navy font-medium hover:text-brand-blue"
            }`}
          >
            Resources
          </Link>
          <Link
            to="/faq"
            className={`text-xl ${
              location.pathname === "/faq"
                ? "text-brand-blue font-semibold"
                : "text-brand-navy font-medium hover:text-brand-blue"
            }`}
          >
            FAQ
          </Link>
          <Link to="/contact" className="w-full">
            <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white w-full mt-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
