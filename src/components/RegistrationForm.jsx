
import { useState } from 'react';
import { Button } from './ui/button';
import { Calendar, MapPin, Users, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from './ui/use-toast';

const RegistrationForm = () => {
  const { toast } = useToast();
  const [location, setLocation] = useState('pinehurst');
  const [attendees, setAttendees] = useState(1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering for the School Safety Leadership Summit! Check your email for confirmation details.",
    });
  };
  
  const calculatePrice = () => {
    const basePrice = 299;
    const discount = attendees >= 3 ? 0.1 : 0; // 10% discount for 3+ attendees
    const total = basePrice * attendees * (1 - discount);
    return total.toFixed(2);
  };
  
  return (
    <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg border border-safety-green/20">
      <h2 className="text-2xl font-bold mb-6 text-center text-safety-green">Registration Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Select Event Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                location === 'pinehurst' 
                  ? 'border-safety-green bg-safety-green/10' 
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              onClick={() => setLocation('pinehurst')}
            >
              <div className="flex items-center mb-2">
                <Calendar className="mr-2 h-5 w-5 text-safety-green" />
                <span className="font-semibold text-white">June 16th, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-safety-green" />
                <span className="text-gray-300">Pinehurst, North Carolina</span>
              </div>
            </div>
            
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                location === 'montgomery' 
                  ? 'border-safety-green bg-safety-green/10' 
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              onClick={() => setLocation('montgomery')}
            >
              <div className="flex items-center mb-2">
                <Calendar className="mr-2 h-5 w-5 text-safety-green" />
                <span className="font-semibold text-white">June 18th, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-safety-green" />
                <span className="text-gray-300">Montgomery, Alabama</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Number of Attendees</h3>
          <div className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-safety-green" />
            <select 
              value={attendees} 
              onChange={(e) => setAttendees(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
            >
              <option value={1}>1 Attendee</option>
              <option value={2}>2 Attendees</option>
              <option value={3}>3 Attendees (10% Discount)</option>
              <option value={4}>4 Attendees (10% Discount)</option>
              <option value={5}>5 Attendees (10% Discount)</option>
              <option value={6}>6+ Attendees (Contact Us)</option>
            </select>
          </div>
          {attendees >= 3 && (
            <p className="text-sm text-green-500 mt-1">Team discount applied: 10% off</p>
          )}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Primary Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">First Name *</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">Last Name *</label>
              <input
                type="text"
                required
                className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">School/Organization *</label>
            <input
              type="text"
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Job Title *</label>
            <input
              type="text"
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Email *</label>
            <input
              type="email"
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Phone *</label>
            <input
              type="tel"
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green bg-black text-white"
            />
          </div>
        </div>
        
        {attendees > 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Additional Attendees</h3>
            <p className="text-sm text-gray-300 mb-4">
              You'll receive a form to provide additional attendee information after submitting this registration.
            </p>
          </div>
        )}
        
        <div className="bg-[#111] p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-2 flex items-center text-white">
            <CreditCard className="mr-2 h-5 w-5 text-safety-green" /> Payment Summary
          </h3>
          <div className="flex justify-between mb-1 text-gray-300">
            <span>Registration Fee:</span>
            <span>${299} per person</span>
          </div>
          <div className="flex justify-between mb-1 text-gray-300">
            <span>Number of Attendees:</span>
            <span>{attendees}</span>
          </div>
          {attendees >= 3 && (
            <div className="flex justify-between mb-1 text-green-500">
              <span>Team Discount:</span>
              <span>-10%</span>
            </div>
          )}
          <div className="border-t border-gray-700 my-2"></div>
          <div className="flex justify-between font-bold text-white">
            <span>Total:</span>
            <span>${calculatePrice()}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-2 bg-black border-gray-700"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-300">
              I agree to the <a href="#" className="text-safety-green hover:underline">terms and conditions</a> and understand the refund policy.
            </label>
          </div>
          
          <Button type="submit" className="btn-primary w-full text-lg">
            Complete Registration
          </Button>
          
          <p className="text-center text-sm text-gray-400">
            You will be redirected to our secure payment processor after submission.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
