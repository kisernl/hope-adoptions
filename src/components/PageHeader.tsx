
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-brand-lightBlue/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-lg mb-4 animate-fade-in text-brand-navy">{title}</h1>
          {subtitle && (
            <p className="subheading mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '200ms'}}>
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default PageHeader;
