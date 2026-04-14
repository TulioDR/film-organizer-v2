import axios from "axios";
const API = axios.create({ baseURL: "/api/database/playlists" });

export const getPlaylists = async () => {
   try {
      const { data } = await API.get("/");
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteAllPlaylists = async (authorId: string) => {
   try {
      const { data } = await API.delete(`/`, { data: authorId });
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createPlaylist = async (newListData: any) => {
   try {
      const { data } = await API.post("/", newListData);
      return data;
   } catch (error: any) {
      console.log(error);
   }
};

export const updatePlaylist = async (id: string, newName: any) => {
   try {
      const { data } = await API.patch(`/${id}`, newName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deletePlaylist = async (id: string) => {
   try {
      const { data } = await API.delete(`/${id}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};
