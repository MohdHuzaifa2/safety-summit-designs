
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm shadow-[0_4px_30px_rgba(66,147,84,0.1)]">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-safety-green" strokeWidth={2} />
              <span className="font-inter-tight font-bold text-xl text-white">Safety Summit</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-semibold text-white hover:text-safety-green transition-colors">Home</Link>
          <Link to="#speakers" className="font-semibold text-white hover:text-safety-green transition-colors">Speakers</Link>
          <Link to="#sessions" className="font-semibold text-white hover:text-safety-green transition-colors">Sessions</Link>
          <Link to="/register" className="font-semibold text-white hover:text-safety-green transition-colors">Register</Link>
          <Button className="btn-primary">Register Now</Button>
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-white hover:text-safety-green transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 py-4 px-4 shadow-lg animate-fade-in border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="font-semibold py-2 text-white hover:text-safety-green transition-colors"
              onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="#speakers" className="font-semibold py-2 text-white hover:text-safety-green transition-colors"
              onClick={() => setIsMenuOpen(false)}>Speakers</Link>
            <Link to="#sessions" className="font-semibold py-2 text-white hover:text-safety-green transition-colors"
              onClick={() => setIsMenuOpen(false)}>Sessions</Link>
            <Link to="/register" className="font-semibold py-2 text-white hover:text-safety-green transition-colors"
              onClick={() => setIsMenuOpen(false)}>Register</Link>
            <Button className="btn-primary w-full">Register Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
