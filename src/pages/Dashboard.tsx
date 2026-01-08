import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Users, 
  GraduationCap, 
  MessageSquare,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  BookOpen
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
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Noah!</h1>
        <p className="mt-2 text-gray-600">Here's what's happening with your sales team today.</p>
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h2>
            <div className="space-y-4">
              {performanceMetrics.slice(0, 5).map((metric) => (
                <div key={metric.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{metric.name}</span>
                      <span className="text-sm text-gray-600">{metric.period}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-2xl font-bold text-gray-900">
                            {metric.value.toLocaleString()} {metric.unit}
                          </span>
                          <span className="text-sm text-gray-600">
                            Target: {metric.target.toLocaleString()} {metric.unit}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center space-x-2">
                    {getTrendIcon(metric.trend)}
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 
                      'text-gray-600'
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