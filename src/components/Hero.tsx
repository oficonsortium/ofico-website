
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Rewiring Finance for the <span className="text-purple-600">Public Good</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              OFi Consortium coordinates the governance and evolution of open financial tools, ensuring they stay transparent, community-owned, and designed for long-term resilience.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-navy-300 rounded-full opacity-40"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://opencollective-production.s3.us-west-1.amazonaws.com/update/2ebc1929-0e8c-4ae9-8895-e5932afd5dae/oc-headshot-38.jpg" 
                  alt="OFi Consortium" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-24 right-0 w-64 h-64 bg-navy-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-48 h-48 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
    </section>
  );
};

export default Hero;
