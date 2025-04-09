
import { Lightbulb, BookOpen, LineChart, GraduationCap, MessagesSquare, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programsList = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Lab",
      description: "Supporting startups and emerging solutions in open finance through mentorship, resources, and funding opportunities.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Standards Development",
      description: "Collaborating on technical standards and frameworks to enable secure and interoperable financial data sharing.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Market Research",
      description: "Producing industry insights and trend analysis to guide strategic decision-making in open finance initiatives.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educational Workshops",
      description: "Offering training programs to build capacity and understanding of open finance principles and applications.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <MessagesSquare className="h-8 w-8" />,
      title: "Policy Forum",
      description: "Engaging with regulators and policymakers to shape enabling regulatory environments for open finance.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Building international connections to share best practices and advance open finance adoption worldwide.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore the initiatives and programs we've developed to advance open finance adoption and innovation across the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${program.color} mb-4`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-ofi-600 hover:bg-ofi-700 text-white" size="lg">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
