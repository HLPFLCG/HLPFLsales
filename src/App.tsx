function App() {
  return (
    <div className="min-h-screen bg-hlpfl-dark">
      {/* Header */}
      <header className="bg-hlpfl-dark-secondary border-b border-hlpfl-dark-tertiary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img src="/hlpfl-logo.svg" alt="HLPFL" className="h-12" />
              <div className="hidden md:block">
                <p className="text-xs text-gray-400">The Real Cost</p>
                <p className="text-sm font-semibold text-red-400">Trading Reality Check</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-xs text-gray-400">From GR</p>
                <p className="text-xs text-red-400">Account Status: Blown</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">Noah Rank</p>
                <p className="text-xs text-gray-400">Trader • Lessons Learned</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold ring-2 ring-red-500/50">
                NR
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Reality Check Section */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-800 rounded-2xl p-8 mb-8 border border-red-500/30 shadow-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Noah - The Real Numbers 📉
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            This is the reality of your trading journey. Time to face the costs.
          </p>
          <div className="bg-hlpfl-dark-secondary rounded-lg p-6 border border-red-500/30">
            <p className="text-red-400 italic">
              "Everything I worked for I'm about to throw away" - Your own words.
              Multiple blown accounts, revenge trading, emotional decisions. The market doesn't care about your feelings.
              Time to be honest about what this has cost you. 💸
            </p>
          </div>
        </div>

        {/* Trading Losses - The Real Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50 hover:border-red-500 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Lost</p>
                <p className="text-3xl font-bold text-red-500">-$54K+</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-2">Blown accounts + losses</p>
          </div>

          <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50 hover:border-red-500 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Accounts Blown</p>
                <p className="text-3xl font-bold text-red-500">10+</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-2">Multiple funded accounts destroyed</p>
          </div>

          <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50 hover:border-red-500 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Evaluation Fees</p>
                <p className="text-3xl font-bold text-red-500">-$5K+</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-2">Prop firm evaluation costs</p>
          </div>

          <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50 hover:border-red-500 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Time Wasted</p>
                <p className="text-2xl font-bold text-red-500">1000+ hrs</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-red-400 text-xs mt-2">Hours chasing losses</p>
          </div>
        </div>

        {/* The Real Trading Journey */}
        <div className="mb-8 bg-gradient-to-r from-hlpfl-dark-secondary via-hlpfl-dark-tertiary to-hlpfl-dark-secondary rounded-xl p-8 border border-red-500/30">
          <h2 className="text-2xl font-bold text-white mb-6">The Reality of Your Trading 📉</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Account Balance: -$54,378</p>
                <p className="text-gray-400 text-sm">October 2025 - Screenshot showed P&L at -$54,000. Complete account destruction.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">"Stop loss infinite"</p>
                <p className="text-gray-400 text-sm">October 26, 2025 - Lost over $10k in one night. No risk management.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">"Account gone"</p>
                <p className="text-gray-400 text-sm">Multiple times - Same pattern: big win, God complex, revenge trading, blown account.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Emotional Trading</p>
                <p className="text-gray-400 text-sm">"About to blow the account... Everything I worked for I'm about to throw away" - Your own words.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
            <p className="text-gray-300 text-sm">
              One $13k win doesn't erase $54k+ in losses. You've passed evaluations just to blow the funded accounts.
              "If I beat your bot you owe me a GT3RS" - but you keep losing to your own emotions.
            </p>
          </div>
        </div>

        {/* The Cost Breakdown */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">What Trading Has Cost You 💸</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Financial Costs */}
            <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50">
              <h3 className="text-lg font-semibold text-white mb-4">Financial Damage</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Trading Losses</span>
                  <span className="text-red-400 font-semibold">-$54,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Evaluation Fees</span>
                  <span className="text-red-400 font-semibold">-$5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Software/Tools</span>
                  <span className="text-red-400 font-semibold">-$2,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Education/Courses</span>
                  <span className="text-red-400 font-semibold">-$3,000+</span>
                </div>
                <div className="border-t border-red-500/30 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total Cost</span>
                    <span className="text-red-500 font-bold text-xl">-$64K+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity Costs */}
            <div className="bg-hlpfl-dark-secondary rounded-xl p-6 border border-red-500/50">
              <h3 className="text-lg font-semibold text-white mb-4">What You Gave Up</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-white">1000+ hours staring at charts</p>
                    <p className="text-gray-400 text-sm">Could have built 5 profitable businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-white">Mental health deterioration</p>
                    <p className="text-gray-400 text-sm">"The clicks are rotations of a revolver" - your depression analogy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-white">Relationship strain</p>
                    <p className="text-gray-400 text-sm">GR girl, constant stress, isolation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-white">HLPFL and Alki progress</p>
                    <p className="text-gray-400 text-sm">Actual skills that could make real money</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Talk */}
        <div className="bg-gradient-to-br from-red-900/10 via-hlpfl-dark-secondary to-hlpfl-dark-secondary rounded-xl p-8 border border-red-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Real Talk, Noah 💬</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              $64,000+ gone. Over 1000 hours wasted. Multiple accounts blown. The same cycle over and over:
            </p>
            <div className="bg-hlpfl-dark-tertiary p-4 rounded-lg border border-red-500/20">
              <p className="text-red-400 font-semibold mb-2">The Pattern:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Pass evaluation (you can do this)</li>
                <li>Hit a nice win ($13k)</li>
                <li>Get overconfident ("God complex")</li>
                <li>Start revenge trading after a loss</li>
                <li>"Stop loss infinite" - no risk management</li>
                <li>Blow the entire account (-$54k)</li>
                <li>"Everything I worked for I'm about to throw away"</li>
                <li>Repeat</li>
              </ol>
            </div>
            <p>
              You have the skills - you literally passed 3 accounts in 3 trades. But emotions destroy you every time.
              The market isn't your enemy. <span className="text-red-400 font-semibold">You are.</span>
            </p>
            <p>
              Meanwhile, HLPFL.dev and Zaitsev could actually build wealth. Alki could actually make you money.
              But you keep chasing that trading dopamine hit.
            </p>
            <p className="text-red-400 font-semibold text-lg mt-6">
              "The darker the days, the better the nights" - but how many more dark days can you afford?
              You're not trading your way to that GT3 RS. You're trading it further away. 📉
            </p>
            <div className="mt-6 pt-6 border-t border-red-500/30">
              <p className="text-sm text-gray-400">
                This is from your best friend. Not to hurt you, but because someone needs to show you the real numbers.
                Stop blowing accounts. Fix your risk management. Or quit trading and focus on businesses that actually work.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                The $13k win means nothing when you've lost $64k total. Do the math.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "Everything I worked for I'm about to throw away" - Noah Rank, October 2025
          </p>
          <p className="text-red-400 text-xs mt-2 font-semibold">
            Total Cost: -$64,000+ | Time Wasted: 1000+ hours | Accounts Blown: 10+
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
