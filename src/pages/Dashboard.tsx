import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Users, 
  GraduationCap, 
  MessageSquare,
  Target
} from 'lucide-react';
import { performanceMetrics, recentActivities, teamMembers, notifications } from '../data/mockData';
import { MetricCard } from '../components/Dashboard/MetricCard';
import { ActivityList } from '../components/Dashboard/ActivityList';
import { TeamOverview } from '../components/Dashboard/TeamOverview';
import { TrainingProgress } from '../components/Dashboard/TrainingProgress';
import { NotificationCenter } from '../components/Dashboard/NotificationCenter';

export const Dashboard: React.FC = () => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-accent-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-primary-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, Noah!</h1>
        <p className="mt-2 text-primary-400">Here's what's happening with your sales team today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Members"
          value={teamMembers.length}
          icon={Users}
          trend="stable"
          change={0}
          period="Active"
          color="blue"
        />
        <MetricCard
          title="Training Progress"
          value="72%"
          icon={GraduationCap}
          trend="up"
          change={5.8}
          period="This Month"
          color="purple"
        />
        <MetricCard
          title="Discovery Calls"
          value={24}
          icon={MessageSquare}
          trend="up"
          change={12.5}
          period="This Week"
          color="green"
        />
        <MetricCard
          title="Pipeline Value"
          value="$185K"
          icon={Target}
          trend="up"
          change={15.3}
          period="This Month"
          color="orange"
        />
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-primary-100 rounded-xl shadow-lg border border-primary-200 p-6 card-hover">
            <h2 className="text-lg font-semibold text-white mb-6">Performance Metrics</h2>
            <div className="space-y-4">
              {performanceMetrics.slice(0, 5).map((metric) => (
                <div key={metric.id} className="flex items-center justify-between p-4 bg-primary-200 rounded-lg border border-primary-300">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{metric.name}</span>
                      <span className="text-sm text-primary-400">{metric.period}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-2xl font-bold text-white">
                            {metric.value.toLocaleString()} {metric.unit}
                          </span>
                          <span className="text-sm text-primary-400">
                            Target: {metric.target.toLocaleString()} {metric.unit}
                          </span>
                        </div>
                        <div className="w-full bg-primary-300 rounded-full h-2">
                          <div
                            className="bg-accent-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center space-x-2">
                    {getTrendIcon(metric.trend)}
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-accent-400' : 
                      metric.trend === 'down' ? 'text-red-400' : 
                      'text-primary-500'
                    }`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <NotificationCenter notifications={notifications} />
      </div>

      {/* Team and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TeamOverview teamMembers={teamMembers} />
        <ActivityList activities={recentActivities} />
      </div>

      {/* Training Progress */}
      <TrainingProgress />
    </div>
  );
};