import { Clock, MapPin, Building2, TrendingUp } from 'lucide-react';

const InternshipCard = ({ internship, showProgress = false }) => {
  const statusColors = {
    ongoing: 'bg-blue-100 text-blue-700',
    applied: 'bg-yellow-100 text-yellow-700',
    interview: 'bg-purple-100 text-purple-700',
    offer: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-teal-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{internship.title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Building2 size={16} />
            <span>{internship.company}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{internship.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{internship.duration}</span>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[internship.status]}`}>
          {internship.status.charAt(0).toUpperCase() + internship.status.slice(1)}
        </span>
      </div>

      {showProgress && internship.progress !== undefined && (
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600 font-medium">Progress</span>
            <span className="text-teal-600 font-semibold">{internship.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-teal-400 to-cyan-500 h-2 rounded-full transition-all"
              style={{ width: `${internship.progress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp size={16} className="text-teal-600" />
          <span>Applied {internship.appliedDate}</span>
        </div>
        <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
