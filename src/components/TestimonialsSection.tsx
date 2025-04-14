
import { FC } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial: FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-safety-red mb-4">
        <Quote size={32} />
      </div>
      <blockquote className="text-lg mb-6">
        {quote}
      </blockquote>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-safety-gray">{title}</p>
      </div>
    </div>
  );
};

const TestimonialsSection: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What School Leaders Are Saying</h2>
          <p className="section-subtitle">
            Hear from educational leaders who have implemented our safety strategies at their schools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            quote="The Summit gave us actionable strategies we could implement immediately. Our staff feels more confident, and our parents have expressed increased trust in our safety protocols."
            name="Dr. Sarah Johnson"
            title="Principal, Lincoln High School"
          />
          
          <Testimonial
            quote="As a private school with limited resources, I was concerned about our security gaps. This training provided cost-effective solutions that didn't compromise on safety."
            name="Michael Rodriguez"
            title="Headmaster, Grace Christian Academy"
          />
          
          <Testimonial
            quote="The tabletop exercises revealed critical flaws in our emergency response plan that we would never have identified otherwise. This training potentially saved lives."
            name="Jennifer Williams"
            title="Superintendent, Westside School District"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
