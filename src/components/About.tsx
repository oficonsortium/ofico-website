import { Target, Users, Award, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OFi Consortium</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We are a nonprofit 501(c)(6) community-governed membership organization alliance of Fiscal Hosts and
            public-interest organizations. Together, we maintain and govern the "classic" Open Collective Platform to
            support transparent, participatory finance for the commons.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <Card className="border-t-4 border-t-ofi-400 transform transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ofi-100 text-ofi-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                To support and advance trustworthy transparent financial infrastructure. We support open systems,
                participatory governance, and practical tools that help communities manage money together.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Our Community */}
          <Card className="border-t-4 border-t-ofi-500 transform transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ofi-100 text-ofi-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The OFi Consortium brings together diverse organizations, projects, and individuals committed to
                financial transparency and democratic governance in the digital age.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card className="border-t-4 border-t-ofi-600 transform transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ofi-100 text-ofi-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We practice transparency not just as a principle, but as a tool for trust. We value inclusion in action,
                not just intention. We prioritize collaboration over competition and innovate to serve people—not
                markets.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Highlight Section - Platform Stewardship */}
        <div id="platform" className="mt-20 mb-20 bg-gradient-to-r from-ofi-50 to-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Stewards of the classic Open Collective
              </h2>
              <div className="h-1 w-16 bg-ofi-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                In October 2024, we took over the classic{' '}
                <a href="https://opencollective.com/home">Open Collective platform</a> as it existed at that time. Now
                operated by our 100% owned subsidiary, OFi Technologies, the same team continues its work under a
                community-governed, non-profit structure.
              </p>
              <p className="text-gray-600 mb-4">
                We maintain and develop the infrastructure that thousands of communities rely on for transparent
                financial collaboration. This includes:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-ofi-600 mr-2">•</span>
                  <span>
                    Managing the <a href="https://github.com/opencollective">open source</a> codebase and infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-ofi-600 mr-2">•</span>
                  <span>Ensuring platform stability, security, and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ofi-600 mr-2">•</span>
                  <span>Supporting integrations with fiscal hosts worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ofi-600 mr-2">•</span>
                  <span>Prioritizing community needs through democratic governance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-6">
              <div className="relative w-full h-64 md:h-full rounded-lg overflow-hidden border border-gray-200">
                <a href="https://opencollective.com/home">
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
