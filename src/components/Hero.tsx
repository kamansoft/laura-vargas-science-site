
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-12 md:pt-20 md:pb-20 lg:pb-28 bg-gradient-to-br from-science-50 to-science-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight text-science-950">
              Mejora Tus Publicaciones Científicas
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-science-800 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Asesoramiento experto para aumentar el impacto de tu investigación, mejorar los índices de revistas científicas y 
              acelerar tu carrera académica con estrategias basadas en datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button className="bg-science-600 hover:bg-science-700 text-white px-6 py-3 md:px-6 md:py-6 text-base md:text-lg w-full sm:w-auto">
                Comenzar
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" className="border-science-600 text-science-700 hover:bg-science-50 px-6 py-3 md:px-6 md:py-6 text-base md:text-lg w-full sm:w-auto">
                Conocer Más
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-sm md:max-w-lg">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
              <img 
                src="/lovable-uploads/phdstudent_with_professor.png"
                alt="Biblioteca universitaria con publicaciones profesionales y material académico" 
                className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
