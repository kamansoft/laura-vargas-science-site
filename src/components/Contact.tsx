
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

const ContactInfo = ({ icon, title, details }: { icon: React.ReactNode, title: string, details: string }) => (
  <div className="flex items-start mb-6">
    <div className="mr-4 mt-1 text-science-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-science-800 mb-1">{title}</h3>
      <p className="text-science-700">{details}</p>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you shortly.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-science-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Get In Touch</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            Have questions about how I can help with your scientific publications? Let's discuss your research goals.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-science-800">Contact Information</CardTitle>
                <CardDescription className="text-science-600">
                  Reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactInfo 
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  details="contact@drjanescience.com"
                />
                <ContactInfo 
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  details="+1 (555) 123-4567"
                />
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Office"
                  details="123 Academic Street, Research District, Science City"
                />
                <ContactInfo 
                  icon={<Clock className="h-5 w-5" />}
                  title="Office Hours"
                  details="Monday - Friday: 9:00 AM - 5:00 PM"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-science-800">Send A Message</CardTitle>
                <CardDescription className="text-science-600">
                  Fill out the form below and I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-science-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-science-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-science-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is your inquiry about?"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-science-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your research needs or questions"
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-science-600 hover:bg-science-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
