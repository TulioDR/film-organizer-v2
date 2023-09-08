import axios from "axios";
const API_PUBLIC = axios.create({ baseURL: "/api/public" });
export default API_PUBLIC;
