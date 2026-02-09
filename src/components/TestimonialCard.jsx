import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, company, image }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-(--color-gray-light) h-full flex flex-col">
      <Quote className="text-(--color-accent) mb-6" size={40} />
      <p className="text-(--color-gray-dark) text-lg mb-6 flex-grow leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-bold text-(--color-dark)">{name}</h4>
          <p className="text-(--color-gray) text-sm">{role}</p>
          {company && <p className="text-(--color-primary) text-sm font-semibold">{company}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
