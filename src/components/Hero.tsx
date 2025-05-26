
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-science-50 to-science-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-science-950">
              Mejora Tus Publicaciones Científicas
            </h1>
            <p className="text-lg md:text-xl mb-8 text-science-800 leading-relaxed">
              Asesoramiento experto para aumentar el impacto de tu investigación, mejorar los índices de revistas científicas y 
              acelerar tu carrera académica con estrategias basadas en datos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-science-600 hover:bg-science-700 text-white px-6 py-6 text-lg">
                Comenzar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-science-600 text-science-700 hover:bg-science-50 px-6 py-6 text-lg">
                Conocer Más
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Investigador en biblioteca universitaria estudiando documentos científicos" 
                className="relative rounded-lg shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
