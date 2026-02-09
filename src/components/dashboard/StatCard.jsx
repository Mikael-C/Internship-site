const StatCard = ({ icon: Icon, label, value, trend, trendValue, bgColor, iconColor }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <Icon size={24} className={iconColor} strokeWidth={2} />
        </div>
        {trend && (
          <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
            trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {trend === 'up' ? '+' : '-'}{trendValue}%
          </div>
        )}
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
