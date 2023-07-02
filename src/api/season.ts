import axios from "axios";
const API = axios.create({ baseURL: "/api/" });

export const getSeason = async (tvShowId: number, seasonNumber: number) => {
   try {
      const { data } = await API.get(`/season/${tvShowId}/${seasonNumber}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};
