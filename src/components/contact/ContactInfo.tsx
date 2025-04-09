import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-brand-pink/10 p-8 rounded-lg">
      <h2 className="heading-md mb-6 text-brand-navy">Contact Information</h2>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <MapPin size={24} className="text-brand-blue shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Our Location
            </h3>
            <p className="text-gray-600">
              820 Stage Rd
              <br />
              Auburn, AL 36830
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone size={24} className="text-brand-blue shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Phone
            </h3>
            <p className="text-gray-600">
              <a
                href="tel:+1234567890"
                className="hover:text-brand-blue transition-colors"
              >
                (334) 502-7000
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              **this is the number for our parent organization (WHMC), just let
              our receptionist know you are calling about Hope Adoptions!
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail size={24} className="text-brand-blue shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Email
            </h3>
            <p className="text-gray-600">
              <a
                href="mailto:info@lovelyadopt.com"
                className="hover:text-brand-blue transition-colors"
              >
                contact@hopeadoptions.org
              </a>
            </p>
            {/* <p className="text-sm text-gray-500 mt-1">
              We'll respond within 1-2 business days
            </p> */}
          </div>
        </div>

        {/* <div className="flex items-start space-x-4">
          <Clock size={24} className="text-brand-blue shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Office Hours
            </h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM (By appointment)</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-brand-navy mb-4">
          Emergency Support
        </h3>
        <p className="text-gray-600 mb-4">
          For urgent matters outside of regular business hours, please call our
          24/7 support line:
        </p>
        <a
          href="tel:+18001234567"
          className="text-brand-blue font-semibold hover:underline"
        >
          1-800-123-4567
        </a>
      </div>*/}
    </div>
  );
};

export default ContactInfo;
