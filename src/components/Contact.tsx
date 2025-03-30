
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

const ContactInfo = ({ icon, title, details }: { icon: React.ReactNode, title: string, details: string }) => (
  <div className="flex items-start mb-6">
    <div className="mr-4 mt-1 text-science-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-science-800 mb-1">{title}</h3>
      <p className="text-science-700">{details}</p>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje Enviado!",
        description: "Gracias por tu consulta. Te contactaremos pronto.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-science-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-science-900">Contáctanos</h2>
          <p className="text-lg text-science-700 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre cómo puedo ayudarte con tus publicaciones científicas? Conversemos sobre tus objetivos de investigación.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-science-800">Información de Contacto</CardTitle>
                <CardDescription className="text-science-600">
                  Comunícate a través de cualquiera de estos canales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactInfo 
                  icon={<Mail className="h-5 w-5" />}
                  title="Correo Electrónico"
                  details="contacto@mariaciencia.com"
                />
                <ContactInfo 
                  icon={<Phone className="h-5 w-5" />}
                  title="Teléfono"
                  details="+34 123 456 789"
                />
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Oficina"
                  details="Calle Investigación 123, Madrid, España"
                />
                <ContactInfo 
                  icon={<Clock className="h-5 w-5" />}
                  title="Horario de Atención"
                  details="Lunes - Viernes: 9:00 - 17:00"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-science-800">Enviar un Mensaje</CardTitle>
                <CardDescription className="text-science-600">
                  Completa el formulario y te responderé lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-science-700 mb-2">
                        Nombre Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-science-700 mb-2">
                        Correo Electrónico
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu.email@ejemplo.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-science-700 mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿Sobre qué es tu consulta?"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-science-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe tus necesidades de investigación o preguntas"
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-science-600 hover:bg-science-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
