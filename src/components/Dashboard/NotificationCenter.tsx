import React from 'react';
import { Bell, CheckCircle, Info, AlertTriangle, XCircle, ExternalLink } from 'lucide-react';
import { Notification } from '../../types';
import { format } from 'date-fns';

interface NotificationCenterProps {
  notifications: Notification[];
}

const notificationIcons = {
  success: CheckCircle,
  info: Info,
  warning: AlertTriangle,
  error: XCircle
};

const notificationColors = {
  success: 'bg-green-50 text-green-600 border-green-200',
  info: 'bg-blue-50 text-blue-600 border-blue-200',
  warning: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  error: 'bg-red-50 text-red-600 border-red-200'
};

export const NotificationCenter: React.FC<NotificationCenterProps> = ({ notifications }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-gray-700" />
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          {notifications.filter(n => !n.read).length > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {notifications.filter(n => !n.read).length}
            </span>
          )}
        </div>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Mark All Read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.slice(0, 5).map((notification) => {
          const Icon = notificationIcons[notification.type];
          const colors = notificationColors[notification.type];
          
          return (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${colors} ${
                !notification.read ? 'bg-opacity-100' : 'bg-opacity-50'
              } transition-colors`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.split(' ')[1]}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-sm font-medium ${colors.split(' ')[1]}`}>
                      {notification.title}
                    </p>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {format(notification.timestamp, 'MMM d, h:mm a')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{notification.message}</p>
                  {notification.action && (
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center space-x-1">
                      <span>{notification.action.label}</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length > 5 && (
        <button className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium py-2">
          View All Notifications
        </button>
      )}
    </div>
  );
};