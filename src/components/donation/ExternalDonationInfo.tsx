import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ExternalDonationInfoProps {
  className?: string;
}

const ExternalDonationInfo = ({
  className = "",
}: ExternalDonationInfoProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 ${className}`}>
      <h3 className="heading-sm mb-4 text-brand-navy">Donate Online</h3>
      <p className="text-gray-700 mb-6">
        Donations to Hope Adoptions can be made through our parent organization
        (WHMC) donation page. Please select <strong>"Adoption Services"</strong>{" "}
        from the "my donaation is for" to ensure your contribution directly
        supports our adoption programs.
      </p>

      <div className="flex justify-center">
        <Button
          className="btn-primary flex items-center gap-2"
          onClick={() =>
            window.open(
              "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_9b3ebb83-4461-11ea-8134-0ab2f2f28c00&WidgetId=770048",
              "_blank"
            )
          }
        >
          Donate Now <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ExternalDonationInfo;
