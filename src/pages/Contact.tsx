import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us | LovelyAdopt";
  }, []);

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

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to answer your questions and support you on your adoption journey."
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-md mb-6 text-brand-navy">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're just beginning to explore adoption or have specific questions about our services, we're here to help. Fill out the form, and a member of our team will reach out to you soon.
              </p>
              
              {submitted ? (
                <div className="bg-brand-lightBlue/10 p-8 rounded-lg text-center">
                  <CheckCircle size={48} className="text-brand-blue mx-auto mb-4" />
                  <h3 className="heading-sm mb-4 text-brand-navy">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. A member of our team will contact you within 1-2 business days.
                  </p>
                </div>
              ) : (
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
              )}
            </div>
            
            <div className="bg-brand-pink/10 p-8 rounded-lg">
              <h2 className="heading-md mb-6 text-brand-navy">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-brand-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      123 Caring Street<br />
                      Love City, LC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-brand-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-brand-blue transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday - Friday, 9AM - 5PM EST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-brand-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@lovelyadopt.com" className="hover:text-brand-blue transition-colors">
                        info@lovelyadopt.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 1-2 business days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-brand-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM (By appointment)</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-brand-navy mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-4">
                  For urgent matters outside of regular business hours, please call our 24/7 support line:
                </p>
                <a href="tel:+18001234567" className="text-brand-blue font-semibold hover:underline">
                  1-800-123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-6">Ready to Take the Next Step?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Schedule a no-obligation consultation with one of our adoption specialists to learn more about how we can support your adoption journey.
          </p>
          <Button className="bg-white text-brand-navy hover:bg-brand-lightBlue hover:text-brand-navy min-w-[180px]">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
