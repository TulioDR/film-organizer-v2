import axios from "axios";
import { MediaType } from "@/common/models/MediaType";
import { SavedMedia } from "@/common/models/Media";
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
      const { playlist_id, media_id, media_type } = params;
      const link = `/isMediaSavedInList/${playlist_id}/${media_id}/${media_type}`;

      const { data } = await API.get(link);

      return { data, error: null };
   } catch (error: any) {
      console.log(error);
      return { data: null, error: error.response?.data || error.message };
   }
};

export const getIsMediaSaved = async (
   media_id: number,
   media_type: MediaType,
) => {
   try {
      const link = `/isMediaSaved/${media_id}/${media_type}`;
      const { data } = await API.get(link);

      return { data, error: null };
   } catch (error: any) {
      console.log(error);
      return {
         data: { isSaved: false },
         error: error.response?.data || error.message,
      };
   }
};

export const createMedia = async (media: SavedMedia) => {
   try {
      const { data } = await API.post("/", media);
      return { data, error: null };
   } catch (error: any) {
      console.log(error);
      return {
         data: null,
         error:
            error.response?.data?.error || error.message || "Failed to create",
      };
   }
};

export const deleteMedia = async (params: any) => {
   try {
      const response = await API.delete("/", { data: params });

      return {
         data: response.data,
         error: null,
      };
   } catch (error: any) {
      console.error("Delete Error:", error);

      return {
         data: null,
         error:
            error.response?.data?.error || error.message || "Failed to delete",
      };
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
