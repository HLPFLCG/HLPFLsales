import { PerformanceMetric, SalesActivity, TeamMember, Notification, User } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Noah Rank',
  email: 'noah.rank@hlpfl.com',
  role: 'Director',
  avatar: '👤'
};

export const performanceMetrics: PerformanceMetric[] = [
  {
    id: '1',
    name: 'Discovery Calls Booked',
    value: 24,
    target: 25,
    unit: 'calls',
    trend: 'up',
    change: 12.5,
    period: 'This Week'
  },
  {
    id: '2',
    name: 'Presentations Delivered',
    value: 18,
    target: 20,
    unit: 'presentations',
    trend: 'up',
    change: 8.2,
    period: 'This Week'
  },
  {
    id: '3',
    name: 'Partnerships Closed',
    value: 5,
    target: 4,
    unit: 'deals',
    trend: 'up',
    change: 25.0,
    period: 'This Week'
  },
  {
    id: '4',
    name: 'Conversion Rate',
    value: 28.5,
    target: 30,
    unit: '%',
    trend: 'stable',
    change: 0.5,
    period: 'This Week'
  },
  {
    id: '5',
    name: 'Pipeline Value',
    value: 185000,
    target: 200000,
    unit: '$',
    trend: 'up',
    change: 15.3,
    period: 'This Month'
  },
  {
    id: '6',
    name: 'Team Training Progress',
    value: 72,
    target: 80,
    unit: '%',
    trend: 'up',
    change: 5.8,
    period: 'This Month'
  }
];

export const recentActivities: SalesActivity[] = [
  {
    id: '1',
    date: new Date('2024-01-08'),
    type: 'discovery_call',
    artist: 'Jordan Rivera',
    outcome: 'positive',
    notes: 'Excellent call. Artist very interested in platform capabilities.',
    duration: 45
  },
  {
    id: '2',
    date: new Date('2024-01-08'),
    type: 'presentation',
    artist: 'Marcus Chen',
    outcome: 'positive',
    notes: 'Presentation well received. Artist reviewing agreement.',
    duration: 30
  },
  {
    id: '3',
    date: new Date('2024-01-07'),
    type: 'follow_up',
    artist: 'Aisha Johnson',
    outcome: 'neutral',
    notes: 'Artist needs more time to consider. Scheduled follow-up for next week.',
    duration: 15
  },
  {
    id: '4',
    date: new Date('2024-01-07'),
    type: 'outreach',
    artist: 'David Park',
    outcome: 'positive',
    notes: 'Artist responded positively to initial outreach. Discovery call scheduled.',
  },
  {
    id: '5',
    date: new Date('2024-01-06'),
    type: 'closed_deal',
    artist: 'Elena Rodriguez',
    outcome: 'positive',
    notes: 'Partnership agreement signed! Onboarding begins next week.',
    duration: 20
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Miller',
    email: 'sarah.miller@hlpfl.com',
    role: 'Sales Representative',
    status: 'active',
    metrics: {
      callsThisWeek: 18,
      dealsThisMonth: 3,
      conversionRate: 32,
      trainingProgress: 85
    }
  },
  {
    id: '2',
    name: 'James Wilson',
    email: 'james.wilson@hlpfl.com',
    role: 'Sales Representative',
    status: 'active',
    metrics: {
      callsThisWeek: 15,
      dealsThisMonth: 2,
      conversionRate: 28,
      trainingProgress: 92
    }
  },
  {
    id: '3',
    name: 'Emily Chen',
    email: 'emily.chen@hlpfl.com',
    role: 'Sales Representative',
    status: 'onboarding',
    metrics: {
      callsThisWeek: 8,
      dealsThisMonth: 0,
      conversionRate: 15,
      trainingProgress: 45
    }
  },
  {
    id: '4',
    name: 'Michael Brown',
    email: 'michael.brown@hlpfl.com',
    role: 'Sales Representative',
    status: 'active',
    metrics: {
      callsThisWeek: 20,
      dealsThisMonth: 4,
      conversionRate: 35,
      trainingProgress: 78
    }
  }
];

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'New Partnership Closed',
    message: 'Congratulations! Elena Rodriguez has signed the partnership agreement.',
    timestamp: new Date('2024-01-08T10:30:00'),
    read: false,
    action: {
      label: 'View Details',
      link: '/activities'
    }
  },
  {
    id: '2',
    type: 'info',
    title: 'Training Module Completed',
    message: 'Your team has completed 72% of assigned training modules this month.',
    timestamp: new Date('2024-01-08T09:15:00'),
    read: false,
    action: {
      label: 'View Progress',
      link: '/training'
    }
  },
  {
    id: '3',
    type: 'warning',
    title: 'Pipeline Review Due',
    message: 'Weekly pipeline review is scheduled for tomorrow at 2:00 PM.',
    timestamp: new Date('2024-01-07T16:45:00'),
    read: true
  },
  {
    id: '4',
    type: 'info',
    title: 'New Role-Play Scenario Added',
    message: 'A new advanced role-play scenario "The Skeptical Realist" has been added to the training library.',
    timestamp: new Date('2024-01-07T14:20:00'),
    read: true,
    action: {
      label: 'Try It Now',
      link: '/role-play'
    }
  }
];