
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                className="h-8 w-8 text-safety-blue" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L4 6v12l8 4 8-4V6z" />
                <path d="M12 22V12" />
                <path d="M12 12L4 6" />
                <path d="M12 12l8-6" />
              </svg>
              <span className="font-montserrat font-bold text-xl text-safety-blue">Safety Summit</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-semibold hover:text-safety-red transition-colors">Home</Link>
          <Link to="#speakers" className="font-semibold hover:text-safety-red transition-colors">Speakers</Link>
          <Link to="#sessions" className="font-semibold hover:text-safety-red transition-colors">Sessions</Link>
          <Link to="/register" className="font-semibold hover:text-safety-red transition-colors">Register</Link>
          <Button className="btn-primary">Register Now</Button>
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-semibold py-2 hover:text-safety-red transition-colors"
              onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="#speakers" className="font-semibold py-2 hover:text-safety-red transition-colors"
              onClick={() => setIsMenuOpen(false)}>Speakers</Link>
            <Link to="#sessions" className="font-semibold py-2 hover:text-safety-red transition-colors"
              onClick={() => setIsMenuOpen(false)}>Sessions</Link>
            <Link to="/register" className="font-semibold py-2 hover:text-safety-red transition-colors"
              onClick={() => setIsMenuOpen(false)}>Register</Link>
            <Button className="btn-primary w-full">Register Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
