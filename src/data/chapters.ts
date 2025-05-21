
export interface WorkbookQuestion {
  id: string;
  question: string;
  placeholder: string;
  multiline?: boolean;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  questions: WorkbookQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Power of Choice",
    description: "Explore how your everyday decisions shape who you become and the life you live.",
    questions: [
      {
        id: "1-1",
        question: "What area of your life do you feel 'stuck' in right now?",
        placeholder: "Write about a situation where you feel you have no choice..."
      },
      {
        id: "1-2",
        question: "What choices have you been avoiding making?",
        placeholder: "List at least three decisions you've been postponing...",
        multiline: true
      },
      {
        id: "1-3",
        question: "What would your life look like if you were crafting it by choice, not chance?",
        placeholder: "Describe in detail how your life would be different...",
        multiline: true
      }
    ]
  },
  {
    id: 2,
    title: "Uncrafting Limiting Beliefs",
    description: "Identify and challenge the beliefs that have been holding you back from making empowered choices.",
    questions: [
      {
        id: "2-1",
        question: "What beliefs do you hold that limit your choices?",
        placeholder: "Example: 'I'm not creative enough to...'",
        multiline: true
      },
      {
        id: "2-2",
        question: "Where did these beliefs originate from?",
        placeholder: "Think about childhood experiences, authority figures, past failures...",
        multiline: true
      },
      {
        id: "2-3",
        question: "What new belief would serve you better?",
        placeholder: "Reframe each limiting belief into an empowering one...",
        multiline: true
      }
    ]
  },
  {
    id: 3,
    title: "Crafting Your Decision Framework",
    description: "Develop your personal system for making choices aligned with your values and vision.",
    questions: [
      {
        id: "3-1",
        question: "What are your top 5 values that should guide your decisions?",
        placeholder: "Examples: Freedom, Connection, Growth...",
        multiline: true
      },
      {
        id: "3-2",
        question: "When faced with a difficult choice, what questions will you ask yourself?",
        placeholder: "Create 3-5 powerful questions to guide your decision-making...",
        multiline: true
      },
      {
        id: "3-3",
        question: "How will you track the impact of your choices over time?",
        placeholder: "Design your personal system for evaluating decisions...",
        multiline: true
      }
    ]
  }
];
