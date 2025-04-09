
import { Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Pia Mancini",
      role: "President",
      image: "/lovable-uploads/55a6f0c6-ea75-48a2-a5d9-c1bd5a077f30.png",
      linkedIn: "#"
    },
    {
      name: "François Hodierne",
      role: "Executive Director",
      image: "/lovable-uploads/8bce804d-840d-43c8-b33b-9380933cc196.png",
      linkedIn: "https://www.linkedin.com/in/francoishodierne/"
    },
    {
      name: "Ben Nickolls",
      role: "Treasurer",
      image: "/lovable-uploads/08cd6c8a-6af0-4eae-9992-ff08b0974151.png",
      linkedIn: "#"
    }
  ];
  
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Meet the dedicated professionals guiding our consortium's mission and strategic initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-ofi-600 mb-3">{member.role}</p>
                <a 
                  href={member.linkedIn}
                  className="inline-flex items-center text-gray-500 hover:text-ofi-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-1" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Consortium</h3>
            <p className="text-gray-600">
              We're always looking for partners and members who share our vision for open finance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Institutions</h4>
              <p className="text-gray-600">Banks, credit unions, and financial service providers.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technology Providers</h4>
              <p className="text-gray-600">Fintech companies, software developers, and system integrators.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Experts</h4>
              <p className="text-gray-600">Consultants, academics, and thought leaders in finance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
