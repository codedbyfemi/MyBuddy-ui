import React from 'react';

// --- Icons ---
const Icons = {
  Users: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Heart: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Github: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
};

// --- Team Data Configuration ---
// INSTRUCTIONS FOR UPLOADING PHOTOS:
// 1. Place your photos in an 'assets' folder or host them online.
// 2. Replace the 'image' string below with your file path or URL.
//    Example: image: require('../assets/john.jpg') 
//    OR:      image: "https://website.com/photo.jpg"

const teamMembers = [
  {
    id: 1,
    name: "Oluwatosin ALADESE",
    role: "Frontend Engineer",
    bio: "Passionate about building scalable web applications and solving complex problems.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&h=400", 
   // image: require('../assets/creator1.jpg'), 
  },
  {
    id: 2,
    name: "Alvin AKWUDIKE",
    role: "Backend Engineer",
    bio: "Creating intuitive and beautiful user experiences that make digital products a joy to use.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 3,
    name: "Boluwatife ADEYEMI",
    role: "Backend Engineer",
    bio: "Bridging the gap between user needs and technical feasibility to deliver value.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 4,
    name: "Motunrayo ",
    role: "UI/UX Specialist",
    bio: "Turning designs into pixel-perfect code with a focus on performance and accessibility.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 5,
    name: "Achazie Ugonna",
    role: "Frontend Engineer",
    bio: "Architecting robust APIs and database structures to power seamless applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
  },
  {
    id: 6,
    name: "Abiodun",
    role: "UI/UX Specialist",
    bio: "Ensuring the highest quality standards through rigorous testing and attention to detail.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400",
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 md:p-12">
      
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Meet the team behind MyBuddy and learn why we started this journey.
        </p>
      </div>

      {/* About the App Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-xl shadow-blue-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-sm">
              <Icons.Heart className="text-white" />
              <span className="font-medium text-sm tracking-wide uppercase">Our Mission</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Empowering your wellness journey, one day at a time.
            </h3>
            <p className="text-blue-50 text-lg leading-relaxed mb-6">
              MyBuddy was created with a simple belief: mental health and daily organization go hand in hand. 
              We wanted to build a safe space where you can track your mood, organize your tasks, and document your thoughts—all without the noise of traditional social media.
            </p>
            <p className="text-blue-50 text-lg leading-relaxed">
              Whether you're here to journal, stay organized, or just check in with yourself, MyBuddy is designed to be your supportive digital companion.
            </p>
          </div>
          
          {/* Decorative visual for the app description */}
          <div className="flex-shrink-0 bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
             <div className="w-full max-w-xs">
                <div className="bg-white rounded-xl p-4 mb-4 shadow-lg opacity-90 transform -rotate-2">
                   <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                   <div className="h-2 w-full bg-gray-100 rounded mb-1"></div>
                   <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg opacity-90 transform rotate-2">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                      <div className="h-2 w-20 bg-gray-200 rounded"></div>
                   </div>
                   <div className="h-24 bg-gray-50 rounded-lg border border-dashed border-gray-200"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* The Team Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Icons.Users className="text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">Meet the Creators</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Image Container */}
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-blue-400 to-purple-400 mb-4 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {member.role}
                </span>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  "{member.bio}"
                </p>

                {/* Social Links (Optional) */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-50 w-full justify-center">
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Icons.Github />
                  </button>
                  <button className="text-gray-400 hover:text-blue-700 transition-colors">
                    <Icons.Linkedin />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}