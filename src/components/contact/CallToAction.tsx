import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-navy text-white">
      <div className="container-custom text-center">
        <h2 className="heading-md mb-6">Ready to Take the Next Step?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Schedule a no-obligation consultation with one of our adoption
          specialists to learn more about how we can support your adoption
          journey.
        </p>
        <a href="mailto:contact@hopeadoptions.org">
          <Button className="bg-white text-brand-navy hover:bg-brand-lightBlue hover:text-brand-navy min-w-[180px]">
            Schedule a Consultation
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
