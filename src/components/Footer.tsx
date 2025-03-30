
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const domain = "lauravargas.science";
  
  return (
    <footer className="bg-science-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Lic. Laura Vargas</h3>
            <p className="text-science-200 mb-6">
              Ayudando a investigadores a maximizar el impacto de sus publicaciones y 
              acelerar sus carreras científicas con estrategias basadas en datos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-science-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-science-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-science-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" x2="8" y1="13" y2="13"></line>
                  <line x1="16" x2="8" y1="17" y2="17"></line>
                  <line x1="10" x2="8" y1="9" y2="9"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-science-200 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-science-200 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-science-200 hover:text-white transition-colors">Acerca de</a></li>
              <li><a href="#testimonials" className="text-science-200 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contact" className="text-science-200 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-science-200 hover:text-white transition-colors">Edición de Trabajos</a></li>
              <li><a href="#" className="text-science-200 hover:text-white transition-colors">Estrategia de Factor de Impacto</a></li>
              <li><a href="#" className="text-science-200 hover:text-white transition-colors">Selección de Revistas</a></li>
              <li><a href="#" className="text-science-200 hover:text-white transition-colors">Revisión Bibliográfica</a></li>
              <li><a href="#" className="text-science-200 hover:text-white transition-colors">Mejora de Citaciones</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-science-800" />
        
        <div className="text-center text-science-300">
          <p>&copy; {currentYear} <a href={`https://${domain}`} className="hover:text-white transition-colors">{domain}</a>. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
