
import { Target, Users, Heart, ArrowUpRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To support and advance trustworthy transparent financial infrastructure. We support open systems, participatory governance, and practical tools that help communities manage money together.',
    color: 'navy',
  },
  {
    icon: Users,
    title: 'Our Community',
    description:
      'The OFi Consortium brings together diverse organizations, projects, and individuals committed to financial transparency and democratic governance in the digital age.',
    color: 'purple',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'We practice transparency not just as a principle, but as a tool for trust. We value inclusion in action, not just intention. We prioritize collaboration over competition and innovate to serve people\u2014not markets.',
    color: 'ofi',
  },
];

const iconColorMap: Record<string, string> = {
  navy: 'bg-navy-50 text-navy-600',
  purple: 'bg-purple-50 text-purple-600',
  ofi: 'bg-ofi-50 text-ofi-600',
};

const borderColorMap: Record<string, string> = {
  navy: 'group-hover:border-navy-200',
  purple: 'group-hover:border-purple-200',
  ofi: 'group-hover:border-ofi-200',
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500 mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-5">
            Open finance for the commons
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We are a nonprofit 501(c)(6) community-governed membership organization alliance of Fiscal Hosts and
            public-interest organizations. Together, we maintain and govern the "classic" Open Collective Platform to
            support transparent, participatory finance for the commons.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 ${borderColorMap[item.color]}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconColorMap[item.color]} mb-5`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Platform Stewardship */}
        <div id="platform" className="mt-24 rounded-3xl bg-gradient-to-br from-navy-950 to-navy-800 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-navy-300 mb-3">Platform Stewardship</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-5">
                Stewards of the classic Open Collective
              </h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                In October 2024, we took over the classic{' '}
                <a href="https://opencollective.com/home" className="text-white underline decoration-navy-400 hover:decoration-white transition-colors">
                  Open Collective platform
                </a>{' '}
                as it existed at that time. Now operated by our 100% owned subsidiary, OFi Technologies, the same team
                continues its work under a community-governed, non-profit structure.
              </p>
              <p className="text-navy-200 leading-relaxed mb-6">
                We maintain and develop the infrastructure that thousands of communities rely on for transparent
                financial collaboration. This includes:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  <>Managing the <a href="https://github.com/opencollective" className="text-white underline decoration-navy-400 hover:decoration-white transition-colors">open source</a> codebase and infrastructure</>,
                  'Ensuring platform stability, security, and accessibility',
                  'Supporting integrations with fiscal hosts worldwide',
                  'Prioritizing community needs through democratic governance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ofi-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://opencollective.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-ofi-300 transition-colors group/link"
              >
                Visit Open Collective
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
            <div className="bg-navy-900/50 flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-navy-700/50 shadow-2xl">
                <a href="https://opencollective.com/home" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/lovable-uploads/33319893-eb6e-48e5-8f6d-714d66639777.png"
                    alt="classic Open Collective Platform Homepage screenshot"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
