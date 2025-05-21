
import { Chapter } from '../chapterTypes';

export const chapter2: Chapter = {
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
};
