// Document Section Component for Wealth Protection Guide
import { ContentSection, ContentSubsection } from '../data/contentData';

// Highlight Box Component
interface HighlightBoxProps {
  type: 'info' | 'success' | 'warning' | 'partner';
  children: React.ReactNode;
  title?: string;
}

export const HighlightBox = ({ type, children, title }: HighlightBoxProps) => {
  const styles = {
    info: {
      bg: 'bg-professional-blue-900/30',
      border: 'border-professional-blue-500/30',
      icon: '💡',
      titleColor: 'text-professional-blue-400'
    },
    success: {
      bg: 'bg-success-green-900/30',
      border: 'border-success-green-500/30',
      icon: '✓',
      titleColor: 'text-success-green-400'
    },
    warning: {
      bg: 'bg-amber-900/30',
      border: 'border-amber-500/30',
      icon: '⚠',
      titleColor: 'text-amber-400'
    },
    partner: {
      bg: 'bg-hlpfl-gold/10',
      border: 'border-hlpfl-gold/30',
      icon: '🤝',
      titleColor: 'text-hlpfl-gold'
    }
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-4`}>
      {title && (
        <div className={`${style.titleColor} font-semibold mb-2 flex items-center gap-2`}>
          <span>{style.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
};

// Table Component
interface TableProps {
  headers: string[];
  rows: string[][];
}

const Table = ({ headers, rows }: TableProps) => {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            {headers.map((header, i) => (
              <th
                key={i}
                className="text-left py-3 px-4 text-hlpfl-gold font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-800 hover:bg-white/5 transition-colors"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-3 px-4 ${
                    cellIndex === 0 ? 'text-white font-medium' : 'text-gray-300'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// List Component
interface ListProps {
  items: string[];
  type?: 'bullet' | 'check';
}

const List = ({ items, type = 'bullet' }: ListProps) => {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-gray-300">
          {type === 'check' ? (
            <span className="text-success-green-400 mt-0.5">☐</span>
          ) : (
            <span className="text-hlpfl-gold mt-1.5">•</span>
          )}
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};

// Subsection Component
const Subsection = ({ subsection }: { subsection: ContentSubsection }) => {
  const renderContent = () => {
    switch (subsection.type) {
      case 'highlight':
        return (
          <HighlightBox type={subsection.highlightType || 'info'}>
            {typeof subsection.content === 'string' ? subsection.content : subsection.content.join(' ')}
          </HighlightBox>
        );
      case 'table':
        return subsection.tableData ? (
          <Table headers={subsection.tableData.headers} rows={subsection.tableData.rows} />
        ) : null;
      case 'list':
        return Array.isArray(subsection.content) ? (
          <List items={subsection.content} />
        ) : (
          <p className="text-gray-300 leading-relaxed my-4">{subsection.content}</p>
        );
      case 'checklist':
        return Array.isArray(subsection.content) ? (
          <List items={subsection.content} type="check" />
        ) : (
          <p className="text-gray-300 leading-relaxed my-4">{subsection.content}</p>
        );
      case 'text':
      default:
        return (
          <p className="text-gray-300 leading-relaxed my-4 whitespace-pre-line">
            {typeof subsection.content === 'string' ? subsection.content : subsection.content.join('\n')}
          </p>
        );
    }
  };

  return (
    <div className="mb-6">
      {subsection.title && subsection.type !== 'highlight' && (
        <h4 className="text-lg font-semibold text-hlpfl-gold-light mb-3">
          {subsection.title}
        </h4>
      )}
      {renderContent()}
    </div>
  );
};

// Main Document Section Component
interface DocumentSectionProps {
  section: ContentSection;
  variant?: 'master' | 'guide';
}

export const DocumentSection = ({ section, variant = 'master' }: DocumentSectionProps) => {
  const borderColor = variant === 'master' ? 'border-hlpfl-gold/20' : 'border-professional-blue-500/20';
  const accentColor = variant === 'master' ? 'text-hlpfl-gold' : 'text-professional-blue-400';

  return (
    <section
      id={section.id}
      className={`mb-12 pb-12 border-b ${borderColor} scroll-mt-24`}
    >
      <h2 className={`text-2xl font-bold ${accentColor} mb-6`}>
        {section.title}
      </h2>
      <div className="space-y-4">
        {section.subsections.map((subsection) => (
          <Subsection key={subsection.id} subsection={subsection} />
        ))}
      </div>
    </section>
  );
};

export default DocumentSection;
