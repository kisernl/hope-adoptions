
import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface StaffMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  credentials: string;
  funFact: string;
}

const Staff = () => {
  useEffect(() => {
    document.title = "Our Staff | LovelyAdopt";
  }, []);

  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Executive Director",
      bio: "Dr. Sarah Johnson has over 20 years of experience in adoption services. She founded LovelyAdopt with a mission to create ethical, supportive adoption experiences for all parties involved. Her approach emphasizes open communication, trauma-informed care, and ongoing support for adoptive families, birth parents, and adoptees. Sarah holds a Ph.D. in Social Work from Columbia University and has published extensively on best practices in adoption.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      credentials: "Ph.D. in Social Work, Licensed Clinical Social Worker (LCSW)",
      funFact: "Sarah has personally experienced adoption as both an adoptive parent and birth aunt, giving her unique insight into multiple perspectives."
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Family Services Coordinator",
      bio: "Michael Chen specializes in guiding families through the home study process and providing pre-adoption education. With a background in family therapy, Michael is skilled at helping prospective parents prepare for the emotional journey of adoption. He is particularly passionate about supporting families adopting children with special needs and has developed specialized training programs to equip parents with necessary resources. Michael joined LovelyAdopt in 2015 after working in international adoption for 8 years.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      credentials: "Master's in Family Therapy, Certified Adoption Counselor",
      funFact: "Michael speaks four languages and has facilitated adoptions in six different countries."
    },
    {
      id: 3,
      name: "Amara Washington",
      title: "Birth Parent Counselor",
      bio: "Amara Washington provides compassionate support to expectant parents considering adoption. She ensures that birth parents understand all their options and rights throughout the process. Amara creates a non-judgmental space for birth parents to make informed decisions that feel right for them. Her approach centers on dignity, respect, and honoring the profound love that goes into an adoption plan. Amara has been with LovelyAdopt for 10 years and has supported hundreds of birth parents through their journeys.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      credentials: "MSW, Certified Grief Counselor, Trauma-Informed Care Specialist",
      funFact: "Amara runs a weekend retreat program for birth mothers focused on healing and connection."
    }
  ];

  return (
    <>
      <PageHeader
        title="Meet Our Team"
        subtitle="Our dedicated staff brings expertise, compassion, and personal experience to guide you through your adoption journey."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md mb-6 text-brand-navy lazy-load">Our Dedicated Professionals</h2>
            <p className="text-gray-700 lazy-load">
              Every member of our team is committed to ethical adoption practices and supporting all members of the adoption triad. Many of our staff have personal connections to adoption, bringing both professional expertise and lived experience to their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {staffMembers.map((staff, index) => (
              <Card 
                key={staff.id} 
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 lazy-load overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedStaff(staff)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-serif text-brand-navy">{staff.name}</CardTitle>
                  <CardDescription className="text-brand-blue font-medium">
                    {staff.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-gray-600 line-clamp-3">
                    {staff.bio.substring(0, 120)}...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                    onClick={() => setSelectedStaff(staff)}
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedStaff} onOpenChange={(open) => !open && setSelectedStaff(null)}>
        {selectedStaff && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-brand-navy">{selectedStaff.name}</DialogTitle>
              <DialogDescription className="text-brand-blue font-medium">
                {selectedStaff.title}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="md:col-span-1">
                <img 
                  src={selectedStaff.image} 
                  alt={selectedStaff.name} 
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="font-semibold text-brand-navy">About</h4>
                  <p className="text-gray-700">{selectedStaff.bio}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Credentials</h4>
                  <p className="text-gray-700">{selectedStaff.credentials}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Fun Fact</h4>
                  <p className="text-gray-700">{selectedStaff.funFact}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Staff;
