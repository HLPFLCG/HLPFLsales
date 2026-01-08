import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  PlayCircle, 
  Filter,
  Search,
  TrendingUp,
  Award
} from 'lucide-react';
import { trainingModules } from '../data/trainingModules';
import { TrainingModule } from '../types';
import clsx from 'clsx';

const categories = ['All', ...Array.from(new Set(trainingModules.map(m => m.category)))];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);

  const filteredModules = trainingModules.filter(module => {
    const matchesCategory = selectedCategory === 'All' || module.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || module.difficulty === selectedDifficulty;
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sales Fundamentals':
        return 'bg-blue-100 text-blue-800';
      case 'HLPFL Process':
        return 'bg-purple-100 text-purple-800';
      case 'Communication':
        return 'bg-green-100 text-green-800';
      case 'Objection Handling':
        return 'bg-orange-100 text-orange-800';
      case 'Technology':
        return 'bg-cyan-100 text-cyan-800';
      case 'Analytics':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedModule) {
    return (
      <ModuleDetailView 
        module={selectedModule} 
        onBack={() => setSelectedModule(null)} 
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Training Modules</h1>
        <p className="mt-2 text-gray-600">
          Master HLPFL's sales methodology through comprehensive training courses
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{trainingModules.length}</p>
              <p className="text-sm text-gray-600">Total Modules</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {trainingModules.filter(m => m.completed).length}
              </p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.floor(trainingModules.reduce((sum, m) => sum + m.duration, 0) / 60)}h
              </p>
              <p className="text-sm text-gray-600">Total Duration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="relative">
            <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <div
            key={module.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedModule(module)}
          >
            {/* Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className={clsx('px-3 py-1 rounded-full text-xs font-medium', getCategoryColor(module.category))}>
                  {module.category}
                </span>
                {module.completed && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{module.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {module.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={clsx(
                      'h-2 rounded-full transition-all duration-300',
                      module.progress === 100 ? 'bg-green-500' : 'bg-primary-500'
                    )}
                    style={{ width: `${module.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{module.duration} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={clsx('px-2 py-1 rounded text-xs font-medium', getDifficultyColor(module.difficulty))}>
                    {module.difficulty}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                {module.progress > 0 ? (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    <span>Continue</span>
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4" />
                    <span>Start Module</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
          <p className="text-gray-600">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
};

const ModuleDetailView: React.FC<{ module: TrainingModule; onBack: () => void }> = ({ module, onBack }) => {
  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
      >
        <span>←</span>
        <span>Back to Modules</span>
      </button>

      {/* Module Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{module.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{module.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{module.duration} minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Award className="w-4 h-4" />
                <span>{module.difficulty}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>{module.sections.length} sections</span>
              </div>
            </div>
          </div>

          {module.completed && (
            <div className="flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Completed</span>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Your Progress</span>
            <span className="font-medium text-gray-900">{module.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${module.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {module.sections.map((section, index) => (
          <div
            key={section.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                  {section.completed && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                
                <div className="ml-11">
                  <p className="text-sm text-gray-600 mb-3">{section.content}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{section.duration} min</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                      {section.type}
                    </span>
                  </div>
                </div>
              </div>

              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ml-4">
                {section.completed ? 'Review' : 'Start'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {module.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};