
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  children
}: HeroSectionProps) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
    
  return (
    <section 
      className="relative py-20 md:py-32 bg-brand-navy overflow-hidden" 
      style={bgStyle}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      )}
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-4 animate-fade-in text-brand-pink">{title}</h1>
          <p className="subheading mb-8 max-w-2xl mx-auto animate-slide-up text-white/90" style={{animationDelay: '200ms'}}>
            {subtitle}
          </p>
          <Link to={buttonLink}>
            <Button 
              className="btn-primary animate-slide-up"
              style={{animationDelay: '400ms'}}
            >
              {buttonText}
            </Button>
          </Link>
          {children}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
