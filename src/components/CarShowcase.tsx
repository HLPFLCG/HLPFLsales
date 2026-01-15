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
            <h3 className="text-xl sm:text-2xl font-bold text-white">The Goal</h3>
            <p className="text-hlpfl-gold text-sm">Today's Payout Brings This Closer</p>
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
                  <p className="text-gray-400">Loading your future ride...</p>
                </div>
              </div>
            )}

            {/* Lexus IS350 Image - Using a professional car image placeholder */}
            <img
              src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=1200&h=675&fit=crop&crop=center"
              alt="2025 Lexus IS350 - Grey Exterior"
              className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                // Fallback to a gradient placeholder if image fails
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
                    <h4 className="text-white font-bold text-lg sm:text-xl">2025 Lexus IS350</h4>
                    <p className="text-gray-400 text-sm">Grey Exterior | F SPORT Design</p>
                  </div>
                  <div className="text-right">
                    <div className="text-hlpfl-gold font-bold text-lg sm:text-xl">$45,000</div>
                    <p className="text-gray-400 text-xs">MSRP Starting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">311</div>
              <div className="text-gray-400 text-xs">Horsepower</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">5.6s</div>
              <div className="text-gray-400 text-xs">0-60 MPH</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">AWD</div>
              <div className="text-gray-400 text-xs">Available</div>
            </div>
            <div className="bg-hlpfl-dark-secondary rounded-lg p-3 text-center border border-hlpfl-gold/10">
              <div className="text-hlpfl-gold font-bold text-lg">V6</div>
              <div className="text-gray-400 text-xs">3.5L Engine</div>
            </div>
          </div>
        </div>

        {/* Motivational Text */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-hlpfl-gold font-semibold">Today's $10K payout</span> is the first step.
            Keep stacking, keep trading, and this becomes reality.
          </p>
        </div>
      </div>
    </div>
  );
};
