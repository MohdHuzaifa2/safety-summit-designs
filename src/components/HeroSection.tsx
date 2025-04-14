
import { FC } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Shield, ArrowRight } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#121212] text-white py-24 md:py-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23429354' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundPosition: '0 0',
          animation: 'pattern-move 30s linear infinite',
        }}></div>

        <style jsx>{`
          @keyframes pattern-move {
            0% { background-position: 0 0; }
            100% { background-position: 1000px 1000px; }
          }
        `}</style>
      </div>
      
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety-green via-safety-green/70 to-safety-green"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            {/* Left Content */}
            <div className="md:w-7/12 text-left">
              <div className="inline-block bg-safety-green px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-safety-green/20">
                <span className="text-sm font-bold uppercase tracking-wider">
                  National Training Event
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                School Safety <br/>
                <span className="text-safety-green drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Leadership Summit</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl mb-6 font-medium">
                Led by Experts. Built for Schools.
              </h2>
              
              <p className="text-gray-300 mb-8 max-w-2xl">
                Join nationally recognized school safety experts for a one-day, in-person training 
                experience designed to equip school leaders with the tools, strategies, 
                and confidence they need to protect their campuses.
              </p>
              
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-safety-green" /> 
                  <span>June 16th & 18th, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-safety-green" /> 
                  <span>Pinehurst, NC & Montgomery, AL</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary text-lg px-8 group">
                  <Link to="/register">
                    Register Now <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-2">
                  <a href="#problem">Learn More</a>
                </Button>
              </div>
            </div>
            
            {/* Right Content - Shield Icon with unique design */}
            <div className="md:w-5/12 mt-8 md:mt-0">
              <div className="relative">
                {/* Multiple layered hexagons for unique effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                  <div className="absolute inset-0 bg-safety-green/5 rounded-full animate-pulse"></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
                  <div className="absolute inset-0 bg-safety-green/10 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                  <div className="absolute inset-0 bg-safety-green/15 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
                
                {/* Shield Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                  <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center border-4 border-safety-green shadow-[0_0_30px_rgba(66,147,84,0.3)]">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-safety-green rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-safety-green rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-safety-green rounded-full"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-safety-green rounded-full"></div>
                    
                    {/* Main Shield Icon */}
                    <div className="relative z-10 flex items-center justify-center">
                      <Shield className="w-40 h-40 text-safety-green" strokeWidth={1} />
                      
                      {/* Badge-like text within shield */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 text-center">
                        <span className="text-xs uppercase font-bold tracking-wider">School Safety</span>
                        <div className="w-12 h-0.5 bg-white/50 mx-auto my-1"></div>
                        <span className="text-xs font-medium">2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
