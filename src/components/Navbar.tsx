
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-science-700 font-montserrat font-bold text-xl">
            Dr. Jane Science
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-science-900 hover:text-science-700 font-medium">Home</a>
            <a href="#services" className="text-science-900 hover:text-science-700 font-medium">Services</a>
            <a href="#about" className="text-science-900 hover:text-science-700 font-medium">About</a>
            <a href="#testimonials" className="text-science-900 hover:text-science-700 font-medium">Testimonials</a>
            <a href="#contact" className="text-science-900 hover:text-science-700 font-medium">Contact</a>
            <Button className="bg-science-600 hover:bg-science-700">Book Consultation</Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-science-900 hover:text-science-700 py-2 font-medium" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-science-900 hover:text-science-700 py-2 font-medium" onClick={toggleMenu}>Services</a>
              <a href="#about" className="text-science-900 hover:text-science-700 py-2 font-medium" onClick={toggleMenu}>About</a>
              <a href="#testimonials" className="text-science-900 hover:text-science-700 py-2 font-medium" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="text-science-900 hover:text-science-700 py-2 font-medium" onClick={toggleMenu}>Contact</a>
              <Button className="bg-science-600 hover:bg-science-700 w-full">Book Consultation</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
