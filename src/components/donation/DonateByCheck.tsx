import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ExternalDonationInfoProps {
  className?: string;
}

const DonateByCheck = ({ className = "" }: ExternalDonationInfoProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 ${className}`}>
      <h3 className="heading-sm mb-4 text-brand-navy">Donate by Check</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <p className="text-gray-700 mb-6">
          To make a donation by check, please make it payable to{" "}
          <strong>"Hope Adoptions."</strong> In the memo line, please write{" "}
          <strong>"adoption donation."</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Mail check to:
          <br />
          <span className="text-brand-navy font-semibold mb-6">
            Hope Adoptions
            <br />
            820 Stage Rd
            <br />
            Auburn, AL 36830.
          </span>
        </p>
      </div>
    </div>
  );
};

export default DonateByCheck;
