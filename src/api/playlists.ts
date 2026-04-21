import axios from "axios";
const API = axios.create({ baseURL: "/api/database/playlists" });

export const deleteAllPlaylists = async (authorId: string) => {
   try {
      const { data } = await API.delete(`/`, { data: authorId });
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const getUserPlaylists = async (isPreview: boolean = false) => {
   try {
      const { data } = await API.get("/", {
         params: { preview: isPreview },
      });
      console.log("frontend data");
      console.log(data);
      return data;
   } catch (error: any) {
      const errorMessage =
         error.response?.data?.error || "An unexpected error occurred";
      return { data: null, error: errorMessage };
   }
};

export const createPlaylist = async (newListData: any) => {
   try {
      const { data } = await API.post("/", newListData);
      return { data };
   } catch (error: any) {
      const errorMessage =
         error.response?.data?.error || "An unexpected error occurred";
      return { data: null, error: errorMessage };
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

export const getPlaylistDetails = async (id: string) => {
   try {
      const { data } = await API.get(`/${id}`);
      return data;
   } catch (error) {
      console.error("Error fetching playlist details:", error);
      throw error;
   }
};
