// 2025 Lexus IS350 Showcase Component
import { useState } from 'react';

interface CarShowcaseProps {
  onTopStepClick: () => void;
}

export const CarShowcase = ({ onTopStepClick }: CarShowcaseProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-hlpfl-dark-secondary via-hlpfl-dark to-hlpfl-dark-secondary rounded-2xl border border-hlpfl-gold/30 overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-hlpfl-gold/10 px-6 py-4 border-b border-hlpfl-gold/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Your Next Whip 🔥</h3>
            <p className="text-hlpfl-gold text-sm">This is what we're working towards, brother</p>
          </div>
          <a
            href="https://topstepx.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onTopStepClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-hlpfl-gold text-hlpfl-dark font-bold rounded-lg hover:bg-hlpfl-gold-light transition-all transform hover:scale-105 shadow-lg shadow-hlpfl-gold/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            TopStepX
          </a>
        </div>
      </div>

      {/* Car Display */}
      <div className="p-6">
        <div className="relative">
          {/* Car Image Container */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 aspect-video sm:aspect-[16/9]">
            {/* Placeholder/Loading State */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-hlpfl-dark-secondary">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-4 border-hlpfl-gold/30 border-t-hlpfl-gold rounded-full animate-spin" />
                  <p className="text-gray-400">Loading...</p>
                </div>
              </div>
            )}

            {/* Lexus IS350 Image - Grey F Sport */}
            <img
              src="https://www.motortrend.com/uploads/2023/09/2024-lexus-is-350-f-sport-sedan-angular-front.png"
              alt="2025 Lexus IS 350 F SPORT Design AWD - Grey"
              className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                setImageLoaded(true);
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-hlpfl-dark via-transparent to-transparent" />

            {/* Car Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-hlpfl-dark/90 backdrop-blur-sm rounded-lg p-4 border border-hlpfl-gold/20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-white font-bold text-lg sm:text-xl">2025 Lexus IS 350</h4>
                    <p className="text-gray-400 text-sm">F SPORT Design AWD | Grey</p>
                  </div>
                  <div className="text-right">
                    <div className="text-hlpfl-gold font-bold text-lg sm:text-xl">$45,860</div>
                    <p className="text-gray-400 text-xs">MSRP @ Ann Arbor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">311 HP</div>
              <div className="text-gray-400 text-xs">Plenty of power</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">3.5L V6</div>
              <div className="text-gray-400 text-xs">Bulletproof engine</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">AWD</div>
              <div className="text-gray-400 text-xs">Ohio winters ✓</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">6-Speed</div>
              <div className="text-gray-400 text-xs">Auto trans</div>
            </div>
          </div>

          {/* Link to actual listing */}
          <div className="mt-4 text-center">
            <a
              href="https://www.lexusofannarbor.com/auto/new-2025-lexus-is-350-f-sport-design-awd-ann-arbor-mi/114354503/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hlpfl-gold hover:text-hlpfl-gold-light text-sm underline"
            >
              View listing at Lexus of Ann Arbor →
            </a>
          </div>
        </div>

        {/* Real Talk */}
        <div className="mt-6 p-4 bg-hlpfl-dark-secondary/50 rounded-lg border border-hlpfl-gold/10">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="text-hlpfl-gold font-semibold">Real talk:</span> that $10K hitting today?
            You're looking at maybe 4-5 more payouts to put down on this bad boy at Lexus of Ann Arbor.
            Keep stacking on TopStepX, stay disciplined, and you'll be pulling up in this thing before you know it.
            Not if—when.
          </p>
        </div>
      </div>
    </div>
  );
};
