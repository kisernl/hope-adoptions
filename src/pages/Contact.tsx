
import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import CallToAction from "@/components/contact/CallToAction";
import EmailUs from "@/components/contact/EmailUs";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | LovelyAdopt";
  }, []);

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
              
              <ContactForm />
            </div>
            
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <EmailUs 
              title="Direct Email Contact" 
              message="Prefer to use your own email client? Send us a message directly, and we'll respond as soon as possible."
              email="contact@hopeadoptions.org"
              buttonText="Send Email"
            />
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Contact;
