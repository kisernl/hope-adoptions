import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundVideo,
  children,
}: HeroSectionProps) => {
  // Define background style based on image (used as fallback)
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        loading: "lazy",
      }
    : {};

  return (
    <section
      className="relative py-20 md:py-32 bg-brand-navy overflow-hidden loaded h-screen flex items-center justify-center"
      style={backgroundVideo ? {} : bgStyle}
    >
      {/* Video Background */}
      {backgroundVideo && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute min-w-full min-h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={backgroundVideo}
              // src="./assests/HopeAdoptions_VideoBanner.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Image Fallback with overlay */}
      {backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-4 animate-fade-in text-brand-pink">
            {title}
          </h1>
          <p
            className="subheading mb-8 max-w-2xl mx-auto animate-slide-up text-white/90"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
          <Link to={buttonLink}>
            <Button
              className="bg-brand-pink hover:bg-brand-pink/90 text-brand-navy font-medium animate-slide-up"
              style={{ animationDelay: "400ms" }}
            >
              {buttonText}
            </Button>
          </Link>
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
