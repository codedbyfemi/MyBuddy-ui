import React from 'react';

// --- Data ---
const affirmationsList = [
  { id: 1, text: "I am worthy of love, happiness, and success." },
  { id: 2, text: "Every day, I am becoming a better version of myself." },
  { id: 3, text: "I choose to focus on what I can control and let go of what I cannot." },
  { id: 4, text: "My thoughts are powerful, and I choose positive ones." },
  { id: 5, text: "I am grateful for all the blessings in my life." },
  { id: 6, text: "I trust in my ability to overcome any challenge." },
  { id: 7, text: "I am deserving of rest and self-care." },
  { id: 8, text: "My mental health is just as important as my physical health." },
  { id: 9, text: "I am proud of myself for how far I've come." },
  { id: 10, text: "Today, I choose joy and peace." },
  { id: 11, text: "I am enough, exactly as I am." },
  { id: 12, text: "I attract positive energy and good things into my life." },
  { id: 13, text: "I am resilient, strong, and brave." },
  { id: 14, text: "My feelings are valid, and I accept them." },
  { id: 15, text: "I release all negative thoughts and embrace positivity." }
];

// --- Icons ---
const Sparkles = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 17v4"/><path d="M21 19h-4"/>
  </svg>
);

export default function AffirmationsPage() {
  // NOTICE: No Sidebar, no Layout wrapper here. Just the page content.
  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Affirmations</h2>
        <p className="text-gray-500 mt-1">Daily positive affirmations</p>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-6 mb-10 flex items-center gap-5">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 flex-shrink-0">
          <Sparkles className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">Daily Affirmations</h3>
          <p className="text-gray-500 text-sm mt-1">Read these positive affirmations to start your day with intention and positivity</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {affirmationsList.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-l-4 border-l-blue-500 border-y border-r border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow h-full">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
              {item.id}
            </div>
            <p className="text-gray-600 leading-relaxed pt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}