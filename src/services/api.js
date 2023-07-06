import axios from "axios";

// https://valorant-api.com/v1/agents

const api = axios.create({
    baseURL: "https://valorant-api.com/"
});

export default api;