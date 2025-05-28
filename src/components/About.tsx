
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Award, Book, Users, Globe, Trophy } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <FileText className="h-6 w-6 md:h-8 md:w-8" />,
      number: "200+",
      label: "Publicaciones en Revistas Q1/Q2",
      description: "Artículos publicados en revistas de alto impacto"
    },
    {
      icon: <Award className="h-6 w-6 md:h-8 md:w-8" />,
      number: "98%",
      label: "Tasa de Aceptación",
      description: "Éxito en primeras o segundas rondas de revisión"
    },
    {
      icon: <Users className="h-6 w-6 md:h-8 md:w-8" />,
      number: "500+",
      label: "Investigadores Asesorados",
      description: "PhD, postdocs y académicos de 25 países"
    },
    {
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      number: "50+",
      label: "Instituciones Colaboradoras",
      description: "Universidades de prestigio internacional"
    },
    {
      icon: <Trophy className="h-6 w-6 md:h-8 md:w-8" />,
      number: "15+",
      label: "Años de Experiencia",
      description: "Especialización en publicación académica"
    },
    {
      icon: <Book className="h-6 w-6 md:h-8 md:w-8" />,
      number: "25+",
      label: "Áreas de Conocimiento",
      description: "Experiencia multidisciplinaria"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-science-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-science-200/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-science-300/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-science-400 to-science-600 opacity-20 blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-2">
                <img 
                  src="/lovable-uploads/82e922ca-d624-498f-af76-deaf129499d9.png" 
                  alt="Lic. Laura Vargas - Especialista en Publicación Científica" 
                  className="rounded-xl w-full object-cover aspect-[4/3] shadow-lg"
                />
              </div>
              {/* Academic credentials floating element */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-science-100">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-science-600" />
                  <span className="text-sm font-medium text-science-700">PhD Advisor</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 text-center lg:text-left order-1 lg:order-2">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-science-100 rounded-full text-science-700 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Experta en Publicación Académica Internacional
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-science-900">
                Dra. Laura Vargas
                <span className="block text-2xl md:text-3xl lg:text-4xl text-science-600 mt-2">
                  Tu Mentora Académica
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 mb-8 text-base md:text-lg text-science-700 leading-relaxed">
              <p>
                <strong>Doctora en Ciencias de la Investigación</strong> con más de 15 años de experiencia 
                especializada en la optimización de publicaciones académicas. He dedicado mi carrera a 
                ayudar a investigadores de instituciones prestigiosas a nivel mundial a transformar 
                sus hallazgos en publicaciones de alto impacto.
              </p>
              
              <p>
                Mi metodología combina <strong>análisis bibliométrico avanzado</strong>, estrategias 
                de posicionamiento editorial y técnicas de escritura científica para maximizar las 
                probabilidades de aceptación en revistas Q1 y Q2.
              </p>
              
              <p>
                Como <strong>mentora especializada para estudiantes de doctorado</strong>, entiendo 
                los desafíos únicos que enfrentan los investigadores en formación y los académicos 
                en etapas tempranas de su carrera.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center lg:text-left p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-science-100 hover:shadow-md transition-all duration-300">
                  <div className="flex justify-center lg:justify-start mb-2 text-science-600">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-science-800 mb-1">
                    {achievement.number}
                  </h3>
                  <p className="text-science-600 font-medium text-sm mb-1">
                    {achievement.label}
                  </p>
                  <p className="text-science-500 text-xs">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-science-600 hover:bg-science-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Descargar CV Académico
                <FileText className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-2 border-science-600 text-science-700 hover:bg-science-50 px-8 py-3 font-semibold">
                Ver Publicaciones
                <Book className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
