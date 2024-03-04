import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.fillout.apiUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${config.fillout.apiKey}`,
  },
});
export default axiosInstance;
