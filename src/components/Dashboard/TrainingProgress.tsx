import React from 'react';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';
import { trainingModules } from '../../data/trainingModules';

export const TrainingProgress: React.FC = () => {
  const completedModules = trainingModules.filter(m => m.completed).length;
  const totalDuration = trainingModules.reduce((sum, m) => sum + m.duration, 0);
  const completedDuration = trainingModules
    .filter(m => m.completed)
    .reduce((sum, m) => sum + m.duration, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Training Progress</h2>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View All Modules
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{completedModules}</p>
          <p className="text-sm text-gray-600">Modules Completed</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{trainingModules.length}</p>
          <p className="text-sm text-gray-600">Total Modules</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {Math.floor(completedDuration / 60)}h {completedDuration % 60}m
          </p>
          <p className="text-sm text-gray-600">Time Invested</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Overall Progress</span>
          <span className="font-medium text-gray-900">
            {Math.round((completedModules / trainingModules.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(completedModules / trainingModules.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Recommended Next Module */}
      <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary-900 mb-1">Recommended Next</p>
            <p className="text-xs text-primary-700">
              {trainingModules.find(m => !m.completed)?.title || 'All modules completed!'}
            </p>
          </div>
          <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};