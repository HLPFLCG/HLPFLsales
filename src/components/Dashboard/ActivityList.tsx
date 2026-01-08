import React from 'react';
import { Phone, Mail, MessageSquare, CheckCircle, XCircle, Clock } from 'lucide-react';
import { SalesActivity } from '../../types';
import { format } from 'date-fns';

interface ActivityListProps {
  activities: SalesActivity[];
}

const activityIcons = {
  discovery_call: Phone,
  presentation: MessageSquare,
  follow_up: Mail,
  outreach: Mail,
  closed_deal: CheckCircle
};

const activityLabels = {
  discovery_call: 'Discovery Call',
  presentation: 'Presentation',
  follow_up: 'Follow Up',
  outreach: 'Outreach',
  closed_deal: 'Closed Deal'
};

export const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type];
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`p-2 rounded-lg ${
                activity.outcome === 'positive' ? 'bg-green-50' :
                activity.outcome === 'negative' ? 'bg-red-50' :
                'bg-gray-50'
              }`}>
                <Icon className={`w-5 h-5 ${
                  activity.outcome === 'positive' ? 'text-green-600' :
                  activity.outcome === 'negative' ? 'text-red-600' :
                  'text-gray-600'
                }`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900">{activity.artist}</p>
                  <span className="text-xs text-gray-500">
                    {format(activity.date, 'MMM d, yyyy')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{activityLabels[activity.type]}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{activity.notes}</p>
              </div>

              {activity.duration && (
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{activity.duration}m</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};