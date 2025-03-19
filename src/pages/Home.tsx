import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import TextSection from "@/components/TextSection";
import CardSection from "@/components/CardSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  BookOpen,
  MessageCircle,
  CircleHelp,
  HandHeart,
} from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "Hope Adoptions | Offering Hope for Every Family";
  }, []);

  const adoptionQuestions = [
    {
      title: "Who Can Adopt?",
      content:
        "We welcome diverse families, including singles, couples, LGBTQ+, and families of all backgrounds. The main requirements are stability, love, and the desire to provide a nurturing home.",
      icon: <CircleHelp size={40} />,
    },
    {
      title: "How Long Does Adoption Take?",
      content:
        "The timeline varies based on factors like adoption type, legal requirements, and individual circumstances. On average, families complete the process within 1-2 years.",
      icon: <CircleHelp size={40} />,
    },
    {
      title: "What Are the Costs?",
      content:
        "Adoption expenses vary by type and situation. We provide transparent fee structures, financial planning assistance, and information about available grants and tax credits.",
      icon: <CircleHelp size={40} />,
    },
  ];

  const adoptionTypes = [
    {
      title: "Open Adoption",
      content:
        "Birth parents and adoptive families share identifying information and maintain ongoing contact. This creates relationships built on mutual respect, allowing children to understand their origins and maintain connections.",
      icon: <Heart size={40} />,
    },
    {
      title: "Semi-Open Adoption",
      content:
        "A middle path where limited information is shared. Communication typically occurs through an agency or mediator. This option balances privacy with a child's need to understand their background.",
      icon: <Users size={40} />,
    },
    {
      title: "Closed Adoption",
      content:
        "No identifying information is shared between birth and adoptive families. While less common today, this option provides maximum privacy for all parties involved when needed.",
      icon: <BookOpen size={40} />,
    },
  ];

  return (
    <>
      <HeroSection
        title="Offering Hope for Every Family"
        subtitle="We're with you through every step of your adoption journey with compassion, expertise, and personalized support."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        backgroundVideo="./assests/HopeAdoptions_VideoBanner.mp4"
        backgroundImage="./assests/Banner1.png" // Fallback image
      />

      <TextSection
        title="Walking Alongside You in Your Adoption Journey"
        content={
          <>
            <p>
              Exploring adoption is a significant and thoughtful decision. Many
              individuals, whether currently pregnant or having recently given
              birth, consider adoption as a loving and valid parenting path.
              It's a choice that reflects both strength and deep care.
            </p>
            <p>
              You might be wondering, 'How does the adoption process work, and
              is it the right path for me?' Our experienced counselors are here
              to provide you with compassionate support and comprehensive
              information. We'll take the time to thoroughly explain the
              adoption process, relevant laws, and your rights, ensuring you
              feel fully informed and empowered.
            </p>
            <p>
              Reaching out to us is simply an opportunity to gain clarity and
              understanding. It's a step towards exploring your options, not a
              commitment to adoption. We're here to answer your questions and
              offer guidance in a supportive and non-judgmental environment.
            </p>
          </>
        }
        buttonText="Learn More About Us"
        buttonLink="/about"
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      <CardSection
        title="Common Adoption Questions"
        subtitle="Find answers to some of the most frequently asked questions about the adoption process."
        cards={adoptionQuestions}
        className="bg-white"
      />

      <TextSection
        title="We're Here For Your Family"
        content="We understand that building a family through adoption is a significant decision filled with emotions, questions, and hopes. Our dedicated team is committed to supporting you with experienced guidance, compassionate understanding, and comprehensive resources every step of the way."
        buttonText="Explore Our Resources"
        buttonLink="/resources"
        imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        reverseOrder={true}
        className="bg-brand-pink/10"
      />

      <section id="adoption-types" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="heading-lg mb-4 text-brand-navy lazy-load">
              Adoption Types
            </h2>
            <p className="subheading max-w-2xl mx-auto lazy-load">
              Understanding different adoption types helps you choose the path
              that's right for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adoptionTypes.map((type, index) => (
              <div
                key={index}
                id={type.title.toLowerCase().replace(" ", "-") + "-adoption"}
                className="bg-white rounded-lg p-8 shadow-sm card-hover lazy-load"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-brand-blue mb-5">{type.icon}</div>
                <h3 className="heading-sm mb-4 text-brand-navy">
                  {type.title}
                </h3>
                <p className="text-gray-600">{type.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <HandHeart
              size={48}
              className="text-brand-lightBlue mx-auto mb-6"
            />
            <h2 className="heading-lg mb-6 lazy-load">
              Ready to Begin Your Adoption Journey?
            </h2>
            <p className="text-white/80 mb-8 text-lg lazy-load">
              We're here to answer your questions and provide the guidance you
              need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lazy-load">
              <Link to="/contact">
                <Button className="bg-white text-brand-navy hover:bg-brand-lightBlue hover:text-brand-navy min-w-[160px]">
                  Contact Us
                </Button>
              </Link>
              <Link to="/resources">
                <Button
                  variant="outline"
                  className="border-white bg-white text-brand-navy hover:bg-white/90 min-w-[160px]"
                >
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
