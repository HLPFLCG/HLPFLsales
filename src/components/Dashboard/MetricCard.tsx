import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend: 'up' | 'down' | 'stable';
  change: number;
  period: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorStyles = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'border-blue-200'
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    border: 'border-green-200'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-200'
  }
};

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  change,
  period,
  color
}) => {
  const styles = colorStyles[color];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${styles.bg}`}>
          <Icon className={`w-6 h-6 ${styles.icon}`} />
        </div>
        {trend !== 'stable' && (
          <div className={`flex items-center space-x-1 ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? (
              <span className="text-sm font-medium">↑ {change}%</span>
            ) : (
              <span className="text-sm font-medium">↓ {change}%</span>
            )}
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
    </div>
  );
};