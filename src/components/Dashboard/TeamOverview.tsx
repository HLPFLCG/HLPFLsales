import React from 'react';
import { TeamMember } from '../../types';

interface TeamOverviewProps {
  teamMembers: TeamMember[];
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  onboarding: 'bg-blue-100 text-blue-800',
  inactive: 'bg-gray-100 text-gray-800'
};

export const TeamOverview: React.FC<TeamOverviewProps> = ({ teamMembers }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Team Overview</h2>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Manage Team
        </button>
      </div>
      
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <div>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[member.status]}`}>
                    {member.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{member.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-right">
              <div>
                <p className="text-xs text-gray-500">Calls</p>
                <p className="text-sm font-semibold text-gray-900">{member.metrics.callsThisWeek}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Deals</p>
                <p className="text-sm font-semibold text-gray-900">{member.metrics.dealsThisMonth}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Conv.</p>
                <p className="text-sm font-semibold text-gray-900">{member.metrics.conversionRate}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};