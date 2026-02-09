import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatCard from '../components/dashboard/StatCard';
import InternshipCard from '../components/dashboard/InternshipCard';
import { FileText, Briefcase, CheckCircle, TrendingUp, CalendarDays, Filter, Plus } from 'lucide-react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data
  const stats = [
    {
      icon: FileText,
      label: 'Total Applications',
      value: '12',
      trend: 'up',
      trendValue: '20',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Briefcase,
      label: 'Ongoing Internships',
      value: '3',
      trend: 'up',
      trendValue: '50',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      label: 'Completed',
      value: '5',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: '67%',
      trend: 'up',
      trendValue: '12',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
  ];

  const ongoingInternships = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      duration: '3 months',
      status: 'ongoing',
      progress: 65,
      appliedDate: '2 weeks ago'
    },
    {
      id: 2,
      title: 'UX Design Intern',
      company: 'Creative Studios',
      location: 'New York, USA',
      duration: '6 months',
      status: 'ongoing',
      progress: 40,
      appliedDate: '1 month ago'
    },
    {
      id: 3,
      title: 'Data Analytics Intern',
      company: 'DataViz Inc',
      location: 'Remote',
      duration: '4 months',
      status: 'ongoing',
      progress: 85,
      appliedDate: '3 weeks ago'
    },
  ];

  const allApplications = [
    ...ongoingInternships,
    {
      id: 4,
      title: 'Backend Engineer Intern',
      company: 'CloudTech',
      location: 'San Francisco, USA',
      duration: '3 months',
      status: 'interview',
      appliedDate: '5 days ago'
    },
    {
      id: 5,
      title: 'Mobile App Developer',
      company: 'AppWorks',
      location: 'Remote',
      duration: '6 months',
      status: 'applied',
      appliedDate: '1 week ago'
    },
    {
      id: 6,
      title: 'Marketing Intern',
      company: 'BrandBoost',
      location: 'London, UK',
      duration: '3 months',
      status: 'offer',
      appliedDate: '2 days ago'
    },
    {
      id: 7,
      title: 'Product Management Intern',
      company: 'InnovateLabs',
      location: 'Remote',
      duration: '4 months',
      status: 'applied',
      appliedDate: '3 days ago'
    },
    {
      id: 8,
      title: 'DevOps Intern',
      company: 'ServerPro',
      location: 'Berlin, Germany',
      duration: '5 months',
      status: 'rejected',
      appliedDate: '1 month ago'
    },
  ];

  const upcomingDeadlines = [
    { id: 1, title: 'Submit project milestone', company: 'TechCorp Solutions', date: '2 days', priority: 'high' },
    { id: 2, title: 'Interview with Creative Studios', company: 'Creative Studios', date: '5 days', priority: 'medium' },
    { id: 3, title: 'Complete training module', company: 'DataViz Inc', date: '1 week', priority: 'low' },
  ];

  const filters = [
    { label: 'All', value: 'all', count: allApplications.length },
    { label: 'Ongoing', value: 'ongoing', count: ongoingInternships.length },
    { label: 'Applied', value: 'applied', count: allApplications.filter(a => a.status === 'applied').length },
    { label: 'Interview', value: 'interview', count: allApplications.filter(a => a.status === 'interview').length },
    { label: 'Offers', value: 'offer', count: allApplications.filter(a => a.status === 'offer').length },
  ];

  const filteredApplications = activeFilter === 'all' 
    ? allApplications 
    : allApplications.filter(app => app.status === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-64">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="p-4 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Ugochukwu! 👋</h1>
            <p className="text-gray-600">Here's what's happening with your internship applications today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Ongoing Internships - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ongoing Internships</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  <Plus size={20} />
                  <span>Apply New</span>
                </button>
              </div>
              <div className="space-y-4">
                {ongoingInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} showProgress={true} />
                ))}
              </div>
            </div>

            {/* Upcoming Deadlines - Takes 1 column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CalendarDays size={24} className="text-gray-900" />
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Deadlines</h2>
              </div>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-gray-900">{deadline.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        deadline.priority === 'high' ? 'bg-red-100 text-red-700' :
                        deadline.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {deadline.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{deadline.company}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <CalendarDays size={14} />
                      <span>In {deadline.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all text-sm font-medium text-gray-700">
                    📝 Update Resume
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all text-sm font-medium text-gray-700">
                    💼 Browse Internships
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all text-sm font-medium text-gray-700">
                    📅 Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* All Applications Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Applications</h2>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    activeFilter === filter.value
                      ? 'bg-teal-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>

            {/* Applications Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredApplications.map((application) => (
                <InternshipCard key={application.id} internship={application} showProgress={application.status === 'ongoing'} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
