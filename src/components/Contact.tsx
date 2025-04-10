
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const templateParams = {
        to_email: 'info@oficonsortium.org',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };
      
      await emailjs.send(
        'default_service', // Service ID from EmailJS
        'template_default', // Template ID from EmailJS
        templateParams,
        'YOUR_USER_ID' // User ID from EmailJS
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="h-1 w-20 bg-ofi-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Have questions about our work or interested in joining the consortium? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-ofi-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600 mt-1">
                      440 N Barranca Ave #3489<br />
                      Covina, CA 91723<br />
                      US
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-ofi-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@oficonsortium.org" className="hover:text-ofi-600">
                        info@oficonsortium.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
