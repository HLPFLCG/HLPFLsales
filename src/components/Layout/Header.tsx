import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { notifications } from '../../data/mockData';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-primary-100 border-b border-primary-200 h-16 px-4 lg:px-6">
      <div className="flex items-center justify-between h-full">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-primary-600 hover:text-accent-400 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center space-x-3">
            <img src="/hlpfl-logo.svg" alt="HLPFL Logo" className="h-8 w-auto" />
            <div className="flex items-center space-x-2 text-sm text-primary-400">
              <span className="font-medium text-white">HLPFL</span>
              <span className="text-accent-400">Sales Training</span>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search modules, scenarios, or resources..."
              className="w-full pl-10 pr-4 py-2 bg-primary-200 border border-primary-300 rounded-lg text-sm text-white placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-500" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative text-primary-400 hover:text-accent-400 transition-colors">
            <Bell className="w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-primary-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-3 pl-4 border-l border-primary-300">
            <div className="text-right">
              <p className="text-sm font-medium text-white">Noah Rank</p>
              <p className="text-xs text-accent-400">Director of Sales</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center ring-2 ring-accent-400 ring-offset-2 ring-offset-primary-100">
              <span className="text-primary-900 font-bold">NR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};