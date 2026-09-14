
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500 mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">Get in Touch</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Have questions about our work or interested in joining the consortium? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg">
          <div className="space-y-6">
            <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-navy-600" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  440 N Barranca Ave #3489
                  <br />
                  Covina, CA 91723
                  <br />
                  USA
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100">
              <div className="flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-navy-600" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href="mailto:info@oficonsortium.org"
                  className="text-sm text-gray-500 hover:text-navy-600 transition-colors inline-flex items-center gap-1 group"
                >
                  info@oficonsortium.org
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
