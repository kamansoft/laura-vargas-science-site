
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      quote: "La orientación estratégica de la Lic. María me ayudó a publicar en una revista Q1 por primera vez. Sus conocimientos sobre selección de revistas y preparación de manuscritos fueron invaluables.",
      author: "Dra. Sara Rodríguez",
      position: "Profesora Asociada",
      institution: "Universidad Complutense de Madrid"
    },
    {
      quote: "Trabajar con la Lic. María transformó mi estrategia de publicación. Mi índice h mejoró significativamente después de implementar sus recomendaciones durante solo un año.",
      author: "Prof. Miguel Sánchez",
      position: "Director de Investigación",
      institution: "Universidad de Barcelona"
    },
    {
      quote: "Como investigadora en etapa inicial, estaba luchando con el proceso de publicación. La mentoría de la Lic. María me ayudó a navegar por las complejidades de la publicación académica con confianza.",
      author: "Dra. Laura Martínez",
      position: "Investigadora Postdoctoral",
      institution: "CONICET Argentina"
    },
    {
      quote: "El apoyo para la revisión bibliográfica fue excepcional. La Lic. María identificó brechas cruciales de investigación que fortalecieron nuestro marco teórico y mejoraron la relevancia de nuestro artículo.",
      author: "Dr. Javier Moreno",
      position: "Investigador Principal",
      institution: "Universidad Nacional Autónoma de México"
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Historias de Éxito</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            Conoce a los investigadores que han mejorado su impacto académico con nuestros servicios
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    institution={testimonial.institution}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
