import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { Construction, Wrench, ArrowLeft } from "lucide-react";

interface UnderConstructionProps {
  pageName?: string;
  estimatedCompletion?: string;
}

const UnderConstruction = ({
  pageName = "This Page",
  estimatedCompletion = "soon",
}: UnderConstructionProps) => {
  useEffect(() => {
    document.title = `${pageName} - Under Construction | Hope Adoptions`;
  }, [pageName]);

  return (
    <>
      <PageHeader
        title="Pardon Our Progress"
        subtitle={`We're working hard to build ${pageName.toLowerCase()}. Check back ${estimatedCompletion}.`}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center loaded">
              <div className="relative">
                <Construction size={120} className="text-brand-navy" />
                <Wrench
                  size={48}
                  className="text-brand-blue absolute bottom-0 right-0 animate-pulse"
                />
              </div>
            </div>

            <h2 className="heading-lg text-brand-navy mb-6 loaded">
              We're Building Something Special
            </h2>

            <div className="prose prose-blue mx-auto mb-12 space-y-4 text-gray-600 loaded">
              <p>
                Our team is hard at work creating this page to better serve your
                needs. We appreciate your patience as we make improvements to
                enhance your experience.
              </p>
              <p>
                In the meantime, feel free to explore other sections of our
                website or contact us if you have any questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 loaded">
              <Link to="/">
                <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white">
                  <ArrowLeft className="mr-2" size={16} />
                  Return to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy/5"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnderConstruction;
