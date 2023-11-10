import axios from "axios";
import { SavedMediaModel } from "@/models/MediaModel";
import { MediaTypeModel } from "@/models/MediaTypeModel";
const API = axios.create({ baseURL: "/api/database/media" });

export const getSavedMedia = async (listId: String) => {
   try {
      const { data } = await API.get(`/${listId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getIsMediaSavedInList = async (params: any) => {
   try {
      const { list_id, media_id, media_type } = params;
      const link = `/isMediaSavedInList/${list_id}/${media_id}/${media_type}`;
      const { data } = await API.get(link);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getIsMediaSaved = async (
   media_id: number,
   media_type: MediaTypeModel
) => {
   try {
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
