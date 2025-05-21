
import { Chapter } from '../chapterTypes';

export const chapter5: Chapter = {
  id: 5,
  title: "The Science of Decisions",
  snapshot: "You are always choosing—even when you think you're not. But most of your choices aren't conscious. They're bias, fear, habit, old programming running the show while you call it \"just how I am.\" This chapter is about exposing the machinery and taking the wheel back. No more letting your survival brain drive your future.",
  description: "Recognize your decision-making patterns and biases to make conscious choices.",
  questions: [
    {
      id: "5-1",
      question: "The decision I keep avoiding is…",
      placeholder: "What decision in your life right now feels stuck? That thing you keep dancing around. Dodging. Delaying.",
      multiline: true
    },
    {
      id: "5-2",
      question: "Because I'm afraid that if I choose…",
      placeholder: "What fears are holding you back from making this decision?",
      multiline: true
    },
    {
      id: "5-3",
      question: "But what I actually want is…",
      placeholder: "What do you truly desire from this situation?",
      multiline: true
    },
    {
      id: "5-4",
      question: "What cognitive biases are running you right now?",
      placeholder: "Select the biases you recognize in yourself",
      type: "circle-cross",
      options: [
        "Status Quo Bias (\"I'll just stay with what I know…\")",
        "Loss Aversion (\"What if I lose what little I have?\")",
        "Confirmation Bias (\"See, I knew I'd mess that up…\")",
        "Negativity Bias (\"Everything's shit, obviously.\")"
      ]
    },
    {
      id: "5-5",
      question: "The loudest bias I run on is…",
      placeholder: "Identify your strongest cognitive bias",
      type: "commit",
      multiline: false
    },
    {
      id: "5-6",
      question: "It's kept me from…",
      placeholder: "How has this bias limited you?",
      multiline: true
    },
    {
      id: "5-7",
      question: "Today I choose to see it for what it is: a glitch. Not a law.",
      placeholder: "Type your name as recognition of this truth",
      type: "signature",
      multiline: false
    },
    {
      id: "5-8",
      question: "If I trusted my future self, I would…",
      placeholder: "What would your future self, 5 years ahead, bold and unapologetic, choose today?",
      multiline: true
    },
    {
      id: "5-9",
      question: "From today forward, I will make decisions from awareness, not autopilot.",
      placeholder: "Type your name to commit",
      type: "signature",
      multiline: false
    },
    {
      id: "5-10",
      question: "I'm done letting my past pick my future.",
      placeholder: "Sign your name",
      type: "signature",
      multiline: false
    }
  ]
};
