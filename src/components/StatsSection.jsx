const StatsSection = ({ stats, title, subtitle, bgColor = "bg-white" }) => {
  return (
    <section className={`${bgColor} section-padding`}>
      <div className="container-custom">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-(--color-gray) max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-(--color-gray)">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
