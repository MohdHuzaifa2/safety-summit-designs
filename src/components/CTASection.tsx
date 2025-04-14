
import { FC } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: FC = () => {
  return (
    <section className="py-16 bg-safety-blue text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Spot at the School Safety Leadership Summit</h2>
          <p className="text-xl mb-8 opacity-90">
            Join fellow school leaders for this transformative one-day training event and return to your campus with 
            actionable strategies and renewed confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-safety-dark bg-opacity-30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="mr-2 h-6 w-6" />
                <span className="text-xl font-semibold">June 16th, 2024</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-6 w-6" />
                <span className="text-xl">Pinehurst, North Carolina</span>
              </div>
            </div>
            
            <div className="bg-safety-dark bg-opacity-30 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="mr-2 h-6 w-6" />
                <span className="text-xl font-semibold">June 18th, 2024</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-6 w-6" />
                <span className="text-xl">Montgomery, Alabama</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-lg mb-4">
              Registration fee: <span className="font-bold text-2xl">$299</span> per person
            </p>
            <p className="text-lg">
              Team discount: <span className="font-bold">Save 10%</span> when registering 3+ staff members
            </p>
          </div>
          
          <Link 
            to="/register" 
            className="inline-block bg-safety-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md text-xl transition-all duration-200"
          >
            Register Now
          </Link>
          
          <p className="mt-8 text-sm opacity-80">
            For questions or special accommodations, contact us at contact@schoolsafetysummit.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
