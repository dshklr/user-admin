import axios from "axios";

const baseURL = "https://63d3be3f8d4e68c14eb173b8.mockapi.io/";

export const api = axios.create({
  baseURL,
  timeout: 1000,
});






export async function exampleRequest() {
  try {
    const response = await api.get("user");

    return response;
  } catch (error) {
    console.log(error);
  }
}
