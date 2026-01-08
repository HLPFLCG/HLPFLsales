import { RolePlayScenario } from '../types';

export const rolePlayScenarios: RolePlayScenario[] = [
  {
    id: '1',
    title: 'DIY Success Story - First Discovery Call',
    description: 'Artist has been successful independently and is skeptical about management',
    category: 'Discovery Calls',
    difficulty: 'Easy',
    script: [
      { speaker: 'artist', text: 'Hi Noah, thanks for reaching out. I\'ve been doing this on my own for three years and I\'m doing pretty well. Not sure I really need management, but I\'m open to hearing what you have to say.', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - acknowledge success, reframe management as accelerator]', type: 'response' },
      { speaker: 'artist', text: 'But I\'ve built everything myself. Why would I give up 11% of what I\'ve earned on my own?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - focus on time savings and scaling]', type: 'response' }
    ],
    objectives: [
      'Acknowledge and validate their success',
      'Reframe management as partnership, not takeover',
      'Focus on time savings and scaling benefits',
      'Address control concerns upfront'
    ],
    tips: [
      'Use their own words: "You\'ve built something impressive"',
      'Don\'t try to replace what they\'re doing - amplify it',
      'Show ROI calculation specific to their situation'
    ]
  },
  {
    id: '2',
    title: 'The Burned Artist - Trust Issues',
    description: 'Artist has had a bad experience with a label and is deeply skeptical',
    category: 'Discovery Calls',
    difficulty: 'Medium',
    script: [
      { speaker: 'artist', text: 'Look, I\'ve heard all this before. Last label I worked with promised me the world and then screwed me over. They took my masters, gave me nothing, and trapped me in a contract for three years. Why should I trust you?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - don\'t get defensive, validate skepticism]', type: 'response' },
      { speaker: 'artist', text: 'So you\'re different? Prove it. What exactly makes you different?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - transparency, ownership, non-exclusive]', type: 'response' }
    ],
    objectives: [
      'Build trust through transparency and authenticity',
      'Validate their skepticism (it\'s justified)',
      'Be transparent about HLPFL\'s model',
      'Offer references and proof'
    ],
    tips: [
      'Never get defensive at objections',
      'Show actual contract language if needed',
      'Offer to connect with current artists for references',
      'Be honest about what HLPFL can and can\'t do'
    ]
  },
  {
    id: '3',
    title: 'The Emerging Artist - Confused and Overwhelmed',
    description: 'New artist with viral success getting label offers but doesn\'t understand the industry',
    category: 'Discovery Calls',
    difficulty: 'Easy',
    script: [
      { speaker: 'artist', text: 'Hey Noah! So excited to talk to you. My song just blew up on TikTok and I\'ve got all these labels reaching out but I don\'t know what to do. I\'ve never done this before - can you help me understand what\'s going on?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - educate, don\'t pressure]', type: 'response' },
      { speaker: 'artist', text: 'One label offered me $50,000 advance. That\'s a lot of money. Should I take it?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - explain advances, ownership, long-term implications]', type: 'response' }
    ],
    objectives: [
      'Be patient and educational',
      'Explain label vs. management clearly',
      'Warn about predatory contracts',
      'Focus on long-term thinking',
      'Don\'t rush them - this is a big decision'
    ],
    tips: [
      'This is a vulnerable position - protect them',
      'Don\'t pressure for quick decisions',
      'Offer to help evaluate label offers',
      'Focus on their long-term career, not short-term money'
    ]
  },
  {
    id: '4',
    title: 'The Comparison Shopper - Multiple Offers',
    description: 'Artist is comparing HLPFL to other management companies',
    category: 'Negotiation',
    difficulty: 'Medium',
    script: [
      { speaker: 'artist', text: 'Thanks for meeting, Noah. I\'m talking to a couple other management companies right now. One offered me 10% commission, another offered 12% but said they\'d do more marketing. You\'re at 11% - why should I go with HLPFL?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - don\'t compete on price, compete on value]', type: 'response' },
      { speaker: 'artist', text: 'But the 10% option is cheaper. What exactly do I get for the extra 1%?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - technology, data insights, total value proposition]', type: 'response' }
    ],
    objectives: [
      'Don\'t compete on price alone',
      'Focus on total value proposition',
      'Highlight technology and data advantages',
      'Show ROI beyond commission rate',
      'Emphasize alignment and partnership'
    ],
    tips: [
      'Use ROI calculator to show net value',
      'Share specific examples of technology impact',
      'Demonstrate platform capabilities',
      'Be confident in value - don\'t apologize for price'
    ]
  },
  {
    id: '5',
    title: 'The Control-Focused Artist - Creative Freedom',
    description: 'Artist is extremely protective of creative control and artistic integrity',
    category: 'Objection Handling',
    difficulty: 'Medium',
    script: [
      { speaker: 'artist', text: 'Before we go further, I need to be clear: I make all creative decisions. No committees, no A&R people telling me what to record, no changing my music to make it more commercial. I\'ve turned down labels because of this. Are you going to try to control my music?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - confirm 100% creative control immediately]', type: 'response' },
      { speaker: 'artist', text: 'Even if my music doesn\'t perform well commercially? You won\'t try to change it?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - explain guidance vs. control]', type: 'response' }
    ],
    objectives: [
      'Validate their artistic integrity',
      'Confirm 100% creative control immediately',
      'Explain difference between control and guidance',
      'Show examples of supporting artists\' vision',
      'Be honest about offering strategic input'
    ],
    tips: [
      'Don\'t minimize the importance of creative control',
      'Be explicit: "You make final decisions"',
      'Share stories of artists who maintained vision',
      'Offer to show contract language confirming control'
    ]
  },
  {
    id: '6',
    title: 'The Skeptical Realist - ROI Focused',
    description: 'Full-time musician supporting a family, needs concrete ROI proof',
    category: 'Objection Handling',
    difficulty: 'Hard',
    script: [
      { speaker: 'artist', text: 'Noah, I\'ve got a family to support. I make enough to get by, but not much more. I can\'t afford to take risks. If I give you 11% and my revenue doesn\'t go up, I\'m in trouble. Show me the numbers - how exactly will this make me more money?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - show concrete ROI with numbers]', type: 'response' },
      { speaker: 'artist', text: 'But what if it takes 6 months to see results? I can\'t wait that long. What\'s the worst case scenario?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - be honest about timelines and risks]', type: 'response' }
    ],
    objectives: [
      'Respect their financial situation',
      'Show concrete numbers and examples',
      'Use ROI calculator if available',
      'Be honest about timelines (not overnight success)',
      'Focus on low-risk, high-upside',
      'Share conservative estimates, not best-case scenarios'
    ],
    tips: [
      'This is a legitimate concern - take it seriously',
      'Use their actual numbers in calculations',
      'Be honest about time to results',
      'Show worst-case scenario clearly',
      'Offer trial period or performance-based terms if appropriate'
    ]
  },
  {
    id: '7',
    title: 'The Label-Bound Artist - Wants Traditional Deal',
    description: 'Artist\'s goal is to get signed to a major label',
    category: 'Discovery Calls',
    difficulty: 'Medium',
    script: [
      { speaker: 'artist', text: 'I appreciate you reaching out, Noah, but my goal is to get signed to a major label. That\'s where the real money and exposure are. I\'ve got meetings with Universal and Sony coming up. Why would I go with a management company when I could get a label deal?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - educate on label realities]', type: 'response' },
      { speaker: 'artist', text: 'But labels have the connections and marketing power. Can HLPFL really compete with that?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - position HLPFL as alternative path to same goals]', type: 'response' }
    ],
    objectives: [
      'Don\'t dismiss label aspirations',
      'Educate on what labels actually take',
      'Show HLPFL can get to same goals without giving up ownership',
      'Position as better path to success',
      'Be honest that HLPFL is not a label',
      'Offer to help evaluate label offers'
    ],
    tips: [
      'Validate their ambition',
      'Don\'t be anti-label - some artists want label deals',
      'Show examples of successful artists without labels',
      'Position as path to label deal if they still want one later',
      'Offer to help negotiate better label terms'
    ]
  },
  {
    id: '8',
    title: 'The Overwhelmed Artist - Immediate Pain',
    description: 'Successful but drowning in administrative work, needs immediate relief',
    category: 'Discovery Calls',
    difficulty: 'Easy',
    script: [
      { speaker: 'artist', text: 'Oh my god, thank you for reaching out. I\'m drowning here. My music is blowing up, which is great, but I can\'t keep up with everything. I\'m supposed to be working on new music but I spend all day answering emails, dealing with distributors, trying to figure out royalties... I don\'t even know where to start. Can you actually help me?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - show immediate relief and long-term solution]', type: 'response' },
      { speaker: 'artist', text: 'But how long before I see relief? I need help now, not in 6 months.', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - show immediate and ongoing value]', type: 'response' }
    ],
    objectives: [
      'Validate their overwhelm',
      'Show empathy and understanding',
      'Focus on immediate relief (what HLPFL can take off their plate)',
      'Paint picture of what life looks like with HLPFL',
      'Move quickly to practical solutions',
      'Address their stress directly'
    ],
    tips: [
      'This is an ideal candidate - show you can help',
      'Be specific about what you\'ll handle day one',
      'Focus on their pain points, not features',
      'Show urgency in your response'
    ]
  },
  {
    id: '9',
    title: 'The Closing - Ready to Move Forward',
    description: 'Artist is interested and ready to proceed',
    category: 'Closing',
    difficulty: 'Easy',
    script: [
      { speaker: 'artist', text: 'This all sounds great, Noah. I think HLPFL could be a good fit for me. What are the next steps? How do we get started?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - guide through onboarding process]', type: 'response' },
      { speaker: 'artist', text: 'Do I need to sign anything today? Can I think about it?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - set clear timeline without pressure]', type: 'response' }
    ],
    objectives: [
      'Guide them through next steps clearly',
      'Set expectations for onboarding process',
      'Provide any materials they need to review',
      'Set timeline for decision without pressure',
      'Get commitment on next action'
    ],
    tips: [
      'Be excited but not pushy',
      'Have clear next steps ready',
      'Prepare agreement and onboarding materials',
      'Set specific follow-up time',
      'Don\'t let momentum fade'
    ]
  },
  {
    id: '10',
    title: 'The Closing - Needs More Time',
    description: 'Artist is interested but needs to think it over',
    category: 'Closing',
    difficulty: 'Medium',
    script: [
      { speaker: 'artist', text: 'I appreciate everything you\'ve shared, Noah. This is a big decision and I need to think about it. Can I get back to you in a week or so?', type: 'objection' },
      { speaker: 'salesperson', text: '[Your response - respect timeline while keeping momentum]', type: 'response' },
      { speaker: 'artist', text: 'I\'ll probably talk to some other artists and maybe my lawyer. Is that okay?', type: 'question' },
      { speaker: 'salesperson', text: '[Your response - encourage due diligence, offer support]', type: 'response' }
    ],
    objectives: [
      'Respect their need for time',
      'Provide additional information for their consideration',
      'Set clear follow-up timeline',
      'Offer to connect with other artists for references',
      'Leave door open without pressure'
    ],
    tips: [
      'Don\'t pressure - this kills trust',
      'Send follow-up materials immediately',
      'Offer to answer questions as they come up',
      'Set specific follow-up date',
      'Stay in touch with value-add touches'
    ]
  }
];