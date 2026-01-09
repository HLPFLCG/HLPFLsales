function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src="/hlpfl-logo.svg" alt="HLPFL" className="h-12" />
              <div className="hidden md:block">
                <p className="text-xs text-gray-400">Zaitsev Holding Group</p>
                <p className="text-sm font-semibold text-hlpfl-green">HLPFL.dev</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-xs text-gray-400">From GR with 💚</p>
                <p className="text-xs text-hlpfl-green">TakeProfit Trader Certified</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">Noah Rank</p>
                <p className="text-xs text-hlpfl-green">Trader • Artist • Entrepreneur</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-hlpfl-green flex items-center justify-center text-gray-900 font-bold ring-2 ring-hlpfl-green/50">
                NR
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Personal Touch */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 mb-8 border border-hlpfl-green/30 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            What's good, Noah! 🚀
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Built this for you, bro. Your personal command center for <span className="text-hlpfl-green font-semibold">HLPFL</span>, <span className="text-hlpfl-green font-semibold">Zaitsev Holding Group</span>, and everything you're building.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 border border-hlpfl-green/30">
            <p className="text-hlpfl-green italic">
              "10,000 hours is only 416.7 days" - Remember that. You're putting in the work with trading, Alki, and HLPFL.
              From blowing accounts to hitting $13k+ profits, you keep getting back up. That's what separates you from everyone else.
              The darker the days, the better the nights. Let's get it. 💪
            </p>
          </div>
        </div>

        {/* Trading Stats - Your Real Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Best Day</p>
                <p className="text-3xl font-bold text-hlpfl-green">$13.3K</p>
              </div>
              <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">TakeProfit Trader | Nov 2025</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Trading Assets</p>
                <p className="text-2xl font-bold text-white">Gold • US30</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">XAU/USD Sessions: Asia • NY</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Alki Tracks</p>
                <p className="text-3xl font-bold text-white">∞</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">regrets • KARMA • LET GO</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-hlpfl-green transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Dream Ride</p>
                <p className="text-xl font-bold text-white">GT3 RS</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">2025 Porsche 911 • GR</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Your Empire 👑</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* HLPFL */}
            <div className="bg-gray-800 rounded-xl p-6 border border-hlpfl-green/50 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">HLPFL.dev</h3>
                  <p className="text-xs text-gray-400">Web Development</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Premium web development for businesses. Built the AI trading bot together. Consulting $5k+ deals with 60% commission.</p>
            </div>

            {/* Zaitsev Holding Group */}
            <div className="bg-gray-800 rounded-xl p-6 border border-hlpfl-green/50 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Zaitsev</h3>
                  <p className="text-xs text-gray-400">zaitsev.co</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Private Equity & Multi-Generational Wealth. Building something bigger than both of us. The holding company for everything.</p>
            </div>

            {/* Alki Music */}
            <div className="bg-gray-800 rounded-xl p-6 border border-hlpfl-green/50 hover:border-hlpfl-green transition-all hover:shadow-lg hover:shadow-hlpfl-green/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-hlpfl-green/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Alki</h3>
                  <p className="text-xs text-gray-400">Artist • Producer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Your music hits different. "regrets", "KARMA", "LET GO" - putting in that 10,000 hours. Spotify setup ready. Time to blow up.</p>
            </div>
          </div>
        </div>

        {/* Trading Journey - The Real Story */}
        <div className="mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl p-8 border border-gray-600">
          <h2 className="text-2xl font-bold text-white mb-6">The Trading Journey 📈</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-hlpfl-green/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">TakeProfit Trader Certified</p>
                <p className="text-gray-400 text-sm">November 25, 2025 - Professional Funded Trader Achievement</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-hlpfl-green/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Passed 3 Accounts in 3 Trades</p>
                <p className="text-gray-400 text-sm">Different breed energy. When you're locked in, nobody can touch you.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">The Blown Accounts</p>
                <p className="text-gray-400 text-sm">"Everything I worked for I'm about to throw away" - But you didn't. You got back up. That's the difference.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-hlpfl-green/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-hlpfl-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">The Strategy Evolution</p>
                <p className="text-gray-400 text-sm">Asian session, NY open, Gold resistance levels. Plus that AI bot we're building. Game changer.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-hlpfl-green/30">
            <p className="text-gray-300 text-sm italic">
              "If I beat your bot you owe me a GT3RS" - Challenge accepted. But when we both win with it, we're each getting one. 🏎️
            </p>
          </div>
        </div>

        {/* Personal Note - From Your Best Friend */}
        <div className="bg-gradient-to-br from-hlpfl-green/10 via-gray-800 to-gray-800 rounded-xl p-8 border border-hlpfl-green/30">
          <h2 className="text-2xl font-bold text-white mb-4">Real Talk, Bro 💬</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I've watched you go through the highs and lows - from that $13k day to the blown accounts, from recording Alki tracks to building Zaitsev. You never quit.
            </p>
            <p>
              Remember what you said: <span className="text-hlpfl-green italic">"The darker the days the better the nights."</span> That's the mentality that's gonna get you to those M's.
            </p>
            <p>
              Whether it's trading Gold during Asian sessions, finishing those 10,000 hours on music, or closing deals for HLPFL - you're putting in the work.
              The girl from GR, Silas drama, Paul bullshit - none of that matters when you're locked in.
            </p>
            <p className="text-hlpfl-green font-semibold text-lg">
              Built this platform for you because I believe in what you're building. HLPFL, Zaitsev, Alki - it's all gonna hit. Keep going. 🚀
            </p>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                P.S. - Still waiting for you to hit me with "You're going to hate me... But love me... With what I did" and show me you actually bought that GT3RS 😂
              </p>
              <p className="text-sm text-gray-400 mt-2">
                P.P.S. - No "bitch button" on this app. Answer the damn calls when opportunity knocks. 💪
              </p>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "10,000 hours is only 416.7 days. You're already halfway there."
          </p>
          <p className="text-hlpfl-green text-xs mt-2 font-semibold">
            - Built with code and brotherhood, January 2026
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
