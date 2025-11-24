import axios from "axios";

const API_URL = "http://localhost:3000/api";

interface Signup {
  name: string;
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      _id: string;
      name: string;
      email: string;
    };
    token: string;
  };
}

export async function signup(data: Signup): Promise<AuthResponse> {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error: any) {
    console.error("Signup error:", error.response?.data || error.message);
    
    // Extract error message from response
    const errorMessage = error.response?.data?.message || "Signup failed. Please try again.";
    
    throw new Error(errorMessage);
  }
}

export async function login(data: Login): Promise<AuthResponse> {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    
    // Extract error message from response
    const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
    
    throw new Error(errorMessage);
  }
}

export async function getMe(token: string): Promise<any> {
  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error: any) {
    console.error("Get user error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch user data");
  }
}

export async function logout(): Promise<void> {
  try {
    // Clear local storage (if using AsyncStorage)
    const AsyncStorage = require('@react-native-async-storage/async-storage').default;
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error("Logout error:", error);
  }
}