import axios from "axios";
const API_URL = "http://localhost:3000/api"

interface Signup {
  name: string;
  email: string;
  password: string;
}

interface Login {
  email: string;
  password: string;
}

export async function signup(data: Signup) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error: any) {
    console.log(error.response?.data || "Signup failed");
    throw error.response?.data || new Error("Signup failed");
  }
}

export async function login(data: Login) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error: any) {
    console.log(error.response?.data || "Login failed");
    throw error.response?.data || new Error("Login failed");
  }
}
