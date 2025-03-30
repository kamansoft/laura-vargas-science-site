
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, TrendingUp, GraduationCap, BookOpen, Search, CheckSquare } from "lucide-react";

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="h-full transition-all hover:shadow-lg hover:border-science-300">
    <CardHeader>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-science-100 text-science-600 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl text-science-800">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-science-700 text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Edición de Trabajos de Investigación",
      description: "Servicios de edición experta para pulir tu trabajo de investigación con claridad, coherencia y rigor académico antes de enviarlo a revistas de alto impacto."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Estrategia de Factor de Impacto",
      description: "Orientación estratégica para dirigir tu investigación a revistas con factores de impacto óptimos para tu campo, aumentando el potencial de citación y visibilidad."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Planificación de Carrera Académica",
      description: "Estrategias personalizadas de publicación alineadas con tus objetivos profesionales para establecer tu autoridad en tu área de investigación."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Apoyo en Revisión Bibliográfica",
      description: "Servicios completos de revisión bibliográfica para fortalecer tu marco teórico e identificar brechas de investigación."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Análisis de Selección de Revistas",
      description: "Análisis basado en datos para identificar las revistas más adecuadas para tu manuscrito según alcance, audiencia y métricas de publicación."
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Mejora de Citaciones",
      description: "Enfoques tácticos para estructurar tu artículo y maximizar el potencial de citación, mejorando tu índice h y perfil académico."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Servicios de Publicación Científica</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            Soluciones integrales para mejorar el impacto de tu investigación y acelerar tu carrera académica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
