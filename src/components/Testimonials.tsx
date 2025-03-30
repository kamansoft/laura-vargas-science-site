
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialCard = ({ quote, author, position, institution }: { 
  quote: string, 
  author: string, 
  position: string,
  institution: string
}) => (
  <Card className="h-full shadow-sm hover:shadow-md transition-all border-science-100">
    <CardContent className="pt-6">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-science-500 text-science-500" />
        ))}
      </div>
      <p className="text-science-700 mb-6 italic">"{quote}"</p>
    </CardContent>
    <CardFooter className="border-t border-science-100 pt-4 flex flex-col items-start">
      <p className="font-semibold text-science-800">{author}</p>
      <p className="text-science-600 text-sm">{position}, {institution}</p>
    </CardFooter>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Jane's strategic guidance helped me publish in a Q1 journal for the first time. Her insights on journal selection and manuscript preparation were invaluable.",
      author: "Dr. Sarah Johnson",
      position: "Associate Professor",
      institution: "University of Cambridge"
    },
    {
      quote: "Working with Dr. Jane transformed my publication strategy. My h-index improved significantly after implementing her recommendations for just one year.",
      author: "Prof. Michael Chen",
      position: "Research Director",
      institution: "Stanford University"
    },
    {
      quote: "As an early career researcher, I was struggling with the publication process. Dr. Jane's mentorship helped me navigate the complexities of academic publishing with confidence.",
      author: "Dr. Emily Rodriguez",
      position: "Postdoctoral Researcher",
      institution: "Max Planck Institute"
    },
    {
      quote: "The literature review support was exceptional. Dr. Jane identified crucial research gaps that strengthened our theoretical framework and improved our paper's significance.",
      author: "Dr. James Wilson",
      position: "Principal Investigator",
      institution: "Oxford University"
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Client Success Stories</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            Hear from researchers who have enhanced their academic impact with our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              institution={testimonial.institution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
