
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, MapPin } from "lucide-react";
import UnderConstruction from "@/components/UnderConstruction";

// Sample data for waiting families (same as in WaitingFamilies.tsx)
const families = [
  {
    id: "johnson",
    name: "The Johnson Family",
    image: "/assets/Family_1.png",
    location: "Birmingham, AL",
    brief: "Loving couple excited to welcome a child into their hearts and home.",
    bio: "Mike and Sarah Johnson have been married for 7 years and live in Birmingham with their golden retriever, Max. Mike works as a high school teacher and Sarah is a pediatric nurse. They enjoy hiking, board games, and community service. After struggling with infertility, they are excited about growing their family through adoption and providing a loving, stable home for a child."
  },
  {
    id: "williams",
    name: "The Williams Family",
    image: "/assets/Family_2.png",
    location: "Montgomery, AL",
    brief: "Active couple ready to share their adventures and love with a child.",
    bio: "James and Emily Williams have been married for 5 years and live in Montgomery. James works in IT and Emily is a graphic designer who works from home. They are an active couple who enjoy outdoor activities, traveling, and cooking together. They have a strong support system of family and friends and are excited about the journey of adoption and sharing their lives with a child."
  },
  {
    id: "garcia",
    name: "The Garcia Family",
    image: "/assets/sq-hands-3.png",
    location: "Auburn, AL",
    brief: "Warm and nurturing family eager to expand through adoption.",
    bio: "Carlos and Lisa Garcia, along with their 8-year-old son Miguel, live in Auburn where Carlos teaches Spanish at the university and Lisa works as a social worker. They enjoy music, gardening, and family game nights. They have always planned to grow their family through adoption and are excited about welcoming another child into their loving home."
  },
  {
    id: "miller",
    name: "The Miller Family",
    image: "/assets/hands-1.png",
    location: "Huntsville, AL",
    brief: "Fun-loving couple ready to provide a stable and joyful home.",
    bio: "Ryan and Jessica Miller have been married for 3 years and live in Huntsville. Ryan is an aerospace engineer and Jessica is an elementary school teacher. They enjoy camping, DIY projects, and volunteering with youth organizations. They are committed to open adoption and building a relationship with the birth family that will honor their child's story and heritage."
  }
];

const FamilyDetail = () => {
  const { familyId } = useParams<{ familyId: string }>();
  const [family, setFamily] = useState<typeof families[0] | undefined>();

  useEffect(() => {
    const foundFamily = families.find(f => f.id === familyId);
    setFamily(foundFamily);
    
    document.title = foundFamily 
      ? `${foundFamily.name} | Hope Adoptions` 
      : "Family Profile | Hope Adoptions";
  }, [familyId]);

  if (!family) {
    return <UnderConstruction pageName="This family profile" />;
  }

  return (
    <>
      <PageHeader
        title={family.name}
        subtitle="Learn more about this waiting adoptive family"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/waiting-families" className="inline-flex items-center text-brand-navy hover:text-brand-blue mb-8">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Families
            </Link>
            
            <Card className="overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={family.image} 
                    alt={family.name} 
                    className="w-full h-full object-cover aspect-square md:aspect-auto"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h1 className="heading-md text-brand-navy mb-4">{family.name}</h1>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin size={18} className="mr-2 text-brand-blue" />
                    <span>{family.location}</span>
                  </div>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-lg font-medium text-gray-700 mb-6">{family.brief}</p>
                    <p className="text-gray-600">{family.bio}</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="text-center">
              <h2 className="heading-sm text-brand-navy mb-6">Interested in learning more about {family.name.split(' ')[1]}?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white min-w-[200px]">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/waiting-families">
                  <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/5 min-w-[200px]">
                    View More Families
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-brand-pink/10">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-brand-navy mb-6">Your Support Makes a Difference</h2>
            <p className="text-gray-600 mb-8">
              Your donations help us connect children with loving families and provide 
              ongoing support throughout their adoption journey.
            </p>
            <Link to="/donate">
              <Button className="bg-[#51B9CD] hover:bg-[#51B9CD]/90 text-white">
                <Heart className="mr-2" size={18} />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FamilyDetail;
