function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src="/hlpfl-logo.svg" alt="HLPFL" className="h-12" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-white">Noah Rank</p>
                <p className="text-xs text-hlpfl-green">Director of Sales</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-hlpfl-green flex items-center justify-center text-white font-bold">
                NR
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 mb-8 border border-gray-600 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome, Noah! 🚀
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            This is your personal Sales Command Center, built just for you.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 border border-hlpfl-green/30">
            <p className="text-hlpfl-green italic text-sm">
              "Your team's success is built on your leadership. This platform is your command center -
              every feature designed to help you train, inspire, and lead your team to victory. Let's crush it today! 💪"
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Team Members</p>
                <p className="text-3xl font-bold text-white">12</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <p className="text-hlpfl-green text-sm mt-2">+2 this month</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Training Progress</p>
                <p className="text-3xl font-bold text-white">84%</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <p className="text-hlpfl-green text-sm mt-2">+12% this week</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Active Deals</p>
                <p className="text-3xl font-bold text-white">47</p>
              </div>
              <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-hlpfl-green text-sm mt-2">+8 this week</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Revenue</p>
                <p className="text-3xl font-bold text-white">$284K</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-hlpfl-green text-sm mt-2">+23% vs last month</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dashboard</h3>
            <p className="text-gray-400">Track team performance, metrics, and activities in real-time.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Training Modules</h3>
            <p className="text-gray-400">10 comprehensive courses covering HLPFL sales methodology.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Management</h3>
            <p className="text-gray-400">Monitor team members, track performance, and manage growth.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Role-Play Scenarios</h3>
            <p className="text-gray-400">Practice sales conversations with interactive scenarios.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
            <p className="text-gray-400">Visual insights and performance tracking for your team.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/10">
            <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Customizable</h3>
            <p className="text-gray-400">Adapt the platform to match your team's unique needs.</p>
          </div>
        </div>

        {/* Personal Message */}
        <div className="mt-8 bg-gradient-to-r from-hlpfl-green/10 to-transparent rounded-xl p-8 border border-hlpfl-green/30">
          <h2 className="text-2xl font-bold text-white mb-4">Built Just For You, Noah</h2>
          <p className="text-gray-300 mb-4">
            This platform was created specifically to help you lead and inspire your HLPFL sales team.
            Every feature is designed with your success in mind.
          </p>
          <p className="text-hlpfl-green font-semibold">
            Ready to take your team to the next level? Let's do this! 💪
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            Noah's Sales Command Center | HLPFL &copy; 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
