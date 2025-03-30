
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, GraduationCap, BookOpen, Search, CheckSquare } from "lucide-react";

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="h-full transition-all hover:shadow-lg hover:border-science-300">
    <CardHeader>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-science-100 text-science-600 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-science-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-science-700 text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Research Paper Editing",
      description: "Expert editing services to polish your research paper for clarity, coherence, and academic rigor before submission to high-impact journals."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Impact Factor Strategy",
      description: "Strategic guidance to target journals with optimal impact factors for your research field, increasing citation potential and visibility."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Career Planning",
      description: "Personalized publication strategies aligned with your career goals to establish your authority in your research domain."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Literature Review Support",
      description: "Comprehensive literature review services to strengthen your theoretical framework and identify research gaps."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Journal Selection Analysis",
      description: "Data-driven analysis to identify the most suitable journals for your manuscript based on scope, audience, and publication metrics."
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Citation Enhancement",
      description: "Tactical approaches to structure your paper for maximum citation potential, improving your h-index and academic profile."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Scientific Publication Services</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            Comprehensive solutions to enhance your research impact and accelerate your academic career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
