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
    title: "The Moment of Wake-Up",
    snapshot: "There's always a moment. A sharp, quiet, or messy moment when everything inside you screams, \"No more.\" You might not recognize it right away. You might ignore it at first. But it sticks. It hums beneath the skin until you decide: I'm done surviving—I want to live aligned. This chapter is about naming your wake-up moment and giving it the fucking credit it deserves.",
    description: "Identify your wake-up moment and honor the emotions that drove your transformation.",
    questions: [
      {
        id: "2-1",
        question: "What was your wake-up moment?",
        placeholder: "That second the job, the relationship, the addiction, the excuse just stopped fitting. Write the scene like it's a movie script. Be specific. Let the emotion spill.",
        multiline: true
      },
      {
        id: "2-2",
        question: "What emotion cracked you open?",
        placeholder: "Circle all that apply: Rage, Shame, Guilt, Numbness, Loneliness, Exhaustion, Grief, Fear, Desperation, Love, Truth, Hunger. Then write what it told you.",
        multiline: true
      },
      {
        id: "2-3",
        question: "That emotion showed me:",
        placeholder: "What did this emotion reveal to you?",
        type: "commit",
        multiline: false
      },
      {
        id: "2-4",
        question: "What part of yourself did you meet in that moment?",
        placeholder: "The fighter? The child? The builder? The tired, burned-out shell of you? Write about them. Speak to them.",
        multiline: true
      },
      {
        id: "2-5",
        question: "The moment I woke up was when:",
        placeholder: "Describe the specific moment when everything changed...",
        type: "commit",
        multiline: false
      },
      {
        id: "2-6",
        question: "And now I choose to build a life that reflects what I saw in that moment, not what I was taught to ignore.",
        placeholder: "Type your name as a commitment to this choice",
        type: "signature",
        multiline: false
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
