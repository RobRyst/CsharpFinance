import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:5173/api",
});

export const userLogin = (credentials) =>
  API.post("/auth/userLogin", credentials);

export const userRegister = (data) => API.post("/auth/register", data);
