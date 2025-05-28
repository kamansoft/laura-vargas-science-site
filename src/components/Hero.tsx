
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-24 md:pb-24 lg:pb-32 bg-gradient-to-br from-science-50 via-white to-science-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-science-100/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-science-200/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-science-300/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-science-100 rounded-full text-science-700 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Consultoría Especializada en Publicación Académica
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-science-950">
                Maximiza el Impacto de Tu 
                <span className="text-science-600 block">Investigación</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-science-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Asesoramiento estratégico para investigadores, docentes y estudiantes de doctorado que buscan 
                <span className="font-semibold text-science-800"> publicar en revistas de alto impacto</span> y 
                acelerar su carrera académica.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-science-600">200+</div>
                <div className="text-sm text-science-600">Publicaciones</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-science-600">98%</div>
                <div className="text-sm text-science-600">Tasa de Éxito</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-science-600">15+</div>
                <div className="text-sm text-science-600">Años Exp.</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-science-600 hover:bg-science-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                Iniciar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-science-600 text-science-700 hover:bg-science-50 px-8 py-4 text-lg font-semibold">
                Ver Metodología
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-science-400 to-science-600 opacity-20 blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-1">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Biblioteca académica con investigación y publicaciones científicas" 
                  className="rounded-xl w-full object-cover aspect-[4/3] shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-science-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-science-700">Q1 Journals</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-science-100">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-science-600" />
                  <span className="text-sm font-medium text-science-700">Alto Impacto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
