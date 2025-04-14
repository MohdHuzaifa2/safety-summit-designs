
import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Register: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        {/* Registration Header */}
        <section className="relative bg-gradient-to-b from-black to-[#121212] text-white py-16 overflow-hidden">
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
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="md:w-8/12">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Register for the School Safety <span className="text-safety-green">Leadership Summit</span>
                  </h1>
                  <p className="text-xl opacity-90">
                    Secure your spot at this transformative training event
                  </p>
                </div>
                
                {/* Right Content - Shield */}
                <div className="md:w-4/12 flex justify-center md:justify-end">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-safety-green/10 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center border-2 border-safety-green">
                      <Shield className="w-12 h-12 text-safety-green" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Registration Form Section */}
        <section className="py-12 bg-[#111]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-safety-green hover:text-white mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                <span>Back to Summit Information</span>
              </Link>
              
              <RegistrationForm />
              
              <div className="mt-8 glass-panel p-6">
                <h3 className="text-xl font-bold mb-4 text-safety-green">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div className="p-4 border-l-2 border-safety-green/50 bg-black/40">
                    <h4 className="font-bold text-white mb-2">What's included in the registration fee?</h4>
                    <p className="text-gray-300">
                      Your registration includes full-day training, workshop materials, lunch, refreshments, 
                      and a certificate of completion.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-2 border-safety-green/50 bg-black/40">
                    <h4 className="font-bold text-white mb-2">What is the cancellation policy?</h4>
                    <p className="text-gray-300">
                      Cancellations made 14+ days before the event receive a full refund. Cancellations within 
                      7-13 days receive a 50% refund. No refunds for cancellations within 6 days of the event, 
                      but you may transfer your registration to another attendee.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-2 border-safety-green/50 bg-black/40">
                    <h4 className="font-bold text-white mb-2">Will I receive continuing education credits?</h4>
                    <p className="text-gray-300">
                      Yes, attendees will receive a certificate for 8 hours of professional development, which 
                      may qualify for CEUs depending on your district or organization's policies.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-2 border-safety-green/50 bg-black/40">
                    <h4 className="font-bold text-white mb-2">What should I bring to the event?</h4>
                    <p className="text-gray-300">
                      Please bring a copy of your school's current emergency response plan (if available), 
                      a notebook, and any specific safety concerns you'd like addressed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
