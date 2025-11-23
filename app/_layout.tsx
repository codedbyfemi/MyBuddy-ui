import { Slot } from 'expo-router';
import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar'; // Adjust path if needed
//import '../global.css'; // Ensure you have your CSS or Tailwind imported

export default function Layout() {
  // Inject Tailwind CSS (just in case it's missing)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans overflow-hidden">
      {/* The Sidebar stays constant */}
      <Sidebar />
      
      {/* The 'Slot' is where your page content (Journal, Affirmations) will appear */}
      <main className="flex-1 overflow-y-auto">
        <Slot />
      </main>
    </div>
  );
}