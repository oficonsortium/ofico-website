
import { MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have questions about our work or interested in joining the consortium? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-ofi-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600 mt-1">
                    440 N Barranca Ave #3489<br />
                    Covina, CA 91723<br />
                    US
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-ofi-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@oficonsortium.org" className="hover:text-ofi-600">
                      info@oficonsortium.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
