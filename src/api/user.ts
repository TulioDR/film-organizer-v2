import axios from "axios";
const API = axios.create({ baseURL: "/api/user" });

export const deleteUser = async (userId: string) => {
   try {
      const { data } = await API.delete(`/${userId}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};
