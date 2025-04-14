
const Speaker = ({ name, title, bio, quote, imageSrc }) => {
  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden border border-safety-green/20">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold text-safety-green mb-1">{name}</h3>
          <p className="text-safety-red font-semibold mb-4">{title}</p>
          <p className="text-gray-300 mb-6">{bio}</p>
          <blockquote className="border-l-4 border-safety-green pl-4 italic text-gray-400">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-16 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Expert Speakers</h2>
          <p className="section-subtitle">
            Learn from nationally recognized school safety experts with decades of real-world experience
            in emergency response, security planning, and crisis management.
          </p>
        </div>
        
        <div className="space-y-10">
          <Speaker
            name="Rob DePriest"
            title="National Security Consultant | Former FBI Crisis Response Leader"
            bio="With over 20 years in federal law enforcement, Rob DePriest has led responses to some of the nation's most high-profile mass casualty events—including the Pulse Nightclub and Stoneman Douglas High School shootings. As the former head of the FBI Miami Crisis Response Program, Rob has trained with agencies worldwide to build scalable emergency plans for schools, stadiums, and government facilities. At the School Safety Leadership Summit, Rob brings insider-level insight and a calm, clear framework to help school leaders evaluate and improve their own emergency response plans—before the unthinkable happens."
            quote="Rob's experience brings unmatched clarity to what schools must do now—not after a crisis."
            imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          
          <Speaker
            name="Bobby Brasher"
            title="DOJ-Certified De-escalation Instructor | Former Director of School Security"
            bio="Bobby Brasher has trained educators, law enforcement, and international mission teams on how to de-escalate threats before they become tragedies. With deep roots in both law enforcement and Christian education, Bobby served as Director of School Security at a Texas boarding school before becoming a DOJ-certified De-escalation Instructor. He's consulted with schools and churches across the U.S., Latin America, and Africa—and served on the security team at the 2024 Republican National Convention. At the Summit, Bobby delivers training grounded in real-world encounters that will transform how your staff interprets behavior, communicates under pressure, and responds with confidence."
            quote="Bobby's training turns fear and uncertainty into clear, calm action—exactly what school staff need most."
            imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
