import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const CTASection = ({ title, subtitle, primaryButton, secondaryButton, bgImage }) => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-(--color-primary) to-(--color-secondary)">
        {bgImage && (
          <div className="absolute inset-0 opacity-10">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link to={primaryButton.link} className="btn-primary !bg-white !text-(--color-primary) hover:!bg-(--color-light) inline-flex items-center justify-center">
              {primaryButton.text}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          )}
          {secondaryButton && (
            <Link to={secondaryButton.link} className="btn-outline inline-flex items-center justify-center">
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
