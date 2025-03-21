
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface EmailUsProps {
  title?: string;
  message?: string;
  email?: string;
  buttonText?: string;
}

const EmailUs = ({
  title = "Send Us an Email",
  message = "Have questions or need assistance? We're just an email away. Our team is ready to help you with any inquiries you might have.",
  email = "contact@hopeadoptions.org",
  buttonText = "Email Us Now",
}: EmailUsProps) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-brand-lightBlue/10 p-8 rounded-lg text-center">
      <Mail size={40} className="text-brand-blue mx-auto mb-4" />
      <h3 className="heading-sm mb-4 text-brand-navy">{title}</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      <Button
        onClick={handleClick}
        className="bg-brand-blue hover:bg-brand-navy text-white"
      >
        <Mail size={18} />
        {buttonText}
      </Button>
    </div>
  );
};

export default EmailUs;
