import axios from "axios";
const API = axios.create({ baseURL: "/api/database/lists" });

export const getLists = async (authorId: string) => {
   try {
      const { data } = await API.get("/", {
         params: { authorId },
      });
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const createList = async (newListData: any) => {
   try {
      const { data } = await API.post("/", newListData);
      return data;
   } catch (error: any) {
      console.log(error);
   }
};

export const updateList = async (id: string, newName: any) => {
   try {
      const { data } = await API.patch(`/${id}`, newName);
      return data;
   } catch (error) {
      console.log(error);
   }
};

export const deleteList = async (id: string) => {
   try {
      const { data } = await API.delete(`/${id}`);
      return data;
   } catch (error) {
      console.log(error);
   }
};
