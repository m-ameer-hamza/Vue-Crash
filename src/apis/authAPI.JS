import axios from "axios";

export default function authAPI() {
  const register = async (data) => {
    const response = await axios.post("/api/auth/register", data);
    return response.data;
  };

  const login = async (data) => {
    const response = await axios.post("/api/auth/login", data);
    return response.data;
  };

  return {
    register,
    login,
  };
}
