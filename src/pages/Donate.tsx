import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";
import ExternalDonationInfo from "@/components/donation/ExternalDonationInfo";
import DonateByCheck from "@/components/donation/DonateByCheck";

const Donate = () => {
  useEffect(() => {
    document.title = "Donate | Hope Adoptions";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationOptions = [
    {
      title: "One-Time Donation",
      description:
        "Make a single donation to support our programs and services.",
      amounts: [25, 50, 100, 250],
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />,
    },
    {
      title: "Monthly Giving",
      description:
        "Become a sustaining supporter with regular monthly contributions.",
      amounts: [10, 25, 50, 100],
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />,
    },
    {
      title: "Corporate Sponsorship",
      description:
        "Partner with us through corporate giving and employee matching programs.",
      button: "Contact Us",
      icon: <HandHeart className="h-10 w-10 text-brand-blue" />,
    },
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
            <h2 className="heading-md mb-6 text-brand-navy lazy-load">
              Your Gift Makes a Difference
            </h2>
            <p className="text-gray-700 lazy-load">
              When you donate to Hope Adoptions, you're helping provide
              essential services to children and families throughout the
              adoption process. From pre-adoption counseling to post-adoption
              support, your contribution creates lasting positive impacts in the
              lives of families formed through adoption.
            </p>
          </div>

          {/* Add the external donation info component at the top */}
          <div className="mb-12">
            <ExternalDonationInfo className="max-w-3xl mx-auto" />
          </div>

          <div className="mb-12">
            <DonateByCheck className="max-w-3xl mx-auto" />
          </div>

          {/* Tax deduction information */}
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-700">
              <strong>Tax Information:</strong> Donations to Hope Adoptions are tax deductible to the extent allowed by law. 
              Please note that payment of adoption fees is not tax deductible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
