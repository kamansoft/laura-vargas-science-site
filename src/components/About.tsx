
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Award, Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-science-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-science-400 to-science-600 opacity-30 blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Jane Science working" 
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-science-900">
              About Dr. Jane Science
            </h2>
            
            <p className="text-lg mb-6 text-science-700">
              With over 15 years of experience in academic publishing and scientific research, 
              I've helped researchers from prestigious institutions worldwide enhance their publication 
              strategies and improve their journal acceptance rates.
            </p>
            
            <p className="text-lg mb-8 text-science-700">
              My approach combines deep knowledge of academic publishing trends, bibliometric analysis, 
              and strategic planning to help you maximize your research impact and advance your academic career.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">200+</h3>
                <p className="text-science-600">Published Papers</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">98%</h3>
                <p className="text-science-600">Success Rate</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <Book className="h-8 w-8 text-science-600 mb-2" />
                <h3 className="text-science-800 font-semibold text-lg">15+</h3>
                <p className="text-science-600">Years Experience</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-science-600 hover:bg-science-700">Download CV</Button>
              <Button variant="outline" className="border-science-600 text-science-700 hover:bg-science-50">
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
