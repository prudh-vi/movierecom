"use client";


import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function Review() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "SAFSOC's browser extension has been a game-changer for our team's communication. The real-time safety monitoring catches potential data leaks before they happen. It's like having a security guard for all our chats.",
    name: "Sarah Chen",
    title: "Tech Lead at InnovateCorp",
  },
  {
    quote:
      "I love how it works across different platforms. Whether I'm on Slack, Teams, or any other chat app, SAFSOC keeps our conversations secure and appropriate. The AI detection for offensive content has made our workspace more professional.",
    name: "Michael Rodriguez",
    title: "Project Manager",
  },
  {
    quote:
      "As a cybersecurity professional, I appreciate SAFSOC's approach to privacy. The real-time AI monitoring is impressive, and the cross-platform functionality makes it essential for modern communication.",
    name: "Dr. Alex Kumar",
    title: "Security Consultant",
  },
  {
    quote:
      "The seamless integration with browsers makes SAFSOC incredibly convenient. It's protecting our sensitive information without disrupting our workflow. A must-have tool for any organization serious about communication security.",
    name: "Emma Watson",
    title: "Operations Director",
  },
  {
    quote:
      "We implemented SAFSOC across our entire company and the results were immediate. The AI catches inappropriate content and potential security risks instantly. It's both a safety tool and a way to maintain professional standards.",
    name: "James Mitchell",
    title: "Head of IT Security",
  },
];