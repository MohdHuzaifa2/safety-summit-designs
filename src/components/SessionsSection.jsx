
import { 
  ShieldAlert, 
  FileText, 
  ActivitySquare, 
  MessageCircle, 
  Heart, 
  Users, 
  BarChart3 
} from 'lucide-react';

const Session = ({ icon, title, description }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md border border-safety-green/20">
      <div className="flex items-start">
        <div className="mr-4 text-safety-green">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SessionsSection = () => {
  return (
    <section id="sessions" className="py-16 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Training Sessions</h2>
          <p className="section-subtitle">
            The School Safety Leadership Summit offers practical, hands-on training to equip your team
            with the skills and knowledge needed to create a safer school environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Session
            icon={<ShieldAlert size={28} />}
            title="Threat Assessment & Response"
            description="Learn proven methodologies for identifying potential threats and developing appropriate response protocols before incidents escalate."
          />
          
          <Session
            icon={<FileText size={28} />}
            title="Emergency Response Planning"
            description="Create, review, and revise comprehensive emergency response plans that meet both regulatory requirements and real-world crisis situations."
          />
          
          <Session
            icon={<ActivitySquare size={28} />}
            title="Stop-the-Bleed Training"
            description="Gain essential medical response skills to save lives during an emergency when every second counts, including hands-on training."
          />
          
          <Session
            icon={<MessageCircle size={28} />}
            title="De-escalation Strategies"
            description="Master powerful verbal and non-verbal techniques to defuse tense situations and prevent them from becoming violent incidents."
          />
          
          <Session
            icon={<Heart size={28} />}
            title="Trauma-Informed Response"
            description="Understand how trauma affects students, staff, and the entire school community, and develop appropriate support frameworks."
          />
          
          <Session
            icon={<BarChart3 size={28} />}
            title="Risk Assessment"
            description="Learn systematic approaches to identify, evaluate, and address vulnerabilities in your school's physical and operational security."
          />
          
          <Session
            icon={<Users size={28} />}
            title="Tabletop Exercises"
            description="Participate in realistic scenario-based drills that test your team's readiness and reveal critical areas for improvement."
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-safety-blue/20 text-white p-8 rounded-lg inline-block border border-safety-blue/30">
            <h3 className="text-2xl font-bold mb-3">Register Today – Spots Are Limited!</h3>
            <p className="mb-6">
              To ensure personalized training and maximum impact, we're limiting attendance to 100 school leaders per location.
            </p>
            <a 
              href="/register" 
              className="inline-block bg-safety-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-200"
            >
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
