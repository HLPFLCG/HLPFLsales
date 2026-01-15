// Table of Contents Component for Wealth Protection Guide
import { useState } from 'react';
import { ContentSection } from '../data/contentData';

interface TableOfContentsProps {
  masterPlanSections: ContentSection[];
  llcGuideSections: ContentSection[];
  activeSection: string;
  showLogos?: boolean;
  onLogoClick?: () => void;
}

export const TableOfContents = ({
  masterPlanSections,
  llcGuideSections,
  activeSection,
  showLogos = true,
  onLogoClick
}: TableOfContentsProps) => {
  const [expandedDoc, setExpandedDoc] = useState<'master' | 'guide' | null>('master');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-4 pb-8">
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
        Contents
      </div>

      {/* Logo Selection Link */}
      {showLogos && (
        <button
          onClick={onLogoClick}
          className="w-full text-left px-3 py-2 rounded-lg mb-4 text-sm font-medium text-hlpfl-gold hover:bg-hlpfl-gold/10 transition-colors border border-hlpfl-gold/20"
        >
          🎨 Logo Options
        </button>
      )}

      {/* Master Plan Sections */}
      <div className="mb-6">
        <button
          onClick={() => setExpandedDoc(expandedDoc === 'master' ? null : 'master')}
          className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5 transition-colors"
        >
          <span>Master Wealth Protection Plan</span>
          <svg
            className={`w-4 h-4 transition-transform ${expandedDoc === 'master' ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedDoc === 'master' && (
          <ul className="mt-2 space-y-1 pl-2">
            {masterPlanSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                    activeSection === section.id
                      ? 'text-hlpfl-gold bg-hlpfl-gold/10 font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.title.length > 35 ? section.title.substring(0, 35) + '...' : section.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* LLC Guide Sections */}
      <div>
        <button
          onClick={() => setExpandedDoc(expandedDoc === 'guide' ? null : 'guide')}
          className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5 transition-colors"
        >
          <span>Wyoming LLC Guide</span>
          <svg
            className={`w-4 h-4 transition-transform ${expandedDoc === 'guide' ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {expandedDoc === 'guide' && (
          <ul className="mt-2 space-y-1 pl-2">
            {llcGuideSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                    activeSection === section.id
                      ? 'text-hlpfl-gold bg-hlpfl-gold/10 font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {section.title.length > 35 ? section.title.substring(0, 35) + '...' : section.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Contact */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="text-xs text-gray-500 mb-2">Prepared by</div>
        <div className="text-sm text-white font-medium">Jim Rockel</div>
        <div className="text-xs text-gray-400">Founder & CEO, HLPFL</div>
        <a
          href="mailto:founder@hlpfl.org"
          className="text-xs text-hlpfl-gold hover:underline mt-1 inline-block"
        >
          founder@hlpfl.org
        </a>
      </div>
    </nav>
  );
};

// Mobile Table of Contents (Modal)
interface MobileTocProps extends TableOfContentsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileTableOfContents = ({
  masterPlanSections,
  llcGuideSections,
  activeSection,
  isOpen,
  onClose,
  showLogos = true,
  onLogoClick
}: MobileTocProps) => {
  if (!isOpen) return null;

  const scrollToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="absolute left-4 right-4 top-4 bottom-4 bg-hlpfl-dark-secondary rounded-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">Table of Contents</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Logo Selection Link */}
          {showLogos && (
            <button
              onClick={() => { onClose(); onLogoClick?.(); }}
              className="w-full text-left px-4 py-3 rounded-lg mb-4 text-base font-medium text-hlpfl-gold hover:bg-hlpfl-gold/10 transition-colors border border-hlpfl-gold/20"
            >
              🎨 Logo Options
            </button>
          )}

          {/* Master Plan */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-hlpfl-gold mb-3 px-2">
              Master Wealth Protection Plan
            </h3>
            <ul className="space-y-1">
              {masterPlanSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-hlpfl-gold bg-hlpfl-gold/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* LLC Guide */}
          <div>
            <h3 className="text-sm font-semibold text-professional-blue-400 mb-3 px-2">
              Wyoming LLC Guide
            </h3>
            <ul className="space-y-1">
              {llcGuideSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-professional-blue-400 bg-professional-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
