import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#services", label: "Servicios" },
    { href: "#about", label: "Acerca de" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#contact", label: "Contacto" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Smooth scroll to the target section with offset for navbar
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      const navbarHeight = 80; // Account for navbar height
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-science-700 font-montserrat font-bold text-xl">
            Lic. Laura Vargas
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-science-900 hover:text-science-700 font-medium transition-colors cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('#contact')}
              className="bg-science-600 hover:bg-science-700"
            >
              Reservar Consulta
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-science-700"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-science-700 font-montserrat font-bold text-xl">
                      Menú
                    </span>
                  </div>
                  
                  <nav className="flex flex-col space-y-6 flex-1">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="text-science-900 hover:text-science-700 font-medium text-lg py-2 transition-colors border-b border-science-100 last:border-b-0 text-left bg-transparent border-none cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  
                  <div className="mt-8 pt-6 border-t border-science-100">
                    <Button 
                      className="bg-science-600 hover:bg-science-700 w-full"
                      onClick={() => handleNavClick('#contact')}
                    >
                      Reservar Consulta
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
