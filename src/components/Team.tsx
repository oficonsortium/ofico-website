
import { Linkedin, ArrowRight } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  linkedIn?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Nathan Hewitt',
    role: 'President',
    image: '/images/nathan-hewitt.jpg',
    linkedIn: 'https://www.linkedin.com/in/nthnh/',
    initials: 'NH',
  },
  {
    name: 'Pia Mancini',
    role: 'Board Member',
    image: '/lovable-uploads/55a6f0c6-ea75-48a2-a5d9-c1bd5a077f30.png',
    linkedIn: 'https://www.linkedin.com/in/piamancini/',
    initials: 'PM',
  },
  {
    name: 'Fran\u00e7ois Hodierne',
    role: 'Secretary',
    image: '/lovable-uploads/8bce804d-840d-43c8-b33b-9380933cc196.png',
    linkedIn: 'https://www.linkedin.com/in/francoishodierne/',
    initials: 'FH',
  },
  {
    name: 'Benjamin Nickolls',
    role: 'Treasurer',
    image: '/lovable-uploads/08cd6c8a-6af0-4eae-9992-ff08b0974151.png',
    linkedIn: 'https://www.linkedin.com/in/benjamuk/',
    initials: 'BN',
  },
  {
    name: 'Esther Foreman',
    role: 'Board Member',
    image: '/images/esther-foreman.jpg',
    linkedIn: 'https://www.linkedin.com/in/estherforeman/',
    initials: 'EF',
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500 mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">Our Directors</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The board members responsible for governing and overseeing our organization.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-2xl mx-auto mb-20">
          {teamMembers.map(member => (
            <div key={member.name} className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-500">{member.initials}</span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{member.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5 mb-1.5">{member.role}</p>
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-gray-400 hover:text-navy-600 transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Join section */}
        <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-purple-50/30 border border-gray-100 p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Join Our Consortium
            </h3>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              We're looking for members and supporting partners who share our vision for open, transparent financial infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
              <div className="p-6 rounded-2xl bg-white border border-gray-100">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Community Members</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Organizations that directly use transparent financial ledgers and meet our transparency certification
                  standards.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Supporting Members</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Organizations that show a clear interest in supporting transparent financial technologies and
                  practices.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-navy-600 text-white font-medium text-sm hover:bg-navy-700 transition-all duration-200 shadow-lg shadow-navy-600/20 hover:shadow-xl hover:shadow-navy-600/30 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
