
import { Globe, Linkedin } from 'lucide-react';
import { SiOpencollective } from '@icons-pack/react-simple-icons';

const members = [
  {
    name: 'Open Source Collective',
    description: 'Non-profit fiscal host promoting a healthy and sustainable open source ecosystem.',
    logo: '/lovable-uploads/eb6f1d02-9007-4e03-8786-deee07795994.png',
    links: {
      website: 'https://oscollective.org',
      oc: 'https://opencollective.com/opensource',
      linkedin: 'https://www.linkedin.com/company/opensourcecollective/',
    },
  },
  {
    name: 'Open Collective Europe',
    description:
      'European Non-profit \u2014 Providing fiscal sponsorship to communities and projects from garden collectives to global democracy initiatives.',
    logo: '/lovable-uploads/148e2dea-b1bc-423c-b072-42d46f883b10.png',
    links: {
      website: 'https://www.oceurope.org/',
      oc: 'https://opencollective.com/europe',
      linkedin: 'https://www.linkedin.com/company/open-collective-europe/',
    },
  },
  {
    name: 'Gift Collective',
    description:
      'New Zealand Charity \u2014 Supporting projects with a charitable mission in Aotearoa, transforming how charity funding works through fundholding.',
    logo: '/lovable-uploads/9373d83b-8184-441f-ac58-30279906ddf5.png',
    links: {
      website: 'https://giftcollective.nz/',
      oc: 'https://opencollective.com/giftcollective',
      linkedin: 'https://www.linkedin.com/company/giftcollectivenz/',
    },
  },
  {
    name: 'Raft Foundation',
    description: 'US-based 501(c)(3) fiscal sponsor that brings communities together to support neighbors in need.',
    logo: '/lovable-uploads/raft-foundation-official-logo.png',
    links: {
      website: 'https://raft.foundation/',
      oc: 'https://opencollective.com/raft',
    },
  },
  {
    name: 'The Social Change Nest',
    description: 'Fiscal hosting and capacity building for social change.',
    logo: '/lovable-uploads/social-change-nest-logo.png',
    links: {
      website: 'https://thesocialchangenest.org/',
      oc: 'https://opencollective.com/the-social-change-nest',
      linkedin: 'https://www.linkedin.com/company/the-social-change-nest/',
    },
  },
];

const Members = () => {
  return (
    <section id="members" className="section-padding bg-gray-50/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500 mb-3">Members</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
            Organizations leading open finance
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The OFi Consortium is formed by these leading organizations committed to advancing open finance principles.
            They represent thousands of Collectives and guide our strategic direction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {members.map(member => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.logo}
                    alt={member.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
              <p className="text-sm text-gray-500 text-center leading-relaxed mb-5">{member.description}</p>
              <div className="flex justify-center gap-1">
                {member.links.website && (
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-navy-600 hover:bg-navy-50 transition-all duration-200"
                    title="Website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
                {member.links.oc && (
                  <a
                    href={member.links.oc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-navy-600 hover:bg-navy-50 transition-all duration-200"
                    title="Open Collective"
                  >
                    <SiOpencollective className="h-4 w-4" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-navy-600 hover:bg-navy-50 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
