import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  Phone, 
  Calendar, 
  TrendingUp,
  Award,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Download
} from 'lucide-react';
import { teamMembers } from '../data/mockData';
import { TeamMember } from '../types';

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    onboarding: 'bg-blue-100 text-blue-800',
    inactive: 'bg-gray-100 text-gray-800'
  };

  const getPerformanceColor = (value: number, target: number) => {
    const percentage = (value / target) * 100;
    if (percentage >= 100) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (selectedMember) {
    return (
      <MemberDetailView 
        member={selectedMember} 
        onBack={() => setSelectedMember(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="mt-2 text-gray-600">Manage and monitor your sales team performance</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Team Member</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
              <p className="text-sm text-gray-600">Total Members</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {teamMembers.filter(m => m.status === 'active').length}
              </p>
              <p className="text-sm text-gray-600">Active</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {teamMembers.filter(m => m.status === 'onboarding').length}
              </p>
              <p className="text-sm text-gray-600">Onboarding</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(teamMembers.reduce((sum, m) => sum + m.metrics.trainingProgress, 0) / teamMembers.length)}%
              </p>
              <p className="text-sm text-gray-600">Avg Training</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                    {member.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Calls This Week</span>
                  <span className="font-medium text-gray-900">{member.metrics.callsThisWeek}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${Math.min((member.metrics.callsThisWeek / 25) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Deals This Month</span>
                  <span className="font-medium text-gray-900">{member.metrics.dealsThisMonth}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${Math.min((member.metrics.dealsThisMonth / 5) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Conversion Rate</span>
                  <span className={`font-medium ${getPerformanceColor(member.metrics.conversionRate, 30)}`}>
                    {member.metrics.conversionRate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: `${Math.min((member.metrics.conversionRate / 30) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Training Progress</span>
                  <span className="font-medium text-gray-900">{member.metrics.trainingProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${member.metrics.trainingProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700">
                <span>View Details</span>
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MemberDetailView: React.FC<{ member: TeamMember; onBack: () => void }> = ({ member, onBack }) => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
      >
        <span>←</span>
        <span>Back to Team</span>
      </button>

      {/* Member Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
              <p className="text-lg text-gray-600 mb-3">{member.role}</p>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  member.status === 'active' ? 'bg-green-100 text-green-800' :
                  member.status === 'onboarding' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {member.status}
                </span>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{member.email}</span>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <MoreVertical className="w-4 h-4" />
            <span>Actions</span>
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Calls This Week</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{member.metrics.callsThisWeek}</p>
          <p className="text-sm text-gray-500 mt-1">Target: 25</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">Deals This Month</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{member.metrics.dealsThisMonth}</p>
          <p className="text-sm text-gray-500 mt-1">Target: 5</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Conversion Rate</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{member.metrics.conversionRate}%</p>
          <p className="text-sm text-gray-500 mt-1">Target: 30%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Training Progress</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{member.metrics.trainingProgress}%</p>
          <p className="text-sm text-gray-500 mt-1">Target: 80%</p>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Overview</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Weekly Call Target</span>
              <span className="text-sm font-medium text-gray-900">{member.metrics.callsThisWeek} / 25</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all"
                style={{ width: `${Math.min((member.metrics.callsThisWeek / 25) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Monthly Deal Target</span>
              <span className="text-sm font-medium text-gray-900">{member.metrics.dealsThisMonth} / 5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all"
                style={{ width: `${Math.min((member.metrics.dealsThisMonth / 5) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Conversion Rate Target</span>
              <span className="text-sm font-medium text-gray-900">{member.metrics.conversionRate}% / 30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-purple-500 h-3 rounded-full transition-all"
                style={{ width: `${Math.min((member.metrics.conversionRate / 30) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Training Completion</span>
              <span className="text-sm font-medium text-gray-900">{member.metrics.trainingProgress}% / 80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-orange-500 h-3 rounded-full transition-all"
                style={{ width: `${Math.min((member.metrics.trainingProgress / 80) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Phone className="w-4 h-4" />
          <span>Schedule 1:1</span>
        </button>
        <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <Mail className="w-4 h-4" />
          <span>Send Message</span>
        </button>
        <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          <TrendingUp className="w-4 h-4" />
          <span>View Full Report</span>
        </button>
      </div>
    </div>
  );
};