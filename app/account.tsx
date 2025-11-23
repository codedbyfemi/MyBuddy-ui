import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';

// --- Icons ---
const Icons = {
  Camera: ({ size = 16 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  Trash: ({ size = 16 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    </svg>
  ),
  Calendar: ({ size = 16 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  LogOut: ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
  Eye: ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  EyeOff: ({ size = 18 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
};

export default function AccountPage() {
  const router = useRouter();
  
  // --- State ---
  const [profileImage, setProfileImage] = useState<string>("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
  const [showPassword, setShowPassword] = useState(false);
  
  // Initialize with empty strings to avoid "fake" data flashing
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- 1. LOAD DATA ON MOUNT ---
  useEffect(() => {
    // Load User Details (Text)
    const storedUser = localStorage.getItem('registeredUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setFormData({
        fullName: parsedUser.fullName || "",
        email: parsedUser.email || "",
        password: parsedUser.password || "",
        dob: parsedUser.dob || "",       // If empty in storage, keeps it empty
        phone: parsedUser.phone || "",   // If empty in storage, keeps it empty
        username: parsedUser.username || "",
      });
    }

    // Load Profile Image
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // --- Handlers ---

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Image Upload (Convert to Base64 for saving)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        // Auto-save image immediately
        localStorage.setItem('userProfileImage', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    const defaultImage = "https://via.placeholder.com/150?text=No+Image";
    setProfileImage(defaultImage);
    localStorage.setItem('userProfileImage', defaultImage);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // --- 2. SAVE ALL DATA ---
  const handleSaveChanges = () => {
    // Save the ENTIRE form object to local storage
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    
    // Ensure image is synced (redundant but safe)
    localStorage.setItem('userProfileImage', profileImage);

    alert("All account details saved successfully!");
  };

  const handleLogout = () => {
    router.replace('/'); 
  };

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      
      {/* Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
          <p className="text-gray-500 mt-1">Manage your profile and account</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
        
        {/* Profile Picture Section */}
        <div className="mb-10">
          <h3 className="font-semibold text-gray-900 mb-1">Profile</h3>
          <p className="text-sm text-gray-500 mb-6">Manage your profile picture and personal information</p>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 mb-4 shadow-sm">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
              
              <button 
                onClick={triggerFileInput}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Icons.Camera />
                Change Photo
              </button>
              
              <button 
                onClick={handleRemoveImage}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-500 hover:border-red-200 transition-colors"
              >
                <Icons.Trash />
                Remove
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 mb-8" />

        {/* Personal Information Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Date of Birth</label>
            <div className="relative">
              <input 
                type="text" 
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="MM/DD/YYYY"
                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icons.Calendar />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 000-0000"
              className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
            />
          </div>
        </div>

        {/* Save Button positioned here to save personal info */}
        <button 
          onClick={handleSaveChanges}
          className="bg-[#0080ff] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md shadow-blue-100 transition-all active:scale-[0.98]"
        >
          Save Changes
        </button>
      </div>

      {/* Account Information Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
        <h3 className="font-semibold text-gray-900 mb-1">Account Information</h3>
        <p className="text-sm text-gray-500 mb-6">View and manage your login details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Create a username"
              className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
            />
          </div>
          
          {/* Password Field with Eye Toggle */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 pr-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <button 
        onClick={handleLogout}
        className="w-full bg-white border-2 border-red-50 text-red-500 font-semibold px-6 py-4 rounded-xl shadow-sm hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all flex items-center justify-center gap-2"
      >
        <Icons.LogOut />
        Log Out
      </button>

    </div>
  );
}