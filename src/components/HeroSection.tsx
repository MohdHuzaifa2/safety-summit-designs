
import { FC } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Shield, ArrowRight } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <section className="relative bg-safety-black text-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-safety-green"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left Content */}
            <div className="md:w-7/12 text-left">
              <div className="inline-block bg-safety-green px-4 py-1 rounded-full mb-6">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  National Training Event
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                School Safety <span className="text-safety-green">Leadership Summit</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl mb-6">
                Led by Experts. Built for Schools.
              </h2>
              
              <p className="text-lg mb-8 text-gray-300">
                Join nationally recognized school safety experts for a one-day, in-person training 
                experience designed to equip school leaders with the tools, strategies, 
                and confidence they need to protect their campuses.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
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
            
            {/* Right Content - Shield Icon */}
            <div className="md:w-5/12 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-safety-green rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-2 bg-safety-black rounded-full flex items-center justify-center border-4 border-safety-green">
                  <Shield className="w-32 h-32 text-safety-green" strokeWidth={1} />
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
