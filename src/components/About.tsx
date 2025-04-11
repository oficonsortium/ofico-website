import { Target, Users, Award, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OFi Consortium</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">We are a nonprofit 501(c)(6) community-governed membership organization alliance Fiscal Hosts and public-interest organizations. Together, we maintain and govern the “classic” Open Collective Platform to support transparent, participatory finance for the commons.
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
              <CardDescription>To support and advance trustworthy transparent financial infrastructure. We support open systems, participatory governance, and practical tools that help communities manage money together.</CardDescription>
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
              <CardDescription>The OFi Consortium brings together diverse organizations, projects, and individuals committed to financial transparency and democratic governance in the digital age.</CardDescription>
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
                We practice transparency not just as a principle, but as a tool for trust. We value inclusion in action, not just intention. We prioritize collaboration over competition, and we innovate to serve people—not markets.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        {/* Highlight Section - Platform Stewardship */}
        <div id="platform" className="mt-20 mb-20 bg-gradient-to-r from-ofi-50 to-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stewards of the classic Open Collective</h2>
              <div className="h-1 w-16 bg-ofi-500 mb-6"></div>
              <p className="text-gray-600 mb-4">
                As stewards of the Open Collective platform, we maintain and develop the infrastructure that thousands of communities rely on for transparent financial collaboration. This includes:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-ofi-600 mr-2">•</span>
                  <span>Managing the open source codebase and infrastructure</span>
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
                <img src="/lovable-uploads/33319893-eb6e-48e5-8f6d-714d66639777.png" alt="Open Collective Platform Screenshot" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Members Section */}
        <div id="members-section" className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Members</h2>
            <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
            <p className="text-gray-600">
              The OFi Consortium is formed by these leading organizations committed to advancing open finance principles.
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
              <p className="text-gray-600 text-center">
                Supporting open source projects through fiscal hosting and financial tools.
              </p>
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
              <p className="text-gray-600 text-center">
                Providing fiscal sponsorship and financial services to European communities and projects.
              </p>
            </div>
            
            {/* Gift Collective */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-lg relative overflow-hidden bg-gradient-to-br from-teal-200 to-teal-400">
                  <img src="/lovable-uploads/11e4c1a0-a276-4190-adaf-8e8f090ea0f5.png" alt="Gift Collective" className="w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Gift Collective</h3>
              <p className="text-gray-600 text-center">
                Facilitating reciprocity and resource sharing within gift economy communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;