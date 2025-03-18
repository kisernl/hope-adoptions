
import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | LovelyAdopt";
  }, []);

  const faqs = [
    {
      question: "Who can adopt through your agency?",
      answer: "We welcome prospective parents from diverse backgrounds. Single individuals, married couples, same-sex couples, and people of various ages, religions, and ethnicities are all encouraged to apply. The main criteria are your ability to provide a stable, loving home for a child and meet the legal requirements in your state or country."
    },
    {
      question: "How long does the adoption process typically take?",
      answer: "The timeline varies depending on many factors, including the type of adoption, your flexibility regarding the child's age and background, and legal requirements. Domestic infant adoptions typically take 1-2 years, while international adoptions may take 2-3 years. We provide more specific timelines during consultations based on your individual circumstances."
    },
    {
      question: "What are the costs associated with adoption?",
      answer: "Adoption costs vary widely based on the type of adoption, legal requirements, home study fees, and other factors. We are committed to transparency in our fee structure and provide detailed information during initial consultations. We also offer resources for adoption loans, grants, tax credits, and employer benefits that can help make adoption more affordable."
    },
    {
      question: "What is the difference between open, semi-open, and closed adoptions?",
      answer: "Open adoption involves ongoing contact between birth and adoptive families, including visits and direct communication. Semi-open adoption typically involves mediated communication through the agency, such as letters and photos. Closed adoption means little to no information is shared between families. We help both adoptive and birth families determine the level of openness that feels right for their situation."
    },
    {
      question: "What support do you provide after adoption is finalized?",
      answer: "We believe post-adoption support is crucial for families to thrive. We offer counseling services, parent education, support groups, resources for discussing adoption with children, and assistance maintaining appropriate relationships with birth families. Our commitment to families continues long after the legal process is complete."
    },
    {
      question: "How do you support birth parents considering adoption?",
      answer: "We provide comprehensive, non-judgmental counseling to help birth parents explore all their options. If they choose adoption, we support them through the process of creating an adoption plan, selecting and meeting potential adoptive families, planning for hospital time, and navigating post-placement relationships. We also offer ongoing counseling and support groups."
    },
    {
      question: "What is required to begin the adoption process?",
      answer: "The first step is to attend an information session to learn more about adoption types and our agency's process. After that, we'll guide you through completing an application, home study, background checks, and creating a family profile. We provide step-by-step guidance throughout the entire process."
    },
    {
      question: "Can we adopt a child from a different country?",
      answer: "Yes, we facilitate international adoptions from several countries. Each country has specific requirements regarding parent age, marital status, family size, and other factors. International adoption also involves immigration processes and may require travel to the child's country of origin. We can provide detailed information about countries currently open to international adoption."
    }
  ];

  const categories = [
    { name: "Getting Started", faqs: [0, 6] },
    { name: "Process & Timeline", faqs: [1, 7] },
    { name: "Costs & Financial Information", faqs: [2] },
    { name: "Types of Adoption", faqs: [3] },
    { name: "Support Services", faqs: [4, 5] }
  ];

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about adoption and our services."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
                  <Button 
                    variant="outline" 
                    className="w-full border-brand-blue text-brand-navy hover:bg-brand-lightBlue/20"
                  >
                    {category.name}
                  </Button>
                </div>
              ))}
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-brand-navy/10 py-2 lazy-load"
                  style={{ animationDelay: `${index * 50}ms` }}
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
          </div>
          
          <div className="bg-brand-lightBlue/10 p-8 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="heading-sm mb-4 text-brand-navy">Still Have Questions?</h3>
            <p className="mb-6 text-gray-700">
              Our team is here to help. Reach out with any questions or to schedule a consultation.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
