
import { ReactNode } from "react";

interface Card {
  title: string;
  content: string;
  icon?: ReactNode;
}

interface CardSectionProps {
  title: string;
  subtitle: string;
  cards: Card[];
  className?: string;
}

const CardSection = ({ title, subtitle, cards, className = "" }: CardSectionProps) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg mb-4 text-brand-navy lazy-load">{title}</h2>
          <p className="subheading max-w-2xl mx-auto lazy-load">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-sm card-hover lazy-load"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {card.icon && (
                <div className="text-brand-blue mb-5">{card.icon}</div>
              )}
              <h3 className="heading-sm mb-4 text-brand-navy">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
