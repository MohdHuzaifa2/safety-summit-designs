
import { FC } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Register: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Registration Header */}
        <section className="bg-safety-blue text-white py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Register for the School Safety Leadership Summit
              </h1>
              <p className="text-xl opacity-90">
                Secure your spot at this transformative training event
              </p>
            </div>
          </div>
        </section>
        
        {/* Registration Form Section */}
        <section className="py-12 bg-safety-light">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-safety-blue hover:text-safety-red mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                <span>Back to Summit Information</span>
              </Link>
              
              <RegistrationForm />
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-safety-blue">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-1">What's included in the registration fee?</h4>
                    <p className="text-safety-gray">
                      Your registration includes full-day training, workshop materials, lunch, refreshments, 
                      and a certificate of completion.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">What is the cancellation policy?</h4>
                    <p className="text-safety-gray">
                      Cancellations made 14+ days before the event receive a full refund. Cancellations within 
                      7-13 days receive a 50% refund. No refunds for cancellations within 6 days of the event, 
                      but you may transfer your registration to another attendee.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Will I receive continuing education credits?</h4>
                    <p className="text-safety-gray">
                      Yes, attendees will receive a certificate for 8 hours of professional development, which 
                      may qualify for CEUs depending on your district or organization's policies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">What should I bring to the event?</h4>
                    <p className="text-safety-gray">
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
