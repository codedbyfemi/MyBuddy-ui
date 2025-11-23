import React, { useState } from 'react';

// --- Icons ---
const Icons = {
  MessageCircle: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  FaceGreat: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  FaceGood: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 1 4 1 4-1 4-1"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  FaceOkay: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  FaceBad: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  FaceTerrible: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  )
};

// --- Mood Data & Characters ---
const moods = [
  { 
    id: 'great', 
    label: 'Great', 
    icon: Icons.FaceGreat, 
    textColor: 'text-green-500', 
    borderColor: 'border-green-200', 
    selectedBg: 'bg-green-50',
    // Amazing Character Data
    character: "🤩", 
    cheer: "You're Glowing!", 
    message: "That's the spirit! Keep shining your light.",
    animation: "animate-bounce"
  },
  { 
    id: 'good', 
    label: 'Good', 
    icon: Icons.FaceGood, 
    textColor: 'text-blue-500', 
    borderColor: 'border-blue-200', 
    selectedBg: 'bg-blue-50',
    character: "😎", 
    cheer: "Looking Good!", 
    message: "Solid vibes today. Keep that momentum going!",
    animation: "animate-pulse"
  },
  { 
    id: 'okay', 
    label: 'Okay', 
    icon: Icons.FaceOkay, 
    textColor: 'text-yellow-500', 
    borderColor: 'border-yellow-200', 
    selectedBg: 'bg-yellow-50',
    character: "☕", 
    cheer: "Steady as she goes.", 
    message: "It's a calm day. A perfect time to just breathe.",
    animation: "animate-spin-slow" // We'll use a gentle float effect technically
  },
  { 
    id: 'bad', 
    label: 'Bad', 
    icon: Icons.FaceBad, 
    textColor: 'text-orange-500', 
    borderColor: 'border-orange-200', 
    selectedBg: 'bg-orange-50',
    character: "🧸", 
    cheer: "Sending a Hug.", 
    message: "It's okay not to be okay. Be gentle with yourself.",
    animation: "animate-pulse"
  },
  { 
    id: 'terrible', 
    label: 'Terrible', 
    icon: Icons.FaceTerrible, 
    textColor: 'text-red-500', 
    borderColor: 'border-red-200', 
    selectedBg: 'bg-red-50',
    character: "❤️‍🩹", 
    cheer: "We're here for you.", 
    message: "Deep breaths. This moment will pass. You are strong.",
    animation: "animate-pulse"
  },
];

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [feelingText, setFeelingText] = useState("");

  // Helper to get the currently selected mood object
  const activeMoodData = moods.find(m => m.id === selectedMood);

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Hey Buddy!</h2>
        <p className="text-gray-500 mt-1">Let's track your wellness today</p>
      </div>

      {/* Mood Tracker Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 max-w-2xl">
        <h3 className="font-semibold text-gray-900 mb-1">How are you feeling today?</h3>
        <p className="text-sm text-gray-500 mb-6">Click a face to see your daily buddy!</p>

        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {moods.map((mood) => {
            const isSelected = selectedMood === mood.id;
            const Icon = mood.icon;
            
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 w-20 md:w-24
                  ${mood.textColor} ${mood.borderColor}
                  ${isSelected 
                    ? `${mood.selectedBg} scale-110 shadow-md ring-2 ring-offset-2 ring-blue-100` 
                    : 'bg-white hover:bg-gray-50 hover:scale-105'
                  }
                `}
              >
                <Icon className={`transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`} />
                <span className="text-xs font-medium">{mood.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- THE AMAZING CHARACTER REACTION AREA --- */}
      {activeMoodData && (
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className={`
            relative overflow-hidden rounded-3xl p-8 text-center border 
            ${activeMoodData.selectedBg} ${activeMoodData.borderColor}
          `}>
            
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-white pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              {/* The Animated Character */}
              <div className={`text-8xl mb-4 drop-shadow-lg ${activeMoodData.animation}`}>
                {activeMoodData.character}
              </div>
              
              {/* The Cheer */}
              <h3 className={`text-2xl font-bold mb-2 ${activeMoodData.textColor}`}>
                {activeMoodData.cheer}
              </h3>
              
              {/* The Message */}
              <p className="text-gray-700 font-medium text-lg max-w-md">
                "{activeMoodData.message}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Text Input Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-center gap-3 mb-2">
          <Icons.MessageCircle className="text-blue-600" />
          <h3 className="font-semibold text-gray-900">Journal your thoughts</h3>
        </div>
        <p className="text-sm text-gray-500 mb-6 pl-9">Share your thoughts and feelings with us</p>

        <textarea
          value={feelingText}
          onChange={(e) => setFeelingText(e.target.value)}
          className="w-full h-32 bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all resize-none mb-4"
          placeholder="Type how you're feeling today... Be as open and honest as you'd like."
        />

        <button className="w-full bg-gradient-to-r from-[#7FA1F7] to-[#6AC9B8] hover:from-blue-500 hover:to-teal-400 text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-100 transition-all active:scale-[0.99]">
          Share My Feelings
        </button>
      </div>

    </div>
  );
}