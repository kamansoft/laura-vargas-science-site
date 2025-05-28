
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Quote, GraduationCap, Users } from "lucide-react";

const TestimonialCard = ({ quote, author, position, institution, category }: { 
  quote: string, 
  author: string, 
  position: string,
  institution: string,
  category: 'phd' | 'faculty' | 'researcher'
}) => {
  const getCategoryInfo = (cat: string) => {
    switch(cat) {
      case 'phd':
        return { icon: <GraduationCap className="h-4 w-4" />, label: 'Estudiante PhD', color: 'bg-blue-100 text-blue-700' };
      case 'faculty':
        return { icon: <Users className="h-4 w-4" />, label: 'Profesor', color: 'bg-green-100 text-green-700' };
      case 'researcher':
        return { icon: <Star className="h-4 w-4" />, label: 'Investigador', color: 'bg-purple-100 text-purple-700' };
      default:
        return { icon: <Star className="h-4 w-4" />, label: 'Académico', color: 'bg-gray-100 text-gray-700' };
    }
  };

  const categoryInfo = getCategoryInfo(category);

  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-science-100 hover:border-science-300 group hover:-translate-y-1">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-science-500 text-science-500" />
            ))}
          </div>
          <Quote className="h-6 w-6 text-science-300" />
        </div>
        
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryInfo.color}`}>
          {categoryInfo.icon}
          <span className="ml-1">{categoryInfo.label}</span>
        </div>
        
        <p className="text-science-700 mb-6 italic text-base leading-relaxed">
          "{quote}"
        </p>
      </CardContent>
      <CardFooter className="border-t border-science-100 pt-4 flex flex-col items-start">
        <p className="font-semibold text-science-800 text-lg">{author}</p>
        <p className="text-science-600 text-sm font-medium">{position}</p>
        <p className="text-science-500 text-sm">{institution}</p>
      </CardFooter>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "La mentoría de la Dra. Vargas fue fundamental durante mi doctorado. Me ayudó a estructurar mi investigación y publicar 3 artículos en revistas Q1 antes de graduarme. Su enfoque estratégico transformó mi carrera académica.",
      author: "Dra. Sofia Mendoza",
      position: "PhD en Neurociencias",
      institution: "Universidad Complutense de Madrid",
      category: 'phd' as const
    },
    {
      quote: "Como profesor asociado, necesitaba mejorar mi perfil de publicaciones para la promoción. La estrategia bibliométrica de la Dra. Vargas aumentó mi índice h en un 40% en solo dos años. Ahora soy profesor titular.",
      author: "Prof. Dr. Miguel Sánchez",
      position: "Profesor Titular de Ingeniería",
      institution: "Universidad de Barcelona",
      category: 'faculty' as const
    },
    {
      quote: "Durante mi postdoctorado, luchaba con las recomendaciones de los revisores. La Dra. Vargas me enseñó a interpretar y responder efectivamente. Ahora tengo una tasa de aceptación del 95% en primeras revisiones.",
      author: "Dra. Laura Martínez",
      position: "Investigadora Principal",
      institution: "CONICET Argentina",
      category: 'researcher' as const
    },
    {
      quote: "La revisión bibliográfica sistemática que desarrollamos juntos se convirtió en el artículo más citado de mi carrera. Su metodología rigurosa identificó brechas que nadie más había notado.",
      author: "Dr. Javier Moreno",
      position: "Director de Investigación",
      institution: "Universidad Nacional Autónoma de México",
      category: 'faculty' as const
    },
    {
      quote: "Como estudiante internacional de PhD, enfrentaba barreras idiomáticas y culturales. La Dra. Vargas no solo mejoró mi escritura científica, sino que me conectó con colaboradores internacionales clave.",
      author: "Dr. Chen Wei",
      position: "PhD en Biotecnología",
      institution: "Universidad de São Paulo",
      category: 'phd' as const
    },
    {
      quote: "Su análisis de selección de revistas fue extraordinario. Identificó revistas emergentes con alto potencial de impacto donde mi investigación sobre IA tuvo máxima visibilidad y citaciones.",
      author: "Dra. Ana García",
      position: "Investigadora Senior",
      institution: "Instituto Tecnológico de Massachusetts",
      category: 'researcher' as const
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white via-science-25 to-science-50 relative">
      <div className="absolute inset-0 bg-grid-science-100/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-science-100 rounded-full text-science-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Testimonios de la Comunidad Académica
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-science-900">
            Historias de Éxito Académico
          </h2>
          <p className="text-lg md:text-xl text-science-700 max-w-4xl mx-auto leading-relaxed">
            Conoce cómo investigadores, profesores y estudiantes de doctorado han transformado 
            sus carreras académicas y maximizado el impacto de sus publicaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              institution={testimonial.institution}
              category={testimonial.category}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-science-600 to-science-700 rounded-2xl shadow-xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para ser el próximo caso de éxito?
            </h3>
            <p className="text-science-100 mb-8 text-lg max-w-2xl mx-auto">
              Únete a más de 500 investigadores que han transformado sus carreras académicas 
              con nuestra metodología probada de publicación científica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-science-700 px-8 py-3 rounded-lg font-semibold hover:bg-science-50 transition-all duration-300 hover:shadow-lg">
                Agendar Consulta Gratuita
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-science-700 transition-all duration-300">
                Descargar Guía Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
