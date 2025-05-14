
import { Globe, ExternalLink, Linkedin } from "lucide-react";
import { SiOpencollective } from "@icons-pack/react-simple-icons";

const Members = () => {
  return (
    <section id="members" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Members</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            The OFi Consortium is formed by these leading organizations committed to advancing open finance principles. They represent thousands of Collectives and guide our strategic direction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Open Source Collective */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-lg relative overflow-hidden bg-gradient-to-br from-blue-200 to-indigo-300">
                <img src="/lovable-uploads/eb6f1d02-9007-4e03-8786-deee07795994.png" alt="Open Source Collective" className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: `url('/lovable-uploads/af4e1e5f-f5b6-4e1a-a33c-7971d856bf40.png')`,
                opacity: '0.3'
              }}></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Open Source Collective</h3>
            <p className="text-gray-600 text-center mb-4">
              Non-profit fiscal host promoting a healthy and sustainable open source ecosystem.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-3 mt-2">
              <a 
                href="https://oscollective.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a 
                href="https://opencollective.com/opensource" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Open Collective"
              >
                <SiOpencollective className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/opensourcecollective/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Open Collective Europe */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-lg relative overflow-hidden bg-gradient-to-br from-blue-200 to-indigo-300">
                <img src="/lovable-uploads/148e2dea-b1bc-423c-b072-42d46f883b10.png" alt="Open Collective Europe" className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: `url('/lovable-uploads/b9d2464e-7d80-4c18-9752-06de4bdcc6a3.png')`,
                opacity: '0.3'
              }}></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Open Collective Europe</h3>
            <p className="text-gray-600 text-center mb-4">
              European Non-profit - Providing fiscal sponsorship to communities and projects from garden collectives to global democracy initiatives.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-3 mt-2">
              <a 
                href="https://www.oceurope.org/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a 
                href="https://opencollective.com/europe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Open Collective"
              >
                <SiOpencollective className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/open-collective-europe/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Gift Collective */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-lg relative overflow-hidden bg-gradient-to-br from-blue-200 to-indigo-300">
                <img src="/lovable-uploads/9373d83b-8184-441f-ac58-30279906ddf5.png" alt="Gift Collective" className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: `url('/lovable-uploads/b9d2464e-7d80-4c18-9752-06de4bdcc6a3.png')`,
                opacity: '0.3'
              }}></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Gift Collective</h3>
            <p className="text-gray-600 text-center mb-4">
              New Zealand Charity - Supporting projects with a charitable mission in Aotearoa, transforming how charity funding works through fundholding.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-3 mt-2">
              <a 
                href="https://giftcollective.nz/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a 
                href="https://opencollective.com/giftcollective"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="Open Collective"
              >
                <SiOpencollective className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/giftcollectivenz/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-ofi-600 transition-colors p-2"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
