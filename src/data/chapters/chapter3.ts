
import { Chapter } from '../chapterTypes';

export const chapter3: Chapter = {
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
};
