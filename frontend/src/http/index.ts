import axios from "axios";
import type { AxiosInstance } from "axios";

export const baseURL : string = "http://localhost:3333/";

const httpClient : AxiosInstance = axios.create({
  baseURL,
});

export default httpClient;