import axios from "axios";
import MediaModel from "../models/MediaModel";
const API = axios.create({ baseURL: "/api/media" });

export const createMedia = async (media: MediaModel) => {
   try {
      const data = await API.post("/", media);
      return data;
   } catch (error) {
      console.log(error);
   }
};
