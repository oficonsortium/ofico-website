
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Empowering <span className="text-ofi-600">Open Finance</span> Innovation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              The OFi Consortium is dedicated to advancing open finance solutions that create opportunities for all through collaboration and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ofi-600 hover:bg-ofi-700 text-white" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-ofi-500 text-ofi-700 hover:bg-ofi-50">
                Join Our Mission
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-ofi-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-ofi-300 rounded-full opacity-40"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                  alt="Team collaboration" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-24 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-48 h-48 bg-ofi-100 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
    </section>
  );
};

export default Hero;
