import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import TextSection from "@/components/TextSection";
import CardSection from "@/components/CardSection";
import { Heart, Users, HandHeart, ShieldCheck, GraduationCap } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | LovelyAdopt";
  }, []);

  const values = [
    {
      title: "Compassion",
      content: "We approach each adoption with empathy, understanding, and genuine care for all involved. Every person's journey is unique, and we honor that with personalized support.",
      icon: <Heart size={40} />
    },
    {
      title: "Integrity",
      content: "Our ethical approach ensures transparent, honest practices that prioritize the well-being of children and respect the dignity of birth parents and adoptive families alike.",
      icon: <ShieldCheck size={40} />
    },
    {
      title: "Inclusivity",
      content: "We celebrate diverse families of all backgrounds, structures, and beliefs. We believe every loving home has something unique to offer a child in need of a family.",
      icon: <Users size={40} />
    },
    {
      title: "Education",
      content: "We empower all parties with knowledge, resources, and ongoing support to navigate adoption with confidence and prepare for the beautiful journey ahead.",
      icon: <GraduationCap size={40} />
    }
  ];

  return (
    <>
      <PageHeader
        title="About LovelyAdopt"
        subtitle="Our mission is to create loving families through ethical, supportive, and compassionate adoption services."
      />
      
      <TextSection
        title="Our Story"
        content={
          <>
            <p>Founded in 2000, LovelyAdopt began with a simple yet profound mission: to connect children with loving families while providing compassionate support to birth parents and adoptive families throughout the adoption journey.</p>
            <p>What started as a small team of dedicated adoption professionals has grown into a comprehensive agency serving families across the country. Our growth has been guided by our unwavering commitment to ethical adoption practices and the belief that every child deserves a nurturing, permanent home.</p>
            <p>Over two decades later, we've helped build thousands of families, each with their unique and beautiful story. We've evolved our services to meet changing needs while maintaining our core values of compassion, integrity, and support.</p>
          </>
        }
        imageUrl="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        className="bg-white loaded"
      />
      
      <CardSection
        title="Our Core Values"
        subtitle="These principles guide every aspect of our work and relationships with the families we serve."
        cards={values}
        className="bg-brand-pink/10"
      />
      
      <TextSection
        title="Our Approach"
        content={
          <>
            <p>At LovelyAdopt, we understand that adoption is a lifelong journey, not just a legal process. That's why we provide comprehensive support before, during, and after placement.</p>
            <p>We take the time to understand the unique needs, circumstances, and hopes of each birth parent and adoptive family. This personalized approach allows us to facilitate thoughtful matches and provide relevant resources and guidance.</p>
            <p>Our team includes experienced adoption counselors, social workers, and legal experts who work together to ensure smooth processes while prioritizing the well-being of children and respecting the choices of birth parents.</p>
            <p>We believe in open, honest communication and education that empowers all parties to make informed decisions with confidence and peace of mind.</p>
          </>
        }
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        reverseOrder={true}
        className="bg-white"
      />
      
      <section className="section-padding bg-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <HandHeart size={48} className="text-white mx-auto mb-6" />
            <h2 className="heading-lg mb-6 lazy-load">Our Leadership Team</h2>
            <p className="text-white/90 mb-8 text-lg lazy-load">
              Our experienced team brings decades of combined expertise in adoption services, social work, family law, and counseling. We're united by our passion for building families and providing exceptional care to all we serve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load">
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">JD</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Jennifer Davis</h3>
                <p className="text-white/80 text-sm">Executive Director</p>
                <p className="text-white/80 mt-4 text-sm">20+ years in adoption services and family counseling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load" style={{animationDelay: '100ms'}}>
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">MT</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Michael Thompson</h3>
                <p className="text-white/80 text-sm">Director of Family Services</p>
                <p className="text-white/80 mt-4 text-sm">15+ years as a licensed social worker specializing in adoption</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load" style={{animationDelay: '200ms'}}>
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">SL</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Sarah Liu</h3>
                <p className="text-white/80 text-sm">Adoption Counselor</p>
                <p className="text-white/80 mt-4 text-sm">12+ years supporting birth parents through adoption decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
