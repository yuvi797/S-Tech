import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-blue-600">
              <Star className="fill-current" size={20} />
              <span className="text-sm font-medium">Premium Interior Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="text-blue-600 block">Living Space</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover exceptional interior design products that blend elegance with functionality. 
              From premium furniture to artistic decor, we bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Products</span>
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get Consultation
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/public/image.png" 
                  alt="Modern Living Room" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/public/image 12.png" 
                  alt="Elegant Bedroom" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/public/image 11.png" 
                  alt="Designer Kitchen" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/public/image 8.png" 
                  alt="Stylish Decor" 
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;