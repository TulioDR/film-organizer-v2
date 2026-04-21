import axios from "axios";

const getBaseURL = () => {
   if (typeof window !== "undefined") return "/api/database/playlists";
   return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000"}/api/database/playlists`;
};
const API = axios.create({ baseURL: getBaseURL() });

export const getAllPlaylists = async (type?: "withPreview", config = {}) => {
   // IsPreview, just means that if if should load limited media data if true.
   // or just the lists if false
   const isPreview = type === "withPreview";
   try {
      const { data } = await API.get("/", {
         params: { preview: isPreview },
         ...config,
      });
      return { data: data, error: null };
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

export const getSinglePlaylistDetails = async (id: string, config = {}) => {
   try {
      const { data } = await API.get(`/${id}`, {
         params: {},
         ...config,
      });
      return data;
   } catch (error) {
      console.error("Error fetching playlist details:", error);
      throw error;
   }
};

export const updatePlaylist = async (id: string, newInfo: any) => {
   try {
      const { data } = await API.patch(`/${id}`, newInfo);
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
