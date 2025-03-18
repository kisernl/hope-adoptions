import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, FileText, Link as LinkIcon } from "lucide-react";

const Resources = () => {
  useEffect(() => {
    document.title = "Resources | LovelyAdopt";
  }, []);

  const faqs = [
    {
      question: "How do I know which type of adoption is right for my family?",
      answer:
        "Choosing the right adoption type depends on your family's values, circumstances, and comfort level with openness. We provide counseling to help you explore each option, considering factors like your desire for ongoing contact with birth parents, privacy concerns, and what might be best for the child's emotional well-being. Many families find that speaking with other adoptive families about their experiences also helps in making this decision.",
    },
    {
      question: "What is the home study process like?",
      answer:
        "The home study is a comprehensive assessment conducted by a social worker to ensure your home is safe and suitable for a child. It typically includes interviews with all family members, home inspections, background checks, reference letters, financial statements, medical evaluations, and autobiographical statements. While it may sound intimidating, we guide you through each step. Most families complete this process in 2-3 months, and it's valid for 12-18 months, depending on your state.",
    },
    {
      question: "Are there support groups for adoptive families?",
      answer:
        "Yes! Support groups are invaluable resources for adoptive families. We facilitate both in-person and online groups for parents at all stages of the adoption journey. These communities provide emotional support, practical advice, and lasting friendships with others who understand your experiences. We also offer specialized groups for transracial adoptive families, single parents, and those who've adopted children with special needs.",
    },
    {
      question: "What financial assistance is available for adoption?",
      answer:
        "Various financial resources can help make adoption more affordable. These include the Federal Adoption Tax Credit, employer adoption benefits, adoption grants from organizations like HelpUsAdopt.org and The Gift of Adoption Fund, and low-interest adoption loans. We provide financial counseling to help families understand these options and develop a personalized financial plan for their adoption journey.",
    },
    {
      question: "How do we talk to our child about their adoption?",
      answer:
        "Open, age-appropriate conversations about adoption should begin early and evolve as your child grows. We recommend using positive adoption language, celebrating your child's story, and answering questions honestly. We offer workshops specifically on this topic and can recommend children's books that help facilitate these conversations. Remember that adoption talks aren't one-time events but ongoing dialogues that build your child's identity and security.",
    },
    {
      question: "What post-adoption services do you provide?",
      answer:
        "Our support doesn't end with placement. We offer post-adoption counseling, parent education workshops, support groups, assistance with post-placement reports, help navigating birth family relationships, cultural connection programs for transracial adoptions, and referrals to adoption-competent therapists when needed. We're committed to supporting your family's lifelong adoption journey.",
    },
  ];

  const educationalResources = [
    {
      title: "Adoption Preparation Course",
      description:
        "A comprehensive 6-week online course covering all aspects of the adoption process, attachment, transracial adoption considerations, and more.",
      type: "Online Course",
      link: "#",
    },
    {
      title: "Understanding Open Adoption",
      description:
        "An in-depth guide to navigating open adoption relationships with compassion and healthy boundaries.",
      type: "E-Book",
      link: "#",
    },
    {
      title: "Talking to Your Child About Adoption",
      description:
        "Age-appropriate strategies for discussing adoption with your child from toddlerhood through adolescence.",
      type: "Webinar",
      link: "#",
    },
    {
      title: "Financial Planning for Adoption",
      description:
        "A comprehensive guide to budgeting, tax credits, grants, and loans available for adoptive families.",
      type: "PDF Guide",
      link: "#",
    },
  ];

  const communityResources = [
    {
      title: "Adoptive Parents Support Group",
      description:
        "Monthly virtual meetings for adoptive parents to share experiences and support.",
      schedule: "First Tuesday of each month, 7:00-8:30 PM",
      link: "#",
    },
    {
      title: "Birth Parent Connection",
      description:
        "A supportive community for birth parents to connect and share their adoption journeys.",
      schedule: "Third Thursday of each month, 6:30-8:00 PM",
      link: "#",
    },
    {
      title: "Transracial Adoption Family Network",
      description:
        "Resources and community for families navigating the unique aspects of transracial adoption.",
      schedule: "Quarterly events and ongoing online forum",
      link: "#",
    },
    {
      title: "Teen Adoptee Group",
      description:
        "A safe space for adopted teens to connect with peers who share similar experiences.",
      schedule: "Bi-weekly meetings, Saturdays 3:00-4:30 PM",
      link: "#",
    },
  ];

  return (
    <>
      <PageHeader
        title="Adoption Resources"
        subtitle="Access tools, information, and support to help you navigate your adoption journey with confidence."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              {/* <TabsTrigger value="faq" className="text-lg">
                FAQs
              </TabsTrigger> */}
              <TabsTrigger value="education" className="text-lg">
                Educational Resources
              </TabsTrigger>
              {/* <TabsTrigger value="community" className="text-lg">
                Community Support
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="faq" className="mt-4">
              <div className="bg-brand-pink/5 rounded-lg p-6 md:p-8">
                <h3 className="heading-md mb-6 text-brand-navy">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium text-brand-navy hover:text-brand-blue">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-4">
              <div className="bg-brand-pink/5 rounded-lg p-6 md:p-8">
                <h3 className="heading-md mb-6 text-brand-navy">
                  Educational Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {educationalResources.map((resource, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-md border-none shadow-sm"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-xl text-brand-navy">
                            {resource.title}
                          </CardTitle>
                          <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                            {resource.type}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="text-brand-blue border-brand-blue hover:bg-brand-blue/10 w-full"
                          asChild
                        >
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {resource.type === "Webinar" ||
                            resource.type === "Online Course" ? (
                              <BookOpen className="mr-2 h-4 w-4" />
                            ) : (
                              <Download className="mr-2 h-4 w-4" />
                            )}
                            {resource.type === "Webinar" ||
                            resource.type === "Online Course"
                              ? "Access"
                              : "Download"}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-4">
              <div className="bg-brand-pink/5 rounded-lg p-6 md:p-8">
                <h3 className="heading-md mb-6 text-brand-navy">
                  Community Support
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {communityResources.map((resource, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-md border-none shadow-sm"
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-brand-navy">
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-gray-600">{resource.description}</p>
                        <p className="text-sm font-medium text-brand-blue">
                          {resource.schedule}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="text-brand-blue border-brand-blue hover:bg-brand-blue/10 w-full"
                          asChild
                        >
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <LinkIcon className="mr-2 h-4 w-4" />
                            Join Group
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="section-padding bg-brand-lightBlue/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <FileText size={40} className="text-brand-blue mx-auto mb-4" />
            <h2 className="heading-lg mb-4 text-brand-navy">
              Adoption Guides & Checklists
            </h2>
            <p className="subheading">
              Download our comprehensive adoption resources to help you navigate
              each stage of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-brand-navy">
                Getting Started Guide
              </h3>
              <p className="text-gray-600 mb-6">
                A comprehensive overview of the adoption process, from initial
                decision-making to post-placement.
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-brand-navy">
                Home Study Checklist
              </h3>
              <p className="text-gray-600 mb-6">
                A detailed checklist of everything you need to prepare for a
                successful home study process.
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-3 text-brand-navy">
                Financial Planning Worksheet
              </h3>
              <p className="text-gray-600 mb-6">
                A worksheet to help you plan for adoption costs, tax benefits,
                and available financial resources.
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
