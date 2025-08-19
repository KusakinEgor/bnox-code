import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const runPythonCode = async (code: string) => {
  try {
    const res = await axios.post(`${API_URL}/run/code`, { code });
    return res.data;
  } catch (err) {
    console.error(err);
    return { stdout: "", stderr: "Error contacting server" };
  }
};

export const runJScript = async (code: string) => {
  try {
    const res = await axios.post(`${API_URL}/run/script`, { code });
    return res.data;
  } catch (err) {
    console.error(err);
    return { stdout: "", stderr: "Error contacting server" };
  }
};

export const registerUser = async (email: string, username: string, password: string) => {
    try {
        const res = await axios.post(`${API_URL}/auth/register`, { email, username, password })
        return res.data;
    } catch (error: any) {
        if (error.response) return { error: error.response.data.detail };
        return { error: "Server error" };
    }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    return res.data; // { message: "Login successful" }
  } catch (err: any) {
    if (err.response) return { error: err.response.data.detail };
    return { error: "Server error" };
  }
};
