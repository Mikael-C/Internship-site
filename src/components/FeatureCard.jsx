const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-(--color-gray-light) hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-gradient-to-br from-(--color-primary)/10 to-(--color-secondary)/10 rounded-xl flex items-center justify-center mb-6">
        <Icon className="text-(--color-primary)" size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-(--color-gray) leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
