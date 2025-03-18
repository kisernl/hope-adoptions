
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TextSectionProps {
  title: string;
  content: string | ReactNode;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  reverseOrder?: boolean;
  className?: string;
}

const TextSection = ({
  title,
  content,
  buttonText,
  buttonLink,
  imageUrl,
  reverseOrder = false,
  className = ""
}: TextSectionProps) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${reverseOrder ? 'md:flex-row-reverse' : ''}`}>
          <div className={`space-y-6 ${reverseOrder ? 'md:order-2' : ''}`}>
            <h2 className="heading-lg text-brand-navy lazy-load">{title}</h2>
            <div className="text-gray-600 space-y-4 lazy-load">
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
            {buttonText && buttonLink && (
              <div className="pt-4 lazy-load">
                <Link to={buttonLink}>
                  <Button className="btn-secondary">{buttonText}</Button>
                </Link>
              </div>
            )}
          </div>
          
          {imageUrl && (
            <div className={`${reverseOrder ? 'md:order-1' : ''}`}>
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg w-full h-auto shadow-md lazy-load" 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSection;
