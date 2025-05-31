
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Award, Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-science-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
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
              Con una sólida trayectoria de mas de 6 años en la investigación científica y más de una década de experiencia asesorando a investigadores y grupos académicos en Colombia, Laura Vargas se ha consolidado como una experta en estrategias de publicación científica y fortalecimiento de la producción académica. Su enfoque especializado en las áreas de Ciencias Económicas, Administrativas, Contables, Políticas y Sociales le permite brindar acompañamiento integral a lo largo del ciclo de investigación, desde la formulación de propuestas hasta la publicación de resultados en artículos, libros y capítulos reconocidos.
            </p>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 text-science-700 leading-relaxed">
              Laura ha ayudado a investigadores a mejorar su visibilidad y aumentar su índice h mediante estrategias basadas en colaboración académica, selección estratégica de revistas y alineación con las convocatorias de Minciencias. Además, su compromiso con la formación de jóvenes investigadores ha contribuido al desarrollo de una comunidad científica más sólida, capaz de responder a los retos sociales y económicos del país.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <FileText className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">60+</h3>
                <p className="text-science-600 text-sm">Trabajos Publicados</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">98%</h3>
                <p className="text-science-600 text-sm">Tasa de Éxito</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Book className="h-6 w-6 md:h-8 md:w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">6+</h3>
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
