
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Award, Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-science-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
              <img 
                src="/lovable-uploads/82e922ca-d624-498f-af76-deaf129499d9.png" 
                alt="Lic. Laura Vargas trabajando" 
                className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-science-900">
              Sobre Lic. Laura Vargas
            </h2>
            
            <p className="text-base md:text-lg mb-4 md:mb-6 text-science-700 leading-relaxed">
              Con más de 15 años de experiencia en publicación académica e investigación científica, 
              he ayudado a investigadores de prestigiosas instituciones de todo el mundo a mejorar sus 
              estrategias de publicación y aumentar sus tasas de aceptación en revistas científicas.
            </p>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 text-science-700 leading-relaxed">
              Mi enfoque combina un profundo conocimiento de las tendencias de publicación académica, análisis bibliométrico 
              y planificación estratégica para ayudarte a maximizar el impacto de tu investigación y avanzar en tu carrera académica.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">200+</h3>
                <p className="text-science-600 text-sm">Trabajos Publicados</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">98%</h3>
                <p className="text-science-600 text-sm">Tasa de Éxito</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Book className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">15+</h3>
                <p className="text-science-600 text-sm">Años de Experiencia</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button className="bg-science-600 hover:bg-science-700 w-full sm:w-auto">
                Descargar CV
              </Button>
              <Button variant="outline" className="border-science-600 text-science-700 hover:bg-science-50 w-full sm:w-auto">
                Ver Publicaciones
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
