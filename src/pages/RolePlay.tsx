import React, { useState } from 'react';
import { 
  MessageSquare, 
  Play, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';
import { rolePlayScenarios } from '../data/rolePlayScenarios';
import { RolePlayScenario } from '../types';
import clsx from 'clsx';

const categories = ['All', ...Array.from(new Set(rolePlayScenarios.map(s => s.category)))];
const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export const RolePlay: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedScenario, setSelectedScenario] = useState<RolePlayScenario | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const filteredScenarios = rolePlayScenarios.filter(scenario => {
    const matchesCategory = selectedCategory === 'All' || scenario.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || scenario.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleResponseSubmit = () => {
    // Simple validation - in a real app, this would use AI to evaluate responses
    if (userResponse.trim().length < 20) {
      setFeedback({ type: 'error', message: 'Please provide a more detailed response.' });
    } else {
      setFeedback({ type: 'success', message: 'Good response! Let\'s continue.' });
      setTimeout(() => {
        setCurrentStep(prev => Math.min(prev + 2, selectedScenario!.script.length));
        setUserResponse('');
        setFeedback(null);
      }, 1500);
    }
  };

  const handleResetScenario = () => {
    setCurrentStep(0);
    setUserResponse('');
    setFeedback(null);
  };

  if (selectedScenario) {
    return (
      <ScenarioPracticeView
        scenario={selectedScenario}
        currentStep={currentStep}
        userResponse={userResponse}
        feedback={feedback}
        onBack={() => setSelectedScenario(null)}
        onResponseChange={setUserResponse}
        onResponseSubmit={handleResponseSubmit}
        onReset={handleResetScenario}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Role Play Scenarios</h1>
        <p className="mt-2 text-gray-600">
          Practice real-world sales conversations with interactive scenarios
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{rolePlayScenarios.length}</p>
              <p className="text-sm text-gray-600">Total Scenarios</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {rolePlayScenarios.filter(s => s.difficulty === 'Easy').length}
              </p>
              <p className="text-sm text-gray-600">Beginner Friendly</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Array.from(new Set(rolePlayScenarios.map(s => s.category))).length}
              </p>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedScenario(scenario)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className={clsx('px-3 py-1 rounded-full text-xs font-medium', getDifficultyColor(scenario.difficulty))}>
                  {scenario.difficulty}
                </span>
                <Play className="w-5 h-5 text-primary-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {scenario.category}
                </span>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <MessageSquare className="w-3 h-3" />
                  <span>{scenario.script.length} exchanges</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                <Play className="w-4 h-4" />
                <span>Start Scenario</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredScenarios.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No scenarios found</h3>
          <p className="text-gray-600">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

const ScenarioPracticeView: React.FC<{
  scenario: RolePlayScenario;
  currentStep: number;
  userResponse: string;
  feedback: { type: 'success' | 'error'; message: string } | null;
  onBack: () => void;
  onResponseChange: (response: string) => void;
  onResponseSubmit: () => void;
  onReset: () => void;
}> = ({ scenario, currentStep, userResponse, feedback, onBack, onResponseChange, onResponseSubmit, onReset }) => {
  const currentLine = scenario.script[currentStep];
  const isArtistTurn = currentLine?.speaker === 'artist';
  const isComplete = currentStep >= scenario.script.length;

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
      >
        <span>←</span>
        <span>Back to Scenarios</span>
      </button>

      {/* Scenario Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{scenario.title}</h1>
            <p className="text-gray-600">{scenario.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onReset}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Reset
            </button>
            <span className={clsx('px-3 py-1 rounded-full text-xs font-medium', 
              scenario.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              scenario.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            )}>
              {scenario.difficulty}
            </span>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-2">
            <Target className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Objectives</h3>
              <ul className="space-y-1">
                {scenario.objectives.map((objective, index) => (
                  <li key={index} className="text-sm text-blue-700">• {objective}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-yellow-900 mb-2">Tips</h3>
              <ul className="space-y-1">
                {scenario.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-yellow-700">• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Conversation Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversation</h2>

        {/* Previous Lines */}
        <div className="space-y-4 mb-6">
          {scenario.script.slice(0, currentStep).map((line, index) => (
            <div
              key={index}
              className={clsx('flex', line.speaker === 'artist' ? 'justify-start' : 'justify-end')}
            >
              <div className={clsx(
                'max-w-[80%] p-4 rounded-lg',
                line.speaker === 'artist' 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'bg-primary-600 text-white'
              )}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={clsx('text-xs font-medium', 
                    line.speaker === 'artist' ? 'text-gray-600' : 'text-primary-100'
                  )}>
                    {line.speaker === 'artist' ? 'Artist' : 'You'}
                  </span>
                  {line.type && (
                    <span className={clsx('text-xs px-2 py-0.5 rounded', 
                      line.type === 'objection' ? 'bg-red-100 text-red-800' :
                      line.type === 'question' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-200 text-gray-700'
                    )}>
                      {line.type}
                    </span>
                  )}
                </div>
                <p className="text-sm">{line.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Turn */}
        {!isComplete && (
          <div className="border-t border-gray-200 pt-6">
            {isArtistTurn ? (
              <div className="flex items-start space-x-3">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-600">Artist</span>
                    {currentLine.type && (
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        {currentLine.type}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-900 mb-4">{currentLine.text}</p>
                  <button
                    onClick={() => onResponseChange('')}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                  >
                    <span>Continue to your response</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-sm font-medium text-gray-600">Your Turn</span>
                  {currentLine.type && (
                    <span className="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                      {currentLine.type}
                    </span>
                  )}
                </div>
                <textarea
                  value={userResponse}
                  onChange={(e) => onResponseChange(e.target.value)}
                  placeholder="Type your response here..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
                {feedback && (
                  <div className={clsx('mt-4 p-4 rounded-lg', 
                    feedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
                    'bg-red-50 text-red-800 border border-red-200'
                  )}>
                    <div className="flex items-center space-x-2">
                      {feedback.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <XCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium">{feedback.message}</span>
                    </div>
                  </div>
                )}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={onResponseSubmit}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
                  >
                    <span>Submit Response</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Complete */}
        {isComplete && (
          <div className="border-t border-gray-200 pt-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scenario Complete!</h3>
            <p className="text-gray-600 mb-4">You've completed this role play scenario.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={onReset}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={onBack}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Back to Scenarios
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">
            {Math.min(currentStep + 1, scenario.script.length)} / {scenario.script.length} exchanges
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(((currentStep + 1) / scenario.script.length) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};