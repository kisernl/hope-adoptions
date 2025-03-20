
import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import FamilyCard from "@/components/FamilyCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

// Sample data for waiting families
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

const WaitingFamilies = () => {
  useEffect(() => {
    document.title = "Waiting Families | Hope Adoptions";
  }, []);

  return (
    <>
      <PageHeader
        title="Waiting Adoptive Families"
        subtitle="Meet the families who are ready to open their hearts and homes through adoption."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 loaded">
            <h2 className="heading-md text-brand-navy mb-4">
              Finding the Perfect Match
            </h2>
            <p className="text-gray-600">
              These families have completed their home studies and are approved to adopt. 
              They are eagerly waiting to be matched with a child. Click on a family to 
              learn more about them and their adoption journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {families.map((family) => (
              <FamilyCard key={family.id} family={family} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">Considering Adoption?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            If you're exploring adoption for your child, we're here to support you through every
            step of your journey. Our compassionate team provides free, confidential guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-brand-navy hover:bg-brand-lightBlue hover:text-brand-navy min-w-[180px]">
                Contact Us
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 min-w-[180px]">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitingFamilies;
