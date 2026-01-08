import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

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
    bg: 'bg-primary-200',
    icon: 'text-blue-400',
    border: 'border-primary-300'
  },
  green: {
    bg: 'bg-primary-200',
    icon: 'text-accent-400',
    border: 'border-primary-300'
  },
  purple: {
    bg: 'bg-primary-200',
    icon: 'text-purple-400',
    border: 'border-primary-300'
  },
  orange: {
    bg: 'bg-primary-200',
    icon: 'text-orange-400',
    border: 'border-primary-300'
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
    <div className="bg-primary-100 rounded-xl shadow-lg border border-primary-200 p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${styles.bg} border ${styles.border}`}>
          <Icon className={`w-6 h-6 ${styles.icon}`} />
        </div>
        {trend !== 'stable' && (
          <div className={`flex items-center space-x-1 ${
            trend === 'up' ? 'text-accent-400' : 'text-red-400'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">{change}%</span>
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-primary-400 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-primary-500 mt-1">{period}</p>
    </div>
  );
};