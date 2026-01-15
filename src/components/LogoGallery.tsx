// Logo Gallery Component - 10 NR Consulting Logo Concepts

interface LogoProps {
  accentColor?: 'green' | 'white' | 'cyan' | 'gold';
}

const getAccentColor = (accent: string) => {
  switch (accent) {
    case 'white': return '#ffffff';
    case 'cyan': return '#06b6d4';
    case 'gold': return '#c87941';
    default: return '#22c55e';
  }
};

// Logo 1: Uptick
export const Logo1Uptick = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-0.5">
        <span className="font-outfit font-normal text-4xl text-white tracking-wide">NR</span>
        <svg className="w-5 h-6 mb-2 ml-1" viewBox="0 0 20 24">
          <line x1="2" y1="20" x2="10" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          <line x1="10" y1="12" x2="18" y2="4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="font-outfit font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 2: Candlestick R
export const Logo2Candlestick = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-1.5">
        <span className="font-ibm font-normal text-[42px] text-white">N</span>
        <div className="flex flex-col items-center h-11 justify-center">
          <div className="w-0.5 h-2" style={{ backgroundColor: color }}></div>
          <div className="w-3.5 h-5 rounded-sm" style={{ backgroundColor: color }}></div>
          <div className="w-0.5 h-1.5" style={{ backgroundColor: color }}></div>
        </div>
      </div>
      <span className="font-ibm font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 3: Chart Line Integration
export const Logo3ChartLine = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative inline-block">
        <span className="font-dm font-medium text-[40px] text-white tracking-wide">NR</span>
        <svg className="absolute bottom-1.5 left-0 w-full h-5" viewBox="0 0 80 20">
          <polyline
            points="0,18 15,14 30,16 45,8 60,10 75,2"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-dm font-normal text-[9px] tracking-[5px] text-gray-500 uppercase mt-1">Consulting</span>
    </div>
  );
};

// Logo 4: Delta Arrow
export const Logo4Delta = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <span className="font-inter font-normal text-4xl text-white tracking-wide">NR</span>
        <div
          className="w-0 h-0"
          style={{
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: `12px solid ${color}`
          }}
        ></div>
      </div>
      <span className="font-inter font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 5: Ticker Style
export const Logo5Ticker = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#111] border border-[#222] rounded">
        <span className="font-mono text-xl text-white tracking-wide">$NR</span>
        <span className="font-mono text-sm" style={{ color }}>↑</span>
      </div>
      <span className="font-mono text-[9px] tracking-[2px] text-gray-600 uppercase pl-0.5">Consulting</span>
    </div>
  );
};

// Logo 6: Minimal Bar Chart
export const Logo6Bars = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end gap-2">
        <div className="flex items-end gap-0.5 h-8">
          <div className="w-1 rounded-sm" style={{ height: '40%', backgroundColor: color }}></div>
          <div className="w-1 rounded-sm" style={{ height: '60%', backgroundColor: color }}></div>
          <div className="w-1 rounded-sm" style={{ height: '100%', backgroundColor: color }}></div>
        </div>
        <span className="font-outfit font-normal text-[34px] text-white tracking-wide">NR</span>
      </div>
      <span className="font-outfit font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 7: Pulse Line
export const Logo7Pulse = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-3">
        <span className="font-ibm font-normal text-4xl text-white tracking-wide">NR</span>
        <svg className="w-12 h-6" viewBox="0 0 50 24">
          <polyline
            points="0,12 10,12 15,4 20,20 25,8 30,16 35,12 50,12"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-ibm font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 8: Split with Percent
export const Logo8Percent = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-1.5">
        <span className="font-dm font-medium text-[38px] text-white tracking-tight">NR</span>
        <span className="font-dm font-normal text-base" style={{ color }}>%</span>
      </div>
      <span className="font-dm font-normal text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 9: Bracket with Arrow
export const Logo9Bracket = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center">
        <span className="font-inter font-extralight text-[38px] text-gray-700">[</span>
        <div className="flex items-center gap-2 px-2.5">
          <span className="font-inter font-normal text-[32px] text-white tracking-wide">NR</span>
          <svg className="w-4 h-4" viewBox="0 0 16 16">
            <polyline points="2,14 8,2 14,14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="8" y1="2" x2="8" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-inter font-extralight text-[38px] text-gray-700">]</span>
      </div>
      <span className="font-inter font-light text-[9px] tracking-[4px] text-gray-500 uppercase">Consulting</span>
    </div>
  );
};

// Logo 10: Clean with Underline Accent
export const Logo10Fade = ({ accentColor = 'green' }: LogoProps) => {
  const color = getAccentColor(accentColor);
  return (
    <div className="flex flex-col gap-1">
      <span className="font-outfit font-medium text-[42px] text-white tracking-[4px]">NR</span>
      <div
        className="h-0.5 w-16 rounded"
        style={{ background: `linear-gradient(90deg, ${color} 0%, transparent 100%)` }}
      ></div>
      <span className="font-outfit font-light text-[9px] tracking-[5px] text-gray-500 uppercase mt-2">Consulting</span>
    </div>
  );
};

// Logo Gallery Component
interface LogoGalleryProps {
  selectedLogo?: number;
  onSelectLogo?: (logoNumber: number) => void;
}

export const LogoGallery = ({ selectedLogo, onSelectLogo }: LogoGalleryProps) => {
  const logos = [
    { component: Logo1Uptick, name: 'uptick', desc: 'simple upward momentum. the line says growth without saying it.' },
    { component: Logo2Candlestick, name: 'candlestick', desc: 'the R becomes a green candle. traders will get it instantly.' },
    { component: Logo3ChartLine, name: 'underline chart', desc: 'subtle price action underneath. reads as underline at a glance.' },
    { component: Logo4Delta, name: 'delta', desc: 'upward triangle. change, growth, direction. clean and universal.' },
    { component: Logo5Ticker, name: 'ticker', desc: 'styled like a stock symbol. witty. self-aware. confident.' },
    { component: Logo6Bars, name: 'growth bars', desc: 'three ascending bars. minimal data viz. trajectory implied.' },
    { component: Logo7Pulse, name: 'pulse', desc: 'market heartbeat. volatility as a feature, not a bug.' },
    { component: Logo8Percent, name: 'returns', desc: 'the percent sign is the whole point. subtle flex.' },
    { component: Logo9Bracket, name: 'contained momentum', desc: 'brackets + arrow. precision meets direction.' },
    { component: Logo10Fade, name: 'fade', desc: 'green gradient fades out. momentum captured in a line.' }
  ];

  return (
    <div className="bg-[#0a0a0a] rounded-xl p-8">
      <div className="mb-8">
        <h2 className="font-inter font-extralight text-xs tracking-[3px] text-gray-600 lowercase mb-1">
          nr consulting
        </h2>
        <p className="text-[10px] text-gray-700 tracking-wide">day trader — refined concepts</p>
      </div>

      <div className="space-y-16">
        {logos.map((logo, index) => {
          const LogoComponent = logo.component;
          const isSelected = selectedLogo === index + 1;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 p-4 rounded-lg transition-all cursor-pointer ${
                isSelected ? 'bg-hlpfl-gold/10 ring-1 ring-hlpfl-gold/30' : 'hover:bg-white/5'
              }`}
              onClick={() => onSelectLogo?.(index + 1)}
            >
              <div className="flex-1 min-w-[280px]">
                <LogoComponent accentColor="green" />
              </div>
              <div className="w-full md:w-52 pt-2">
                <div className="font-mono text-[9px] text-gray-700 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="font-normal text-[11px] tracking-wide text-gray-500 mb-2">
                  {logo.name}
                </div>
                <div className="text-[10px] text-gray-600 leading-relaxed">
                  {logo.desc}
                </div>
                {isSelected && (
                  <div className="mt-3 text-[10px] text-hlpfl-gold font-medium">
                    ✓ Selected
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Color Alternatives */}
      <div className="mt-20 pt-16 border-t border-gray-900">
        <div className="mb-12">
          <h3 className="font-inter font-extralight text-xs tracking-[3px] text-gray-600 lowercase mb-1">
            color alternatives
          </h3>
          <p className="text-[10px] text-gray-700 tracking-wide">same concepts, different accents</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* White/Monochrome */}
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">monochrome</div>
            <Logo1Uptick accentColor="white" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">monochrome</div>
            <Logo4Delta accentColor="white" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">monochrome</div>
            <Logo10Fade accentColor="white" />
          </div>

          {/* Cyan */}
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">cyan</div>
            <Logo1Uptick accentColor="cyan" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">cyan</div>
            <Logo6Bars accentColor="cyan" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">cyan</div>
            <Logo5Ticker accentColor="cyan" />
          </div>

          {/* Gold (HLPFL Brand) */}
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">hlpfl gold</div>
            <Logo1Uptick accentColor="gold" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">hlpfl gold</div>
            <Logo7Pulse accentColor="gold" />
          </div>
          <div>
            <div className="text-[9px] text-gray-700 tracking-wide mb-4">hlpfl gold</div>
            <Logo10Fade accentColor="gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGallery;
