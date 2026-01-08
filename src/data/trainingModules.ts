import { TrainingModule } from '../types';

export const trainingModules: TrainingModule[] = [
  {
    id: '1',
    title: 'HLPFL Business Model & Value Proposition',
    description: 'Master the fundamentals of HLPFL\'s unique business model, value proposition, and competitive advantages.',
    duration: 45,
    category: 'HLPFL Process',
    difficulty: 'Beginner',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '1-1',
        title: 'Understanding HLPFL\'s Mission',
        content: 'HLPFL is a technology-enabled artist management company that partners with artists on fair terms. We believe artists deserve to keep ownership of their masters, maintain creative control, and receive transparent revenue splits.',
        type: 'text',
        completed: false,
        duration: 10
      },
      {
        id: '1-2',
        title: 'The Three Pillars of Our Model',
        content: 'Our model is built on three pillars: 1) Fair Economics (11% commission), 2) Full Ownership (artists keep masters/publishing), 3) Technology-Enabled (AI-powered platform). These pillars differentiate us from traditional labels and management companies.',
        type: 'video',
        completed: false,
        duration: 15
      },
      {
        id: '1-3',
        title: 'Competitive Advantages',
        content: 'Key advantages over labels: No ownership loss, 11% vs 50-80% commission, non-exclusive agreement. Over traditional management: Technology platform, lower commission, complete transparency, educational focus.',
        type: 'interactive',
        completed: false,
        duration: 20
      }
    ],
    tags: ['fundamentals', 'business-model', 'value-proposition']
  },
  {
    id: '2',
    title: 'Artist Pain Points & Industry Challenges',
    description: 'Deep dive into the challenges artists face in the music industry and how HLPFL addresses them.',
    duration: 60,
    category: 'HLPFL Process',
    difficulty: 'Beginner',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '2-1',
        title: 'Financial Exploitation',
        content: 'Artists face predatory contracts, hidden deductions, opaque accounting, and delayed payments. Traditional labels take 50-80% of revenue and often charge recoupable expenses that artists must pay back before seeing profits.',
        type: 'text',
        completed: false,
        duration: 15
      },
      {
        id: '2-2',
        title: 'Loss of Control & Ownership',
        content: 'Labels often control creative decisions and own masters. Artists lose the ability to license their own music, control how it\'s used, and build lasting asset value. This creates long-term financial insecurity.',
        type: 'video',
        completed: false,
        duration: 20
      },
      {
        id: '2-3',
        title: 'Artist Segments',
        content: 'Understanding four key segments: 1) DIY Success Stories ($10K-$50K revenue), 2) Unhappy Label Artists, 3) Emerging Artists with Momentum, 4) Career Artists Seeking Sustainability. Each has unique pain points and needs.',
        type: 'interactive',
        completed: false,
        duration: 25
      }
    ],
    tags: ['artist-needs', 'industry-challenges', 'pain-points']
  },
  {
    id: '3',
    title: 'Sales Process & Methodology',
    description: 'Learn the complete HLPFL sales process from lead generation to closing partnerships.',
    duration: 90,
    category: 'Sales Fundamentals',
    difficulty: 'Intermediate',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '3-1',
        title: 'The Sales Funnel Stages',
        content: 'Stage 1: Lead Generation - Identify and qualify artists. Stage 2: Initial Outreach - Establish connection. Stage 3: Discovery Call - Understand needs. Stage 4: Solution Presentation - Show value. Stage 5: Negotiation - Reach agreement. Stage 6: Onboarding - Start partnership.',
        type: 'text',
        completed: false,
        duration: 20
      },
      {
        id: '3-2',
        title: 'Consultative Partnership Approach',
        content: 'We\'re not selling, we\'re offering partnership. Build trust first, understand deeply, solve specifically, partner authentically. Focus on relationships over transactions. Long-term partnership over short-term commission.',
        type: 'video',
        completed: false,
        duration: 25
      },
      {
        id: '3-3',
        title: 'Discovery Call Framework',
        content: 'Opening: Build rapport and show research. Discovery: Ask open-ended questions to understand situation, challenges, and goals. Presentation: Address specific needs with tailored solution. Closing: Set clear next steps.',
        type: 'interactive',
        completed: false,
        duration: 30
      },
      {
        id: '3-4',
        title: 'Key Performance Indicators',
        content: 'Activity metrics: 10-15 artists researched daily, 5-10 outreach messages, 3-5 discovery calls weekly. Conversion metrics: 20-30% response rate, 10-15% booking rate, 30-40% close rate. Pipeline metrics: Value, velocity, deal size.',
        type: 'text',
        completed: false,
        duration: 15
      }
    ],
    tags: ['sales-process', 'methodology', 'kpi']
  },
  {
    id: '4',
    title: 'Outreach Strategies & Templates',
    description: 'Master effective outreach methods including warm introductions, social media, and email strategies.',
    duration: 75,
    category: 'Communication',
    difficulty: 'Intermediate',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '4-1',
        title: 'Outreach Philosophy',
        content: 'Core principles: Personalization is non-negotiable. Give before you ask. Be authentic and transparent. Keep it short and focused. Make the call-to-action clear. Follow up strategically.',
        type: 'text',
        completed: false,
        duration: 15
      },
      {
        id: '4-2',
        title: 'Warm Introduction Method',
        content: 'Highest success rate method. Request introduction from mutual connections. Message to artist after introduction should be personalized, show research, and make low-friction ask for conversation.',
        type: 'video',
        completed: false,
        duration: 20
      },
      {
        id: '4-3',
        title: 'Social Media Outreach',
        content: 'Instagram DMs and TikTok comments. Research artist thoroughly first. Comment authentically on content before DMing. DM should be personalized, show genuine interest, and have clear, easy CTA.',
        type: 'interactive',
        completed: false,
        duration: 25
      },
      {
        id: '4-4',
        title: 'Follow-Up Sequences',
        content: 'Follow-up 1: 3-4 days, value-add. Follow-up 2: 7-10 days, question-based. Follow-up 3: 14-21 days, social media engagement. Break for 30 days before re-engaging. Never give up after one message.',
        type: 'text',
        completed: false,
        duration: 15
      }
    ],
    tags: ['outreach', 'social-media', 'follow-up']
  },
  {
    id: '5',
    title: 'Talking Points & Communication Skills',
    description: 'Develop effective communication skills and master key talking points for various scenarios.',
    duration: 80,
    category: 'Communication',
    difficulty: 'Intermediate',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '5-1',
        title: 'The Elevator Pitch',
        content: 'Short version (30 sec): "Technology-enabled artist management. 11% commission, artist keeps 100% ownership and control. Non-exclusive partnership. AI-powered platform for strategic guidance." Practice until natural.',
        type: 'text',
        completed: false,
        duration: 20
      },
      {
        id: '5-2',
        title: 'Key Phrases to Use',
        content: 'Building trust: "I want to be completely transparent", "Let me be honest about what we can and can\'t do". Understanding: "What I\'m hearing is...", "Let me make sure I understand correctly". Value: "Here\'s what that means for you"',
        type: 'video',
        completed: false,
        duration: 25
      },
      {
        id: '5-3',
        title: 'Phrases to Avoid',
        content: 'Avoid: "Trust me" (show, don\'t tell), "This is a no-brainer" (disrespectful), "I promise" (over-commitment), "To be honest" (implies you weren\'t before). These undermine trust and credibility.',
        type: 'interactive',
        completed: false,
        duration: 20
      },
      {
        id: '5-4',
        title: 'Scenario-Based Scripts',
        content: 'Discovery call opening, responding to challenges, presenting solutions, handling objections, closing conversations. Practice these until they become natural conversations, not scripted responses.',
        type: 'text',
        completed: false,
        duration: 15
      }
    ],
    tags: ['communication', 'scripts', 'talking-points']
  },
  {
    id: '6',
    title: 'Objection Handling Framework',
    description: 'Learn to handle any artist objection with confidence using proven frameworks.',
    duration: 100,
    category: 'Objection Handling',
    difficulty: 'Advanced',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '6-1',
        title: 'The 4-Step Objection Handling Process',
        content: 'Step 1: Listen and Acknowledge - Let them finish, validate concern, show empathy. Step 2: Clarify and Understand - Ask questions, dig deeper. Step 3: Address and Educate - Provide honest answers, use facts. Step 4: Validate and Confirm - Confirm addressed, ask for more questions.',
        type: 'text',
        completed: false,
        duration: 25
      },
      {
        id: '6-2',
        title: 'Top 10 Common Objections',
        content: '1) "I don\'t need management" - Focus on scaling. 2) "11% is too high" - Show ROI. 3) "I\'ve been burned before" - Transparency and references. 4) "I want to keep ownership" - Confirm 100% ownership. 5) "I need more time" - Respect timeline.',
        type: 'video',
        completed: false,
        duration: 30
      },
      {
        id: '6-3',
        title: 'Advanced Techniques',
        content: 'Feel-Felt-Found: "I understand how you feel... others have felt the same... what they found was...". Reframe: Shift from cost to investment, loss to gain, risk to opportunity. Evidence: Back claims with data and examples.',
        type: 'interactive',
        completed: false,
        duration: 25
      },
      {
        id: '6-4',
        title: 'Objection Prevention',
        content: 'Address concerns proactively. Set clear expectations. Build trust through transparency. Listen for underlying concerns. Don\'t over-promise. Be honest about risks and uncertainties.',
        type: 'text',
        completed: false,
        duration: 20
      }
    ],
    tags: ['objections', 'framework', 'advanced']
  },
  {
    id: '7',
    title: 'Industry Keywords & Terminology',
    description: 'Master music industry terminology to communicate professionally and build credibility.',
    duration: 60,
    category: 'Sales Fundamentals',
    difficulty: 'Beginner',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '7-1',
        title: 'Essential Business Terms',
        content: 'Revenue: Total income before deductions. Net Revenue: Income after platform fees, before commissions. Commission: Percentage paid to manager (11% for HLPFL). Recoupable Expenses: Costs deducted from payments (HLPFL doesn\'t do this). Masters: Recordings.',
        type: 'text',
        completed: false,
        duration: 20
      },
      {
        id: '7-2',
        title: 'Contract & Legal Terms',
        content: 'Publishing: Rights to composition. Exclusive vs Non-Exclusive: One vs multiple partners. Term: Contract length. 360 Deal: Label takes cut of everything (bad). Reversion: When rights transfer back (not needed with HLPFL).',
        type: 'video',
        completed: false,
        duration: 20
      },
      {
        id: '7-3',
        title: 'Distribution & Platform Terms',
        content: 'DSPs: Streaming platforms. Stream: One play. MAU: Monthly Active Users. Save Rate: Percentage who save song. Skip Rate: Percentage who skip. Playlist Placement: Getting on playlists.',
        type: 'interactive',
        completed: false,
        duration: 20
      }
    ],
    tags: ['terminology', 'industry-knowledge', 'vocabulary']
  },
  {
    id: '8',
    title: 'Technology Platform Training',
    description: 'Learn to use HLPFL\'s technology platform effectively in sales conversations.',
    duration: 70,
    category: 'Technology',
    difficulty: 'Intermediate',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '8-1',
        title: 'Platform Overview',
        content: 'HLPFL\'s platform provides real-time analytics, AI-powered insights, automated operations, distribution optimization, and financial management. This is our competitive advantage - while others guess, we make data-driven decisions.',
        type: 'text',
        completed: false,
        duration: 20
      },
      {
        id: '8-2',
        title: 'Key Features for Artists',
        content: 'What artists care about: How much money I\'m making, where my fans are, what\'s working vs not working, what opportunities to pursue. Platform shows actionable insights, not just data.',
        type: 'video',
        completed: false,
        duration: 25
      },
      {
        id: '8-3',
        title: 'Demo Techniques',
        content: 'Start with dashboard overview. Show real-time analytics. Demonstrate AI insights. Focus on actionable value. Connect features to their specific needs. Keep it interactive - ask questions throughout.',
        type: 'interactive',
        completed: false,
        duration: 25
      }
    ],
    tags: ['platform', 'technology', 'demo']
  },
  {
    id: '9',
    title: 'Performance Analytics & Reporting',
    description: 'Learn to track, analyze, and report on sales performance as a Director of Sales.',
    duration: 85,
    category: 'Analytics',
    difficulty: 'Advanced',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '9-1',
        title: 'Key Metrics Dashboard',
        content: 'Activity metrics: Outreach volume, calls booked, presentations delivered. Conversion metrics: Response rate, booking rate, close rate. Pipeline metrics: Pipeline value, velocity, deal size. Quality metrics: Satisfaction, retention, referrals.',
        type: 'text',
        completed: false,
        duration: 25
      },
      {
        id: '9-2',
        title: 'Data Analysis Techniques',
        content: 'Identify patterns in successful vs unsuccessful calls. Analyze objection frequency and effectiveness. Track conversion rates by source. Monitor artist segment performance. Review time-to-close metrics.',
        type: 'video',
        completed: false,
        duration: 30
      },
      {
        id: '9-3',
        title: 'Reporting & Insights',
        content: 'Create weekly, monthly, and quarterly reports. Include visualizations and trend analysis. Provide actionable insights and recommendations. Track team performance and identify coaching opportunities. Share success stories and best practices.',
        type: 'interactive',
        completed: false,
        duration: 30
      }
    ],
    tags: ['analytics', 'reporting', 'metrics']
  },
  {
    id: '10',
    title: 'Team Leadership & Management',
    description: 'Develop leadership skills to manage and motivate the sales team effectively.',
    duration: 90,
    category: 'Analytics',
    difficulty: 'Advanced',
    completed: false,
    progress: 0,
    sections: [
      {
        id: '10-1',
        title: 'Leadership Philosophy',
        content: 'Lead by example - demonstrate the behaviors you expect. Build trust through transparency. Focus on development, not just results. Celebrate wins and learn from losses. Create a culture of continuous improvement.',
        type: 'text',
        completed: false,
        duration: 25
      },
      {
        id: '10-2',
        title: 'Team Management',
        content: 'Set clear expectations and goals. Provide regular feedback and coaching. Conduct weekly 1:1 meetings. Monitor performance and provide support. Recognize and reward achievements. Address performance issues promptly.',
        type: 'video',
        completed: false,
        duration: 30
      },
      {
        id: '10-3',
        title: 'Training & Development',
        content: 'Onboard new team members effectively. Create individual development plans. Provide ongoing training opportunities. Encourage skill-building and knowledge sharing. Track training progress and completion.',
        type: 'interactive',
        completed: false,
        duration: 35
      }
    ],
    tags: ['leadership', 'management', 'team']
  }
];