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
        multiline: true,
        type: "circle-cross",
        options: ["Rage", "Shame", "Guilt", "Numbness", "Loneliness", "Exhaustion", "Grief", "Fear", "Desperation", "Love", "Truth", "Hunger"]
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
    title: "Default vs. Design",
    subtitle: "",
    snapshot: "Most people aren't living by choice—they're living by programming. Patterns on autopilot. Comfort disguised as stability. Decisions made by fear wearing a routine. This chapter isn't just a wake-up call. It's a blueprint reset. You're not here to react. You're here to design. Deliberately. Loudly. Daily.",
    description: "Identify where you're living on autopilot and create deliberate designs for your life.",
    questions: [
      {
        id: "3-1",
        question: "Where are you living by default right now?",
        placeholder: "Name the areas. Don't bullshit yourself.",
        type: "circle-cross",
        options: [
          "Morning routine", 
          "Relationships", 
          "Work habits", 
          "Health decisions", 
          "Social circle", 
          "Emotional reactions", 
          "Communication", 
          "Your calendar"
        ]
      },
      {
        id: "3-2",
        question: "Write: \"Default looks like…\"",
        placeholder: "Describe what living on default looks like for you...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-3",
        question: "\"Design would look like…\"",
        placeholder: "Describe what deliberately designing your life would look like...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-4",
        question: "What's one daily behavior that belongs to your old self?",
        placeholder: "That version of you who survived, coasted, settled. Name it. It's time to cut it.",
        multiline: true
      },
      {
        id: "3-5",
        question: "Old Self Habit:",
        placeholder: "Identify a specific habit of your old self...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-6",
        question: "New Self Design:",
        placeholder: "Describe the new habit you'll replace it with...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-7",
        question: "Where does survival still call the shots in your life?",
        placeholder: "And what's the cost of obeying it?",
        multiline: true
      },
      {
        id: "3-8",
        question: "\"I stay in survival mode when…\"",
        placeholder: "Identify when you fall into survival mode...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-9",
        question: "\"It costs me…\"",
        placeholder: "What does staying in survival mode cost you?",
        type: "commit",
        multiline: false
      },
      {
        id: "3-10",
        question: "I will no longer run on default in the area of:",
        placeholder: "Name one specific area you'll stop running on autopilot...",
        type: "commit",
        multiline: false
      },
      {
        id: "3-11",
        question: "Instead, I will create a system that reflects the identity I'm building—not the identity I inherited.",
        placeholder: "Type your name as a commitment to this choice",
        type: "signature",
        multiline: false
      }
    ]
  },
  {
    id: 4,
    title: "You Are the Author",
    snapshot: "That voice in your head? It wasn't born—it was built. By parents, teachers, trauma, culture. It was trained to sound like you so you'd never question it. But now? You do question it. Now you're the one holding the pen. And the story you write next will shape who you become.",
    description: "Identify and rewrite the narrative of your inner voice to shape who you're becoming.",
    questions: [
      {
        id: "4-1",
        question: "What's one toxic sentence your inner narrator says often?",
        placeholder: "Write it exactly how it sounds when it hits you. Don't dress it up.",
        multiline: true
      },
      {
        id: "4-2",
        question: "\"My inner voice says...\"",
        placeholder: "Write the specific words your inner critic uses...",
        type: "commit",
        multiline: false
      },
      {
        id: "4-3",
        question: "Where do you think that voice first came from?",
        placeholder: "Parent? Coach? Church? Classmate? Society?",
        multiline: true
      },
      {
        id: "4-4",
        question: "\"That voice sounds like...\"",
        placeholder: "Identify who or what influenced this voice...",
        type: "commit",
        multiline: false
      },
      {
        id: "4-5",
        question: "What story do you repeat about who you are?",
        placeholder: "The \"I'm always...\" or \"I never...\" or \"I just am...\"",
        multiline: true
      },
      {
        id: "4-6",
        question: "Old Identity:",
        placeholder: "Write the limiting belief about yourself...",
        type: "commit",
        multiline: false
      },
      {
        id: "4-7",
        question: "Rewrite It: \"I'm becoming the kind of person who...\"",
        placeholder: "Transform your old identity into a new empowering one...",
        type: "commit",
        multiline: false
      },
      {
        id: "4-8",
        question: "Create your replacement narrator. What do you want your new inner voice to sound like?",
        placeholder: "Write 3 lines it will say from now on:",
        multiline: true
      },
      {
        id: "4-9",
        question: "Today, I choose to stop repeating the story that kept me small.",
        placeholder: "Type your name as a commitment to this choice",
        type: "commit",
        multiline: false
      },
      {
        id: "4-10",
        question: "I will rewrite my identity one sentence at a time—and I'll speak it until my nervous system believes it.",
        placeholder: "Type your name as a commitment to this choice",
        type: "commit",
        multiline: false
      },
      {
        id: "4-11",
        question: "I am the author now.",
        placeholder: "Type your name as a commitment to this choice",
        type: "signature",
        multiline: false
      }
    ]
  }
];
