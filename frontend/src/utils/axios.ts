import axios from "axios";

const API = "https://backend-green-surf-7062.fly.dev";

export const api = axios.create({
    baseURL: API,
    headers: { "Content-Type": "application/json" }
});