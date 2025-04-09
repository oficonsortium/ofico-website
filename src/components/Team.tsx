
import { Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [{
    name: "Pia Mancini",
    role: "President",
    image: "/lovable-uploads/55a6f0c6-ea75-48a2-a5d9-c1bd5a077f30.png",
    linkedIn: "https://www.linkedin.com/in/piamancini/",
    initials: "PM"
  }, {
    name: "François Hodierne",
    role: "Executive Director",
    image: "/lovable-uploads/8bce804d-840d-43c8-b33b-9380933cc196.png",
    linkedIn: "https://www.linkedin.com/in/francoishodierne/",
    initials: "FH"
  }, {
    name: "Benjamin Nickolls",
    role: "Treasurer",
    image: "/lovable-uploads/08cd6c8a-6af0-4eae-9992-ff08b0974151.png",
    linkedIn: "https://www.linkedin.com/in/benjamuk/",
    initials: "BN"
  }];
  
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Directors</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            The board members responsible for governing and overseeing our organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-ofi-600 mb-3">{member.role}</p>
              <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-500 hover:text-ofi-600 transition-colors">
                <Linkedin className="h-5 w-5 mr-1" />
                <span className="text-sm">LinkedIn</span>
              </a>
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
          
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">General Members</h4>
              <p className="text-gray-600">Mission-aligned organizations with voting rights and governance roles.</p>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Corporate Sponsors</h4>
              <p className="text-gray-600">Support financially without direct decision-making power.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
