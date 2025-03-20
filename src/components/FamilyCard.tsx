
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface Family {
  id: string;
  name: string;
  image: string;
  location: string;
  brief: string;
  bio: string;
}

interface FamilyCardProps {
  family: Family;
}

const FamilyCard = ({ family }: FamilyCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md lazy-load">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={family.image} 
          alt={family.name} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-brand-navy mb-2">{family.name}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{family.location}</span>
        </div>
        <p className="text-gray-600">{family.brief}</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 px-6">
        <Link to={`/waiting-families/${family.id}`} className="w-full">
          <Button variant="outline" className="w-full border-brand-navy text-brand-navy hover:bg-brand-navy/5">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FamilyCard;
