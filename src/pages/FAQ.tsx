import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UnderConstruction from "@/components/UnderConstruction";
import EmailUs from "@/components/contact/EmailUs";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("getting-started");

  useEffect(() => {
    document.title = "FAQ | Hope Adoptions";

    // Add loaded class to elements that are visible on initial load
    const initialVisibleElements = document.querySelectorAll(".lazy-load");
    initialVisibleElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        element.classList.add("loaded");
      }
    });
  }, []);

  const faqs = [
    {
      question: "Who can adopt through your agency?",
      answer:
        "We welcome prospective parents from diverse backgrounds. Single individuals, married couples, same-sex couples, and people of various ages, religions, and ethnicities are all encouraged to apply. The main criteria are your ability to provide a stable, loving home for a child and meet the legal requirements in your state or country.",
      category: "getting-started",
    },
    {
      question: "How long does the adoption process typically take?",
      answer:
        "The timeline varies depending on many factors, including the type of adoption, your flexibility regarding the child's age and background, and legal requirements. Domestic infant adoptions typically take 1-2 years, while international adoptions may take 2-3 years. We provide more specific timelines during consultations based on your individual circumstances.",
      category: "timeline",
    },
    {
      question: "What are the costs associated with adoption?",
      answer:
        "Adoption costs vary widely based on the type of adoption, legal requirements, home study fees, and other factors. We are committed to transparency in our fee structure and provide detailed information during initial consultations. We also offer resources for adoption loans, grants, tax credits, and employer benefits that can help make adoption more affordable.",
      category: "costs",
    },
    {
      question:
        "What is the difference between open, semi-open, and closed adoptions?",
      answer:
        "Open adoption involves ongoing contact between birth and adoptive families, including visits and direct communication. Semi-open adoption typically involves mediated communication through the agency, such as letters and photos. Closed adoption means little to no information is shared between families. We help both adoptive and birth families determine the level of openness that feels right for their situation.",
      category: "types",
    },
    {
      question: "What support do you provide after adoption is finalized?",
      answer:
        "We believe post-adoption support is crucial for families to thrive. We offer counseling services, parent education, support groups, resources for discussing adoption with children, and assistance maintaining appropriate relationships with birth families. Our commitment to families continues long after the legal process is complete.",
      category: "support",
    },
    {
      question: "How do you support birth parents considering adoption?",
      answer:
        "We provide comprehensive, non-judgmental counseling to help birth parents explore all their options. If they choose adoption, we support them through the process of creating an adoption plan, selecting and meeting potential adoptive families, planning for hospital time, and navigating post-placement relationships. We also offer ongoing counseling and support groups.",
      category: "support",
    },
    {
      question: "What is required to begin the adoption process?",
      answer:
        "The first step is to attend an information session to learn more about adoption types and our agency's process. After that, we'll guide you through completing an application, home study, background checks, and creating a family profile. We provide step-by-step guidance throughout the entire process.",
      category: "getting-started",
    },
    {
      question: "Can we adopt a child from a different country?",
      answer:
        "Yes, we facilitate international adoptions from several countries. Each country has specific requirements regarding parent age, marital status, family size, and other factors. International adoption also involves immigration processes and may require travel to the child's country of origin. We can provide detailed information about countries currently open to international adoption.",
      category: "timeline",
    },
  ];

  const categories = [
    { id: "getting-started", name: "Getting Started", color: "bg-brand-blue" },
    { id: "timeline", name: "Process & Timeline", color: "bg-brand-blue" },
    { id: "costs", name: "Costs & Financial", color: "bg-brand-blue" },
    { id: "types", name: "Types of Adoption", color: "bg-brand-blue" },
    { id: "support", name: "Support Services", color: "bg-brand-blue" },
  ];

  // Use this to toggle "under construction" for live launch
  const underConstruction = false;

  if (underConstruction) {
    return <UnderConstruction />;
  } else {
    return (
      <>
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about adoption and our services."
        />

        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12 md:mb-16 loaded">
              <Tabs
                defaultValue="getting-started"
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-transparent h-auto mb-8">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`py-3 border border-brand-blue text-brand-navy hover:bg-brand-lightBlue/20 data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:shadow-sm`}
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categories.map((category) => (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="mt-6"
                  >
                    <Accordion type="single" collapsible className="w-full">
                      {faqs
                        .filter((faq) => faq.category === category.id)
                        .map((faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`${category.id}-item-${index}`}
                            className="border-b border-brand-navy/10 py-2 loaded"
                          >
                            <AccordionTrigger className="text-left font-serif text-lg font-medium text-brand-navy hover:text-brand-blue">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 pt-2 pb-4">
                              <p>{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-brand-lightBlue/10 p-8 rounded-lg text-center loaded">
                <h3 className="heading-sm mb-4 text-brand-navy">
                  Still Have Questions?
                </h3>
                <p className="mb-6 text-gray-700">
                  Our team is here to help. Reach out with any questions or to
                  schedule a consultation.
                </p>
                <Link to="/contact">
                  <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <EmailUs
                title="Question Not Listed?"
                message="Send us your specific questions directly via email and we'll respond promptly."
                email="questions@hopeadoptions.org"
                buttonText="Email Your Question"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
};
export default FAQ;
