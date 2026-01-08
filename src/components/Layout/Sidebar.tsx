import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Settings,
  Target,
  BookOpen
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Training Modules', href: '/training', icon: GraduationCap },
  { name: 'Role Play', href: '/role-play', icon: MessageSquare },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'Performance', href: '/performance', icon: Target },
  { name: 'Resources', href: '/resources', icon: BookOpen },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out',
          'lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900">HLPFL</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={onClose}
                  className={clsx(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon className={clsx('w-5 h-5', isActive ? 'text-primary-600' : 'text-gray-400')} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">NR</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Noah Rank</p>
                <p className="text-xs text-gray-500 truncate">Director of Sales</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};