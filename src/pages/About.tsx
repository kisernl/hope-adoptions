import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import TextSection from "@/components/TextSection";
import CardSection from "@/components/CardSection";
import {
  Heart,
  Users,
  HandHeart,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Hope Adoptions";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Compassion",
      content:
        "We approach each adoption with empathy, understanding, and genuine care for all involved. Every person's journey is unique, and we honor that with personalized support.",
      icon: <Heart size={40} />,
    },
    {
      title: "Integrity",
      content:
        "Our ethical approach ensures transparent, honest practices that prioritize the well-being of children and respect the dignity of birth parents and adoptive families alike.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "Partnership",
      content:
        "We embody a spirit of cooperation and partnership with birth parents, adoptive families, and other professionals involved in the adoption process.",
      icon: <Users size={40} />,
    },
    // {
    //   title: "Education",
    //   content:
    //     "We empower all parties with knowledge, resources, and ongoing support to navigate adoption with confidence and prepare for the beautiful journey ahead.",
    //   icon: <GraduationCap size={40} />,
    // },
  ];

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Our mission is to create loving families through ethical, supportive, and compassionate adoption services."
      />

      <TextSection
        title="Our Story"
        content={
          <>
            <p>
              Founded in 2021, Hope Adoptions was born from a heart to serve
              mothers facing unexpected pregnancies. Daria Monroe, CEO of
              Women's Hope Medical Center (of which Hope Adoptions is an
              extension), seeing first hand the need for compassionate, local
              support, established this agency to walk alongside these brave
              women as they consider the selfless path of adoption. In keeping
              with our mission, we are driven by a vision to reflect the
              beautiful, redemptive adoption we experience through the gospel of
              Jesus Christ, offering hope and loving support to every mother and
              family we serve.
            </p>
            <p>
              <i>
                For all who are led by the Spirit of God are children of God. So
                you have not received a spirit that makes you fearful slaves.
                Instead, you received God’s Spirit when he adopted you as his
                own children. Now we call him, “Abba, Father.” For his Spirit
                joins with our spirit to affirm that we are God’s children.
              </i>{" "}
              <br />-{" "}
              <i>
                <b>Romans 8:14-16</b>
              </i>
            </p>
          </>
        }
        imageUrl="./assets/hands-1.png"
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
            <p>
              At Hope Adoptions, we understand that adoption is a lifelong
              journey, not just a legal process. That's why we provide
              comprehensive support before, during, and after placement.
            </p>
            <p>
              We take the time to understand the unique needs, circumstances,
              and hopes of each birth parent and adoptive family. This
              personalized approach allows us to facilitate thoughtful matches
              and provide relevant resources and guidance.
            </p>
            <p>
              Our team includes experienced adoption counselors and social
              workers, as well as formal relationships with legal experts who
              work together to ensure smooth processes while prioritizing the
              well-being of children and respecting the choices of birth
              parents.
            </p>
            <p>
              We believe in open, honest communication and education that
              empowers all parties to make informed decisions with confidence
              and peace of mind.
            </p>
          </>
        }
        imageUrl="./assets/Family_2.png"
        reverseOrder={true}
        className="bg-white"
      />

      <section className="section-padding bg-brand-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <HandHeart size={48} className="text-white mx-auto mb-6" />
            <h2 className="heading-lg mb-6 lazy-load">Our Leadership Team</h2>
            <p className="text-white/90 mb-8 text-lg lazy-load">
              Our experienced team brings decades of combined expertise in
              adoption services, social work, and counseling. We're united by
              our passion for building families and providing exceptional care
              to all we serve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load">
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">DM</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Daria Monroe
                </h3>
                <p className="text-white/80 text-sm">
                  Executive Director/CEO (WHMC)
                </p>
                <p className="text-white/80 mt-4 text-sm">
                  20+ years in adoption services and counseling
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">JB</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Jalisa Brooks
                </h3>
                <p className="text-white/80 text-sm">
                  Natural Mother Social Worker
                </p>
                <p className="text-white/80 mt-4 text-sm">
                  licensed social worker specializing in adoption
                </p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lazy-load"
                style={{ animationDelay: "100ms" }}
              >
                <div className="w-24 h-24 rounded-full bg-brand-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white font-serif">EH</span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">
                  Elizabeth Howald
                </h3>
                <p className="text-white/80 text-sm">
                  Adoptive Parents Social Worker
                </p>
                <p className="text-white/80 mt-4 text-sm">
                  licensed social worker specializing in adoption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
