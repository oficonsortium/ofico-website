
import { Target, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About OFi Consortium</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            We are a nonprofit alliance of fiscal hosts and public-interest organizations. Together, we maintain and govern the "classic" Open Collective Platform to support transparent, participatory finance for the commons.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-ofi-400 transform transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ofi-100 text-ofi-600 mb-4">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                To build trustworthy financial infrastructure that belongs to everyone. We support open systems, shared ownership, and practical tools that help communities manage money together—without gatekeepers.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-ofi-500 transform transition-all hover:-translate-y-1 hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ofi-100 text-ofi-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We are collectives, co-ops, nonprofits, open source projects, mutual aid groups, fiscal hosts, developers, and allies working to make financial systems more fair, accessible, and accountable. Together, we're shaping the future of open finance—bottom-up, not top-down.
              </CardDescription>
            </CardContent>
          </Card>
          
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
        
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-4">
                At OFi Consortium, we take a holistic approach to advancing open finance initiatives through:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ofi-500"></div>
                  <p className="text-gray-600"><span className="font-medium">Research & Development</span> - Exploring emerging technologies and standards</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ofi-500"></div>
                  <p className="text-gray-600"><span className="font-medium">Education & Advocacy</span> - Promoting open finance literacy and benefits</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ofi-500"></div>
                  <p className="text-gray-600"><span className="font-medium">Collaboration</span> - Facilitating partnerships across the industry</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-ofi-500"></div>
                  <p className="text-gray-600"><span className="font-medium">Policy Development</span> - Working with regulators on enabling frameworks</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-ofi-100 rounded-full opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1583321500900-82807e458a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
                alt="Team meeting" 
                className="relative rounded-lg shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
