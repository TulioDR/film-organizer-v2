import axios from "axios";
import { SavedMediaModel } from "@/models/MediaModel";
const API = axios.create({ baseURL: "/api/database/media" });

export const getSavedMedia = async (listId: String) => {
   try {
      const { data } = await API.get(`/${listId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getIsMediaInList = async (params: any) => {
   try {
      const { list_id, media_id, media_type } = params;
      const link = `/isMediaInList/${list_id}/${media_id}/${media_type}`;
      const { data } = await API.get(link);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getIsMediaSaved = async (params: any) => {
   try {
      const { media_id, media_type } = params;
      const link = `/isMediaSaved/${media_id}/${media_type}`;
      const { data } = await API.get(link);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createMedia = async (media: SavedMediaModel) => {
   try {
      const { data } = await API.post("/", media);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteMedia = async (values: any) => {
   try {
      const { data } = await API.delete("/", { data: values });
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteManyMedia = async (idsArray: any) => {
   try {
      const { data } = await API.delete("/deleteMany", { data: idsArray });
      return data;
   } catch (error) {
      console.log(error);
   }
};
