
import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

const Donate = () => {
  useEffect(() => {
    document.title = "Donate | LovelyAdopt";
  }, []);

  const donationOptions = [
    {
      title: "One-Time Donation",
      description: "Make a single donation to support our programs and services.",
      amounts: [25, 50, 100, 250],
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />
    },
    {
      title: "Monthly Giving",
      description: "Become a sustaining supporter with regular monthly contributions.",
      amounts: [10, 25, 50, 100],
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />
    },
    {
      title: "Corporate Sponsorship",
      description: "Partner with us through corporate giving and employee matching programs.",
      button: "Contact Us",
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />
    }
  ];

  return (
    <>
      <PageHeader
        title="Support Our Mission"
        subtitle="Your donation helps us connect children with loving families and provide ongoing support throughout the adoption journey."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="heading-md mb-6 text-brand-navy lazy-load">Your Gift Makes a Difference</h2>
            <p className="text-gray-700 lazy-load">
              When you donate to LovelyAdopt, you're helping provide essential services to children and families throughout the adoption process. From pre-adoption counseling to post-adoption support, your contribution creates lasting positive impacts in the lives of families formed through adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {donationOptions.map((option, index) => (
              <Card key={index} className="lazy-load shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-center text-brand-navy">{option.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">{option.description}</p>
                  
                  {option.amounts ? (
                    <div className="grid grid-cols-2 gap-2">
                      {option.amounts.map((amount, idx) => (
                        <Button 
                          key={idx} 
                          variant="outline" 
                          className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
                <CardFooter className="flex justify-center pt-2">
                  {option.button ? (
                    <Button className="btn-primary w-full">{option.button}</Button>
                  ) : (
                    <Button className="btn-primary w-full">Donate Now</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-pink/20 rounded-lg max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4 text-center text-brand-navy">Other Ways to Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="lazy-load">
                <h4 className="font-serif text-lg font-semibold mb-2 text-brand-navy">Planned Giving</h4>
                <p className="text-gray-700">Consider including LovelyAdopt in your estate planning to create a lasting legacy of helping children find forever homes.</p>
              </div>
              <div className="lazy-load" style={{ animationDelay: '100ms' }}>
                <h4 className="font-serif text-lg font-semibold mb-2 text-brand-navy">In-Kind Donations</h4>
                <p className="text-gray-700">Donate goods, services, or professional skills to help us operate efficiently and serve more families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
