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
import UnderConstruction from "@/components/UnderConstruction";

const Resources = () => {
  useEffect(() => {
    document.title = "Resources | LovelyAdopt";
  }, []);

  // Birth Parent Resources
  const birthParentResources = [
    {
      title: "Understanding Your Options",
      description:
        "A comprehensive guide to help birth parents understand all available options and rights during the adoption process.",
      type: "E-Book",
      link: "#",
    },
    {
      title: "Birth Parent Rights",
      description:
        "Detailed information about legal rights, consent requirements, and revocation periods for birth parents.",
      type: "PDF Guide",
      link: "#",
    },
    {
      title: "Building a Birth Parent Plan",
      description:
        "Tools and guidance for creating a personalized birth and hospital plan that respects your wishes.",
      type: "Online Course",
      link: "#",
    },
    {
      title: "Post-Placement Support",
      description:
        "Resources for birth parents after placement, including counseling options and support groups.",
      type: "Webinar",
      link: "#",
    },
  ];

  // Adoptive Parent Resources
  const adoptiveParentResources = [
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

  const underConstruction = false;

  if (underConstruction) {
    return <UnderConstruction />;
  } else {
    return (
      <>
        <PageHeader
          title="Adoption Resources"
          subtitle="Access tools, information, and support to help you navigate your adoption journey with confidence."
        />

        <section className="section-padding bg-white loaded">
          <div className="container-custom">
            <Tabs defaultValue="birth-parent" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
                <TabsTrigger value="birth-parent" className="text-lg">
                  Natural Mother Resources
                </TabsTrigger>
                <TabsTrigger value="adoptive-parent" className="text-lg">
                  Adoptive Parent Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="birth-parent" className="mt-4 loaded">
                <div className="bg-brand-pink/5 rounded-lg p-6 md:p-8">
                  <h3 className="heading-md mb-6 text-brand-navy">
                    Natural Mother Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {birthParentResources.map((resource, index) => (
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
                          <p className="text-gray-600">
                            {resource.description}
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

              <TabsContent value="adoptive-parent" className="mt-4 loaded">
                <div className="bg-brand-pink/5 rounded-lg p-6 md:p-8">
                  <h3 className="heading-md mb-6 text-brand-navy">
                    Adoptive Parent Resources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {adoptiveParentResources.map((resource, index) => (
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
                          <p className="text-gray-600">
                            {resource.description}
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
            </Tabs>
          </div>
        </section>

        <section className="section-padding bg-brand-lightBlue/10 loaded">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FileText size={40} className="text-brand-blue mx-auto mb-4" />
              <h2 className="heading-lg mb-4 text-brand-navy">
                Adoption Guides & Checklists
              </h2>
              <p className="subheading">
                Download our comprehensive adoption resources to help you
                navigate each stage of your journey.
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
  }
};
export default Resources;
