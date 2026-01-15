// Content Data for Noah Rank's Wealth Protection Guide

export interface ContentSection {
  id: string;
  title: string;
  subsections: ContentSubsection[];
}

export interface ContentSubsection {
  id: string;
  title: string;
  content: string | string[];
  type: 'text' | 'list' | 'table' | 'highlight' | 'checklist';
  tableData?: { headers: string[]; rows: string[][] };
  highlightType?: 'info' | 'success' | 'warning' | 'partner';
}

export const masterPlanSections: ContentSection[] = [
  {
    id: 'hlpfl-advantage',
    title: 'The HLPFL Advantage: Why This Matters',
    subsections: [
      {
        id: 'partner-intro',
        title: 'You\'re Not Just a Client—You\'re a Partner',
        content: 'Noah, you\'re not just a client—you\'re a partner. Your 10% stake in Zaitsev Holding Group means your success directly amplifies mine, and vice versa. This document isn\'t a sales pitch; it\'s a blueprint for building generational wealth together.',
        type: 'highlight',
        highlightType: 'partner'
      },
      {
        id: 'what-makes-different',
        title: 'What Makes This Different',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Traditional Service', 'HLPFL Partnership Approach'],
          rows: [
            ['Files paperwork, moves on', 'Ongoing strategic partnership'],
            ['Generic templates', 'Custom structure integrated with Zaitsev ecosystem'],
            ['Hourly billing adds up', 'Partner pricing with equity alignment'],
            ['You\'re a number', 'You\'re family (Article 1.7 of Zaitsev Operating Agreement)'],
            ['No skin in the game', 'Your success = my success (10% allocation)']
          ]
        }
      },
      {
        id: 'payout-future',
        title: 'Your Future Starts Tomorrow',
        content: 'Your ~$10K payout tomorrow is the beginning. The structure we\'re building today will handle $100K months, $1M years, and eventual exits.',
        type: 'highlight',
        highlightType: 'success'
      }
    ]
  },
  {
    id: 'how-hlpfl-helps',
    title: 'How HLPFL Helps You Specifically',
    subsections: [
      {
        id: 'llc-formation',
        title: 'LLC Formation & Operating Agreements',
        content: [
          'Wyoming Holding LLC formation via Wyoming Registered Agent ($104)',
          'Wyoming Consulting LLC formation via Wyoming Registered Agent ($104)',
          'Ohio foreign qualification filing ($99)',
          'Custom operating agreements (not templates—drafted specifically for your situation)',
          'EIN registration for both entities',
          'NOVO business bank account setup',
          'Integration with Zaitsev Holding Group structure if desired'
        ],
        type: 'list'
      },
      {
        id: 'why-hlpfl',
        title: 'Why Through HLPFL',
        content: [
          'I\'ve already built the Zaitsev structure—your entities can integrate seamlessly',
          'I know your full financial picture (PRIV artist income, W-2, trading, Zaitsev distributions)',
          'No handoff to strangers who don\'t understand the bigger vision'
        ],
        type: 'list'
      },
      {
        id: 'cross-pollination',
        title: 'The Cross-Pollination Opportunity',
        content: 'Your Consulting LLC can provide legitimate services back to HLPFL ecosystem entities: Financial analysis consulting for HLPFL artists (market research, revenue projections), Trading education content for HLPFL\'s future creator economy platform, Technical analysis for potential HLPFL investment decisions, Advisory services to other Zaitsev portfolio companies. This creates circular value: Your consulting generates income, HLPFL gets quality services at fair rates, and the entire ecosystem grows.',
        type: 'highlight',
        highlightType: 'info'
      }
    ]
  },
  {
    id: 'action-checklist',
    title: 'Immediate Action Checklist (Payout Day)',
    subsections: [
      {
        id: 'intro-checklist',
        title: 'Tomorrow\'s Cascade',
        content: 'Tomorrow\'s ~$10K payout triggers a cascade of planning opportunities. I\'ll handle the heavy lifting—here\'s what you need to do:',
        type: 'text'
      },
      {
        id: 'day-1-you',
        title: 'Day 1 Actions (You)',
        content: [
          'Deposit payout to personal account (temporary until LLC formation complete)',
          'Screenshot and document the payout amount, date, and source',
          'Send me confirmation so I can begin Wyoming formation'
        ],
        type: 'checklist'
      },
      {
        id: 'days-1-3-jim',
        title: 'Days 1-3 Actions (I Handle)',
        content: [
          'File Wyoming Holding LLC via Wyoming Registered Agent',
          'File Wyoming Consulting LLC as subsidiary',
          'Apply for EINs for both entities',
          'Draft custom operating agreements',
          'Begin NOVO bank account application process'
        ],
        type: 'checklist'
      },
      {
        id: 'days-4-7-together',
        title: 'Days 4-7 Actions (Together)',
        content: [
          'Review and sign operating agreements',
          'Complete NOVO bank account verification',
          'Transfer funds to new LLC account',
          'Begin Trader Tax Status documentation'
        ],
        type: 'checklist'
      }
    ]
  },
  {
    id: 'wyoming-structure',
    title: 'The Wyoming LLC Structure Explained',
    subsections: [
      {
        id: 'structure-intro',
        title: 'Optimal Structure for Ohio Residents',
        content: 'As an Ohio resident with W-2 income and trading profits, the optimal structure separates assets from operations while maximizing tax efficiency.',
        type: 'text'
      },
      {
        id: 'holding-llc',
        title: 'Wyoming Holding LLC (Asset Protection Layer)',
        content: [
          'Trading profits deposited here',
          'Asset protection layer',
          'Owns investment accounts',
          '100% owns the Consulting LLC subsidiary'
        ],
        type: 'list'
      },
      {
        id: 'consulting-llc',
        title: 'Wyoming Consulting LLC (Operating Entity)',
        content: [
          'Day trading activity occurs here',
          'Financial consulting services',
          'S-Corp election for tax savings',
          'Legitimate business expenses'
        ],
        type: 'list'
      },
      {
        id: 'key-insight',
        title: 'Key Insight',
        content: 'Your personal trading LLC and your Zaitsev stake are separate but synergistic. Trading profits can fund investments into Zaitsev opportunities. Zaitsev distributions diversify your income beyond trading volatility.',
        type: 'highlight',
        highlightType: 'info'
      },
      {
        id: 'naics-codes',
        title: 'NAICS Codes for Your Entities',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Entity', 'Primary NAICS', 'Backup NAICS'],
          rows: [
            ['Holding LLC', '523900 (Other Financial Investment Activities)', '523940 (Portfolio Management)'],
            ['Consulting LLC', '541611 (Administrative Management Consulting)', '541990 (Other Professional Services)']
          ]
        }
      }
    ]
  },
  {
    id: 'ohio-tax-reality',
    title: 'Ohio Tax Reality: What You Actually Owe',
    subsections: [
      {
        id: 'critical-finding',
        title: 'Critical Finding',
        content: 'Ohio will tax your Wyoming LLC income regardless of where it\'s formed. But there\'s good news for day traders.',
        type: 'highlight',
        highlightType: 'warning'
      },
      {
        id: 'tax-treatment-summary',
        title: 'Ohio Tax Treatment Summary',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Income Type', 'State Income Tax', 'Commercial Activity Tax', 'Municipal Tax'],
          rows: [
            ['Day Trading Gains', 'TAXABLE', 'EXEMPT', 'EXEMPT'],
            ['Consulting Income', 'TAXABLE', 'TAXABLE (if >$6M)', 'TAXABLE'],
            ['PRIV Artist Royalties', 'TAXABLE', 'TAXABLE (if >$6M)', 'TAXABLE'],
            ['Zaitsev Distributions', 'TAXABLE', 'EXEMPT', 'EXEMPT']
          ]
        }
      },
      {
        id: 'good-news',
        title: 'The Good News',
        content: 'The exemption of day trading income from CAT and municipal taxes is significant. Your trading profits only face state income tax (top rate 3.99%) plus federal taxes—no municipal income tax bite.',
        type: 'highlight',
        highlightType: 'success'
      },
      {
        id: 'foreign-qualification',
        title: 'Ohio Foreign Qualification',
        content: [
          'Form 617 (Registration of Foreign LLC): $99',
          'Processing time: ~7 days',
          'Required Ohio statutory agent (I can coordinate this)',
          'Penalty for skipping: Can\'t enforce contracts in Ohio courts, potential fines, back filing fees with interest'
        ],
        type: 'list'
      }
    ]
  },
  {
    id: 'section-475-decision',
    title: 'The Section 475 Mark-to-Market Decision',
    subsections: [
      {
        id: 'mtm-intro',
        title: 'A Consequential Decision',
        content: 'For someone starting with ~$10K, this is a consequential decision that shouldn\'t be rushed.',
        type: 'text'
      },
      {
        id: 'recommendation-wait',
        title: 'My Recommendation: Wait',
        content: 'Why not elect MTM right now:',
        type: 'text'
      },
      {
        id: 'why-wait',
        title: 'Reasons to Wait',
        content: [
          'You can\'t meet PDT requirements yet – FINRA requires $25K for pattern day trading. With $10K, you\'ll either build capital first or use a cash account with T+2 settlement limitations.',
          'Your W-2 creates a safety net – If you have trading losses, they offset capital gains elsewhere. If you elect MTM, losses become ordinary losses—good for offsetting W-2, but you lose long-term capital gains rates forever.',
          'Once elected, you\'re locked in – Revoking within 5 years requires IRS Commissioner consent and a $13,225 user fee.'
        ],
        type: 'list'
      },
      {
        id: 'revisit-when',
        title: 'Revisit MTM When',
        content: [
          'Trading account exceeds $25K consistently',
          'You have 720+ trades/year (60+/month, 4+/day average)',
          'You trade 4+ days per week (75% of trading days)',
          'Average holding period is 31 days or less',
          'You spend 4+ hours daily on trading activities'
        ],
        type: 'checklist'
      },
      {
        id: 'deadline',
        title: 'Important Deadline',
        content: 'April 15, 2027 for the 2027 tax year (election made on 2026 return).',
        type: 'highlight',
        highlightType: 'warning'
      }
    ]
  },
  {
    id: 'vehicle-strategy',
    title: 'Vehicle Strategy (Under 6,000 GVWR)',
    subsections: [
      {
        id: 'vehicle-intro',
        title: 'Your Vehicle Situation',
        content: 'Since your vehicle is under 6,000 lbs, you face luxury auto depreciation caps.',
        type: 'text'
      },
      {
        id: 'depreciation-limits',
        title: '2026 Depreciation Limits',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Year', 'With Bonus Depreciation', 'Without Bonus'],
          rows: [
            ['Year 1', '$20,200', '$12,200'],
            ['Year 2', '$19,600', '$19,600'],
            ['Year 3', '$11,800', '$11,800'],
            ['Year 4+', '$7,060', '$7,060']
          ]
        }
      },
      {
        id: 'recommendation',
        title: 'Recommendation: Standard Mileage + Personal Ownership',
        content: '2026 standard mileage rate: 72.5 cents/mile',
        type: 'highlight',
        highlightType: 'info'
      },
      {
        id: 'why-standard',
        title: 'Why This Approach',
        content: [
          'Simpler documentation (just mileage log vs. all receipts)',
          'Flexibility to switch methods later',
          'No recapture risk if business use changes',
          'Consulting LLC reimburses you at the standard rate = tax-free to you, deductible to LLC'
        ],
        type: 'list'
      },
      {
        id: 'deductible-trips',
        title: 'Deductible Business Trips',
        content: [
          'Meeting with brokers, clients, or partners',
          'Trading seminars and education events',
          'Meetings with accountants or attorneys',
          'Bank/notary visits for business'
        ],
        type: 'list'
      },
      {
        id: 'not-deductible',
        title: 'Not Deductible',
        content: 'Commuting to any fixed location, even a coworking space you use regularly.',
        type: 'highlight',
        highlightType: 'warning'
      }
    ]
  },
  {
    id: 'retirement-strategy',
    title: 'Retirement Account Strategy (With W-2 Income)',
    subsections: [
      {
        id: 'retirement-intro',
        title: 'Opportunities and Limitations',
        content: 'Your W-2 income creates both opportunities and limitations for retirement savings.',
        type: 'text'
      },
      {
        id: 'contribution-limits',
        title: '2026 Contribution Limits',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Account', '2026 Limit', 'Your Eligibility'],
          rows: [
            ['401(k) Employee Deferral', '$24,500', 'If your employer offers one'],
            ['Solo 401(k) Total', '$72,000', 'From self-employment income only'],
            ['IRA', '$7,500', 'Yes'],
            ['HSA (Family)', '$8,750', 'If on HDHP']
          ]
        }
      },
      {
        id: 'aggregation-rule',
        title: 'The Critical Aggregation Rule',
        content: 'Employee deferral limits are per person, not per plan. If you max out your employer\'s 401(k) at $24,500, you can contribute $0 in employee deferrals to a Solo 401(k). However, you CAN still make employer profit-sharing contributions (up to 20% of net SE income).',
        type: 'highlight',
        highlightType: 'warning'
      },
      {
        id: 'backdoor-roth',
        title: 'Backdoor Roth Strategy',
        content: [
          'Contribute $7,500 to Traditional IRA (non-deductible)',
          'Convert immediately to Roth IRA',
          'No income limits on conversions'
        ],
        type: 'list'
      },
      {
        id: 'roth-warning',
        title: 'Important Warning',
        content: 'If you have ANY pre-tax money in Traditional, SEP, or SIMPLE IRAs, you\'ll owe tax on a proportional share. Solution: Roll pre-tax IRA money into your employer\'s 401(k) first.',
        type: 'highlight',
        highlightType: 'warning'
      }
    ]
  },
  {
    id: 'hlpfl-investment',
    title: 'The HLPFL Investment Opportunity',
    subsections: [
      {
        id: 'investment-intro',
        title: 'Beyond the LLC Structure',
        content: 'Beyond the LLC structure, your Zaitsev partnership gives you access to HLPFL\'s growth trajectory.',
        type: 'text'
      },
      {
        id: 'current-portfolio',
        title: 'Current HLPFL Portfolio (Your 10% Exposure)',
        content: [
          'HLPFL Consulting Group LLC – Artist services, label operations',
          'RVNU LLC / OnlyGainz LLC – Creator economy platforms',
          'Alki Music Catalog – 100% owned IP (37 released + 300+ unreleased recordings)',
          'Future acquisitions and portfolio companies'
        ],
        type: 'list'
      },
      {
        id: 'symbiotic-relationship',
        title: 'The Symbiotic Relationship',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Your Success', 'HLPFL Benefit', 'Your Benefit'],
          rows: [
            ['Trading profits grow', 'More capital for Zaitsev investments', 'Your 10% stake grows in value'],
            ['Consulting income increases', 'Demonstrates model works', 'Builds your personal brand'],
            ['PRIV (your music) succeeds', 'HLPFL artist roster grows', 'More distribution leverage'],
            ['You develop trading education', 'Content for HLPFL\'s platform', 'Additional revenue stream']
          ]
        }
      }
    ]
  },
  {
    id: 'pricing-breakdown',
    title: 'Complete Pricing Breakdown',
    subsections: [
      {
        id: 'partner-pricing',
        title: 'What HLPFL Handles (Partner Pricing)',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Service', 'Standard Market Rate', 'Your Partner Price'],
          rows: [
            ['Wyoming Holding LLC Formation', '$500-800', '$104 (state fee only)'],
            ['Wyoming Consulting LLC Formation', '$500-800', '$104 (state fee only)'],
            ['Ohio Foreign Qualification', '$300-500', '$99 (state fee only)'],
            ['Custom Operating Agreements (2)', '$2,000-4,000', 'Included'],
            ['EIN Registration (2)', '$150-300', 'Free (we file direct)'],
            ['NOVO Bank Account Setup', '$100-200', 'Free'],
            ['Tax Strategy Consultation', '$500-1,500', 'Included'],
            ['Total One-Time', '$4,000-8,000', '~$500']
          ]
        }
      },
      {
        id: 'why-partner-pricing',
        title: 'Why Partner Pricing?',
        content: [
          'Aligned Incentives – Your 10% of Zaitsev means I directly benefit from your success',
          'Relationship Investment – Building trust for larger opportunities down the road',
          'Ecosystem Building – Your Consulting LLC can provide services to HLPFL entities',
          'Proof of Concept – Demonstrating the model works for future clients'
        ],
        type: 'list'
      },
      {
        id: 'annual-costs',
        title: 'Annual Maintenance Costs',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Item', 'Annual Cost'],
          rows: [
            ['Wyoming Annual Report (per LLC)', '$60 × 2 = $120'],
            ['Wyoming Registered Agent', 'Included in formation'],
            ['Ohio Statutory Agent', '$100-150'],
            ['NOVO Business Bank Account', 'Free'],
            ['Accounting/Tax Prep', '$500-1,500'],
            ['General Liability Insurance', '$500-700'],
            ['Total Annual', '~$1,300-2,500']
          ]
        }
      }
    ]
  },
  {
    id: 'key-deadlines',
    title: 'Key Deadlines to Remember',
    subsections: [
      {
        id: 'deadlines-table',
        title: 'Important Dates',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Date', 'Action Required'],
          rows: [
            ['January 15, 2026', 'Q4 2025 estimated taxes due'],
            ['April 15, 2026', '2025 tax return or extension'],
            ['April 15, 2026', 'IRA contribution deadline for 2025'],
            ['April 15, 2026', 'Section 475 MTM election deadline (for 2026)'],
            ['Anniversary of LLC formation', 'Wyoming annual report due ($60 per LLC)'],
            ['Quarterly', 'Ohio CAT returns (likely exempt for trading)']
          ]
        }
      }
    ]
  },
  {
    id: 'next-steps',
    title: 'Next Steps: What I Need From You',
    subsections: [
      {
        id: 'needed-info',
        title: 'Information Needed',
        content: [
          'Confirmation when payout hits – Text me so I can initiate formation',
          'Your full legal name – For LLC documentation',
          'Ohio address – For foreign qualification',
          'SSN – For EIN application (secure channel only)',
          'Vehicle details – Make, model, year, GVWR for deduction planning',
          'W-2 employer info – To coordinate retirement account strategy'
        ],
        type: 'checklist'
      },
      {
        id: 'bottom-line',
        title: 'The Bottom Line',
        content: 'Noah, this ~$10K payout is your proving ground. The structure we\'re building today—Wyoming LLCs, Ohio compliance, tax optimization, retirement accounts—scales indefinitely. Whether you\'re making $10K/month or $100K/month, the foundation is the same.',
        type: 'highlight',
        highlightType: 'success'
      },
      {
        id: 'what-makes-work',
        title: 'What Makes This Work',
        content: [
          'We\'re partners, not client/vendor',
          'Your success directly benefits me (Zaitsev 10%)',
          'The HLPFL ecosystem creates opportunities beyond just trading',
          'You\'re getting billionaire-level structure at partner pricing'
        ],
        type: 'list'
      },
      {
        id: 'closing',
        title: 'Let\'s Build This Thing',
        content: 'Jim Rockel\nFounder & CEO, HLPFL\nManaging Member, Zaitsev Holding Group LLC\nfounder@hlpfl.org',
        type: 'text'
      }
    ]
  }
];

export const llcGuideSections: ContentSection[] = [
  {
    id: 'guide-executive-summary',
    title: 'Executive Summary',
    subsections: [
      {
        id: 'guide-intro',
        title: 'Comprehensive Blueprint',
        content: 'This guide provides a complete blueprint for establishing a sophisticated multi-entity structure for day trading operations using Wyoming LLCs. The recommended structure includes a Wyoming holding company (shell LLC) with a subsidiary consulting LLC, designed to maximize tax efficiency, provide robust asset protection, and create opportunities for significant business deductions including vehicle purchases.',
        type: 'text'
      },
      {
        id: 'key-benefits',
        title: 'Key Benefits',
        content: [
          'Maximum asset protection through Wyoming\'s superior charging order protections',
          'Tax-efficient structure with flexible entity elections',
          'Anonymous ownership for privacy',
          'Ability to deduct legitimate business expenses including vehicles',
          'Potential for 20% QBI deduction',
          'Section 475 Mark-to-Market election capabilities',
          'Solo 401(k) and health insurance deductions',
          'State tax advantages'
        ],
        type: 'list'
      }
    ]
  },
  {
    id: 'entity-structure',
    title: 'Recommended Entity Structure',
    subsections: [
      {
        id: 'two-tier-structure',
        title: 'Two-Tier Wyoming LLC Structure',
        content: 'The recommended structure uses a parent holding company with a subsidiary operating company for maximum protection and tax flexibility.',
        type: 'text'
      },
      {
        id: 'parent-company',
        title: 'Parent Company (Holding Company)',
        content: [
          'Name: [Client\'s Name] Holdings, LLC (or similar)',
          'Structure: Wyoming Single-Member LLC',
          'Tax Election: Disregarded Entity (default) or S-Corp election',
          'Purpose: Asset holding, investment activities, ownership of subsidiary',
          'Primary Activities: Trading securities, managing investment portfolio'
        ],
        type: 'list'
      },
      {
        id: 'subsidiary-company',
        title: 'Subsidiary Company (Operating Company)',
        content: [
          'Name: [Client\'s Name] Consulting, LLC (or similar)',
          'Structure: Wyoming Single-Member LLC (owned 100% by Holding Company)',
          'Tax Election: S-Corp election recommended',
          'Purpose: Consulting services, education, management fees',
          'Primary Activities: Financial consulting, trading education, investment advisory'
        ],
        type: 'list'
      },
      {
        id: 'asset-protection-benefits',
        title: 'Asset Protection Benefits',
        content: [
          'Creates separation between trading activities and consulting operations',
          'Limits liability exposure - trading losses don\'t directly threaten consulting business',
          'Wyoming\'s superior charging order protection even for single-member LLCs',
          'Anonymous ownership keeps client\'s identity private from public records'
        ],
        type: 'list'
      },
      {
        id: 'tax-advantages',
        title: 'Tax Advantages',
        content: [
          'Flexibility to elect different tax treatments for each entity',
          'Ability to allocate income between entities for optimal tax planning',
          'S-Corp election for consulting LLC creates earned income for retirement contributions',
          'Potential to split income between passive (trading) and active (consulting) sources'
        ],
        type: 'list'
      }
    ]
  },
  {
    id: 'wyoming-benefits',
    title: 'Wyoming LLC Benefits',
    subsections: [
      {
        id: 'why-wyoming',
        title: 'Why Wyoming?',
        content: 'Wyoming has established itself as the premier jurisdiction for LLC formation, offering significant advantages over other states.',
        type: 'text'
      },
      {
        id: 'privacy-anonymity',
        title: 'Privacy & Anonymity',
        content: [
          'Anonymous Ownership: Wyoming does not require disclosure of members/managers in public records',
          'No Public Member List: Only the organizer (registered agent) is known to the state',
          'Private Operating Agreement: No requirement to file operating agreements with the state',
          'No Annual Report of Ownership: Annual reports only require minimal information'
        ],
        type: 'list'
      },
      {
        id: 'asset-protection',
        title: 'Asset Protection',
        content: [
          'Charging Order Protection: Strongest in the nation for single-member LLCs',
          'Statutory Protection: Protected by Wyoming statute, not case law',
          'Business Asset Protection: Protects business assets from personal creditors',
          'Personal Asset Protection: Traditional corporate veil protection'
        ],
        type: 'list'
      },
      {
        id: 'tax-advantages-wy',
        title: 'Tax Advantages',
        content: [
          'No State Income Tax: Zero state income tax on LLC earnings',
          'No Franchise Tax: No annual franchise tax unlike Delaware',
          'No Capital Gains Tax: No state-level capital gains tax',
          'No Gross Receipts Tax: Unlike Nevada\'s recent implementation',
          'Pass-Through Taxation: Default tax treatment avoids double taxation'
        ],
        type: 'list'
      },
      {
        id: 'state-comparison',
        title: 'Comparison with Other States',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Feature', 'Wyoming', 'Delaware', 'Nevada'],
          rows: [
            ['Formation Fee', '$100', '$90', '$425'],
            ['Annual Report Fee', '$60', '$300', '$350'],
            ['Franchise Tax', 'None', '$300+ minimum', 'None'],
            ['State Income Tax', 'None', 'None', 'None'],
            ['Anonymous Ownership', 'Yes', 'Limited', 'Yes'],
            ['Charging Order Protection (Single-Member)', 'Statutory', 'Case Law', 'Gray Area'],
            ['Gross Receipts Tax', 'None', 'None', 'Yes']
          ]
        }
      }
    ]
  },
  {
    id: 'formation-process',
    title: 'Entity Formation Process',
    subsections: [
      {
        id: 'formation-requirements',
        title: 'Formation Requirements',
        content: [
          'Choose a Unique Name: Must include "LLC" or "Limited Liability Company", must be distinguishable from existing Wyoming entities',
          'Appoint Registered Agent: Must have physical address in Wyoming, commercial agents typically charge $50-150/year',
          'File Articles of Organization: $100 filing fee per LLC, can be filed online for fastest processing',
          'Obtain EIN: Free from IRS, required for banking and tax purposes, separate EIN for each LLC',
          'Create Operating Agreement: Not required by Wyoming but essential for asset protection',
          'Open Business Bank Accounts: Separate accounts for each LLC, required for maintaining corporate veil'
        ],
        type: 'list'
      },
      {
        id: 'formation-timeline',
        title: 'Formation Timeline',
        content: [
          'Articles of Organization: 1-2 business days',
          'EIN: Immediate (online)',
          'Bank Account Opening: 1-2 weeks',
          'Total Time: Approximately 2 weeks',
          'Expedited: Same-day filing available for additional $100'
        ],
        type: 'list'
      },
      {
        id: 'formation-costs',
        title: 'Formation Costs',
        content: '',
        type: 'table',
        tableData: {
          headers: ['Item', 'Cost'],
          rows: [
            ['State Fees (per LLC)', '$100 + $60/year annual report'],
            ['Registered Agent', '$50-150/year per LLC'],
            ['Formation Service', '$99-500 per LLC'],
            ['Operating Agreement Drafting', '$500-2,000 per LLC'],
            ['First Year Total (both LLCs)', '$800-2,000'],
            ['Annual Ongoing Costs', '$220-420']
          ]
        }
      }
    ]
  },
  {
    id: 'tax-optimization',
    title: 'Tax Optimization Strategies',
    subsections: [
      {
        id: 'entity-elections',
        title: 'Entity Tax Elections',
        content: 'The holding company should remain a Disregarded Entity for simplicity, while the Consulting LLC should elect S-Corp status for tax savings.',
        type: 'text'
      },
      {
        id: 'trader-tax-status',
        title: 'Trader Tax Status (TTS)',
        content: [
          'Trading must be regular, frequent, and continuous (4+ days per week)',
          'Multiple trades per day (often 10+ trades daily)',
          'Primary intent must be to profit from short-term price swings',
          'Must trade consistently throughout the year (100+ trades minimum)',
          'Benefits: Mark-to-Market election, business expense deductions, no SE tax on trading gains'
        ],
        type: 'list'
      },
      {
        id: 'scorp-optimization',
        title: 'S-Corp Tax Optimization',
        content: [
          'Must pay "reasonable salary" for services performed',
          'Remaining profits can be distributed without self-employment tax',
          'Example: $200K net income, $100K salary, $100K distribution = $15,300 SE tax savings',
          'Enables Solo 401(k) contributions: $69,000 for under 50, $76,500 for 50+',
          'Health insurance premiums become deductible business expense'
        ],
        type: 'list'
      },
      {
        id: 'qbi-deduction',
        title: 'Section 199A QBI Deduction',
        content: '20% deduction on qualified business income. Available to pass-through entities. Phase-outs begin at $182,100 (single) / $364,200 (joint) for specified service trades. Trading activities may not qualify if considered "investment" activity. Consulting income likely qualifies.',
        type: 'highlight',
        highlightType: 'info'
      }
    ]
  },
  {
    id: 'vehicle-deductions',
    title: 'Vehicle Purchase & Deduction Strategy',
    subsections: [
      {
        id: 'vehicle-under-6000',
        title: 'Vehicles Under 6,000 GVWR',
        content: [
          'Subject to annual depreciation limits (listed property)',
          'Section 179 expensing limited to $12,200 (2024)',
          'Must meet strict business use requirements (50%+)',
          'Luxury automobile limitations apply',
          'MACRS depreciation with annual caps'
        ],
        type: 'list'
      },
      {
        id: 'standard-mileage',
        title: 'Option 1: Standard Mileage Rate',
        content: [
          '2024 rate: $0.67 per mile',
          'Simple to track and calculate',
          'No depreciation tracking required',
          'Advantages: Simple, minimal record keeping, audit-friendly',
          'Best For: Low-cost vehicles, high mileage business use'
        ],
        type: 'list'
      },
      {
        id: 'actual-expense',
        title: 'Option 2: Actual Expense Method',
        content: [
          'Deduct actual costs: gas, insurance, repairs, maintenance',
          'Plus depreciation (subject to annual limits)',
          'More complex record keeping required',
          'Can potentially yield larger deductions',
          'Best For: High-cost vehicles, expensive repairs'
        ],
        type: 'list'
      },
      {
        id: 'vehicle-recommendation',
        title: 'Recommendation: Personal Ownership with Mileage Deduction',
        content: 'Simpler to administer, avoids complex depreciation calculations, no recapture risk if business use varies. Consulting LLC can reimburse mileage at standard rate.',
        type: 'highlight',
        highlightType: 'success'
      }
    ]
  },
  {
    id: 'asset-protection-strategies',
    title: 'Asset Protection Strategies',
    subsections: [
      {
        id: 'charging-order',
        title: 'Charging Order Protection',
        content: [
          'Wyoming provides statutory charging order protection for ALL LLCs, including single-member LLCs',
          'Creditors cannot force distributions or force sale of assets',
          'Creditor\'s remedy is limited to receiving distributions when/if the Member receives them',
          'Member can choose not to take distributions, making charging order potentially worthless'
        ],
        type: 'list'
      },
      {
        id: 'multi-entity-protection',
        title: 'Multi-Entity Asset Protection',
        content: [
          'Holding company owns investment assets',
          'Consulting company owns operating assets',
          'Liability in one entity doesn\'t automatically affect the other',
          'Trading losses confined to holding company',
          'Consulting liabilities confined to consulting LLC'
        ],
        type: 'list'
      },
      {
        id: 'maintaining-protection',
        title: 'Critical Requirements for Maintaining Protection',
        content: [
          'Separate Finances: Never commingle personal and business funds',
          'Adequate Capitalization: Entity must have sufficient capital for operations',
          'Corporate Formalities: Follow operating agreement, maintain records',
          'Proper Documentation: Contracts, agreements, resolutions',
          'Insurance: Maintain appropriate business insurance coverage',
          'No Fraudulent Transfers: Don\'t transfer assets after claims arise'
        ],
        type: 'checklist'
      }
    ]
  },
  {
    id: 'compliance-maintenance',
    title: 'Ongoing Compliance & Maintenance',
    subsections: [
      {
        id: 'annual-requirements',
        title: 'Wyoming Annual Report',
        content: [
          'Due Date: Anniversary of formation date',
          'Filing Fee: $60 per LLC ($120 total annually)',
          'Information Required: Company name, file number, registered agent, manager name/address',
          'Filing Method: Online or mail',
          'Penalty: $50 late fee if not filed by due date'
        ],
        type: 'list'
      },
      {
        id: 'federal-tax-requirements',
        title: 'Federal Tax Requirements',
        content: [
          'Holding LLC (Disregarded): No separate return, income on personal return',
          'Consulting LLC (S-Corp): Form 1120S due March 15, Schedule K-1 to member',
          'Estimated Taxes: Federal quarterly (Apr 15, Jun 15, Sep 15, Jan 15)',
          'State estimated taxes depend on home state requirements'
        ],
        type: 'list'
      },
      {
        id: 'record-keeping',
        title: 'Record Keeping Requirements',
        content: [
          'Financial Records: Separate bank accounts, accounting records, trading records',
          'Corporate Records: Operating agreements, Articles, EIN letters, meeting minutes',
          'Tax Records: Returns, deduction documentation, estimated payments',
          'Retention Period: Tax records 7+ years, corporate records permanent'
        ],
        type: 'list'
      }
    ]
  },
  {
    id: 'risk-legal',
    title: 'Risk Mitigation & Legal Considerations',
    subsections: [
      {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        content: [
          'Trading activities may be subject to SEC and FINRA regulations',
          '"Investment Advisor" status may require registration',
          '"Trader" vs. "Investor" classification affects tax treatment',
          'Consult with securities law attorney if providing investment advice to others'
        ],
        type: 'list'
      },
      {
        id: 'insurance-coverage',
        title: 'Insurance Coverage',
        content: [
          'Professional liability insurance (Errors & Omissions)',
          'Cyber insurance if managing digital assets',
          'Directors and Officers insurance',
          'Umbrella liability insurance',
          'Property insurance if maintaining physical office'
        ],
        type: 'list'
      },
      {
        id: 'legal-disclaimer',
        title: 'Important Notice',
        content: 'This guide provides general information only and does not constitute legal, tax, or financial advice. Every situation is unique and complex. Clients should consult with qualified professionals: Attorney for legal structure, CPA for tax planning, Financial advisor for investment planning, Insurance professional for risk management.',
        type: 'highlight',
        highlightType: 'warning'
      }
    ]
  }
];
