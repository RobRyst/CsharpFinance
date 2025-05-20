import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5086/api",
});

export const userLogin = (credentials) => API.post("/auth/login", credentials);

export const userRegister = (data) => API.post("/auth/register", data);
