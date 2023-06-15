import axios from "axios";
import { SavedMediaModel } from "../models/MediaModel";
const API = axios.create({ baseURL: "/api/media" });

export const getMedia = async (listId: string) => {
   try {
      const { data } = await API.get(`/${listId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getUniqueMedia = async (params: any) => {
   try {
      const { media_id, media_type, listId } = params;
      const { data } = await API.get(`/${listId}/${media_id}/${media_type}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getFirstMedia = async (params: any) => {
   try {
      const { media_id, media_type } = params;
      const { data } = await API.get(`/first/${media_id}/${media_type}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getSeason = async (tvShowId: number, seasonNumber: number) => {
   try {
      const { data } = await API.get(`/season/${tvShowId}/${seasonNumber}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteUniqueMedia = async (params: any) => {
   try {
      const { media_id, media_type, listId } = params;
      const { data } = await API.delete(`/${listId}/${media_id}/${media_type}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createMedia = async (media: SavedMediaModel) => {
   try {
      const data = await API.post("/", media);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteMedia = async (idsArray: any) => {
   try {
      const data = await API.delete("/", { data: idsArray });
      return data;
   } catch (error) {
      console.log(error);
   }
};
