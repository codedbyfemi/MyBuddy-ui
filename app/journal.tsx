import React, { useState } from 'react';

// --- Icons ---
const Icons = {
  Pen: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
    </svg>
  ),
  BookOpen: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Calendar: ({ size = 14 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
};

// Define the structure for a single journal entry
interface JournalEntry {
  id: number;
  date: string;
  time: string;
  content: string;
}

export default function JournalPage() {
  const [entryText, setEntryText] = useState("");
  
  // Initialize with an EMPTY array, so no fake data appears
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const handleSave = () => {
    // Prevent saving empty notes
    if (!entryText.trim()) return;

    const now = new Date();
    
    const newEntry: JournalEntry = {
      id: Date.now(), // Unique ID based on timestamp
      date: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      content: entryText
    };

    // Add the new entry to the BEGINNING of the list (newest first)
    setEntries([newEntry, ...entries]);
    
    // Clear the text box
    setEntryText("");
  };

  return (
    <div className="max-w-5xl mx-auto p-8 md:p-12">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Journal</h2>
        <p className="text-gray-500 mt-1">Record your thoughts and reflections</p>
      </div>

      {/* Input Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Icons.Pen className="text-blue-600" />
          <h3 className="font-semibold text-gray-900">How was today? Put it down in words.</h3>
        </div>
        <p className="text-gray-500 text-sm mb-4 pl-8">Express your thoughts, feelings, and experiences</p>
        
        <textarea 
          className="w-full h-40 bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all resize-none"
          placeholder="Write about your day..."
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
        />
        
        <button 
          onClick={handleSave}
          className="w-full mt-4 bg-gradient-to-r from-[#7FA1F7] to-[#6AC9B8] hover:from-blue-500 hover:to-teal-400 text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-100 transition-all active:scale-[0.99]"
        >
          Save Journal Entry
        </button>
      </div>

      {/* List Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-1">
            <Icons.BookOpen className="text-purple-500" />
            <h3 className="font-semibold text-gray-900">Previous Entries</h3>
          </div>
          <p className="text-gray-500 text-sm pl-8">Your journal history</p>
        </div>

        <div className="divide-y divide-gray-100">
          {entries.length === 0 ? (
            // Empty State Message
            <div className="p-12 text-center text-gray-400">
              <p>No entries yet. Write your first note above!</p>
            </div>
          ) : (
            // The List of Real Entries
            entries.map((entry) => (
              <div key={entry.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-3">
                  <Icons.Calendar size={14} />
                  <span>{entry.date}</span>
                  <span>•</span>
                  <span>{entry.time}</span>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}