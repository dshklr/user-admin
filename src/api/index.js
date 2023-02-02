import axios from "axios";

const baseURL = "https://63d3be3f8d4e68c14eb173b8.mockapi.io/";

export const api = axios.create({
  baseURL,
  timeout: 3000,
});