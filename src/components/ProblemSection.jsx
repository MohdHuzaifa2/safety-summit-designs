
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-16 bg-[#111]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Is Your School Truly Prepared?</h2>
            <p className="section-subtitle">
              Most schools feel unprepared for a real crisis—creating unnecessary anxiety for staff,
              students, and parents. It doesn't have to be this way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg shadow-md border border-safety-green/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-950/50 text-safety-red mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Problem</h3>
              <p className="text-gray-300">
                Security incidents at schools have increased significantly, but most administrators lack specialized 
                training in crisis response and emergency management.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg shadow-md border border-safety-green/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-950/50 text-safety-blue mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Promise</h3>
              <p className="text-gray-300">
                By attending the Summit, you'll gain actionable safety protocols, confidence in crisis situations, 
                and strategies proven to protect school communities.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg shadow-md border border-safety-green/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-950/50 text-green-600 mb-6">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Proof</h3>
              <p className="text-gray-300">
                Our experts have trained thousands of school leaders and law enforcement professionals,
                and led responses to high-profile incidents across the nation.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-safety-green">
              Don't wait for a crisis to discover gaps in your school safety plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
