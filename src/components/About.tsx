
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Award, Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-science-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Lic. María Ciencia trabajando" 
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-science-900">
              Sobre Lic. María Ciencia
            </h2>
            
            <p className="text-lg mb-6 text-science-700">
              Con más de 15 años de experiencia en publicación académica e investigación científica, 
              he ayudado a investigadores de prestigiosas instituciones de todo el mundo a mejorar sus 
              estrategias de publicación y aumentar sus tasas de aceptación en revistas científicas.
            </p>
            
            <p className="text-lg mb-8 text-science-700">
              Mi enfoque combina un profundo conocimiento de las tendencias de publicación académica, análisis bibliométrico 
              y planificación estratégica para ayudarte a maximizar el impacto de tu investigación y avanzar en tu carrera académica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">200+</h3>
                <p className="text-science-600">Trabajos Publicados</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">98%</h3>
                <p className="text-science-600">Tasa de Éxito</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Book className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">15+</h3>
                <p className="text-science-600">Años de Experiencia</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-science-600 hover:bg-science-700">Descargar CV</Button>
              <Button variant="outline" className="border-science-600 text-science-700 hover:bg-science-50">
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
