
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, GraduationCap, BookOpen, Search, CheckSquare, Users, BarChart3 } from "lucide-react";

const ServiceCard = ({ icon, title, description, highlight }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  highlight?: string
}) => (
  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-science-300 group hover:-translate-y-1 border-science-100">
    <CardHeader className="pb-4">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-science-100 to-science-200 text-science-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <CardTitle className="text-xl text-science-800 group-hover:text-science-600 transition-colors">
        {title}
      </CardTitle>
      {highlight && (
        <div className="inline-flex items-center px-2 py-1 bg-science-600 text-white text-xs font-medium rounded-full w-fit">
          {highlight}
        </div>
      )}
    </CardHeader>
    <CardContent>
      <CardDescription className="text-science-700 text-base leading-relaxed">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Edición y Revisión de Manuscritos",
      description: "Optimización integral de tus trabajos de investigación con enfoque en claridad, coherencia y rigor académico. Preparación especializada para revistas Q1 y Q2.",
      highlight: "Más Popular"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Estrategia de Factor de Impacto",
      description: "Análisis detallado y planificación estratégica para maximizar el impacto de tus publicaciones. Identificación de revistas objetivo según tu área de investigación.",
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "Mentoría para Estudiantes de Doctorado",
      description: "Acompañamiento personalizado en el proceso de publicación académica. Desarrollo de habilidades de escritura científica y planificación de carrera académica.",
      highlight: "PhD Focus"
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Revisión Bibliográfica Sistemática",
      description: "Desarrollo de marcos teóricos sólidos y identificación de brechas de investigación. Metodología rigurosa para revisiones sistemáticas y meta-análisis.",
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "Selección Estratégica de Revistas",
      description: "Análisis basado en métricas bibliométricas para la selección óptima de revistas. Evaluación de probabilidades de aceptación y tiempos de revisión.",
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Análisis Bibliométrico Avanzado",
      description: "Evaluación detallada del impacto de tu investigación. Estrategias para mejorar índices h, citaciones y visibilidad académica internacional.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Colaboraciones Internacionales",
      description: "Facilitación de redes de colaboración con investigadores internacionales. Estrategias para publicaciones multi-institucionales de alto impacto.",
    },
    {
      icon: <CheckSquare className="h-7 w-7" />,
      title: "Gestión de Procesos Editorial",
      description: "Acompañamiento completo durante el proceso de revisión por pares. Preparación de respuestas a revisores y estrategias de re-envío.",
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-science-50 relative">
      <div className="absolute inset-0 bg-grid-science-100/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-science-100 rounded-full text-science-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Servicios Especializados para la Comunidad Académica
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-science-900">
            Impulsa Tu Carrera Académica
          </h2>
          <p className="text-lg md:text-xl text-science-700 max-w-4xl mx-auto leading-relaxed">
            Servicios integrales diseñados específicamente para investigadores, docentes y estudiantes de doctorado 
            que buscan maximizar el impacto de su trabajo académico en revistas internacionales de prestigio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              highlight={service.highlight}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-science-100 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-science-900 mb-4">¿Listo para comenzar?</h3>
            <p className="text-science-700 mb-6">Agenda una consulta gratuita de 30 minutos para discutir tus objetivos académicos.</p>
            <button className="bg-science-600 hover:bg-science-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
