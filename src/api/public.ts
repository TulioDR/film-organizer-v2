const baseURL = process.env.NEXT_PUBLIC_API_URL;
// const oldBaseURL = "/api/public";

import axios from "axios";
const API_PUBLIC = axios.create({ baseURL: baseURL });
export default API_PUBLIC;
