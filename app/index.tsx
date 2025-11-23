import { login } from "@/libs/api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert } from "react-native";

// --- Icons ---
const Icons = {
  Activity: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  Mail: ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Lock: ({ size = 20 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Check: ({ size = 14 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);



  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email,
        password,
      });

      // Save user session securely
      await AsyncStorage.setItem("token", response.token);
      if (rememberMe) await AsyncStorage.setItem("user", JSON.stringify(response.user));

      router.replace("/home");
    } catch (err) {
      Alert.alert("Login Failed", "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
      
      {/* Login Card */}
      <div className="bg-white w-full max-w-[450px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10 md:p-12 text-center">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Icons.Activity className="text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-sm mb-8">Sign in to your medical account to continue</p>

        {/* Form */}
        <div className="space-y-5 text-left">
          
          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icons.Mail />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
                placeholder="name@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Icons.Lock />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Extras */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div 
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  rememberMe ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
                }`}
              >
                {rememberMe && <Icons.Check />}
              </div>
              <span className="text-sm text-gray-600 font-medium">Remember me</span>
            </label>
            
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button 
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#0066FF] to-[#00B2FF] hover:opacity-90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-2"
          >
            Sign In
          </button>

          {/* Footer Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink-0 mx-4 text-gray-300 text-xs uppercase tracking-wider">OR</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}