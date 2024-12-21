import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface DecodeToken extends JwtPayload {
  username: string;
}

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosIntance.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    try {
      let decodeToken: DecodeToken = jwtDecode<DecodeToken>(token);
      let currentTime = Date.now() / 1000;
      console.log(decodeToken.exp);

      if (decodeToken.exp && decodeToken.exp < currentTime) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }
  return config;
});

export default axiosIntance;
