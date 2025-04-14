
import { FC } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection: FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-safety-blue to-safety-dark text-white py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-safety-red px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide">
              National Training Event
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            School Safety Leadership Summit
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Led by Experts. Built for Schools.
          </h2>
          
          <p className="text-lg mb-8 opacity-90">
            Join nationally recognized school safety experts for a one-day, in-person training 
            experience designed to equip school leaders with the tools, strategies, 
            and confidence they need to protect their campuses.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> 
              <span>June 16th & 18th, 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" /> 
              <span>Pinehurst, NC & Montgomery, AL</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-primary text-lg px-8">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-2">
              <a href="#problem">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
