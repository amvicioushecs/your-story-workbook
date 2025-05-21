
export interface WorkbookQuestion {
  id: string;
  question: string;
  placeholder: string;
  multiline?: boolean;
  type?: 'text' | 'circle-cross' | 'signature' | 'commit';
  options?: string[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  snapshot?: string;
  questions: WorkbookQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "Born Into the Blueprint",
    snapshot: "You weren't born broken—you were born into a system that taught you who to be before you ever asked yourself. The beliefs you carry might've been inherited, but they don't have to be permanent. This is where you start seeing the blueprint you were given so you can decide what gets burned and what gets built on.",
    description: "Explore how you were shaped by early messages and environments, and begin to consciously choose which parts to keep.",
    questions: [
      {
        id: "1-1",
        question: "What do you believe about yourself that was handed to you—not chosen by you?",
        placeholder: "Write about a situation where you feel you have no choice...",
        multiline: true
      },
      {
        id: "1-2",
        question: "What messages did you hear growing up about love?",
        placeholder: "What were you directly or indirectly taught about love...",
        multiline: true
      },
      {
        id: "1-3",
        question: "What messages did you hear growing up about success?",
        placeholder: "What were you directly or indirectly taught about success...",
        multiline: true
      },
      {
        id: "1-4",
        question: "What messages did you hear growing up about money?",
        placeholder: "What were you directly or indirectly taught about money...",
        multiline: true
      },
      {
        id: "1-5",
        question: "What messages did you hear growing up about conflict?",
        placeholder: "What were you directly or indirectly taught about handling conflict...",
        multiline: true
      },
      {
        id: "1-6",
        question: "What messages did you hear growing up about worth?",
        placeholder: "What were you directly or indirectly taught about your value as a person...",
        multiline: true
      },
      {
        id: "1-7",
        question: "What messages did you hear growing up about fear?",
        placeholder: "What were you directly or indirectly taught about dealing with fear...",
        multiline: true
      },
      {
        id: "1-8",
        question: "What environment shaped you—and what did it reward?",
        placeholder: "Example: Was it silence? Obedience? Toughness? People-pleasing?\nWrite: \"To survive, I learned to…\"",
        multiline: true
      },
      {
        id: "1-9",
        question: "One belief I'm choosing to question from this point forward is:",
        placeholder: "Write the belief you want to challenge...",
        type: "commit",
        multiline: false
      },
      {
        id: "1-10",
        question: "The first environment I will consciously shift is:",
        placeholder: "Name a specific environment you'll change...",
        type: "commit",
        multiline: false
      },
      {
        id: "1-11",
        question: "I choose to begin crafting my life from awareness, not autopilot.",
        placeholder: "Type your name as a commitment to this choice",
        type: "signature",
        multiline: false
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
