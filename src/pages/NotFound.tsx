
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | LovelyAdopt";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-pink/10 px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 text-brand-blue">
          <MapPin size={64} className="mx-auto" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-navy">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          We can't seem to find the page you're looking for. Let's get you back on track to finding your forever family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="btn-primary min-w-[160px]">
              Return Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 min-w-[160px]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
