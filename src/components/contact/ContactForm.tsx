
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
        duration: 5000,
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-brand-lightBlue/10 p-8 rounded-lg text-center">
        <CheckCircle size={48} className="text-brand-blue mx-auto mb-4" />
        <h3 className="heading-sm mb-4 text-brand-navy">Thank You!</h3>
        <p className="text-gray-600">
          Your message has been sent successfully. A member of our team will contact you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200"
        />
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200"
        />
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200"
        />
      </div>
      
      <div className="space-y-3">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you today?"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-50 border-gray-200"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
