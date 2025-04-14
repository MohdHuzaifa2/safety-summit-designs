
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-safety-green/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg 
                viewBox="0 0 24 24" 
                className="h-8 w-8 text-safety-green mr-2" 
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
              <span className="font-inter-tight font-bold text-xl">School Safety Leadership Summit</span>
            </div>
            <p className="text-gray-300 mb-4">
              Equipping school leaders with the tools, strategies, and confidence they need to protect their campuses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-safety-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-safety-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-safety-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-safety-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Event Information</h3>
            <ul className="space-y-2">
              <li>
                <p className="font-semibold">Pinehurst, NC</p>
                <p>June 16th, 2024</p>
              </li>
              <li>
                <p className="font-semibold">Montgomery, AL</p>
                <p>June 18th, 2024</p>
              </li>
              <li className="mt-4">
                <Link to="/register" className="text-white hover:text-safety-green transition-colors underline">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Have questions about the Summit?</p>
            <a href="mailto:contact@schoolsafetysummit.com" className="text-white hover:text-safety-green transition-colors">
              contact@schoolsafetysummit.com
            </a>
            <p className="mt-4">&copy; {new Date().getFullYear()} School Safety Leadership Summit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
