// Core TypeScript interfaces and types for the HLPFL Sales Training Application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Director' | 'Manager' | 'Sales Representative';
  avatar?: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  category: TrainingCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  progress: number; // 0-100
  sections: TrainingSection[];
  tags: string[];
}

export type TrainingCategory = 
  | 'Sales Fundamentals'
  | 'HLPFL Process'
  | 'Communication'
  | 'Objection Handling'
  | 'Technology'
  | 'Analytics';

export interface TrainingSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'interactive' | 'quiz';
  completed: boolean;
  duration: number;
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
  attempts: number;
  bestScore?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface RolePlayScenario {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  script: ScenarioLine[];
  objectives: string[];
  tips: string[];
}

export interface ScenarioLine {
  speaker: 'artist' | 'salesperson';
  text: string;
  type: 'question' | 'response' | 'objection' | 'closing';
}

export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number; // percentage change
  period: string;
}

export interface SalesActivity {
  id: string;
  date: Date;
  type: 'outreach' | 'discovery_call' | 'presentation' | 'follow_up' | 'closed_deal';
  artist: string;
  outcome: 'positive' | 'neutral' | 'negative';
  notes: string;
  duration?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'onboarding' | 'inactive';
  avatar?: string;
  metrics: {
    callsThisWeek: number;
    dealsThisMonth: number;
    conversionRate: number;
    trainingProgress: number;
  };
}

export interface DashboardWidget {
  id: string;
  type: 'metric' | 'chart' | 'list' | 'calendar';
  title: string;
  size: 'small' | 'medium' | 'large';
  position: { x: number; y: number; w: number; h: number };
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    link: string;
  };
}

export interface Document {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'doc' | 'video' | 'link';
  url: string;
  category: string;
  uploadDate: Date;
  size: number;
}