import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  RefreshCw
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export const Analytics: React.FC = () => {
  // Mock data for charts
  const weeklyData = [
    { week: 'Week 1', calls: 18, deals: 2, conversion: 22 },
    { week: 'Week 2', calls: 22, deals: 3, conversion: 25 },
    { week: 'Week 3', calls: 20, deals: 4, conversion: 28 },
    { week: 'Week 4', calls: 24, deals: 5, conversion: 29 },
  ];

  const monthlyData = [
    { month: 'Aug', revenue: 120000, deals: 8 },
    { month: 'Sep', revenue: 145000, deals: 10 },
    { month: 'Oct', revenue: 138000, deals: 9 },
    { month: 'Nov', revenue: 162000, deals: 11 },
    { month: 'Dec', revenue: 185000, deals: 12 },
  ];

  const categoryData = [
    { name: 'Sales Fundamentals', value: 35, color: '#3B82F6' },
    { name: 'HLPFL Process', value: 25, color: '#8B5CF6' },
    { name: 'Communication', value: 20, color: '#10B981' },
    { name: 'Objection Handling', value: 15, color: '#F59E0B' },
    { name: 'Technology', value: 5, color: '#EF4444' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="mt-2 text-gray-600">Track performance and identify trends</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Calendar className="w-4 h-4" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue"
          value="$185,000"
          change={15.3}
          trend="up"
          period="This Month"
        />
        <MetricCard
          title="Total Deals"
          value="12"
          change={8.5}
          trend="up"
          period="This Month"
        />
        <MetricCard
          title="Avg. Deal Size"
          value="$15,417"
          change={6.2}
          trend="up"
          period="This Month"
        />
        <MetricCard
          title="Conversion Rate"
          value="28.5%"
          change={-2.1}
          trend="down"
          period="This Month"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Weekly Performance</h2>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>Last 4 Weeks</option>
              <option>Last 8 Weeks</option>
              <option>Last 12 Weeks</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calls" fill="#3B82F6" name="Discovery Calls" />
              <Bar dataKey="deals" fill="#10B981" name="Deals Closed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Training Completion by Category */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Training by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h2>
          <div className="space-y-4">
            {[
              { stage: 'Outreach', count: 150, percentage: 100 },
              { stage: 'Responses', count: 45, percentage: 30 },
              { stage: 'Discovery Calls', count: 24, percentage: 16 },
              { stage: 'Presentations', count: 18, percentage: 12 },
              { stage: 'Closed Deals', count: 5, percentage: 3.3 },
            ].map((stage) => (
              <div key={stage.stage}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{stage.stage}</span>
                  <span className="font-medium text-gray-900">{stage.count} ({stage.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all"
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Performers</h2>
          <div className="space-y-4">
            {[
              { name: 'Michael Brown', deals: 4, conversion: 35, avatar: 'MB' },
              { name: 'Sarah Miller', deals: 3, conversion: 32, avatar: 'SM' },
              { name: 'James Wilson', deals: 2, conversion: 28, avatar: 'JW' },
              { name: 'Emily Chen', deals: 0, conversion: 15, avatar: 'EC' },
            ].map((performer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{performer.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                    <p className="text-xs text-gray-500">{performer.deals} deals this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{performer.conversion}%</p>
                  <p className="text-xs text-gray-500">conversion</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  period: string;
}> = ({ title, value, change, trend, period }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <BarChart3 className="w-5 h-5 text-gray-400" />
        {trend === 'up' ? (
          <TrendingUp className="w-5 h-5 text-green-600" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-600" />
        )}
      </div>
      <h3 className="text-sm text-gray-600 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{period}</p>
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );
};