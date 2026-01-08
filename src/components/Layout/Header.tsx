import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { notifications } from '../../data/mockData';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-white border-b border-gray-200 h-16 px-4 lg:px-6">
      <div className="flex items-center justify-between h-full">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">HLPFL Sales Training</span>
            <span>/</span>
            <span>Dashboard</span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search modules, scenarios, or resources..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
            <Bell className="w-6 h-6" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Noah Rank</p>
              <p className="text-xs text-gray-500">Director of Sales</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">NR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};